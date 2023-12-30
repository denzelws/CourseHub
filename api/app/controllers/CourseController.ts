import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
  res.json('get')
}

export const show = (req: Request, res: Response) => {
  res.json('get/show')
}

export const create = (req: Request, res: Response) => {
  res.json('post')
}

export const update = (req: Request, res: Response) => {
  res.json('put')
}

export const deleteCourse = (req: Request, res: Response) => {
  res.json('delete')
}
