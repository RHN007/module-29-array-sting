function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return "please provide an array ";
    }

    let mega = friends[0];

    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ["kutub", "lion", "shamol", "sabbir"];
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);

if (friends.indexOf("Fox") != 1) {
    console.log("Lion Exists");
} else {
    console.log("Fox doesn't exists");
}
//includes
if (friends.includes("lion") == true) {
    console.log("Lion Exits using incluedes");
}

//Concatenation

const first = [1, 3, 5];
const second = [4, 6, 7, 8];
const combined = first.concat(second);
console.log(combined);