import { Router } from 'express'
import { subscribe } from '../controllers/newsletterController.js'

const router = Router()

router.post('/', subscribe)

// FUTURE: GET / (list subscribers — admin only)

export default router
