//Пара 2 javascript

var Ammount = parseFloat( prompt("Ваш оклад"));

var WorkDay = parseInt( prompt("Кол-во рабочих дней:"));

var AmmountDay=parseInt( prompt("Кол- во отработаных дней"));

if (isFinite(Ammount)===true && isFinite(WorkDay)===true && isFinite(AmmountDay) ){


if (Ammount!=0 && WorkDay!=0 && AmmountDay !=0 ){
    alert(((Ammount/WorkDay)*AmmountDay*0.87).toFixed(2));
}
else if(WorkDay===0){

alert ("Количество рабочих дней задаоно нул");
}
else if(Ammount==0){
    alert ("з/п равно нул нет смысла счетать");
}
else if(AmmountDay==0){
    alert ("Количество отработаных дней нул Сумма оклвда нул");
}
}
else {
alert("Не введены занчения")
}
