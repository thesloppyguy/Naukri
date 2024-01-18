import { type RequestHandler } from 'express'
import clinet from '../os-client'
import { createNLPQuery, createGeneralQuery } from '../utils/createSearchQuery'
import { SearchBody, NlpBody } from '../interfaces/search'

export const searchFilterController: RequestHandler<unknown, unknown, SearchBody, unknown> = async (req, res, next) => {
  const query = await createGeneralQuery(req.body)
  console.log(JSON.stringify(query))
  // return res.status(200).json(query)
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