//1.Write a program that declares a variable price as a number, product as a string, and isAvailable as a boolean. Print their data types to the console.
let price=500;
let product="watch";
let isAvailable=true;

console.log(typeof price ,typeof product ,typeof isAvailable);

//2.Write a program that declares an array of numbers and a constant object representing a car with properties make, model, and year. Modify one of the properties of the object and print the updated object to the console.
//Arrays are enclosed in square brackets
//objects are enclosed in curly brackets

let cars=[
    {
        make:'Rolls Royce ',
        model:'Spectre',
        year:'2024'
    },
    {
        make:'Honda',
        model:'CX5',
        year:'2023'
    },
    {
        make:'Mercedes',
        model:'E250',
        year:'2016'
    }
];

//This property changes updates object 2 into a new object
cars[2]={
    make:'Nissan',
    model:'Note',
    year:'2011'
}
console.log(cars);
console.log(cars[2]);

//3.Write a program that compares two variables a and b using both == and ===. Print the result of each comparison to the console and explain the difference.
//== LOOSELY EQUALITY
//===STRICTLY EQUALITY
let a=5;
let b='5';

console.log(a==b); //true
console.log(a===b); //false because variable a is a number and variable b is a string

//the difference between loosely and strictly equality is that loosley equality only comapares the values of the variables but strictly equality compares both value and data type of the variable


//4.Write a program that checks if a string str1 is lexicographically smaller than another string str2. Print the result to the console.

let str1='James';
let str2='Ashley';

console.log(str1>str2); //true because strings that have letters that come later in alphabetical order are greater than previous letters


//5.Write a program that takes a variable age and prints "Child" if the age is less than 13, "Teenager" if the age is between 13 and 19, and "Adult" if the age is 20 or older.
let age=2;
if(age<=13){
    console.log('child')
} else if(age>13 && age<=19){
    console.log('Teenager')
}else if(age>20){
    console.log('adult') }

// 6.Write a program that takes a variable score and prints a grade based on the following criteria:
//> A for scores 90 and above
//> B for scores between 80 and 89
//> C for scores between 70 and 79
//> D for scores between 60 and 69
//> F for scores below 60

let score=100

if (score>=90){
    console.log('A');
}else if(score>=80 && score<=89){
    console.log('B');
} else if(score>=70 && score<=79){
    console.log('C');
}else if(score>=60 && score<=69){
    console.log('D');
}else if(score<60){
    console.log('F');
}

//7.Write a program that checks if a given number num is both positive and even. Print "The number is positive and even" if both conditions are true, otherwise print "The number does not meet both conditions".
let num=5;
if(num>0 && num%2===0){
    console.log('The number is positive and even')
}else{
    console.log("The number does not meet both conditions")
}

//8.Write a program that checks if a user is either an admin or has a valid subscription. If either condition is true, print "Access granted", otherwise print "Access denied".
let user ='Admin';
let subscription='valid';

if (user=='Admin' || subscription=='valid'){
    console.log('Access granted')
}else{
    console.log('Access Denied')
}


//9.Write a program that uses a for loop to print all the numbers from 1 to 20, but skips multiples of 3.

for(let i=1;i<=20;i++){
    if(i%3!=0){
        console.log(i)
    }else{
        console.log('skip')
    }
}//10.Write a program that uses a switch statement to print the day of the week based on a variable dayNumber (0 for Sunday, 1 for Monday, etc.).

function whenIsToday(dayNumber){
    let dayName;
    switch(dayNumber){
        case 0:
            dayName='Sunday';
            break;
        case 1:
            dayName='Monday';
            break;
        case 2:
            dayName='Tuesday';
            break;
        case 3:
            dayName='Wednesday';
            break;
        case 4:
            dayName='Thursday';
            break;
        case 5:
            dayName='Friday';
            break;
        case 6:
            dayName='Satuday';
            break;
        default:
            dayName='Invalid Day'
    }
    console.log(dayName);

}

whenIsToday(5);


//11.Write a program that uses a while loop to calculate and print the sum of all integers from 1 to n, where n is a variable.
function calc(n){
    let i=1
    let total=0;
    while(i<=n){
        total +=i
        console.log(total);
        i++;

    }
}

calc(10);








