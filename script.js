const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


//1
console.log(gotCitiesCSV.split(','));

//2
console.log(bestThing.split(' '));

//3
console.log(gotCitiesCSV.split(',').join(';'));

//4
console.log(lotrCitiesArray.join(', '));

//5
console.log(lotrCitiesArray.slice(0, 4));

//6
console.log(lotrCitiesArray.slice(lotrCitiesArray.length - 5, lotrCitiesArray.length));

//7
console.log(lotrCitiesArray.slice(2, 5));

//8
for (let i = 0; i < lotrCitiesArray.length; i++) {
  if (lotrCitiesArray[i] === 'Rohan') {
    lotrCitiesArray.splice(i, 1);
  }
}

console.log(JSON.stringify(lotrCitiesArray));

//9
// for (let i = 0; i < lotrCitiesArray.length; i++) {
//   if (lotrCitiesArray[i - 1] === 'Dead Marshes') {
//     lotrCitiesArray.splice(i, lotrCitiesArray.length);
//   }
// }
// console.log(lotrCitiesArray);

lotrCitiesArray.splice(lotrCitiesArray.indexOf("Dead Marshes") + 1, lotrCitiesArray.length);

console.log(JSON.stringify(lotrCitiesArray));

//10
lotrCitiesArray.splice(lotrCitiesArray.indexOf("Gondor") + 1, 0, "Rohan");
console.log('10:', JSON.stringify(lotrCitiesArray));

//11
lotrCitiesArray.splice(lotrCitiesArray.indexOf("Dead Marshes"), 1, "Deadest Marshes");
console.log('11:', JSON.stringify(lotrCitiesArray));

//12
console.log('12:', bestThing.slice(0, 14))

//13
console.log('13:', bestThing.slice(-13))

//14
console.log('14:', bestThing.slice(23, 38))

//15
console.log('15:', bestThing.substring(-13, 14))

//16
console.log('16:', bestThing.substr(23, 15))

//17
console.log('17:', bestThing.indexOf('only'))

//18
let list18 = bestThing.split(' ');
let lastWordList18 = list18[list18.length -1];
console.log('18:', bestThing.indexOf(lastWordList18));

//19
let list19 = gotCitiesCSV.split(',');
let doubleVowels = ['aa', 'ee', 'ii', 'oo', 'uu'];
let hasDubVowels = []

for (let i = 0; i < list19.length; i++) {
  for (let j = 0; j < doubleVowels.length; j++) {
    if (list19[i].includes(doubleVowels[j])) {
      hasDubVowels.push(list19[i]);
    } 
  }
}
console.log('19:', JSON.stringify(hasDubVowels));

//20

let finalList = [];
for (let i = 0; i < lotrCitiesArray.length; i++) {
  lastLttrsInArr = lotrCitiesArray[i].substr(lotrCitiesArray[i].length -2);
  if (lastLttrsInArr === 'or') {
    finalList.push(lotrCitiesArray[i])
  }
}
console.log(JSON.stringify(finalList));

//21
let bestWords = bestThing.split(' ');
let finalList21 = [];

for (let i in bestWords) {
  let word = bestWords[i];
  if (word[0].toLowerCase() === 'b') {
    finalList21.push(word);
  }
}
console.log("21", JSON.stringify(finalList21));

// 22
if (lotrCitiesArray.includes("Mirkwood")  == true) {
  console.log("Yes");
} else {
  console.log("No");
}
// 23

if (lotrCitiesArray.includes("Hollywood")  == true) {
  console.log("Yes");
} else {
  console.log("No");
}

// 24

console.log( "24:", lotrCitiesArray.indexOf("Mirkwood"));

// 25

for (let i = 0; i < lotrCitiesArray.length; i++) {
  if (lotrCitiesArray[i].includes(" ")){
    console.log(lotrCitiesArray[i]);
  }
}

// 26

console.log("26:", JSON.stringify(lotrCitiesArray.reverse()));

// 27

console.log("27:", JSON.stringify(lotrCitiesArray.sort()));

// 28

console.log("28:", JSON.stringify(lotrCitiesArray.sort(function(a, b){
  return a.length - b.length
})));

// 29

console.log("29:", lotrCitiesArray.pop());

// 30

lotrCitiesArray.push("Rohan")
console.log("30:", JSON.stringify(lotrCitiesArray));

// 31

console.log("40:", JSON.stringify(lotrCitiesArray.shift()));

// 32

lotrCitiesArray.unshift("Beleriand");
console.log(JSON.stringify(lotrCitiesArray));