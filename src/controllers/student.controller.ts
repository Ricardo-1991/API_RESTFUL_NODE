import {Request, Response} from "express";
import { StudentService } from "../services/student.service";


const getAll = (request: Request, response: Response) => {
    const students = StudentService.getAll();
    response.status(200).json(students);
}

const findById = (request: Request, response: Response) => {
    const id = request.params.id;
    const student = StudentService.findById(id);
    response.status(200).json(student);
}

const create = (request: Request, response: Response) => {
    const { name, email, course } = request.body;
    const newStudent = StudentService.create(name, email, course);
    response.status(201).json(newStudent);
}

export const StudentController = {
    getAll,
    findById,
    create
}