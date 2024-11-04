import { NextFunction, Request, Response } from "express";
import { StudentService } from "../services/student.service";

const getAll = (request: Request, response: Response) => {
        const students = StudentService.getAll();
        response.status(200).json(students);
};

const findById = (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = request.params.id;
        const student = StudentService.findById(id);
        if (!student) {
            throw new Error("Estudante não encontrado.");
        }
        response.status(200).json(student);
    } catch (error) {
        next(error)
    }
};

const create = (request: Request, response: Response) => {
        const { name, email, course } = request.body;
        const newStudent = StudentService.create(name, email, course);
        response.status(201).json(newStudent);
}

const update = (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    const { name, course } = request.body;
    try {
        const updatedStudent = StudentService.update(id, name, course);
        response.status(200).json(updatedStudent);
    } catch (error) {
        next(error)
    }
};

const remove = (request: Request, response: Response, next : NextFunction) => {
    const id = request.params.id;
    try {
        StudentService.delete(id);
        response.status(200).json({ message: "Estudante deletado com sucesso." });
    } catch (error) {
        next(error)
    }
};

export const StudentController = {
    getAll,
    findById,
    create,
    update,
    remove
};
