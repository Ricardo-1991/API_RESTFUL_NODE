import express from 'express'
import { StudentController } from '../controllers/student.controller';
import { z } from 'zod';
import { studentValidator } from '../middleware/student.validador';

const router = express.Router()

const studentSchema = z.object({
    name: z.string().min(5, { message: "Nome deve ter no mínimo 5 caracteres." }),
    email: z.string().email({ message: "Formato de e-mail inválido." }),
    course: z.string().min(5, { message: "Curso deve ter no mínimo 5 caracteres." }),
})


router.get("/", StudentController.getAll)

router.get("/student/:id", StudentController.findById)

router.post("/student", studentValidator(studentSchema), StudentController.create)

router.put("/student/:id", StudentController.update);

router.delete("/student/:id", StudentController.remove);


export default router;