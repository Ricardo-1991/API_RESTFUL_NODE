import express from 'express'
import { StudentController } from '../controllers/student.controller';

const router = express.Router()


router.get("/", StudentController.getAll)

router.post("/student")

router.put("/student/:id")

router.delete("/student/:id")


export default router;