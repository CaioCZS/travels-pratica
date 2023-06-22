import db from "../database/database.js"

export async function dbGetTravels(page) {
  const limit = page ? 25 : 100
  const offset = !page ? 0 : (page - 1) * 25

  return db.query(`SELECT COUNT(passenger_travels."passengerId") as travels,passengers."fullName" as passenger FROM passenger_travels
  JOIN passengers ON passengers.id = passenger_travels."passengerId"
  GROUP BY passenger ORDER BY travels DESC LIMIT ${limit} OFFSET ${offset}
  ;`)
}
