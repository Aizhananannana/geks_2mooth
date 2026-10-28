console.log("Мой второй шаг в фулстек");

// http://127.0.0.1:5501/lesson_1/index.html
// http://localhost:5501/lesson_1/index.html

// V8 - интерпретатор JavaScript

// переменные var let const

let phoneNumber = "+996 552 862 444";     // camel case
let amount = 15000;  //number
let clientFree = amount * 0.01;
let totalAmount = amount - clientFree;
let commet = null  //null  or ""t

let mySurname = "Suleimanova"
let myName = "Aizhana"
let myFatherNamber = "Azamatovna"

let mbankName = myName + "" + mySurname[0] + ".";
console.log(mbankName);

let optimaBankName = myName[0] + "." + mySurname[0] + "."  + myFatherNamber[0] + "." ;
console.log(optimaBankName);

let demirBankName = mySurname.slice(0.3) + "***" +
                    myName.slice(0.3) + "***" +
                    myFatherNamber.slice(0.3) + "***";
console.log(demirBankName);

console.log("-".repeat(20));
console.log("Имя получателя: + myName");
console.log("Номер получателя + phoneNumber");
console.log("Сума пополнения: +")
console.log("Комиссия")
console.log("К зачеслению")
console.log("-".repeat(20));
