import { type RequestHandler } from 'express'
import clinet from '../os-client'
import { createNLPQuery, createGeneralQuery } from '../utils/createSearchQuery'

interface SearchBody {
  query?: string
  nlp: boolean
  incluedkeywords?: string[]
  musthave: boolean
  excludekeywords?: string[]
  ugtype?: string
  ugmajor?: string
  pgtype?: string
  pgmajor?: string
  phdtype?: string
  phdmajor?: string
  location?: string
  minexp?: number
  maxexp?: number
  gender?: string
  jobcode?: string
  global: boolean
}

export const searchController: RequestHandler<unknown, unknown, SearchBody, unknown> = (req, res, next) => {
  let query = null
  if (req.body.nlp) {
    query = createNLPQuery(req.body)
  }
  query = createGeneralQuery(req.body)
  clinet.search({
    index: 'resumes',
    body: query
  }).then((response) => {
    return res.status(200).json(response.body)
  }).catch((error) => { next(error) })
}

export const profilesController: RequestHandler = (req, res, next) => {
  clinet.count({
    index: req.body.index
  }).then((response) => {
    return res.status(200).json(response.body.count)
  }).catch((error) => { next(error) })
}

export const jobsController: RequestHandler = (req, res, next) => {
  clinet.count({
    index: req.body.index
  }).then((response) => {
    return res.status(200).json(response.body.count)
  }).catch((error) => { next(error) })
}
