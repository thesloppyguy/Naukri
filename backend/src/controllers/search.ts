import { type RequestHandler } from 'express'

interface SearchBody {
  query?: string
  nlp?: string
  incluedkeywords?: string[]
  musthave?: boolean
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
  global?: boolean
}

export const searchController: RequestHandler<unknown, unknown, SearchBody, unknown> = (req, res, next) => {
  console.log(req.body)
}

interface ProfilesBody {
  index?: string
}

export const profilesController: RequestHandler<unknown, unknown, ProfilesBody, unknown> = (req, res, next) => {
  console.log(req.body)
}

interface JobsBody {
  index?: string
}

export const jobsController: RequestHandler<unknown, unknown, JobsBody, unknown> = (req, res, next) => {
  console.log(req.body)
}
