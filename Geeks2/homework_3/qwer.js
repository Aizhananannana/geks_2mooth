//Task 1

let q = prompt("Укажите ваш номер машины: (пример  01KG123AAA)")
let regions = {
    "1" : "Чуйская область",
    "2" : "Иссык-кульска область",
    "3" : "Нарынска область",
    "4" : "Таласская область",
    "5" : "Ошская область",
    "6" : "Джалал-Абадская область",
    "7" : "Баткенская область",
}
let carNumber = q[1]
if(regions[carNumber]){
    console.log(regions[carNumber])
} else {
    console.log("Такого региона нет")
}




//Task 2

let som = prompt("Укажите сумму обмена:")
let v = prompt("Укажите валюту: (USD - доллары; EUR - евро; RUB - рубли)")
let valets = {
    "USD" : 88,
    "EUR" : 98,
    "RUB" : 0.9
}
if (valets[v]){
    let result = Math.round(som/valets[v])
    console.log("Ваша сумма: " + som)
    console.log("Курс " + valets[v] + "сом")
    console.log("Сумма после обмена: " + result + "" + v)
} else {
    console.log("Такой валюты нет в списке возможных")
}




//Task 3 
// от -10 до 0  => Очень холодно
// от 0 до 10 =>  Холодно 
// от 11 до 20 => Прохладно
// от 21 до 25 => Облачно
// от 26 до 32 => Тепло
// выше 33 =>  Жарко.

let w = prompt("Укажите температуру в цифрах: ");
w = Number(w);

if (w < -10) {
    console.log("Морозно");
} else if (w >= -10 && w <= 0) {
    console.log("Очень холодно");
} else if (w > 0 && w <= 10) {
    console.log("Холодно");
} else if (w >= 11 && w <= 20) {
    console.log("Прохладно");
} else if (w >= 21 && w <= 25) {
    console.log("Облачно");
} else if (w >= 26 && w <= 32) {
    console.log("Тепло");
} else {
    console.log("Жарко");
}