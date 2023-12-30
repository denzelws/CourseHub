import { db }  from '../../database'

export type Category = {
  id: string
  name: string
}

export const CategoryRepository = {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
    const rows = await db.query(`SELECT * FROM categories ORDER BY name ${direction}`)
    return rows
  },

  async findById(id: string) {
   const [row] = await db.query('SELECT * FROM categories WHERE id = $1', [id])
   return row
  },

  async create({ name }: Category) {
    const [row] = await db.query(
    `
    INSERT INTO categories(name)
    VALUES($1)
    RETURNING *
    `,
    [name]
    )

    return row
  },

  async update({id,
    name
  }: Category) {
    const [row] = await db.query(`
    UPDATE categories
    SET name = $1
    WHERE id = $2
    RETURNING *
    `, [name, id])

    return row
  },

  async delete(id: string) {
    const deleteOp = await db.query('DELETE FROM categories WHERE id = $1', [id])

    return deleteOp
  }
}
