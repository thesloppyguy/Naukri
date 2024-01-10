import { type RequestHandler } from 'express'
import createHttpError from 'http-errors'

export const requiresAuth: RequestHandler = (req, res, next) => {
  if (req.session.userId !== null) {
    next()
  } else {
    next(createHttpError(401, 'User not authenticated'))
  }
}

export const requiresAdmin: RequestHandler = (req, res, next) => {
  if (req.session.userId !== null) {
    next()
  } else {
    next(createHttpError(401, 'User not authenticated'))
  }
}

export const requiresMaintainer: RequestHandler = (req, res, next) => {
  if (req.session.userId !== null) {
    next()
  } else {
    next(createHttpError(401, 'User not authenticated'))
  }
}
