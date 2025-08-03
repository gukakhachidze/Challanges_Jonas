// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// const markHeight = 1.69;
// const johnHeight = 1.95;
// const markMass = 78;
// const johnMass = 92;

const markHeight = 1.88;
const johnHeight = 1.76;
const markMass = 95;
const johnMass = 85;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;

console.log("John BMI: " + johnBMI);
console.log("Mark BMI: " + markBMI);

// const myMass = 105;
// const myHeight = 1.75;
// const myBMI = myMass / myHeight ** 2;
// console.log(myBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!.`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's!(${markBMI})`);
}
