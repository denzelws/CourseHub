import { db }  from '../../database'

export type Course = {
  id: string
  name: string
  category_id: string
  teacher_id: string
}

export const CourseRepository = {
  async findAll() {
    const rows = await db.query('SELECT * FROM courses')
    return rows
  },

  async findById(id: string) {
   const [row] = await db.query('SELECT * FROM courses WHERE id = $1', [id])
   return row
  },

  async create({ name, category_id, teacher_id }: Course) {
    const [row] = await db.query(
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
