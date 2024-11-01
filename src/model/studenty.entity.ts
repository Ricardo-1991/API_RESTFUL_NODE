export class Student {
    id: string;
    name: string;
    email: string;
    course: string;

    constructor(id: string, name: string, email: string, course: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.course = course;
    }
}
