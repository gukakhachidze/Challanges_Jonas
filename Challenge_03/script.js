// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// ---------------------------------------------------------------------------------------
// არსებობს ტანვარჯიშის ორი გუნდი: დელფინები და კოალები. ისინი ერთმანეთს 3-ჯერ ეჯიბრებიან. გამარჯვებული,
// რომელსაც უმაღლესი საშუალო ქულა ექნება, ტროფეის მოიგებს!

// თქვენი დავალებები:
//     გამოთვალეთ თითოეული გუნდის საშუალო ქულა, ქვემოთ მოცემული ტესტის მონაცემების გამოყენებით.

//     შეადარეთ გუნდების საშუალო ქულები კონკურსის გამარჯვებულის დასადგენად და დაბეჭდეთ კონსოლზე.
// არ დაგავიწყდეთ, რომ შეიძლება იყოს ფრეც, ასე რომ, ესეც შეამოწმეთ (ფრე ნიშნავს, რომ მათ ერთნაირი საშუალო ქულა აქვთ).

//     ბონუსი 1: ჩართეთ მინიმალური ქულის მოთხოვნა 100 ქულის ოდენობით. ამ წესის მიხედვით, გუნდი მხოლოდ მაშინ იგებს,
// თუ მას აქვს მეორე გუნდზე მაღალი ქულა და ამავე დროს, მინიმუმ 100 ქულა. მინიშნება: გამოიყენეთ ლოგიკური ოპერატორი
// მინიმალური ქულის შესამოწმებლად, ასევე მრავალი else-if ბლოკი 😉

//     ბონუსი 2: მინიმალური ქულა ფრეზეც ვრცელდება! ასე რომ, ფრე მხოლოდ მაშინ ხდება,
// როდესაც ორივე გუნდს აქვს ერთი და იგივე ქულა და ორივეს აქვს 100-ზე მეტი ან ტოლი ქულა.
// წინააღმდეგ შემთხვევაში, ტროფეის არცერთი გუნდი არ იგებს.

// ტესტის მონაცემები:
//     მონაცემი 1: დელფინების ქულები: 96, 108 და 89. კოალების ქულები: 88, 91 და 110.

//     მონაცემი ბონუსი 1: დელფინების ქულები: 97, 112 და 101. კოალების ქულები: 109, 95 და 123.

//     მონაცემი ბონუსი 2: დელფინების ქულები: 97, 112 და 101. კოალების ქულები: 109, 95 და 106.

const firstPTSKoalas = 109;
const secondPTSKoalas = 95;
const thirdPTSKoalas = 106;
const averagePTSKoalas =
  (firstPTSKoalas + secondPTSKoalas + thirdPTSKoalas) / 3;

const firstPTSDolphins = 97;
const secondPTSDolphins = 112;
const thirdPTSDolphins = 101;
const averagePTSDolphins =
  (firstPTSDolphins + secondPTSDolphins + thirdPTSDolphins) / 3;

const minimalPTS = 100;

if (averagePTSDolphins > averagePTSKoalas && averagePTSDolphins >= minimalPTS) {
  console.log(
    `Dolphins wins..! Dolphins points: ${averagePTSDolphins} , Koalas points: ${averagePTSKoalas}`
  );
} else if (
  averagePTSDolphins === averagePTSKoalas &&
  averagePTSDolphins >= minimalPTS &&
  averagePTSKoalas >= minimalPTS
) {
  console.log(
    `DRAW..! Dolphins points: ${averagePTSDolphins} , Koalas points: ${averagePTSKoalas}`
  );
} else if (
  averagePTSKoalas > averagePTSDolphins &&
  averagePTSKoalas >= minimalPTS
) {
  console.log(
    `Koalas wins..! Dolphins points: ${averagePTSDolphins} , Koalas points: ${averagePTSKoalas}`
  );
} else {
  console.log(
    `Dolphins points: ${averagePTSDolphins} , Koalas points: ${averagePTSKoalas}`
  );
}
