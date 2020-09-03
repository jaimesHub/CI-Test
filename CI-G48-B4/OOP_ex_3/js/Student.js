import { Person } from "./Person.js";

class Student extends Person {
    id;
    year;
    grade;

    constructor(fullName, gender, id, year, grade) {
        super(fullName, gender);
        this.id = id;
        this.year = year;
        this.grade = grade;
    }

    set setId(newId) {
        this.id = newId;
    }

    get getId() {
        return this.id;
    }

    set setYear(newYear) {
        this.year = newYear;
    }

    get getId() {
        return this.year;
    }

    set setGrade(newGrade) {
        this.grade = newGrade;
    }

    get getId() {
        return this.grade;
    }
}

export { Student };