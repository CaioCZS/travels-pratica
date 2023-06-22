import { Router } from "express"
import { getTravelers, healthCheck } from "../controllers/ex.controllers.js"

const router = Router()

router.get("/health", healthCheck)
router.get("/passengers/travels", getTravelers)
export default router
