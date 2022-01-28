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

document.write(`Всего: ${75 * souvenirs + 112 * trinkets} грамм`);