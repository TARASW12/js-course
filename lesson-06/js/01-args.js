/**
 * Псевдомасив arguments и Array.from
 */
// function foo(a,b,c, d, e,){
//     console.log(arguments.includes(1))

// }
// foo(1,2,3)

// function hasArgument(){
// // const arr = Array.from(arguments)
// // const res =  arr.includes(10)
// console.log(arguments[3])
// }

// hasArgument(1,2,3,4)

// function declaration

// add()

// function add(){
//     console.log(1)
// }

// add()

// function expression

// add()

// const add = function(){
//     console.log(1)
// }

// add()

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

// function add(){
// const arr = Array.from(arguments)
// let sum = 0

// for(const number of arr){
//   sum+=number
// }
// return sum
// }

// console.log(add(4))




/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
// function calAverage(){
// let sum =0
// for(let i=0; i<arguments.length; i++){
//     sum+= arguments[i]
// }
// return sum / arguments.length
// }
// console.log(calAverage(5,5,2))


function foo(){
    console.log(arguments)
    // Array.from(arguments)
    // console.log(Array.isArray([1,2,3]))
}

foo(1,2,23,true, 'fefwefwer')