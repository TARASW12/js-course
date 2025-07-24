/**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

// const global ='Global'

// function foo(){
//     console.log(global)
// }
// foo()
// console.log(global)

// const local =1
// {
//     const local = 'Local'
// }
// // console.log(local)
// function foo(){
//     console.log(local)
// }
// foo()

// const x = 1

// function test(){
//     const x=2
//     // console.log(x)

//     {
//         const x =3
//         // console.log(x)
//     }
//     // console.log(x)
// }
// test()

// console.log(x)

// let value = 'Global Level'

// function level1(){

// function level2(){
//     let value = 'Level2'

//     function level3() {
//     let value = 'Level3'
//     }
//     level3()
// }
// level2()
// console.log(value)
// }
// level1()