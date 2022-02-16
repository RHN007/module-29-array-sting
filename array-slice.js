const numbers = [3, 5, 6, 9, 19, 15, 21, 45, 87];
const numberSliced = numbers.slice(4, 8);

// console.log(numberSliced);

//splice to remove an item from an array

// const nubmberSpliced = numbers.splice(4, 2);
// console.log(nubmberSpliced);
//Splice to remove and add few numbers
const numberSliced2 = numbers.splice(4, 3, 99, 111, 888, 777);
console.log(numberSliced2);
console.log(numbers);