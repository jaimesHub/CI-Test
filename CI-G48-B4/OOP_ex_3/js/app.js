import { Person } from "./Person.js";
import { Teacher } from "./Teacher.js";
import { Student } from "./Student.js";
import { Subject } from "./Subject.js";

// create teacher
let gv1 = new Teacher("gv1", "nam", "Thac si");
let gv2 = new Teacher("gv2", "nu", "Tien si");

// create student
let sv1 = new Student("sv1", "nam", "B14DCAT067", "2014-2019", 10);
let sv2 = new Student("sv2", "nu", "B15DCCN044", "2015-2020", 8);
let sv3 = new Student("sv1", "nam", "B14DCAT077", "2014-2019", 5);
let sv4 = new Student("sv4", "nu", "B16DCAT067", "2016-2021", 4);

// create subject
let subject1 = new Subject("sb1", "Javascript", gv1.getFullName, []);
let subject2 = new Subject("sb2", "Python", gv2.getFullName, []);

// add student to subject
subject1.addStudent(sv1);
subject1.addStudent(sv2);
subject1.addStudent(sv3);
subject1.addStudent(sv4);

subject2.addStudent(sv2);
subject2.addStudent(sv3);
subject2.addStudent(sv4);

// find student who has name is sv1
console.log(subject1.findStudentByName('sv1'));
// find student who has grade that is greater than 6
console.log(subject2.findStudentByGrade(6));