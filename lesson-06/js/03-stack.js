
/**
 * - Стек викликів
 * - Порядок виконання
 */
// console.log('Before fnA')
// function fnA(){
//     console.log('fnA')
// }
// fnA()
// console.log('After fnA')

// console.log('Before fnB')
// function fnB(){
//     console.log('fnB')
// }
// fnB()
// console.log('After fnB')


// function bar (){
//     console.log('bar1')
// }

// function baz (){
//     console.log('baz2')
// }


// function foo(){
//     console.log('foo3')
//     bar()
//     baz()

// }
// console.log(foo())



function c() {
    console.log('c start')
    console.log('c end')
}

function b() {
    console.log('b start')
    c()
    console.log('b end')
}

function a() {
    console.log('a start')
    b()
    console.log('a end')
}

a()