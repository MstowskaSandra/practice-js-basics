function Student(initFirstName, initLastName, initGrades) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}

Student.prototype.addGrade = function(subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
};

const student = new Student('Sandra', 'Mstowska');
student.addGrade('maths', 4);
student.addGrade('maths', 5);
student.addGrade('english', 3);
student.addGrade('english', 5);

Student.prototype.calculateAverage = function(grades) {
    if (!grades || grades.length === 0) return 0;
        const sum = grades.reduce((acc, val) => acc + val, 0);
        return sum /grades.length;
};


Student.prototype.getAverageGrade = function(subject) {
    if (subject) {
        return this.calculateAverage(this.grades[subject]);      
    } else {
        const allGrades = Object.values(this.grades).flat();
        return this.calculateAverage(allGrades);
    }
};

student.addGrade('polish', 1);

console.log(student);
console.log("Średnia wszytskich ocen:", student.getAverageGrade());
console.log("Średnia ocen z matmy:", student.getAverageGrade('maths'));
console.log("Średnia ocen z polski język:", student.getAverageGrade('polish'));