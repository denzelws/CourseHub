import { Router } from "express"
import { create, deleteCourse, index, show, update } from "./controllers/CourseController"

const router = Router()

router.get('/course', index)
router.post('/course', create)
router.get('/course/:id', show)
router.put('/course/:id', update)
router.delete('/course/:id', deleteCourse)

export default router
