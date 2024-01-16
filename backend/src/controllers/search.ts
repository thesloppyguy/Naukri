import { type RequestHandler } from 'express'
import clinet from '../os-client'
import { createNLPQuery, createGeneralQuery } from '../utils/createSearchQuery'

export interface SearchBody {
  keywords: string[]
  must: string
  notKeywords: string[]
  gender: string
  location: string
  expMax: string
  expMin: string
  industry: string
  department: string
  currentCompany: string
  currentDesignation: string
  ugCourse: string,
  pgCourse: string,
  pdCourse: string,
  jobcode: string
  page: number
}
export interface NlpBody {
  query: string
}

export const searchFilterController: RequestHandler<unknown, unknown, SearchBody, unknown> = (req, res, next) => {
  const query = createGeneralQuery(req.body)
  clinet.search({
    index: 'resumes',
    body: query
  }).then((response) => {
    return res.status(200).json(response.body)
  }).catch((error) => { next(error) })
}

export const searchNlpController: RequestHandler<unknown, unknown, NlpBody, unknown> = (req, res, next) => {
  const query = createNLPQuery(req.body)
  clinet.search({
    index: 'resumes',
    body: query
  }).then((response) => {
    return res.status(200).json(response.body)
  }).catch((error) => { next(error) })
}

export const countController: RequestHandler = (req, res, next) => {
  clinet.count({
    index: req.body.index
  }).then((response) => {
    return res.status(200).json(response.body.count)
  }).catch((error) => {
    next(error);
  })
}

export const jobsController: RequestHandler = (req, res, next) => {
  clinet.search({
    index: 'jobs',
    body: {
      "query": {
        "match_all": {}
      }
    }
  }).then((response) => {
    return res.status(200).json(response.body)
  }).catch((error) => { next(error) })
}

export const jobcodeController: RequestHandler = (req, res, next) => {
  clinet.search({
    index: 'jobs',
    body: {
      "query": {
        "bool": {
          "must": [{ "match_phrase": { "job_id": req.body.jobcode } }]
        }
      },
    }
  }).then((response) => {
    return res.status(200).json(response.body)
  }).catch((error) => { next(error) })
}