
//Question No: 1 Basic Counter: Write a while loop that prints numbers from 1 to 10.

let i = 1
 while(i <=10 ){
console.log(i);
i++
 }
 // q : solve

 ///////////////////

//Write a while loop that calculates and prints the sum of even numbers from 2 to 20.

let number = 1 
let sum = 0 
while(number <= 10){
console.log( sum += 2);
number++}
while(i <= 10){
console.log(sum);
i++
}

//////////////////////

//Basic Counter: Write a while loop that prints numbers from 1 to 10.
let I = 1
 while(I <= 9){
     console.log(I);
     I++
 }
console.log(i);


/////////////

let countdown = 5

while(countdown >= 0){
    console.log(countdown);
    countdown--;
}

//User Input Validation: Use a while loop to repeatedly prompt the user for a password until they enter the correct one "password123".

let CorrecrtPassword = "pakistan123";

while (true) {
  let userInput = prompt("enter your password");
  if (userInput === CorrecrtPassword) {
   alert("congratulation Password matched");
    break} 
  else alert("Sorry Incorrect Password ");
}

//////////

//Multiplication Table: Create a while loop that takes a number as input and prints its multiplication table from 1 to 10.

let m = 1
let table = 2 

while( m <= 10){
    console.log(`2 * ${[m]} = ${table * m}`);
    m++
}
