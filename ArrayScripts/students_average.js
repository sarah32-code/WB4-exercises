"use strict";

let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

let studentsLength = students.length;
for (let i = 0; i < studentsLength; i++) {
    let student = students[i];
    
    let scoresTotal = 0;
    let studentsLength = student.scores.length;
    for (let j = 0; j <scoresTotal; j++) {
    scoresTotal += student.scores[j];

    }
    let scoresAverage = scoresTotal / studentsLength;

    console.log(student.name + scoresAverage);
}