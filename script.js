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

// test data1
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// const markBmi = markWeight / (markHeight * markHeight);
// const johnBmi = johnWeight / (johnHeight * johnHeight);

// console.log(markBmi);
// console.log(johnBmi);
// let markHigherBMI = markBmi > johnBmi;
// console.log(markHigherBMI);
// console.log(typeof markHigherBMI);

// // test data2
// let markWeight2 = 95;
// let markHeight2 = 1.88;
// let johnWeight2 = 85;
// let johnHeight2 = 1.76;

// const markBmi2 = markWeight2 / (markHeight2 * markHeight2);
// const johnBmi2 = johnWeight2 / (johnHeight2 * johnHeight2);

// console.log(markBmi2);
// console.log(johnBmi2);
// let markHigherBMI2 = markBmi2 > johnBmi2;
// console.log(markHigherBMI2);
// console.log(typeof markHigherBMI2);

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

const age = 15;

if(age >= 18) {
  console.log(`Sarah can start driving license 😁`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wailt another ${yearsLeft} years :)`);
}
// is called Control structure

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
// if you want use Valuables in control structure, you should declare without Values outside the structure.