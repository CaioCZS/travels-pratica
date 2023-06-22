import { dbGetTravels } from "../repositories/ex.repository.js"

export async function serviceDBtravels(page) {
  const { rows: travels } = await dbGetTravels(page)
  if (travels.length > 100) return null

  return travels
}
