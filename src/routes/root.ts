import express from "express";
import frontendRoutes from "./frontend";
import apiRoutes from "./api";

const router = express.Router();

router.use("/", frontendRoutes);
router.use("/api", apiRoutes);

export default router;
