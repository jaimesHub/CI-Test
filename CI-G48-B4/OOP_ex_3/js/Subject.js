import { Teacher } from "./Teacher.js";
import { Student } from "./Student.js";

class Subject {
    id;
    nameSubject;
    nameTeacher;
    students;

    constructor(id, nameSubject, nameTeacher, students) {
        this.id = id;
        this.nameSubject = nameSubject;
        this.nameTeacher = nameTeacher;
        this.students = [];
    }

    set setNameTeacher(newName) {
        this.nameTeacher = newName;
    }

    get nameTeacher() {
        return this.nameTeacher;
    }

    get getListStudents() {
        return this.students;
    }

    addStudent(newStudent) {
        if (newStudent instanceof Student) {
            this.students.push(newStudent);
        } else {
            console.log("Đối tượng nhập vào không phải là sinh viên!");
        }
    }

    findStudentByName(name) {
        let result = [];
        for (let itemStudent of this.getListStudents) {
            if (itemStudent['fullName'] === name) {
                result.push(itemStudent);
            }
        }
        return result;
    }

    findStudentByGrade(grade) {
        let result = [];
        for (let itemStudent of this.getListStudents) {
            if (itemStudent['grade'] > grade) {
                result.push(itemStudent);
            }
        }
        return result;
    }

}

export { Subject };