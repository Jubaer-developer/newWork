"use strict";
/*   let fast = 1;
  do {
    fast ++;
    document.write( `loop ${fast}` );                                  
  } while ( fast < 11 ); */
//new concept
var newConcept = "jubaer";
var newConcept = "hasan";
// after value replases newConcept
console.log(newConcept);
console.log(newConcept);
/* 
  ============================
   redeclaring variabol stert
  ============================
  */
{
  var redeclaring = 10;
}
console.log(redeclaring);
hoisting = 10;
var hoisting;
console.log(hoisting);
/* 
  ============================
   redeclaring variabol end
  ============================
  */
// don't redeclaring variabol stert
{
  let redeclaringOne = "hello world";
  console.log(redeclaringOne);
}
const fastOne = 11;
{
  console.log(fastOne);
}
// don't redeclaring variabol end
//quiz stert
let quiz = 29 % 9;
document.write(quiz);
//quiz end
// operator prectic stert
let operator = 10;
let operatorOne = 10;
let operatorTow = 10;
let operatorThree = 10;
let operatorFour = 10;
let operatorFive = 10;
console.log((operator += 2)); //12
console.log((operatorOne -= 3)); // 7
console.log((operatorTow *= 5)); //50
console.log((operatorThree **= 2)); //100
console.log((operatorFour /= 2)); //5
console.log((operatorFive %= 3)); //9
// operator prectic end
//exponential nothing stert
let exponential = 1e2;
console.log(exponential); //100
const fastconst = ["hi", "hello", "hello"];
console.log(typeof fastconst);
//exponential nothing end
//sumit quiz stert
let sumitAig = "he is " + (2021 - 1990) + " years old";
console.log(sumitAig); // ansewr He is 31 years old
//sumit quiz end
// Using ver in function makes it local scope stert
function newFunction() {
  var newOne = " using var in function make it locale scope ";
  console.log(newOne);
}
newFunction();
/*  
  this will not work console
  console.log( newOne ); */
// Using ver in function makes it local scope end
/* 
==============================
        object stert
==============================
*/
// let can be used but should not be used on objects
let fastObject = {
  name: "jubaer",
  lastName: "hasan",
  aige: 18,
  weight: "53Kg",
  class: 12,
};
console.log(fastObject["name"], fastObject["lastName"]);
const myFastCar = {
  name: "car",
  carCompaney: "BMW",
  carFunction: () => {
    console.log("hello arry function");
  },
  carFunctionOne: function (one, tow) {
    console.log(`${one} = ${tow}`);
  },
};
myFastCar.carFunction();
myFastCar.carFunctionOne(myFastCar.name, myFastCar.carCompaney);
//error check stert
const errorOne = {
  error: function () {
    console.log("hello world");
  },
};
errorOne.error();
//error check end
// this use stert
const oneThis = {
  fastFunction: function () {
    this.secoundFunction();
    console.log("hi document.write();");
  },
  secoundFunction: function () {
    console.log("hi secound function.");
  },
};
oneThis.fastFunction();
// this use end
// new this stert
const towThis = {
  one: "J",
  tow: "BAER",
  three: 10,
};
console.log(towThis.three); //20
// new this end
const arryFunction = {
  arryOne: function () {
    this.arryTow();
  },
  arryTow: function () {
    console.log("Hi arry function.");
  },
};
arryFunction.arryOne();
// new keyword object stert
let OneNew = new String("hi");
console.log(OneNew); //object value
console.log(typeof OneNew);
let TowNew = new Number(100);
console.log(TowNew); //object value
console.log(typeof TowNew);
let ThreeNew = new Boolean(" Hi boolean "); //object value
console.log(ThreeNew);
console.log(typeof ThreeNew);
const mickey = {
  name: "Mickey",
};
console.log(mickey["name"]);
// new keyword object end
/* 
==============================
        object end
==============================
*/
// arry stert
const myArry = ["jubaer", 10, "My BMW"];
console.log(myArry[0]);
myArry[0] = "hasan";
console.log(myArry[0]);
myArry[2] = "My car.";
console.log(myArry[2]); //My car.
// arry end
// sumith quiz stert
const mouse = {
  name: "mickey",
  small: true,
};
const bird = {
  size: "small",
  mouse: mouse,
};
console.log(bird["mouse"]["small"]);
console.log(mouse.name);
// sumith quiz end
//string length stert
let stringTest = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
console.log(stringTest);

/*   let stringTestTow = prompt( "sting test" );
  stringTestTow = stringTestTow.length;
  console.log( stringTestTow ); */
let lengthOne = "abcde ";
lengthOne = lengthOne.length;
console.log(lengthOne); //6
//sting length end
//	Horizontal Tabulator string stert
let tabulator = "how are you i am \tfine and you";
console.log(tabulator);
//	Horizontal Tabulator string end
//slice string function stert
let sliceOne = "hi there";
console.log(sliceOne.slice(1, 5)); //i th
let sliceTow = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sliceThree = sliceTow.slice(4, 11); //e--k
console.log(sliceThree);
let sliceFour = "12345678";
console.log(sliceFour.slice(2, 4)); //34
console.log(typeof sliceThree);
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(typeof animals[3]);
console.log(animals[3].slice(0, 4)); //duck
const animalsO = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animalsO.slice(2));
const oneSubstring = ["java", "c++", "c#", "c", "javascript"];
console.log(oneSubstring[2].substring(0));
let threeSlice = "jubaer hasan";
threeSlice = threeSlice.slice(4, 7); //er .
console.log(threeSlice);
let threeSliceOne = "jubaer hasan";
let fourSlice = threeSliceOne.slice(8); //asan
console.log(fourSlice);
let sliceFive = "jubaer hasan";
sliceFive = sliceFive.substr(3, 2);
console.log(sliceFive);
let sliceSix = "jubaer hasan jubaer";
sliceSix = sliceSix.slice(-4, -2);
console.log(sliceSix);
let sliceSeven = "i love baba & baba.";
sliceSeven = sliceSeven.replace("baba.", "ma.");
console.log(sliceSeven);
let onFunction = () => {
  let functionOne = "hi world";
  console.log("lower care convert|" + " " + functionOne.toUpperCase());
  console.log("upper case convert|" + " " + functionOne.toLowerCase());
};
let timOne = "     jubaer   ";
timOne = timOne.trim();
console.log(timOne);
let trimOne = "jubaer";
trimOne = trimOne.charAt(2);
console.log(trimOne); //b
let tirmTow = "zzzzzzz";
tirmTow = tirmTow.charCodeAt(2);
console.log(tirmTow); //
//onFunction();
//slice string function end
//charAt or charCodeAt stert
let charOne = "jubaer";
charOne = charOne.charAt(2);
console.log(charOne); //b
let charTow = "a";
charTow = charTow.charCodeAt(0);
console.log(charTow);
let charThree = "";
console.log(charThree[0]); //undefined
let charFour = "111";
charFour = charFour.split(1);
console.log(charFour);
let charFive = "jubaer hasan";
charFive = charFive.split("a");
console.log(charFive);
console.log(charFive[1]);
let charSix;
charSix = new String("jubaer");
console.log(charSix);
let charEight = "j";
charEight = charEight.padStart(4, "j");
console.log(charEight);
let charNine = "8";
charNine = charNine.padEnd(5, "3");
console.log(charNine); //83333
//charAt or charCodeAt end
//sumit class fourteen Quiz stert
let strOne = "The Quick Brown fox jumps ovr a lazy day";
console.log(strOne.substring(10, 15));
console.log(strOne.slice(10, 15));
let charSeven = "7";
charSeven = charSeven.padStart(4, 7);
console.log(charSeven);
let charTen = "i love sokina";
// charTen = charTen.slice( 11, 18 );
//charTen = charTen.substr( 7, 12 );
// charTen = charTen.substr( 7 );
console.log(charTen.substr(7, 12));
console.log(charTen.substr(7));
console.log(charTen.substr(-6));
//sumit class fourteen Quiz end
//string search stert
let indexOfOne = "hi how are you";
indexOfOne = indexOfOne.indexOf("are");
console.log(indexOfOne); //7
let indexOfTow = "I am fine and you";
indexOfTow = indexOfTow.indexOf("Fine");
console.log(indexOfTow); //-1
let indexOfThree = "hello how are you i am fine and you.";
indexOfThree = indexOfThree.lastIndexOf("you");
console.log(indexOfThree); //32
let indexOfFour = "hi how are you and you i am fine";
indexOfFour = indexOfFour.indexOf("o", 21);
console.log(indexOfFour); //-1
let indexOfSix = "So this is very infortant.";
indexOfSix = indexOfSix.lastIndexOf("r", 12);
console.log(indexOfSix); //-1
let indexOfSeven = "So this is very infortant.";
console.log(indexOfSeven.lastIndexOf("i", 9)); //8
let indexOfNine = "hi kzazmal hi";
console.log(indexOfNine.lastIndexOf("z", 10));
let indexOfEleven = "hi";
indexOfEleven = indexOfEleven.search("i");
console.log(indexOfEleven); //1
let includesOne = "Hi Hello";
includesOne = includesOne.includes("H", 1);
console.log(includesOne); //true
let includesTow = "i am fine";
includesTow = includesTow.includes("I");
console.log(includesTow); //
let includesThree = "hi ow  are";
includesThree = includesThree.includes("h", 1);
console.log(includesThree); //false
let includesFour = "hi how are you";
includesFour = includesFour.search("h");
console.log(includesFour);
let includesFive = "i am fine.";
includesFive = includesFive.startsWith("am", 2);
console.log(includesFive); //true
let includesSix = "hi how are you,i am fine.";
includesSix = includesSix.endsWith("are", 10);
console.log(includesSix); //true
//string serch end
//template literals stert
let template = "Bangladesh";
let templateOne = `i love ${template}`;
console.log(templateOne);
let templateThree = 100;
let templateFour = 0.22223;
let templateFive = `this price is ${
  templateThree * (1 + templateFour).toFixed(5)
}`;
console.log(templateFive);
// toFixed stert
let tofixed = 3 * 2.3333;
let tofixedOne = tofixed.toFixed();
console.log(tofixedOne);
let tofixedThree = tofixed.toFixed(5);
console.log(tofixedThree);
// toFixed end

//template literals end
//this is not inprtant stert
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6", 0, "ddd"];
let html = `<h2>${header}</h2><ul>`;
let test;

for (let x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;
//this is not inprtant end
// number value stert
let number = 13e6;
console.log(number);
let numberOne = 12101e-5;
console.log(numberOne); //0.12111
let infinityOne = 2;
do {
  infinityOne = infinityOne * infinityOne;
  console.log(infinityOne);
} while (infinityOne != Infinity);
let userHexadecimal = 0x100;
console.log(userHexadecimal, "Decimal"); //256
let decimal = 32;
let decimalOne = decimal.toString(36);
console.log(decimalOne);
let decimalTow = +decimal.toString(32);
console.log(decimalTow);
console.log(+decimal.toString(16));
console.log(+decimal.toString(12));
console.log(+decimal.toString(10));
console.log(+decimal.toString(8));
console.log(+decimal.toString(2));

// number value end
// number methord stert
let numberTow = 1111;
console.log(numberTow.toString());
let numberThree = 113.1111;
console.log(numberThree.toExponential(2));
console.log(numberThree.toExponential());
let numberFour = 11;
console.log(numberFour.toExponential()); //1.1e+1
console.log((9.111).toFixed(0));
console.log((9.55).toFixed());
console.log((9.444).toFixed());
console.log((9.53).toFixed()); //10
console.log((9.5444).toFixed(2)); //9.54
console.log((4.555).toFixed(3)); //4.555
console.log((5.222).toFixed(4)); //5.2220
console.log((9.53).toFixed(2)); //9.53
console.log((10.123).toFixed(5)); //10.12300
let numberFive = 1.22;
console.log(numberFive.toPrecision(2)); //1.2
console.log(numberFive.toPrecision(6)); //1.22000
console.log(numberFive.toPrecision()); //1.22
console.log((11.12).toPrecision(2));
let numberSix = new Number(123);
console.log(numberSix.valueOf());
let numberSeven = [123, 123, 455];
console.log(numberSeven[2].valueOf());
let newOneNumber = new Date("1-1-2023");
console.log(Number(newOneNumber));
console.log(Number("-10"));
console.log(parseInt("10.44")); //10
console.log(parseInt("10.99")); //10
console.log(parseInt("100 70 30")); //100
console.log(parseInt("10 jubaer"));
console.log(parseInt("100 jubaer"));
console.log(parseInt(1));
console.log(parseFloat("10.23")); //10.23
console.log(parseFloat("10 jubaer")); //10
console.log(parseFloat("190.123")); //190.123
console.log(Number.EPSILON);
let fastObjectOne = {
  one: 10,
  tow: 100,
  three: 1000,
  four: 10000,
};
console.log(fastObjectOne["three"]);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(100 / 0);
console.log(Number.NEGATIVE_INFINITY);
console.log(-10 / 0);
// number methord end
//array stert
const fastArray = ["hi", "hello", "kkk"];
console.log(fastArray[0]);
console.log(fastArray[1]);
console.log(fastArray[2]);
const fastArrayOne = ["jubaer", 12, 14, 9090];
console.log(fastArrayOne[3]);
console.log(fastArrayOne[0]); //this elements is not change ans: -- jubaer
console.log((fastArrayOne[0] = "(hasan) " + "--this elements change"));
console.log(fastArrayOne[0]);

const fastArrayTow = [];
fastArrayTow[4] = "creat array";
console.log(fastArrayTow[1]);
fastArrayTow[1] = 123;
console.log(fastArrayTow[1]);
console.log(fastArrayTow["4"]);
const fastArrayThree = new Array("hi ", "hello", 123, 124);
console.log(typeof fastArrayThree);
console.log(typeof fastArray);
console.log(fastArrayThree["1"]);
console.log(typeof fastArrayThree["1"]);
console.log(fastArrayThree[3]);
console.log(fastArrayThree.length);
const fastArrayFour = ["fast--1", "secound", "therd", "fourth", "fifth"];
fastArrayFour[5] = 12;
fastArrayFour[6] = 13;
fastArrayFour[7] = 14;
fastArrayFour[8] = "hi array";
fastArrayFour[9] = 15;
fastArrayFour[10] = 16;
fastArrayFour[11] = 17;
fastArrayFour[12] = "last array";
console.log(fastArrayFour[fastArrayFour.length - 1]);
let changeOne = fastArrayFour[fastArrayFour.length - 5];
console.log(changeOne);
let changeTow = fastArrayFour.length;
for (let index = 0; index < changeTow; index++) {
  console.log(fastArrayFour[index]);
}
function arrayFunction(fastValue) {
  console.log(fastValue);
}
fastArrayFour.forEach(arrayFunction);
const fastArrayFive = ["hi", 1];
function arrayFunctionOne(value) {
  console.log(value);
}
fastArrayFive.forEach(arrayFunctionOne);
let tryItOne = () => {
  fastArrayFive.push(`<h1 style=color:red;margin:0px;    class ="one"
    > web </h1>`);
  // console.log( fastArrayFive[ 1 ] );
  document.getElementById("demo").innerHTML = fastArrayFive.join("");
};
fastArrayFive.push("hi");
fastArrayFive.push("hi1");
fastArrayFive.push("hi2");
console.log(fastArrayFive[2]);
console.log(fastArrayFive[3]);
console.log(fastArrayFive[4]);
console.log((fastArrayFive[fastArrayFive.length] = 20));
fastArrayFive[fastArrayFive.length] = "hi lenght--";
console.log(fastArrayFive[5]);
console.log(fastArrayFive.length);
console.log(fastArrayFive[6]);
const fastArraySix = [];
fastArraySix["fastOne"] = "jubaer";
fastArraySix["secound"] = "hasan";
fastArraySix["therd"] = 123;
console.log(fastArraySix["secound"]);
console.log(fastArraySix.fastOne);
console.log(fastArraySix["therd"]);
console.log(fastArraySix.length);
const fastArrayseven = new Array(30);
console.log(fastArrayseven.length);
console.log(fastArrayseven);
fastArrayseven[1] = "hi new";
console.log(fastArrayseven[1]);
const fasrObject = {
  name: "jubaer",
  age: 20,
};
console.log(Array.isArray(fastArrayseven));
console.log(Array.isArray(fastObject));
console.log(fastArrayseven instanceof Array);
console.log(fastArrayseven instanceof Object);
console.log(fasrObject instanceof Array);
console.log(fasrObject instanceof Object);
console.log(fastArrayFour[fastArrayFour.indexOf("fifth")]);
//array end
// array methods stert
let methodsArray = ["one", 2, "three", 4, "five", 6];
console.log(methodsArray.toString());
console.log(methodsArray.join(" "));
console.log(methodsArray.pop());
console.log(methodsArray.pop());
console.log(methodsArray.length);
console.log(methodsArray.shift());
console.log(methodsArray);
methodsArray.unshift("one push");
console.log(
  methodsArray.toString() +
    `
  `,
  methodsArray.join(" ")
);
delete methodsArray[0];
console.log(methodsArray); //true
console.log(delete methodsArray[0]); //true
console.log(methodsArray[0]);
const methodsArrayOne = ["one", "one", "one", "one", "one", "one"];
methodsArrayOne.splice(3, 0, 4, 5, 6, "eight", "nine");
console.log(methodsArrayOne.toString());
methodsArrayOne.splice(
  1,
  10,
  "tow",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eightr",
  "nine",
  "ten"
);
console.log(methodsArrayOne.toString());
const methodsArrayTow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(methodsArrayOne.concat(methodsArrayTow, methodsArrayTow));
const methodsArrayThree = methodsArrayTow.concat(methodsArrayOne);
console.log(methodsArrayThree.join(" "));
console.log(methodsArrayThree.concat("extra add", "add"));
const methodsArrayFour = methodsArrayThree.slice(0, 10);
console.log(methodsArrayFour);
console.log(methodsArrayFour.toString());
console.log(methodsArrayTow[methodsArrayTow.indexOf(5)]);
const methodsArrayfive = [
  "one",
  "tow",
  "three",
  "four",
  "five",
  "six",
  "seven",
];
console.log(methodsArrayfive.sort());
console.log(methodsArrayfive.reverse());
const methodsArraySix = [40, 28, 1, 66, 45, 21, 76, 99, 55, 23];
const constFast = (valueOne, valueTow) => {
  return valueOne - valueTow;
};
console.log(methodsArraySix);
let methodsArraySixDubol = methodsArraySix.sort(constFast);
console.log(methodsArraySixDubol);
const exampol = [9, 10, 5, 3, 1, 7, 8, 6, 2, 4];
exampol.sort(function testFunction(valueOne, valueTow) {
  return valueOne - valueTow;
});
console.log(exampol);
const exampolOne = [9, 10, 5, 3, 1, 7, 8, 6, 2, 4];
console.log(
  exampolOne.sort(function (one, tow) {
    return tow - one;
  })
);
const methodsArraySeven = [40, 100, 1, 5, 25, 10];
const exampolTow = (one, tow) => {
  return 0.5 - Math.random();
};
methodsArraySeven.sort(exampolTow);
console.log(methodsArraySeven);
const methodsArrayEight = [100, 90, 80, 70, 60, 50, 40, 30, 10, 1];
const methodsArrayNine = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
methodsArrayEight.sort(function (one, tow) {
  return one - tow;
});
console.log(methodsArrayEight);
console.log(methodsArrayEight[methodsArrayEight.length - 1]); //100
console.log(methodsArrayEight[0]);
methodsArrayNine.sort(function (one, tow) {
  return tow - one;
});
console.log(methodsArrayNine[methodsArrayNine.length - 1]); //1
console.log(methodsArrayNine[0]); //100
console.log(methodsArrayNine.join(" ")); //100 90 80 70 60 50 40 30 20 10 1
const methodsArrayTen = [
  100, 1000, 3333, 55555, 66666666, 444444, 666, 300449, 43400, 45599998573,
  134565434584, 777777,
];
console.log(Math.max.apply(null, methodsArrayTen));
console.log(methodsArrayTen);
function hightFunction(one) {
  return Math.max.apply(null, one);
}
console.log(hightFunction(methodsArrayTen));
console.log(hightFunctionOne(methodsArrayTen));
function hightFunctionOne(one) {
  return Math.min.apply(null, one);
}

// array methods end
//array sort stert
const arraySort = [
  {
    fastName: "😀😀",
    lastName: "hasan",
    borthDay: 2004,
  },
  {
    fastName: "😀😀",
    lastName: "hasan",
    borthDay: 2000,
  },
  {
    fastName: "hi Frind",
    lastName: "😀😀",
    borthDay: 2003,
  },
  {
    fastName: "jubaer hasan",
    lastName: "😀😀",
    borthDay: 1999,
  },
  {
    fastName: "hi bugpur",
    lastName: "😀😀",
    borthDay: 1998,
  },
  {
    fastName: "hi javascript",
    lastName: "😀😀",
    borthDay: 1890,
  },
];
console.log(arraySort[0].fastName);
console.log(arraySort[1].fastName);
console.log(arraySort[2].lastName);
console.log(arraySort[3].lastName);
console.log(arraySort[4].lastName);
console.log(arraySort[5].lastName);
arraySort.sort(function arraySortOne(one, tow) {
  return one["borthDay"] - tow["borthDay"];
});
console.log(
  `${arraySort[0].fastName} ${arraySort[0].lastName} ${arraySort[0].borthDay}`
);
console.log(
  `${arraySort[1].fastName} ${arraySort[1].lastName} ${arraySort[1].borthDay}`
);
console.log(
  `${arraySort[2].fastName} ${arraySort[2].lastName} ${arraySort[2].borthDay}`
);
console.log(
  `${arraySort[3].fastName} ${arraySort[3].lastName} ${arraySort[3].borthDay}`
);
console.log(
  `${arraySort[4].fastName} ${arraySort[4].lastName} ${arraySort[4].borthDay}`
);
console.log(
  `${arraySort[5].fastName} ${arraySort[5].lastName} ${arraySort[5].borthDay}`
);
//array sort end
// array method stert
const forEachOne = [100, 2, 4, 5, 777, 666, 4444, 333];
const testArray = (one, tow, three) => {
  console.log(tow);
  console.log(one);
  console.log(Math.max.apply(null, three));
  console.log("------");
};
forEachOne.forEach(testArray);

// array method end
// array iteration stert
const iteration = [1, 2, 5, 12, 2, 4, 5, 44, 33, 22, 11, 23, 34];
const iterationOne = (value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array.join(" "));
  console.log("-------");
};
iteration.forEach(iterationOne);
function iterationTow(value) {
  console.log(value * 2);
}
iteration.map(iterationTow);
const iterationThree = (valueOne) => {
  return valueOne > 20;
};
let iterationFour = iteration.filter(iterationThree);
console.log(iterationFour);
console.log(iteration);
const iterationFive = (total, value, index, array) => {
  console.log(total);
  console.log("---");
  console.log(index);
  console.log(array);
  return total + value;
};
console.log(iteration.reduce(iterationFive, 2));
const iterationSix = (total, value, index, array) => {
  console.log("------");
  console.log(total);
  console.log(index);
  return total + value;
};
iteration.reduceRight(iterationSix, 3);
const iterationSeven = (one, tow, three) => {
  return one > 10;
};
console.log(iteration.every(iterationSeven));
console.log(iteration.some(iterationSeven));
console.log(iteration);
console.log(iteration.indexOf(2, 2) + 1);
console.log(iteration.lastIndexOf(2, 2) + 1);
console.log(iteration.includes(iteration[10]));
function iterationEight(value, index, array) {
  console.log("---s");
  console.log(value);
  console.log(index);
  console.log(array);
  return value > 18;
}
console.log(iteration.find(iterationEight));
console.log(iteration.findIndex(iterationEight)); //7
const iterationNine = Array.from("abcdefgh");
console.log(iterationNine);
const iterationTen = Array.from("1111");
console.log(iterationTen);
// array iteration end
// const uses stert
const newConst = [
  {
    fast: "jubaer",
    last: "hasan",
    age: 18,
  },
  2,
  {
    fastName: "nazer",
    lastName: "bapare",
    age: 20,
  },
  "fast",
  23,
  "last",
  2,
];
console.log(newConst[0].fast);
console.log((newConst[0] = "cheng array"));
// const uses end
// date stert
console.log(new Date());
const newTime = new Date(2023, 11, 31, 12, 40, 30, 1000);
console.log(newTime);
console.log(new Date(1890, 10, 30));
console.log(new Date("october 12 2023"));
console.log(new Date(0));
console.log(new Date(2000000000000));
console.log(new Date(-2000000000000));
console.log(new Date(86400000));
console.log(new Date().toUTCString());
const newTimeOne = new Date();
console.log(newTimeOne.toUTCString());
const newTimeTow = new Date();
const newDateThree = newTimeTow.toDateString();
console.log(newDateThree);
console.log(newTimeTow.toISOString());
console.log(new Date());
let newDateFour = new Date("2015-03-25");
console.log(newDateFour.toISOString());
console.log(new Date("2050-03-12"));
console.log(new Date("2034"));
console.log(new Date("2015-03-25T12:00:00Z"));
console.log(new Date("2015-03-25T12:00:00"));
console.log(new Date());
console.log(new Date("2022-11-23"));
console.log(new Date("2022/11/23"));
console.log(new Date("Mar 11 2020"));
console.log(Date.parse("April 2 2013"));
const newDateFive = Date.parse("April 2 2013");
console.log(newDateFive);
console.log(new Date(newDateFive));
// date end
// date methord stert
console.log(new Date().getFullYear());
console.log(new Date().getUTCFullYear());
console.log(new Date().toUTCString());
console.log(new Date());
console.log(new Date().getMonth() + 1);
console.log(new Date().getTime());
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthNmae = new Date();
console.log(months[monthNmae.getUTCMonth()]);
let newTimeThree = new Date().getTime();
console.log(new Date(newTimeThree));

const newTimeFour = new Date();
console.log(newTimeFour.getDate());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const daysOne = new Date();
console.log(days[daysOne.getDay()]); //week
// date methord end
// set methord stert
const setOne = new Date();
setOne.setFullYear(2020);
console.log(setOne);
const setTow = new Date();
setTow.setFullYear(2050, 10, 12);
console.log(setTow);
const setThree = new Date();
setThree.setMonth(11);
console.log(setThree);
const setFour = new Date();
setFour.setDate(11);
console.log(setFour);
const setFive = new Date();
setFive.setHours(20);
console.log(setFive);
const setSix = new Date();
setSix.setMinutes(40);
console.log(setSix);
const setSeven = new Date();
setSeven.setSeconds(59);
console.log(setSeven);
const setEight = new Date();
const setNine = new Date();
setNine.setFullYear(2050, 11, 23);
if (setEight > setNine) {
  console.log("right");
} else {
  console.log("wrong");
}

// set methord end
// math stert
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log(Math.E);
console.log(Math.round(10.6));
console.log(Math.round(-10.6));
console.log(Math.round(10.5));
console.log(Math.round(10.1));
console.log(Math.ceil(1.1));
console.log(Math.ceil(10.6));
console.log(Math.ceil(-10.9));
console.log(Math.ceil(1.1));
console.log(Math.floor(10.6));
console.log(Math.floor(12.4));
console.log(Math.floor(-12.2));
console.log(Math.trunc(12.6));
console.log(Math.trunc(-12.6));
console.log(Math.trunc(12.2));
console.log(Math.sign(10.6));
console.log(Math.sign(0));
console.log(Math.sign(-100));
console.log(Math.pow(4, 10));
console.log(4 ** 10);
console.log(Math.sqrt(20));
console.log(Math.abs(-10));
console.log(Math.sin((90 * Math.PI) / 180));
console.log(Math.cos((0 * Math.PI) / 180)); //0
console.log(Math.max(12, 211, 12, 1, 12)); //211
console.log(Math.min(10, 1000, 100, 200, 40)); //10
console.log(Math.random());
console.log(Math.E);
console.log(Math.log(100));
console.log(2.718281828459045 ** 4.605170185988092);
console.log(Math.log2(100));
console.log(2 ** 6.643856189774724);
console.log(Math.log10(1000));
console.log(10 ** 3);
let mathOne = Math.floor(Math.random() * 10);
console.log(mathOne);
console.log(Math.ceil(Math.random()));
console.log(Math.round(1.99));
console.log(Math.floor(Math.random() * 100) + 1);
// math end
// problem solution stert
function luduFunction(minOne, maxOne) {
  console.log(Math.floor(Math.random() * (maxOne - minOne + 1)) + minOne);
}
luduFunction(1, 6);
const luduFunctionOne = function (min, max) {
  console.log(Math.floor(Math.random() * max + min + 1));
};
luduFunctionOne(1, 6);
const friend = [
  "jubaer",
  "akbor",
  "forhad",
  "habib",
  "nazir",
  "jorina",
  "chcina",
];
friend.sort();
console.log(friend.join(" "));
const rull_number = [100, 23, 45, 1, 22, 23, 89, 99, 2];
const rull_numberOne = rull_number.sort(function rullNumberTow(
  valueOne,
  valueTow
) {
  return valueOne - valueTow;
});
console.log(rull_numberOne);
const rull_numberReverse = rull_number.sort(function rullNumberTow(
  valueOne,
  valueTow
) {
  return valueTow - valueOne;
});
console.log(rull_numberReverse);
console.log(2000 % 100);
function lepYear(years) {
  if (years % 400 === 0 || (years % 4 === 0 && years % 100 !== 0)) {
    console.log(`${years} is leep year`);
  } else {
    console.log(`${years} is not leep year`);
  }
}
// lepYear( +prompt( "year name" ) );
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function vowelsOne(sentence) {
  let vowelsCountr = 0;
  const sentenceOne = Array.from(sentence);
  sentenceOne.forEach(function (value) {
    if (vowels.includes(value)) {
      vowelsCountr++;
    }
  });
  return vowelsCountr;
}
console.log(
  vowelsOne("hi I am a jubaer hasan, My country name is Bangladesh.")
);
const numberNew = [1, 0, 1, 12, 12, 123, 123, 123, 12, 1, 2, 3, 4];
const numberNewOne = numberNew.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});
console.log(numberNewOne);
const numberNewTow = numberNew.filter(function (value, index, arrayOne) {
  return arrayOne.indexOf(value) === index;
});
console.log(numberNewTow);
console.log(typeof Boolean());
console.log(new Boolean());
// problem solution end
// Ternary operator stert
let age = 17;
let ternary =
  age >= 18
    ? age < 30
      ? "you are a adeult."
      : "you are a old"
    : "you are a cheldren.";
console.log(ternary);
console.log(age);
let ageOne = 40;
let ageTow =
  ageOne <= 18
    ? console.log("you are a cheldren.")
    : ageOne <= 30
    ? console.log("you are a adeult.")
    : console.log("you are a old");
// Ternary operator end
// switch stert
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "looking forward to the weekend";
    break;
}
console.log(day);
// switch end
// for in stert
const testFor = {
  fast: "jubaer",
  last: "hasan",
  age: 20,
};
for (const key in testFor) {
  console.log(testFor[key]);
}
const testForOne = ["jubaerHi", "hasan Hello", 14];
for (let one in testForOne) {
  console.log(testForOne[one]);
}

// for in end
// for of stert
let OfOne = "jubaerHasan";
for (let one of OfOne) {
  console.log(one);
}
const OfTow = [111, 2, 3, 4, 5, 6];
for (let one of OfTow) {
  console.log(one);
}
// for of end
// test quiz stert
/* var quizOne = 2020;
if (true) {
  console.log(quizOne);
  let quizOne = 2020;//referenceError
} */
// test quiz end
// set stert
const oneSet = new Set(["j", "h", "j", 23, "ali", "h"]);
console.log(oneSet);
oneSet.add(20); //add method
oneSet.add("jubaer"); //add method
console.log(oneSet);
oneSet.forEach(function (value) {
  console.log(value);
}); //set forEach method
for (let one of oneSet.values()) {
  console.log(one);
} //vlaues() uses
console.log(oneSet.values()); //values method
console.log(oneSet.size); //set property
// set end
// map stert
const mapOne = new Map([
  ["test", 1000],
  ["testOne", 2000],
  [121, "jubaer"],
  [120, 3000],
]); //creat a new map
mapOne.set("testThree", 4000); //set() method
console.log(mapOne);
console.log(mapOne.get(120)); // get method
console.log(mapOne.size); //this property of map
mapOne.delete("test"); //delete method
console.log(mapOne);
console.log(mapOne.has("test")); //has() mathod // ans: false
function mapFunction(value, key) {
  console.log(key + " = " + value);
} // map forEach iteration
mapOne.forEach(mapFunction); // map forEach iteration
for (const iterator of mapOne.entries()) {
  console.log(iterator);
} // uses method entries()
// map end
// typeof stert
console.log(typeof null);
console.log(typeof function () {}); //function
// typeof end
// constructor property stert
function constructorOne(array) {
  console.log(array.constructor === Array);
}
constructorOne([1, 3, 56, 2]);
function constructorTow(object) {
  return object.constructor.toString().includes(Object) > 0;
}
console.log(
  constructorTow({
    One: 10,
    tow: 10,
    three: 20,
  })
); //true
// constructor property end
// constructor value fuction stert
console.log("jubaer".constructor);
console.log([1, 3, 5].constructor);
console.log(false.constructor);
console.log(true.constructor);
console.log(
  {
    one: 1,
    tow: 1,
    three: 1,
  }.constructor
);
console.log(new Date().constructor);
console.log(function () {}.constructor);
console.log((123).constructor);
// constructor value function end
// automatic type conversion stert
console.log(5 + null); // 5
console.log("5" + 2); // 52
console.log("5" - 2); // 3
console.log("5" * 3); // 15
console.log([1, 2]); // [1,2]
console.log({
  testOne: 1,
  testTow: "jubaer",
}); // {testOne: 1, testTow: 'jubaer'}
console.log(new Date()); // Tue Nov 14 2023 18:30:52 GMT+0600 (Bangladesh Standard Time)
// automatic type conversion end
// bitwise operator stert
console.log(5 & 1); //1
// explain and (&) bitwise operator Stert
console.log((5).toString(2) & (1).toString(2));
// explain and (&) bitwise operator end
console.log(5 | 1); // 5
// explain or (|) bitwise operator stert
console.log((10).toString(2) | (12).toString(2)); // 2046
// explain or (|) bitwise operator end
console.log(~-51); // 50
console.log(~5); // -6
console.log(5 << 1); // 10
// explain zero fill left shift (<<) bitwise operator stert
console.log((11).toString(2) << (1).toString(2)); // 1035264
// explain zero fill left shift (<<) bitwise operator end
console.log(11 >> 1); // 5
// explain signed right shift (>>) bitwise operator stert
console.log((12).toString(2) >> (1).toString(2)); // 550
// explain signed right shift (>>) bitwise operator end
console.log(12 >>> 1); // 6
// expalin zero fill right shift (>>>) bitwise operator stert
console.log((15).toString(2) >>> (1).toString(2)); // 555
// expalin zero fill right shift (>>>) bitwise operator end
console.log(10 ^ 1); // 11
// binary to decimal stert
function decimalOneOne(dec) {
  return parseInt(dec, 2).toString(10);
}
console.log(+decimalOneOne(10110)); // 22
// binary to decimal end
// decimal to binary stert
function binary(bin) {
  return (bin >>> 0).toString(2);
}
console.log(+binary(22)); // 10110
// decimal to binary end
// simpol method binary to decamal stert
console.log(+(0b01011).toString(10)); // 11
// simpol method binary to decamal end
// simpol method decimal to binary stert
console.log(+(11).toString(2)); // 1011
// simpol method decimal to binary end
// bitwise operator end
// regular expression stert
let regular = "hi How are you";
console.log(regular.search(/how/i)); // 3
console.log(regular.search("How")); // 3
// using string search() with a regular expression stert
let regularOne = "i Am fine And you";
let regularTow = regularOne.search(/a/i);
console.log(regularTow);
// using string search() with a regular expression end
// Use String replace() With a Regular Expression stert
let regularThree = "you are so Happey";
console.log(regularThree.replace(/happey/i, "fine."));
// Use String replace() With a Regular Expression end
// perform a global match stert
let regularFour = "how are i how are i how are i";
console.log(regularFour.replace(/i/gi, "you."));
let regularFive = `how are i how are i
how are i
how are i
`;
console.log(regularFive.replace(/i/gi, "you"));
// perform a global match end
// regular expression stert
console.log(regularFive.match(/[ab]/gi)); // (4) ['a', 'a', 'a', 'a']
let regularSix = 1234556;
let result = String(regularSix).match(/[2-4]/g);
console.log(result); // (3) ['2', '3', '4']
let regularEight = "re, green, red, green, gren, gr, blue, yellow";
console.log(regularEight.match(/red|Green/gi));
// regular expression end
// metacharacter stert
let metacharacter = "i am 10 years old.";
console.log(metacharacter.match(/\d/g)); // (2) ['1', '0']
console.log(metacharacter.match(/\s/g)); // (4) [' ', ' ', ' ', ' ']
console.log(metacharacter.match(/\b Years/gi)); // ['years']
console.log(metacharacter.search(/\bY/gi)); // 8
console.log(metacharacter.match(/years\b/gi)); // ['years']
// metacharacter end
// quantifier stert
let quantifier = "Hellooo World! Hello W3Schools!";
console.log(quantifier.match(/O+/gi)); // (4) ['ooo', 'o', 'o', 'oo']
console.log(quantifier.match(/lo*/gi)); // (6) ['l', 'looo', 'l', 'l', 'lo', 'l']
// quantifier end
// RegExp object Stert
console.log(/\d/gi.test("i am 10 years old")); //true
console.log(/Ye * /gi.test("i am 10 years old.")); // false
console.log(/\s/g.exec("how are you")); // [' ', index: 3, input: 'how are you', groups: undefined]
// RegExp object end
// regular expression end
