console.log("lesson 4")

// Arrey - массивы
//список = масивы

let points = [10,10,8]
console.log('Count: ', points.length);

points.push(5,6) // push дабавляет числа в массив
points[7] = 9;
//если обращаться к несуществующему массиву выйдет undefinde fuck
// [10,10,8,5,6, ? ? 9]

// + превращает в строку массив
// , не меняет тип данных
console.log('Count: ', points.length);

console.log('За первый урок студент получил: ' + points + 'баллов')
console.log('За восьмой урок студент получил: ' + points[7] + 'баллов')
console.log('За двенадцатый урок студент получил: ' + (points[11] ?? 0) + 'баллов')

//points.at(-1)    [9]
//points.join("*")     [10+10+8+5+6+?+?+9]

let totalPoints = 0;

//for..of

for (let lesson of points){
    //totalPoints = totalPoints + lesson 
    totalPoints += lesson;
}
console.log('Итоги месяца (баллы)' , totalPoints);
console.log(points.join(' + ') + "=" + totalPoints)

let visits = [1,1,1, 'online','online',0,'online', 1];
let totalVisits = 0;

for(let visit of visits){
    if (visit === "online"){
        visit = 1;
    }
    totalVisits += visit;
}
console.log('Итоги месяца (посещения)' , totalVisits);
console.log(points.join(' + ') + "=" + totalVisits);

let myAge = 18;
myAge++

// for - цикл со счетчиком
for (let i = 0; i < visits.length; i++){

    let message = ""

    switch(visits[i]){
     case 1:
        message=' был';
        break
     case 'online':
        message=' был онлайн';
        break
     case 0:
        message=' не был';
        break
    }

    console.log("На " + (i+1) + " уроке студент" + message);
}
let magicNumber = 7;
for(let i=1; i<=10; i++){
    console.log(magicNumber + "*" + i + "=" + magicNumber * i);
}

let lessons = [];
for(let i=1; i<=9; i++){
    if(i===9){
        lessons.push("Доп урок")
    } else {
        lessons.push('Урок № ' + i);
    }
}

for (let lesson of lessons){
    let div = document.createElement("div");
    div.innerText=lesson;
    div.className="block"
    document.body.appendChild(div);
}