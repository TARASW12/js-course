/**
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

const firstName = 'Chelsy';
const lastName = 'Emerald';
const space = ' ';

const fullName = firstName + space + lastName + space + lastName;

console.log(fullName);

const quantity = 'wefwegwew';
const orderMsg = `You ordered ${quantity} bots`;
console.log(orderMsg);

const message =
  'This fwegl[ pweg[k wegk pewogk pwegkp wepogkwegpo kwepkfwepok gpwoekf pwefgkpwoe kfwe';
console.log(message[0]);
console.log(message[message.length - 1]);

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = 'GoiT Company';
const repairBots = 150;
const defenceBots = 50;
const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
