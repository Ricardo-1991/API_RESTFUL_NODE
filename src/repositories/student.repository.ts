import {v4 as uuid} from 'uuid';
import { Student } from '../model/studenty.entity';

interface IStudent {
    id?: string;
    name: string;
    email: string;
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

const findByEmail = (email: string) => {
    return students.find(student => student.email === email);
}

export const StudentRepository = {
    findAll,
    create,
    findByEmail
}


