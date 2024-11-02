import {v4 as uuid} from 'uuid';

interface IStudent {
    id: string;
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
    return students;
}

const create = (name: string, email: string, course: string) => {
    const newStudent = new Student(uuid(), name, email, course);
    students.push(newStudent);
    return newStudent;
}

export const StudentRepository = {
    findAll,
    create
}


