const anthem = "amar Sonar Bangla AMi tomai Valobshi";
const words = anthem.split(" ");

const withoutA = anthem.split("a");

//console.log(withoutA);

//slice
const smallSlice = anthem.slice(5, 13);

// console.log(smallSlice);

//subtrr

const anotherPart = anthem.substr(11, 7);
console.log(anotherPart);

//substing
const anotherAnotherPart = anthem.substring(11, 15);
console.log(anotherAnotherPart);

//concat
const first = "amather";
const second = "city";
// const fullString = first + second;

const fullString = first.concat(second).concat("abc").concat("RJ Kibriya");

console.log(fullString);

const words2 = ["a", "b", "c"];
// const allJoined = words2.join("");
// const allJoined = words2.join(" ");
// const allJoined = words2.join(",");
const allJoined = words2.join(", ");
console.log(allJoined);