export class Student {
    id?: string;
    name: string;
    email: string;
    course: string;

    constructor(id: string, name: string, email: string, course: string) {
        this.name = name;
        this.email = email;
        this.course = course;
    }
}
