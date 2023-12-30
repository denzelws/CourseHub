import { db }  from '../../database'

export type Course = {
  id: string
  name: string
  category_id: string
  teacher_id: string
}

export const CourseRepository = {
  async create({ name, category_id, teacher_id }: Course) {
    const row = await db.query(
    `
    INSERT INTO courses(name, category_id, teacher_id)
    VALUES($1, $2, $3)
    RETURNING *
    `,
    [name, category_id, teacher_id]
    )

    return row
  }
}
