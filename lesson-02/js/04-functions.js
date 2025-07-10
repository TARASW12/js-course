/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */
// function calculateStudent(groupFirst, groupSecond) {
//   const sum = groupFirst + groupSecond;
//   return 123;
// }
//
// const result = calculateStudent(10, false);
// console.log(result);
// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Області видимості
 */

// const student = 'Dima';
//
// function addUser() {
//   const user = 'Anna';
//   console.log(student);
//   function addItem() {
//     const a = 123;
//     console.log(student);
//   }
// }
//
// addUser();
// console.log(student);

// const person1 = 10 * 8 * 20;
// const person2 = 5 * 6 * 25;
// const person3 = 5 * 6 * 25;
// const person4 = 12 * 6 * 25;
// const person5 = 5 * 4 * 25;
// const person6 = 5 * 6 * 25;
//
function calculateSalary(pricePerHour, hour, days) {
  const salary = pricePerHour * hour * days;
  return salary;
}
// console.log(calculateSalary(10, 8, 10));

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// function calcBMI(w, h) {
//   let numHeight = h.replace(',', '.');
//   let numWeight = w.replace(',', '.');
//
//   const weight = Number.parseFloat(numWeight);
//   const height = Number.parseFloat(numHeight);
//
//   const bmi = weight / height ** 2;
//
//   return bmi.toFixed(1);
// }
// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi);

//28.8
