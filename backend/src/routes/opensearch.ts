import express from 'express'
import * as SearchController from '../controllers/search'
import { requiresAuth } from '../middleware/auth'

const router = express.Router()

router.post('/search', requiresAuth, SearchController.searchController)

router.post('/profiles', SearchController.profilesController)

router.post('/jobs', SearchController.jobsController)

export default router
