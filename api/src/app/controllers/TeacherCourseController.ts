import { Request, Response } from "express";
import isValidUUID from "../utils/isValidUUID";
import { TeacherCourseRepository } from "../repositories/TeacherCourseRepository";

export const indexTeacher = async (req: Request, res: Response) => {
  const { orderBy } = req.query

  let orderDirection: 'ASC' | 'DESC' = 'ASC'

  if (typeof orderBy === 'string' && orderBy.match(/^(asc|desc)$/i)) {
    orderDirection = orderBy.toUpperCase() as 'ASC' | 'DESC'
  }

  const teachers = await TeacherCourseRepository.findAll(orderDirection)
  res.json(teachers)
}

export const showTeacher = async (req: Request, res: Response) => {
  const {id} = req.params

  const teacher = await TeacherCourseRepository.findById(id)
  return res.json(teacher)
}

export const createTeacher = async (req: Request, res: Response) => {
  const {name} = req.body

  const teacher = await TeacherCourseRepository.create({
    id: '',
    name
  })

  res.json(teacher)
}

export const updateTeacher = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidUUID(id)) {
    return res.status(400).json({ error: 'Invalid teacher id' })
  }

  const teacherExists = await TeacherCourseRepository.findById(id)
  if (!teacherExists) {
    return res.status(400).json({ Error: 'Teacher not found' })
  }

  const course = await TeacherCourseRepository.update({
    id,
    name: req.body.name
  })

  res.json(course)
}

export const deleteTeacher= async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidUUID(id)) {
    return res.status(400).json({ error: 'Invalid teacher id' })
  }

  await TeacherCourseRepository.delete(id)

  res.sendStatus(204)
}
