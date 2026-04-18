import { Router } from 'express'
import { getAllProducts, getProductById } from '../controllers/productsController.js'

const router = Router()

router.get('/', getAllProducts)
router.get('/:id', getProductById)

// FUTURE: POST /   (create product — requires admin auth middleware)
// FUTURE: PUT /:id (update product)
// FUTURE: DELETE /:id

export default router
