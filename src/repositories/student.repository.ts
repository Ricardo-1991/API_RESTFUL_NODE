import {v4 as uuid} from 'uuid';
import { Student } from '../models/studenty.entity';

interface IStudent {
    id?: string;
    name: string;
    email?: string;
    course: string;
}

const students: IStudent[] = [{
    id: uuid(),
    name: 'John Doe',
    email: 'jdoe@me.com',
    course: 'ReactJS'
}];

 const findAll = () => {
    return students.map(student => student);
}

const create = (newStudent: IStudent) => {
    students.push(newStudent);
    return newStudent;
}

const findById = (id: string) => {
    return students.find(student => student.id === id);
}

const findByEmail = (email: string) => {
    return students.find(student => student.email === email);
}

const update = (updatedStudent: IStudent) => {

    const index = students.findIndex(student => student.id === updatedStudent.id);

    students[index] = { ...students[index], ...updatedStudent };
    return students[index];

}

export const StudentRepository = {
    findAll,
    findById,
    create,
    findByEmail,
    update // Adicione esta linha
}

