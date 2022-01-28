//№1 
const greet = "Hello World!";

document.write(greet + "<br>");

//№2
let message = "first";
document.write(message + "<br>"); 

message = "second";
document.write(message + "<br>");

//3
let userName = "Nurayym";
let userEmail = "nurayym.jeenbekova.kk@gmail.com";

let info = `Name: ${userName} <br>
Email: ${userEmail}`;

document.write(info + "<br>");

//4
let souvenirs = +prompt(`Сколько сувениров?`);
let trinkets = +prompt(`Сколько безделушек`);

document.write(`Всего: ${75 * souvenirs + 112 * trinkets} грамм <br>`);

//5
let a = +prompt(`Введите значение а`);
let b = +prompt(`Введите значение b`);

const plus = a + b;
const minus = a - b;
const multiplication = a * b;
const division = a / b;
const remainder = a % b;
const exponentiation = Math.pow(a, b);

document.write(`Сумма: ${plus}4 <br>`);
document.write(`Разность: ${minus} <br>`);
document.write(`Произведение: ${multiplication}  <br>`);
document.write(`Деление: ${division} <br>`);
document.write(`Остаток: ${remainder} <br>`);
document.write(`Степень: ${exponentiation} <br>`);