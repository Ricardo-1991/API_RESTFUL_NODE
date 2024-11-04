import { Student } from "../models/studenty.entity";
import {StudentRepository} from "../repositories/student.repository"; 
import { v4 as uuid } from 'uuid';
 const getAll = () => {
    return StudentRepository.findAll();
}

const findById = (id: string) => {
    const studentExists = StudentRepository.findById(id);
    if (!studentExists) {
        throw new Error('Estudante não encontrado.');
    }
    return studentExists;
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

const update = (id: string, name: string, course: string) => {
   
    const studentExists = StudentRepository.findById(id);

    if (!studentExists) {
        throw new Error('Estudante não encontrado.');
    }

    studentExists.name = name
    studentExists.course = course
    return StudentRepository.update(studentExists);
}

const deleteStudent = (id: string) => {
    const studentExists = StudentRepository.findById(id);
    if (!studentExists) {
        throw new Error('Estudante não encontrado.');
    }
    return StudentRepository.delete(id);
}

export const StudentService = {
    getAll,
    findById,
    create,
    update,
    delete: deleteStudent
}