import { db }  from '../../database'

export type Teacher = {
  id: string
  name: string
}

export const TeacherCourseRepository = {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
    const rows = await db.query(`SELECT * FROM teachers ORDER BY name ${direction}`)
    return rows
  },

  async findById(id: string) {
   const [row] = await db.query('SELECT * FROM teachers WHERE id = $1', [id])
   return row
  },

  async create({ name }: Teacher) {
    const [row] = await db.query(
    `
    INSERT INTO teachers(name)
    VALUES($1)
    RETURNING *
    `,
    [name]
    )

    return row
  },

  async update({id,
    name
  }: Teacher) {
    const [row] = await db.query(`
    UPDATE teachers
    SET name = $1
    WHERE id = $2
    RETURNING *
    `, [name, id])

    return row
  },

  async delete(id: string) {
    const deleteOp = await db.query('DELETE FROM teachers WHERE id = $1', [id])

    return deleteOp
  }
}
