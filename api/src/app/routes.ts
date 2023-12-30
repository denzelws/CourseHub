import { Router } from "express"
import { create, deleteCourse, index, show, update } from "./controllers/CourseController"
import { createCategory, deleteCategory, indexCategory, showCategory, updateCategory } from "./controllers/CategoryController"

const router = Router()

// courses
router.post('/course', create)
router.get('/courses', index)
router.get('/courses/:id', show)
router.put('/course/:id', update)
router.delete('/course/:id', deleteCourse)

//categories
router.post('/category', createCategory)
router.get('/categories', indexCategory)
router.get('/categories/:id', showCategory)
router.put('/category/:id', updateCategory)
router.delete('/category/:id', deleteCategory)

export default router
