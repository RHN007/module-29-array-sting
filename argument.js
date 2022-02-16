
//Mostly we dont use below Arguments 
function addNumbers(num1, num2){
    // console.log(arguments[1]); 
    let result = 0 ; 
    for (const num of arguments){
        result = result+ num; 
    }
    // const result = num1 + num2 
    return result
}

const sum = addNumbers (23, 13, 100, 200, 500)
console.log(sum); 

//

function getFullName (firstName, lastName){
    // const fullName = firstName + " " + lastName ;
    let fullName = ' '; 
    for (const part of arguments){
        fullName = fullName + part + ' '; 
    } 
    return fullName; 
}
const name = getFullName ('omuk', 'Songket', 'bin','hanif', 'sonket', "bin", "tumuk" , "shonket"); 
console.log(name)

