var students = [
    { name: "saad", isSenior: true, hascompletedAssignments: true },
    { name: "Hassan", isSenior: true, hascompletedAssignments: true },
    { name: "Abbas", isSenior: false, hascompletedAssignments: false },
    { name: "Asad", isSenior: false, hascompletedAssignments: false },
];
function findSeniorStudentWithAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.hascompletedAssignments; });
}
;
var seniorstudentWithAssignments = findSeniorStudentWithAssignments(students);
console.log("Senior students with completed Assignments:”,seniorStudentWithAssignments");
function removeIncompleteSeniorStudents(students) {
    return students.filter(function (student) { return !(student.isSenior && !student.hascompletedAssignments); });
}
var updatedClassList = removeIncompleteSeniorStudents(students);
console.log("Updated class list:", updatedClassList);
