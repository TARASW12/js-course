/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

// let link = "https://my-site.com/about";

// if(!link.endsWith('/')){
//   link +='/'
// }else


// console.log(link);

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

let url = "https://somemy-sitesite.com/about/";

// console.log(url.includes('my-site'))
// if(!url.endsWith('/') && url.includes('my-site')){
//   url +='/'
// }
// console.log(url);

/*
 * Пошук у рядку методом includes()
 */

const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = "#fatlivesmatter advertising campaign";

// console.log(string1.includes(blacklistedWord1))
// console.log(string1.includes(blacklistedWord2))

// console.log(string2.includes(blacklistedWord1))
// const str = string2.toLowerCase()
// console.log(str.includes(blacklistedWord2))

// console.log(string3.includes(blacklistedWord1))
// console.log(string3.includes(blacklistedWord2))
