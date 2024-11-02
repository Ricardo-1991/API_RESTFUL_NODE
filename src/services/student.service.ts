import { Student } from "../model/studenty.entity";
import {StudentRepository} from "../repositories/student.repository"; 
import { v4 as uuid } from 'uuid';
 const getAll = () => {
    return StudentRepository.findAll();
}

const create = (name: string, email: string, course: string) => {
    const newStudent = new Student(uuid(), name, email, course);
    const studentEmailExists = StudentRepository.findByEmail(newStudent.email);

    if (studentEmailExists) {
        throw new Error('Este e-mail já está cadastrado.');
    }
    return StudentRepository.create(newStudent);
}


export const StudentService = {
    getAll,
    create
}