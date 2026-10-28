// null and object ссылочные типы данных
// остальные приметивные 4 остальные

// массив это обьект

let points = [5,4,5,5,3,2,5,2,2,5];

let geeksPoints = [];

for(const point of points){
    //const geeksPoint = point*2
    geeksPoints.push(point*2)
}
console.log('in Geeks: ', geeksPoints)
console.log('in School: ', geeksPoints)


let univerPoints = [];
for(const point of points){
    univerPoints.push(point*20)
}
console.log('in Geeks: ', geeksPoints)
console.log('in School: ', points)
console.log('in University: ', univerPoints)






let financeOps = [];

financeOps[0] = 1000
financeOps[1] = -3900
financeOps[2] = 3000
//or
financeOps.push(-3900, 1000, 3000)
console.log('За текущий месяц полученно: ', financeOps.length)



let income = [];
let expenses = [];
let totalIncomes = 0;
let totalExpenses = 0;

for(const op of financeOps){
    if(op>0){
        income.push(op)
        totalIncomes +=op;
    } else {
        expenses.push(Math.abs(op))
        totalExpenses +=op;
    }
}
console.log('Расходы ', expenses, 'Итого: ', totalExpenses)
console.log('Доходы ', income, 'Итого: ', totalIncomes)

