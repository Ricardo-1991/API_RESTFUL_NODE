import {v4 as uuid} from 'uuid';
import { Student } from '../models/studenty.entity';
import { StudentDto } from '../dtos/userDto';

const students: StudentDto[] = [{
    id: uuid(),
    name: 'John Doe',
    email: 'jdoe@me.com',
    course: 'ReactJS'
}];

 const findAll = () => {
    return students.map(student => student);
}

const create = (newStudent: StudentDto) => {
    students.push(newStudent);
    return newStudent;
}

const findById = (id: string) => {
    return students.find(student => student.id === id);
}

const findByEmail = (email: string) => {
    return students.find(student => student.email === email);
}

const update = (updatedStudent: StudentDto) => {
    const index = students.findIndex(student => student.id === updatedStudent.id);
    students[index] = { ...students[index], ...updatedStudent };
    return students[index];

}

const deleteStudent = (id: string) => {
    const index = students.findIndex(student => student.id === id);
    students.splice(index, 1);
}

export const StudentRepository = {
    findAll,
    findById,
    create,
    findByEmail,
    update,
    delete: deleteStudent // Adicione esta linha
}
