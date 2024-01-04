import { db } from '../../database';

export type User = {
  id: string
  username: string
  email: string
  password: string
}

export const UserRepository = {
  async create({ username, email, password }: User) {
    const hashedPassword = password

    const [row] = await db.queryUsers(
      `
      INSERT INTO users(username, email, password_hash)
      VALUES($1, $2, $3)
      RETURNING id, username, email
      `,
      [username, email, hashedPassword]
    )

    return row;
  },

  async findByEmail(email: string) {
    const [row] = await db.queryUsers(
      `
      SELECT id, username, email, password_hash as password
      FROM users
      WHERE email = $1
      `,
      [email]
    )

    return row;
  },
};
