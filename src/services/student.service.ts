import {StudentRepository} from "../repositories/student.repository"; 
 const getAll = () => {
    return StudentRepository.findAll();
}

const create = (name: string, email: string, course: string) => {
    return StudentRepository.create(name, email, course);
}


export const StudentService = {
    getAll,
    create
}