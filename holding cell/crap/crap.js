// Test Data 1 
const sioneMass1 = 78;//kgs
const sioneHeight1 = 1.69;//mts
const tualeleMass1 = 62;//kgs
const tualeleHeight1 = 1.55;//mts

// Test Data 2
const sioneMass2 = 95;//kgs
const sioneHeight2 = 1.88;//mts
const tualeleMass2 = 85;//kgs
const tualeleHeight2 = 1.66;//mts

// BMI test Data 1
const sioneBMI1 = sioneMass1 / (sioneHeight1 ** 2);
const tualeleBMI1 = tualeleMass1 / (tualeleHeight1 ** 2);  

// BMI test Data 2
const sioneBMI2 = sioneMass2 / (sioneHeight2 ** 2);
const tualeleBMI2 = tualeleMass2 / (tualeleHeight2 ** 2); 

//BMI results logged
console.log("siones BMI for testData 1  is:", sioneBMI1);
console.log("tualele BMI for testData 1  is:", tualeleBMI1);
console.log("siones BMI for testData 2  is:", sioneBMI2);
console.log("tualele BMI for testData 2  is:", tualeleBMI2);

//Compare Sione & taulele"s BMI
const sioneHigherBMI1 = sioneBMI1 > tualeleBMI1;
const sioneHigherBMI2 = sioneBMI2 > tualeleBMI2;

//Use if/else statement to compare both BMI's
 if (sioneHigherBMI1){
    ("Sione has a higher BMI than Tualele's using Test Data 1",sioneBMI1, "Taulele's BMI is", tualeleBMI1);
 } else {
    console.log("tualele has a higher BMI than siones using Test Data 1", tualeleBMI1, "sione's BMI is", sioneBMI1);
 }

 if (sioneBMI2){
    ("Sione has a higher BMI than Tualele's using Test Data 2", sioneBMI2, "Taulele's BMI is", tualeleBMI2);
 } else {
    console.log("tualele has a higher BMI than siones using Test Data 2", tualeleBMI2, "sione's BMI is", sioneBMI2);
 }

//BMI function
function calculateBMI (mass, height){
    const BMI = mass / (height ** 2)
    console.log("my BMI is",BMI)
}
calculateBMI(124, 1.89);

//......... Who wins the Trophy.......//

//TEST DATA: Take2 scores 96, 108 and 89. RUSH scores 88, 91 and 110.

//TEST DATA BONUS 1: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 123.

//TEST DATA BONUS 2: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 106.

const take2Scores =[96, 108, 89]
const rushScores = [88, 91, 110]

//calculate average score

const take2AvgScore = (take2Scores.reduce((acc, score) => acc + score, 0)) / take2Scores.length;
console.log("The Take2 avg.Score is " + take2AvgScore)
const rushAvgScore = (rushScores.reduce((acc, score) => acc + score, 0)) / rushScores.length;
console.log("Rush avg.Score is " + rushAvgScore)

//Determine winner or draw

if (take2AvgScore > rushAvgScore && take2AvgScore >= 100) {
   console.log(`Take2 wins with an average score of ${take2AvgScore}`);
} else if (rushAvgScore > take2AvgScore && rushAvgScore >= 100) {
   console.log(`Rush wins with an average score of ${rushAvgScore}`);
} else if (take2AvgScore === rushAvgScore && take2AvgScore >= 100 && rushAvgScore >= 100) {
   console.log(`It's a draw with both teams having an average score of ${take2AvgScore}`);
} else {
   console.log("no team wins the trophy");
}

//-----Tip Calculator-----//

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill ${bill}, the tip was ${tip}, and the value is ${bill + tip}`);

// Season 2 Challenge

const calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgTake2 = calAverage(44, 23, 71);
const avgRush = calAverage(65, 54, 49);

const checkWinner = (avgTake2, avgRush) =>
avgTake2 > avgRush ? `Take2 win(${avgTake2} va ${avgRush})` : `Rush win (${avgRush} vs ${avgTake2})`;

console.log(checkWinner(avgTake2, avgRush));

const avgTake2B = calAverage(85, 54, 41);
const avgRushB = calAverage(23, 34, 27);

console.log(checkWinner(avgTake2B, avgRushB));

//----completed intro to Javascript----//