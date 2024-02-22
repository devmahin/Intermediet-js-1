// // const money = 50;
// // money = 50;   


// // let money2 = 50;
// // money2 = 100;   
// // console.log(money2)

// // const array = [343,343,4545,454];
// // array = [34, 454,454,4]
// // console.log(array)


// // let array2 = [343,343,4545,454];
// // array2 = [3434343,434]
// // console.log(array2)



// // const obj = {
// //     name : "mahin"
// // }

// // obj = {
// //     FirstName : "MAhin"

// // }
// // console.log(obj)


// // default parameter
// // function defaultParameter(num1, num2=0){

// //     console.log(num1 + num2)

// // }
// // defaultParameter(10)


// function name (first = "", last= ""){
//     console.log(first + " " + last);
// }
// // name()


// // function array(arr=[]){
// //     console.log(arr)
// // }
// // array()

// // function object(obj={}){
// //     console.log(obj)
// // }
// // object()


// let add = function (a,b){
//     return a + b;

// }
// // add(20, 29)
// // console.log(add())


// // let friend = [23,43,54,56,454];
// // let bondhu = [...friend];
// // friend.push(3434)
// // console.log(bondhu)
// // console.log(111111111111111,[...friend],3333333333333333333)



// // destructure


// const obj1 = { foo: 'bar', x: 42 };
// const obj2 = { foo: 'baz', y: 13 };

// const mergedObj = { ...obj1, ...obj2 }; // { foo: 'baz', x: 42, y: 13 }


// const fruits = { name: 'apple', price: 1.00, country: 'USA' };

//   const {name, price, country} = fruits;
//   console.log(name, price,country);


//   // Nested object destructuring
// const {name, address: {city}} = {name: 'John', address: {city: 'New York'}};
// console.log(name); // Output: 'John'
// console.log(city); // Output: 'New York'

// arrow function


// problem 1
const arrow = (a, b, v) => {
  return a * b * v

}
let arrr = arrow(2, 4, 6)
// console.log(arrr)


let templet = 
`I am a web devloper.
i love to code . 
i love to eat birany`
// console.log(templet)




function parameter2 (num1, num2 = 0){
  return num1 + num2;
}
let par = parameter2(20)
// console.log(par)


let fruits = ["Apple", "Banana", "Orange", "Strawberry", "Mango", "Pineapple", "Watermelon", "Grape", "Kiwi", "Peach"];
let arrFun = (fru) => {
  let fruitsNew = [];
  for(let f of fru){
    let even = (f.length) % 2 == 0;
    if(even === true){
      fruitsNew.push(f)
    }
  }
  return fruitsNew;
}
let newArray = arrFun(fruits)
// console.log(newArray)



// problem 3

let element = [2,4,6,8]
const element2 = (ele) =>{
  let squ = [];
  for(let i =0; i<ele.length; i++){
    let square = ele[i] * ele[i];
    squ.push(square);
  }

  let sum = 0;
  for(let i = 0; i<squ.length; i++){
    sum += squ[i]
  }
  // console.log(ele.length)
  const average = sum / ele.length;
  return average;
}
let ele2 = element2(element)
// console.log(ele2)


// problem 4

let input1 = [2,3,4,5,6,7];
let input2 = [8,9];
function inputArray (inp1, inp2){
  // let inputs = inp1.concat(inp2)
  let inputs = [...inp1, ...inp2]
  // console.log(inputs)
  let inp = Math.max(...inputs);
  return inp;
}
let max = inputArray(input1, input2)
console.log(max)

// 1. what is ES5? Have you even used anything from ES6?
// 2. Explain the difference between var let and const?
// 3. What is the arrow function, and how to create it ?
// 4. Give an example of an Arrow function in ES6? List down its advantages.
// 5. Discuss spread operator in ES6 with an example.
// 6. What do you understand about default parameters?
// 7. What are template literals ES6?
// 8. Tell us the difference beetween arrow and regular function.
// 9. Tell us the difference between seal and freeze.
// 10. Tell us the difference between for..of and for..in?
