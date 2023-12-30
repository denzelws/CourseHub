import { db }  from '../../database'

export type Course = {
  id: string
  name: string
  category_id: string
  teacher_id: string
}

export const CourseRepository = {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
    const rows = await db.query(`SELECT * FROM courses ORDER BY name ${direction}`)
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
  },

  async update({id,
    name, category_id, teacher_id
  }: Course) {
    const [row] = await db.query(`
    UPDATE courses
    SET name = $1, category_id = $2, teacher_id = $3
    WHERE id = $4
    RETURNING *
    `, [name, category_id, teacher_id, id])

    return row
  },

  async delete(id: string) {
    const deleteOp = await db.query('DELETE FROM courses WHERE id = $1', [id])

    return deleteOp
  }
}
