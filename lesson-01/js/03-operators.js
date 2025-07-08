/**
 * Арифметичні операції
 * - Оператори +, -, *, /, %, **
 * - Комбіновані оператори
 */

const a = 10;
const b = 5;

const divide = 10 % 7;
console.log(divide);
/**
 * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

const apples = 45;
const grapes = 135;

const sum = apples + grapes;

const difference = grapes - apples;
console.log(sum, difference);

const age = prompt('How old you are?');
console.log(age);

/**
 * Заміни вираз перевизначення комбінованим оператором
 */

let studentsFullAmountInTheGroup = 96;
studentsFullAmountInTheGroup /= 3;
studentsFullAmountInTheGroup -= 2;
// studentsFullAmountInTheGroup = studentsFullAmountInTheGroup + 20;
// studentsFullAmountInTheGroup = studentsFullAmountInTheGroup - 5;
//
console.log(studentsFullAmountInTheGroup);

/**
 * Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */

const result = 1 + 2 - 2 * 3;
console.log(result);
