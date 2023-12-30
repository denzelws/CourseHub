import { Router } from "express"
import { create, index, show } from "./controllers/CourseController"

const router = Router()

router.post('/course', create)
router.get('/courses', index)
router.get('/courses/:id', show)
// router.put('/course/:id', update)
// router.delete('/course/:id', deleteCourse)

export default router
