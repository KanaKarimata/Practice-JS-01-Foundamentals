// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log ('Jonas');
// console.log(23);

// let firstName = "Jonas";
// // "firstName" is Valuables
// // "Jonas" is Values

// let PI = 3.1415;
// let myFirstJob = 'programmer';
// let myCurrentJob = 'Teacher';
// // 👆likes

// let job1 = 'programmer';
// let job2 = 'Teacher';
// // 👆Not like

// // assignment
// // 1
// let country = "Japan"
// let continent = "Asia"
// let population = "100 million"

// // 2
// console.log(country)
// console.log(continent)
// console.log(population)

// true;
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// // check Data type by log
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// year = 1991;

// let age = 30;
// age = 31;

// // const can't be changed
// const birthYear = 1991;
// // birthYear = 1990;
// // const job;

// // var is old
// var job = 'programmer';
// job = 'teacher';

// // NG (without Valuables)
// lastName = 'Karimata';
// console.log(lastName);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);


// const firstName = 'Kana';
// const job = 'programmer';
// const birthYear = '1997';
// const year = 2037;

// const kanas = "I'm " + firstName + ', a ' + (year - birthYear) +  'years old ' + job + '!';
// console.log(kanas);

// const kanasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
// console.log(kanasNew);
// console.log(`Just a regular string...`)
// // many developers start `` for strings

// console.log(`String
// multiple
// lines`);

// const age = 15;

// if(age >= 18) {
//   console.log(`Sarah can start driving license 😁`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wailt another ${yearsLeft} years :)`);
// }
// // is called Control structure

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);
// // if you want use Valuables in control structure, you should declare without Values outside the structure.


/////////////Coding Challenge//////////////
// test data1
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// const markBmi = markWeight / (markHeight * markHeight);
// const johnBmi = johnWeight / (johnHeight * johnHeight);

// console.log(markBmi, johnBmi);
// // let markHigherBMI = markBmi > johnBmi;
// // console.log(markHigherBMI);
// // console.log(typeof markHigherBMI);

// if (markBmi > johnBmi) {
//   console.log(`Mark's BMI ${markBmi} is higher than John's ${johnBmi}`);
// } else {
//   console.log(`John's BMI ${johnBmi} is higher than Mark's ${markBmi}`);
// }

// // test data2
// let markWeight2 = 95;
// let markHeight2 = 1.88;
// let johnWeight2 = 85;
// let johnHeight2 = 1.76;

// const markBmi2 = markWeight2 / (markHeight2 * markHeight2);
// const johnBmi2 = johnWeight2 / (johnHeight2 * johnHeight2);

// console.log(markBmi2);
// console.log(johnBmi2);
// // let markHigherBMI2 = markBmi2 > johnBmi2;
// // console.log(markHigherBMI2);
// // console.log(typeof markHigherBMI2);

// if (markBmi2 > johnBmi2) {
//   console.log(`Mark's BMI ${markBmi2} is higher than John's ${johnBmi2}`);
// } else {
//   console.log(`John's BMI ${johnBmi2} is higher than Mark's ${markBmi2}`);
// }

// ///////////////////////////

// type conversion
// const inputYear = `1991`;
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// // inputYear is still String
// console.log(Number('Jonas'));
// // NaN = Not a Number
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log(`I'm ` + 23 + ` years old`);
// console.log(`23` + `10` + 3);

// let n = `1` + 1;
// n = n-1;
// console.log(n);
// // result is 10

// 5 falsy values: 0, '',undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// // falsy values
// console.log(Boolean(`Jonas`));
// console.log(Boolean({}));
// // truthy values

// const money = 100;
// if(money) {
//   console.log(`Don't spend it all :)`);
// }else{
//   console.log(`You should get a job!`);
// }
// // if money is falsy values, result is `You should get a job!` for example money = 0

// let height;
// if (height) {
//   console.log(`Yay! Height is defined`);
// }else {
//   console.log(`Height is UNDEFINED`);
// }

// const age = `18`;
// if(age === 18) console.log(`You just became an adult :D(strict)`);
// // === exactly equal/ strict
// // == loose equal

// if(age == 18) console.log(`You just became an adult :D(loose)`);
// // loose equality ignore type of values

// const favorite =Number(prompt(`What's your favorite number?`));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) { //`23` == 23 => true, `23` === 23 => false
//   console.log(`Cool! 23 is an amazing number!`);
// }else if(favorite === 7) {
//   console.log('7 is also a cool number!');
// }else if(favorite === 9) {
//   console.log('9 is also a cool number!');
// }else {
//   console.log(`Number is not 7 or 23 or 9`);
// }

// opposite version
// != is loose not-equal
// !== is strict not-equal

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// coding challenge #3
// 1
// let dolphinsScore = (96 + 108 + 89) / 3;
// let koalasScore = (88 + 91 + 110) / 3;
// console.log(dolphinsScore);
// console.log(koalasScore);

// // 2
// if(dolphinsScore > koalasScore){
//   console.log(`Winner is Dolphins Team!`);
// }else if (koalasScore > dolphinsScore) {
//   console.log(`Winner is Koalas Team!`);
// }else if (koalasScore === dolphinsScore) {
//   console.log('They are DRAW!');
// }

// Bonus1
let dolphinsScore = (97 + 112 + 101) / 3;
let koalasScore = (109+ 95 + 123) / 3;
console.log(dolphinsScore);
console.log(koalasScore);
let compareScores = dolphinsScore > koalasScore

if (compareScores === true && dolphinsScore > 100){
  console.log(`Winner is Dolphin!`);
}else if (compareScores !== true && koalasScore > 100) {
  console.log(`Winner is Koalas!`);
}else if (compareScores === true && dolphinsScore < 100) {
  console.log(`Winner is Koalas!`);
}else if (compareScores === true && koalasScore < 100) {
  console.log(`Winner is Dolphins!`);
}else {
  console.log(`They are Draw!!`);
}