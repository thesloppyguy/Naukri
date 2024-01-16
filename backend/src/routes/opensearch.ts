import express from 'express'
import * as SearchController from '../controllers/search'
import { requiresAuth } from '../middleware/auth'

const router = express.Router()

router.post('/search/filter', requiresAuth, SearchController.searchFilterController)

router.post('/search/nlp', requiresAuth, SearchController.searchNlpController)

router.post('/profiles', requiresAuth, SearchController.profilesController)

router.post('/jobs', requiresAuth, SearchController.jobsController)

export default router
