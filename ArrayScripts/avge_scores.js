let myScores = [10, 20, 30, 40, 50];
let yourScores = [60, 70, 80, 90, 100];

function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

let myAverage = getAverage(myScores);
console.log(myAverage);

let yourAverage = getAverage(yourScores);
console.log(yourAverage);
