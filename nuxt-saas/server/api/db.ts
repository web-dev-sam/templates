import { usePostgres } from "../utils/postgres"

export default defineEventHandler(async (event) => {
  const sql = usePostgres()

  const products = await sql`SELECT * FROM users`

  // Ensure the database connection is closed after the request is processed
  event.waitUntil(sql.end())
  return products
})
