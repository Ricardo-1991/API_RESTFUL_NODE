import {StudentRepository} from "../repositories/student.repository"; 
 const getAll = () => {
    return StudentRepository.findAll();
}


export const StudentService = {
    getAll
}