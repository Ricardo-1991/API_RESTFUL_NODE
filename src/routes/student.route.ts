import express from 'express'
import { StudentController } from '../controllers/student.controller';

const router = express.Router()


router.get("/", StudentController.getAll)

router.get("/student/:id", StudentController.findById)

router.post("/student", StudentController.create)

router.put("/student/:id", StudentController.update);

router.delete("/student/:id")


export default router;