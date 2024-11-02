import { Student } from "../models/studenty.entity";
import {StudentRepository} from "../repositories/student.repository"; 
import { v4 as uuid } from 'uuid';
 const getAll = () => {
    return StudentRepository.findAll();
}

const findById = (id: string) => {
    try {
        const studentExists = StudentRepository.findById(id);
        if (!studentExists) {
            throw new Error('Estudante não encontrado.');
        }
        return studentExists;
    }catch {

    }
}

const create = (name: string, email: string, course: string) => {
    const id = uuid();
    const newStudent = new Student(id, name, email, course);
    const studentEmailExists = StudentRepository.findByEmail(newStudent.email);

    if (studentEmailExists) {
        throw new Error('Este e-mail já está cadastrado.');
    }
    return StudentRepository.create(newStudent);
}

export const StudentService = {
    getAll,
    findById,
    create
}