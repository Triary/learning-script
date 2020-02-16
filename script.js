"use strict";

let money = +prompt('Ваш бюджет на месяц?',' ');
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
    let consumptionName = prompt('Введите обязательную статью расходов в этом месяце.', ' ');
    let consumptionNumber = +prompt('Во сколько обойдется?', ' ');

    if(typeof(consumptionName) === "string" && (typeof(consumptionName) != null && typeof(consumptionNumber) != null && consumptionNumber == ' ' 
        && consumptionName == ' '  && consumptionName.length < 50) )
        {
            console.log("Done.");
            appData.expenses.consumptionName = consumptionNumber;
        }
        else
        {
            console.log("Incorrect value.");
            i--;
        }
}

appData.moneyPerDay = appData.budget / 30;
alert("бюджет на 1 день:  " + appData.moneyPerDay + "руб");


if (appData.moneyPerDay <= 100) {
    console.log ("Это минимальный уровень достатка.");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка.");
} else if (appData.moneyPerDay >= 2000) {
    console.log ("Это высокий уровень достатка.");
} else {
    console.log ("ERROR");
}
 

// Цикл do-while

// let i = 0;
// do {
//     let consumptionName = prompt ("Введите обязательную статью расходов в этом месяце", " "),
//         consumptionNumber  = prompt ("Во сколько обойдется?", " ");

//  if ( typeof(consumptionName ) === 'string' && typeof(consumptionName ) != null && typeof(consumptionNumber ) != null && consumptionName != ' ' 
//       && consumptionNumber  != ' ' && consumptionName.length < 50) 
//        {
//          console.log ("Done.");
//          appData.expenses.consumptionName  = consumptionNumber;
//        } 
//      else 
//        {
//          console.log ("Incorrect value.");
//          i--;
//        }
// while(i < 2);



// цикл while

// let i = 0;
// while (i < 2) {
//    let consumptionName = prompt('Введите обязательную статью расходов в этом месяце.', ' ');
//    let consumptionNumber = +prompt('Во сколько обойдется?', ' ');

//     if ( typeof(consumptionName ) === 'string' && typeof(consumptionName ) != null && typeof(consumptionNumber ) != null && consumptionName != ' ' 
//          && consumptionNumber  != ' ' && consumptionName.length < 50) {
//         console.log ("Done.");
//         appData.expenses.consumptionName  = consumptionNumber;
//     } else {
//          console.log ("Incorrect value.");
//          i--;
//     }

//     i++;
// }


