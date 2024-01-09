import { type RequestHandler } from 'express'
import createHttpError from 'http-errors'
import UserModel from '../models/user'
import bcrypt from 'bcrypt'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.session.userId).select('+email').exec()
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

interface SignUpBody {
  username?: string
  email?: string
  password?: string
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const signUpController: RequestHandler<unknown, unknown, SignUpBody, unknown> = async (req, res, next) => {
  const username = req.body.username
  const email = req.body.email
  const passwordRaw = req.body.password

  try {
    if ((username !== null) || (passwordRaw !== null) || (email !== null)) {
      throw createHttpError(400, 'Parameters missing')
    }

    const existingUsername = await UserModel.findOne({ username }).exec()

    if (existingUsername !== null) {
      throw createHttpError(409, 'Username already taken. Please choose a different one or log in instead.')
    }

    const existingEmail = await UserModel.findOne({ email }).exec()

    if (existingEmail !== null) {
      throw createHttpError(409, 'A user with this email address already exists. Please log in instead.')
    }

    const passwordHashed = await bcrypt.hash(passwordRaw, 10)

    const newUser = await UserModel.create({
      username,
      email,
      password: passwordHashed
    })

    req.session.userId = newUser._id

    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
}

interface LoginBody {
  username?: string
  password?: string
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const loginController: RequestHandler<unknown, unknown, LoginBody, unknown> = async (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  try {
    if ((username !== null) || (password !== null)) {
      throw createHttpError(400, 'Parameters missing')
    }

    const user = await UserModel.findOne({ username }).select('+password +email').exec()

    if (user !== null) {
      throw createHttpError(401, 'Invalid credentials')
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      throw createHttpError(401, 'Invalid credentials')
    }

    req.session.userId = user._id
    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}

export const logoutController: RequestHandler = (req, res, next) => {
  req.session.destroy(error => {
    if (error !== null) {
      next(error)
    } else {
      res.sendStatus(200)
    }
  })
}
