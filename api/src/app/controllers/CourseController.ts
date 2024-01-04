import { Request, Response } from "express";
import { CourseRepository } from "../repositories/CourseRepository";
import isValidUUID from "../utils/isValidUUID";

export const index = async (req: Request, res: Response) => {
  const { orderBy } = req.query

  let orderDirection: 'ASC' | 'DESC' = 'ASC'

  if (typeof orderBy === 'string' && orderBy.match(/^(asc|desc)$/i)) {
    orderDirection = orderBy.toUpperCase() as 'ASC' | 'DESC'
  }

  const courses = await CourseRepository.findAll(orderDirection)
  res.json(courses)
}

export const show = async (req: Request, res: Response) => {
  const {id} = req.params

  const course = await CourseRepository.findById(id)
  return res.json(course)
}

export const create = async (req: Request, res: Response) => {
  const {name, category_id, teacher_id} = req.body

if (!name || !category_id || !teacher_id) {
    return res.status(400).json({ error: 'Please provide name, category_id, and teacher_id' })
  }

  const course = await CourseRepository.create({
    id: '',
    name,
    category_id,
    teacher_id
  })

  res.json(course)
}

export const update = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidUUID(id)) {
    return res.status(400).json({ error: 'Invalid user id' })
  }

  const contactsExists = await CourseRepository.findById(id)
  if (!contactsExists) {
    return res.status(400).json({ Error: 'User not found' })
  }

  const course = await CourseRepository.update({
    id,
    name: req.body.name,
    category_id:req.body.category_id,
    teacher_id: req.body.teacher_id
  })

  res.json(course)
}

export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidUUID(id)) {
    return res.status(400).json({ error: 'Invalid contact id' })
  }

  await CourseRepository.delete(id)

  res.sendStatus(204)
}
