//var поднимается навверх

// Типы данных
// 1. Числа
// 2. строки
// 3. null //в конкретных ситуациях
// 4. undefined  //в любых непонятных ситуациях
// 5. boolean
// 6. object
// -------------
// 7. bigint  большие числа
// 8. symbol   библиотеки которые встречаются единожды в коде

// NaN - not a number


var myBank = '1234 1234 1234 1234'
console.log("myBank card: " + myBank)

// mdn - документация по js html css

let mn = "Aizhana"
let ms = 'Suleimanova'
let mo = `Azamatovna`

var mybal = 15_000;
//mybal = null;
let isblock = true;  // 0
let ismain = false;  // 1

// опператоры сравнения: > < <= >= == != === !==
// логические опператоры && ! ||

let amount = prompt("Укажите сумму попполнения");

//console.log("Типы данный переменной amount" + typeof amount);

amount = Number(amount);
if(isblock){
    console.error("КАРТА В БЛОКЕ!")   //красный
}


//if(ismain == false)
if(!ismain){
    console.warm("КАРТА НЕ ЯВЛЯЕТСЯ ОСНОВНОЙ")  //оранжевый
}

if(amount > 0 && amount <= 50_000 && !isblock && !ismain){
    mybal = mybal + amount;
} else {
    console.warm("ПОПОЛНЕНИЕ НЕУСПЕШНО")
}

// concatination - конкатенация
//mybal = mybal + Number(amount);

console.log("mybal: " + mybal)

let carnum = "01 KG 123 ABC"

let checknum = carnum[6];

if (checknum == "1" || checknum == "2"){
    console.log("МОЖНО В: пн сб вс")
} else if(checknum == "3" || checknum == "4");{
console.log("МОЖНО В: пн сб вс")
} else if(checknum == "3" || checknum == "4"); {
console.log("МОЖНО В: пн сб вс")
} else if(checknum == "3" || checknum == "4"); {
console.log("МОЖНО В: пн сб вс")
} else if(checknum == "3" || checknum == "4"); 