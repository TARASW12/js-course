/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */



// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// const arr = ["Mango", "Poly", "Ajax"]
// const arrFruits = ["🍎", "🍇", "🍑", "🍌", "🍋"]


// function logItems(items) {
//   for(let i=0; i< items.length; i++){
//     console.log(`${i +1} - ${items[i]}`)
//   }
// }

// logItems(arr)
// logItems(arrFruits)

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */



function printInfo(names, phones) {
  // console.log(names)
  //  console.log(phones)
// const namesArr = names.split(',')
// const phonesArr = phones.split(',')

// for(let i=0; i< namesArr.length; i++){
//   console.log(`${namesArr[i]} - ${phonesArr[i]}`)
// }
}
// printInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// printInfo(
//   "Andrew,Tetyana,Dmutro",
//   "+3805445,+388902233,+380900577"
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(min){
// const hours =  Math.floor(min/60) 
// const minutes = min % 60
// const doubleHoures = String(hours).padStart(2,0)
// const doubleMinutes = String(minutes).padStart(2,0)
// console.log(`${doubleHoures}:${doubleMinutes}`)
// }

// formatTime(70); // "01:10"
// formatTime(450); // "07:30"
// formatTime(1441); // "24:01"

'madam' 
'tenet'
'hello'

function isPalindrom(word){
  const reversedWord = word.split('').reverse().join('')
  // console.log(reversedWord)
  return word === reversedWord
 
}
// console.log(isPalindrom('madam'))
// console.log(isPalindrom('hello'))
// console.log([1] ===[1])


function foo(){
}

console.log(foo())