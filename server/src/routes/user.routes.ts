import express from "express";

const router = express.Router();

import { getUsers } from "../controller/user.controller";
router.get("/users", getUsers);

export default router;
