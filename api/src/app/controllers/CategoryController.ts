import { Request, Response } from "express";
import { CategoryRepository } from "../repositories/CategoryRepository";
import isValidUUID from "../utils/isValidUUID";

export const indexCategory = async (req: Request, res: Response) => {
  const { orderBy } = req.query

  let orderDirection: 'ASC' | 'DESC' = 'ASC'

  if (typeof orderBy === 'string' && orderBy.match(/^(asc|desc)$/i)) {
    orderDirection = orderBy.toUpperCase() as 'ASC' | 'DESC'
  }

  const categories = await CategoryRepository.findAll(orderDirection)
  res.json(categories)
}

export const showCategory = async (req: Request, res: Response) => {
  const {id} = req.params

  const course = await CategoryRepository.findById(id)
  return res.json(course)
}

export const createCategory = async (req: Request, res: Response) => {
  const {name} = req.body

  const course = await CategoryRepository.create({
    id: '',
    name
  })

  res.json(course)
}

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidUUID(id)) {
    return res.status(400).json({ error: 'Invalid category id' })
  }

  const categoryExists = await CategoryRepository.findById(id)
  if (!categoryExists) {
    return res.status(400).json({ Error: 'Category not found' })
  }

  const course = await CategoryRepository.update({
    id,
    name: req.body.name
  })

  res.json(course)
}

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidUUID(id)) {
    return res.status(400).json({ error: 'Invalid contact id' })
  }

  await CategoryRepository.delete(id)

  res.sendStatus(204)
}
