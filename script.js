"use strict";

let money = prompt('Ваш бюджет на месяц?',' ');
let time  = prompt('Введите дату в формате YYYY-MM-DD',' ');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: false
}


for(let i=0; i < 2; i++)
{
    let consumptionName = prompt('Введите обязательную статью расходов в этом месяце', ' ');
    let consumptionNumber = prompt('Во сколько обойдется?', ' ');
    appData.expenses.consumptionName = consumptionNumber;
}


alert(appData.budget / 30);

