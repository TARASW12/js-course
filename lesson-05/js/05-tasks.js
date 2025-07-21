/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 2, 8, 6, 13,  15, 27,];
// let total = 0;
// // console.log(!(2%2))
// for(const number of numbers ){
//    if(number %2 ===0){
//     total+=number
//    }
// }
// console.log(total)

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

// const arrayNames = names.split(',')
// const arrayPhones = phones.split(',')

// for(let i=0; i<arrayNames.length; i++){
//     console.log(`${arrayNames[i]}: ${arrayPhones[i]}`)
// }

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = "   Welcome    to  the javascript future ";

const arr = string.trim().split(' ')
const result = arr.slice(1, -1).join(' ').trim()
console.log(result)

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */




// for(let i=3; i<values.length; i++){
//  if(i===0){
// min =values[i]
//  }else if(values[2] < min){
// min = values[i]
//  }
// }

const values = [22, 100, 94, 111, 223, 1];
let min;
// console.log(22 > undefined)
for(const number of values){
    min = number > min ? min : number
}

console.log(min); 
