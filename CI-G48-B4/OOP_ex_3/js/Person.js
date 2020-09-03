class Person {
    fullName;
    gender;

    constructor(fullName, gender) {
        this.fullName = fullName;
        this.gender = gender;
    }

    set setFullName(newName) {
        this.fullName = newName;
    }

    get getFullName() {
        return this.fullName;
    }

    set setGender(newGender) {
        this.gender = newGender;
    }
}

export { Person };