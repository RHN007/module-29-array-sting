const numbers = [4, 7, 1, 3, 5, 9, 6];

const sortednumbers = numbers.sort();

// console.log(sortednumbers);

const friends = ["kabli", "joshim", "razzak", "anwar", "deepjol"];

// const sortedFriends = friends.sort();
// console.log(sortedFriends);
// const reverseFriends = friends.reverse();

// console.log(reverseFriends);

//You can do it in one line

const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);

//number sorted fun

const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function(a, b) {
    return a - b;
});
console.log(sortedBigNumbers);