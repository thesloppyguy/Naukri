import express from 'express'
import * as UserController from '../controllers/users'
import { requiresAuth } from '../middleware/auth'

const router = express.Router()

router.get('/', requiresAuth, UserController.getAuthenticatedUser)

router.post('/signup', UserController.signUpController)

router.post('/login', UserController.loginController)

router.post('/logout', UserController.logoutController)

export default router
