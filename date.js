const myFavDate = new Date('1971-12-16'); 
// console.log(myFavDate);

const anaotherDate = new Date(1971,3,26,111,50,40,80)

console.log(anaotherDate)

if(myFavDate.getTime() <anaotherDate.getTime()){
    console.log('favorite is earlier')
}