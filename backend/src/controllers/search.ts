import { type RequestHandler } from 'express'
import clinet from '../os-client'
import { createNLPQuery, createGeneralQuery } from '../utils/createSearchQuery'
import { SearchBody, NlpBody } from '../interfaces/search'

export const searchFilterController: RequestHandler<unknown, unknown, SearchBody, unknown> = async (req, res, next) => {
  const query = await createGeneralQuery(req.body)
  console.log(JSON.stringify(query))
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

export const jobcodeController: RequestHandler = (req, res, next) => {
  if (req.body.jobcode!==""){
    clinet.search({
      index: 'jobs',
      body: {
        "query": {
          "bool": {
            "must": [{ "match_phrase": { "job_id": req.body.jobcode } }]
          }
        },
        "size": 16,
        "from": (req.body.page - 1) * 16,
      }
    }).then((response) => {
      return res.status(200).json(response.body)
    }).catch((error) => { next(error) })
  }
  else{
  clinet.search({
    index: 'jobs',
    body: {
      "query": {
        "match_all": {}
      },
      "size": 16,
      "from": (req.body.page - 1) * 16,
    }
  }).then((response) => {
    return res.status(200).json(response.body)
  }).catch((error) => { next(error) })
}
}