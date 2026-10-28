//регистро зависимость 
//promt  всегда строку отдает

let userName = Number(prompt("Укажите свой возраст: "))
let userSex = Number(promt("Укажите свой пол: (1 - жен; 2 - муж)"))
//userAge = Number(userAge)

if (useSex === 1 && userAge >=18){   //boolean а не number
     console.log("Face control пройден")
} else if (userSex === 2 && userAge >= 21){
     console.log("Face control пройден")
} else {
    console.warm("Вы не проходите у нас действуют правила ")
}




//DRY - don't repeat yourself



//Refactoring - переписывание кода для комфорта читания и понимания
// иногда для уменьшения колва строк при этом функции не меняются
//Оптимизация - улучшения работы программы



//if (userAge >=18){
     //console.log("Face control пройден")
//} else {
     //console.log("вы не проходите")
//}

// тернарный оператор (унарный бинарный) : 


// условие ? значение_1 : значение_2

//swith case не проверяет на тру фолс

let bankCard = promt("Введите номер банковской карты") ?? "";
// ?? - апператор нулегого слияния
let paymentSystemMarket = bankCard[0];
if(bankCard ===4){
    console.log("У вас VISA");
} 



// === проверяет на типы данных а == просто на равность
