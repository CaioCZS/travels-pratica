import httpStatus from "http-status"
import { serviceDBtravels } from "../services/ex.services.js"

export async function healthCheck(req, res) {
  res.sendStatus(httpStatus.OK)
}

export async function getTravelers(req, res) {
  const page = req.query.page ? Number(req.query.page) : null
  if (page <= 0 || isNaN(page)) {
    return res.status(httpStatus.BAD_REQUEST).send("Invalid page value")
  }
  const travels = await serviceDBtravels(page)
  if (travels === null) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Too many results")
  }

  res.send(travels)
}
