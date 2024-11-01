import {Request, Response} from "express"
import { StudentService } from "../services/student.service";


const getAll = (request: Request, response: Response) => {
    const students = StudentService.getAll();
    response.status(200).json(students);
}


export const StudentController = {
    getAll
}