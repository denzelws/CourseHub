import { Request, Response } from "express";
import { CourseRepository } from "../repositories/CourseRepository";

export const index = async (req: Request, res: Response) => {
  const courses = await CourseRepository.findAll()
  res.json(courses)
}

export const show = async (req: Request, res: Response) => {
  const {id} = req.params

  const course = await CourseRepository.findById(id)
  return res.json(course)
}

export const create = async (req: Request, res: Response) => {
  const {name, category_id, teacher_id} = req.body

  const course = await CourseRepository.create({
    id: '',
    name,
    category_id,
    teacher_id
  })

  res.json(course)
}

export const update = (req: Request, res: Response) => {
  res.json('put')
}

export const deleteCourse = (req: Request, res: Response) => {
  res.json('delete')
}
