import { Person } from "./Person.js";

class Teacher extends Person {
    level;

    constructor(fullName, gender, level) {
        super(fullName, gender);
        this.level = level;
    }

    set setLevel(newLevel) {
        this.level = newLevel;
    }

    get getLevel() {
        return this.level;
    }
}

export { Teacher };