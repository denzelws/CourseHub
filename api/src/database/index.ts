import { Client, QueryResult } from 'pg'

type QueryResponse = {
  id: string
  name: string
  category_id: string
  teacher_id: string
}

const client: Client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'coursehub'
})

client.connect()

export const db = {
  async query(query: string, values?: (string | number | null)[]): Promise <QueryResponse[]>{
    const {rows}: QueryResult = await client.query(query, values)
    return rows as QueryResponse[]
  }
}
