import { Router } from "express";
import toolboxRoutes from './toolbox.route.js'

const router = Router();

router.use("/tools", toolboxRoutes)

export default router;