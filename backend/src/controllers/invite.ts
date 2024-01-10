import { type RequestHandler } from 'express'
import createHttpError from 'http-errors'
import UserModel from '../models/user'
import OrgnisationModel from '../models/org'
import { sendInvite } from '../utils/sendInvite'
import crypto from 'crypto'

interface OrganizationInvite {
  email: string
  organizationName: string
}

interface MaintainerInvite {
  email: string
}

interface UserInvite {
  email: string
  role: 'User' | 'Admin'
  organizationName: string
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const orgRequestController: RequestHandler = async (req, res, next) => {
  try {
    const orgs = await OrgnisationModel.find().select('+name +contactEmail +url +status').exec()

    res.status(200).json(orgs)
  } catch (error) {
    if (error != null) {
      next(error)
    } else {
      next(createHttpError(500, 'Internal Server Error'))
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const orgInviteController: RequestHandler<unknown, any, OrganizationInvite, unknown> = async (req, res, next) => {
  const username = crypto.randomUUID()
  const password = crypto.randomUUID()
  const email = req.body.email
  const organizationName = req.body.organizationName

  try {
    const org = await OrgnisationModel.findOne({ name: organizationName }).exec()
    const newUser = await UserModel.create({
      username,
      email,
      password,
      role: 'Admin',
      organization: org?._id
    })
    sendInvite(organizationName, email)
    res.status(200).json(newUser)
  } catch (error) {
    if (error != null) {
      next(error)
    } else {
      next(createHttpError(500, 'Internal Server Error'))
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const maintainerInviteController: RequestHandler<unknown, any, MaintainerInvite, unknown> = async (req, res, next) => {
  const username = crypto.randomUUID()
  const password = crypto.randomUUID()
  const email = req.body.email
  try {
    const org = await OrgnisationModel.findOne({ name: 'Lokibots' }).exec()
    const newUser = await UserModel.create({
      username,
      email,
      password,
      role: 'Maintainer',
      organization: org?._id
    })
    sendInvite('Lokibots', email)
    res.status(200).json(newUser)
  } catch (error) {
    if (error != null) {
      next(error)
    } else {
      next(createHttpError(500, 'Internal Server Error'))
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const userInviteController: RequestHandler<unknown, any, UserInvite, unknown> = async (req, res, next) => {
  const username = crypto.randomUUID()
  const password = crypto.randomUUID()
  const email = req.body.email
  const role = req.body.role
  const organizationName = req.body.organizationName
  try {
    const org = await OrgnisationModel.findOne({ name: organizationName }).exec()
    const newUser = await UserModel.create({
      username,
      email,
      password,
      role,
      organization: org?._id
    })
    sendInvite(organizationName, email)
    res.status(200).json(newUser)
  } catch (error) {
    if (error != null) {
      next(error)
    } else {
      next(createHttpError(500, 'Internal Server Error'))
    }
  }
}
