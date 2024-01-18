import { RegisterBody, ActivateBody, ResetPasswordBody, LoginBody } from "../interfaces/user"
import { type RequestHandler } from 'express'
import createHttpError from 'http-errors'
import UserModel from '../models/user'
import OrgnisationModel from '../models/org'
import bcrypt from 'bcrypt'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.session.userId).populate('organization').exec()
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const registerController: RequestHandler<unknown, unknown, RegisterBody, unknown> = async (req, res, next) => {
  const name = req.body.organizationName
  const contactEmail = req.body.organizationEmail
  const url = req.body.url
  try {
    if ((name == null) || (contactEmail == null)) {
      throw createHttpError(400, 'Parameters missing')
    }
    const existingOrganizations = await OrgnisationModel.findOne({ name, contactEmail }).exec()

    if (existingOrganizations !== null) {
      throw createHttpError(409, 'Organization already taken. Please check your email for an Invite.')
    }
    const newOrganisation = await OrgnisationModel.create({
      name,
      contactEmail,
      url,
      status: 'denied'
    })
    return res.status(201).json(newOrganisation)
  } catch (error) {
    next(error)
  }
}

export const activateController: RequestHandler<unknown, unknown, ActivateBody, unknown> = async (req, res, next) => {
  const passwordRaw = req.body.password
  const id = req.body.id

  try {
    if ((passwordRaw == null)) {
      throw createHttpError(400, 'Parameter missing')
    }
    if ((id == null)) {
      throw createHttpError(400, 'Invalid Invite Link')
    }
    const passwordHashed = await bcrypt.hash(passwordRaw, 10)
    const result = await UserModel.updateOne({ _id: id }, { $set: { password: passwordHashed } })
    if (result.modifiedCount === 0) {
      throw createHttpError(400, 'User not found')
    }
    const currentUser = await UserModel.findById(id).exec()
    res.status(201).json(currentUser)
  } catch (error) {
    next(error)
  }
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const resetPasswordController: RequestHandler<unknown, unknown, ResetPasswordBody, unknown> = async (req, res, next) => {
  const passwordRaw = req.body.password
  const id = req.body.id

  try {
    if ((passwordRaw == null)) {
      throw createHttpError(400, 'Parameter missing')
    }
    if ((id == null)) {
      throw createHttpError(400, 'Invalid Invite Link')
    }
    const passwordHashed = await bcrypt.hash(passwordRaw, 10)
    const result = await UserModel.updateOne({ _id: id }, { $set: { password: passwordHashed } })
    if (result.modifiedCount === 0) {
      throw createHttpError(400, 'User not found')
    }
    const currentUser = await UserModel.findById(id).exec()
    res.status(201).json(currentUser)
  } catch (error) {
    next(error)
  }
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const loginController: RequestHandler<unknown, unknown, LoginBody, unknown> = async (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  const name = req.body.orgId
  try {
    console.log(email, password, name);
    const org = await OrgnisationModel.findOne({ name }).select('+name').exec()

    if (org === null) {
      throw createHttpError(401, 'Invalid Organization')
    }

    if ((email == null) || (password == null)) {
      throw createHttpError(400, 'Parameters missing')
    }
    const user = await UserModel.findOne({ email, organization: org._id }).populate('organization').select('+password +email').exec()

    if (user === null) {
      throw createHttpError(401, 'Invalid credentials')
    }

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
      res.clearCookie('connect.sid', { path: '/' });
      next(error)
    } else {
      res.sendStatus(200)
    }
  })
}
