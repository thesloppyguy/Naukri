import express from 'express'
import * as SearchController from '../controllers/search'

const router = express.Router()

router.post('/filter/', SearchController.searchFilterController)

router.post('/nlp/', SearchController.searchNlpController)

router.post('/count/', SearchController.countController)

router.post("/jobs/", SearchController.jobcodeController)

export default router
