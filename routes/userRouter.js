import express from "express"

import userController from "../controllers/user/userController.js"
const router = express.Router();

router.get('/',userController.loadHomePage)
router.get('/pageNotFound',userController.pageNotFound)


export default router;