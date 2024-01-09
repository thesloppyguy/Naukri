import express from 'express'
import * as UserController from '../controllers/users'
import { requiresAuth } from '../middleware/auth'

const router = express.Router()

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
router.get('/', requiresAuth, UserController.getAuthenticatedUser)

router.post('/signup', UserController.signUp)

router.post('/login', UserController.login)

router.post('/logout', UserController.logout)

export default router
