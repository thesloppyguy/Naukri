// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
import express from 'express'
import * as InviteController from '../controllers/invite'
// import { requiresMaintainer, requiresAdmin } from '../middleware/auth'

const router = express.Router()

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
router.get('/maintainer', InviteController.orgRequestController)

router.post('/maintainer/invite/org', InviteController.orgInviteController)

router.post('/maintainer/invite/maintainer', InviteController.maintainerInviteController)

router.post('/invite/user', InviteController.userInviteController)

export default router
