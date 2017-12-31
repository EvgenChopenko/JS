/*1 Подключить стороннюю библиотеку для построения графиков.
Построить график функции y = f(x):
y = 5/x, при x>=1;
y = x*x – 4*x, при x<1.
Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5.
Расчёт функции y = f(x) реализовать в виде отдельной функции.*/
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function f(x){

    if (x>=1){
        return +(5/x).toFixed(3);
    } else if (x<1){
        return +(x*x - 4*x).toFixed(3);
    }
}

function draw(x,predicat) {
    return [x , predicat(x)];
}





function drawBackgroundColor() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'f');
      for (var x = -500 ; x<500;x++ ){
        data.addRows([draw(Math.round( x/100),f),]);
      //  console.log(draw(( x/100),f))
      }
     

      var options = {
        hAxis: {
          title: 'x'
        },
        vAxis: {
          title: 'f'
        },
        backgroundColor: '#f1f8e9'
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }


    /*
    2 Подключить стороннюю библиотеку для юнит тестирования.
Написать несколько тестов для функции, рассчитывающей y = 1/x + sqrt(x).
    */

    function fun(x){
       
        return 1/x + Math.sqrt(x);
        }
        
        describe("HomeWorkSeven fun"
        , function(){
        var input1 = '250';
        var result = 15.815388300841896;
        var msg = "1/x + Math.sqrt(x) где х =" + input1 + " результат = "+ result;
        var msg_not_zero = "в ходной параметр не должен быть равен 0, результат стремиться в бесконечность";  
        var msg_badx = "в ходной параметр не должен быть отрецательный , результат стремиться к Nan";  
        //Определение теста
        it(msg, function(){
        var rez = fun(input1);
        //определяет ожидания, которые проверяются в тесте
        expect(rez).toBe(15.815388300841896);
        
      
    
    });

    it(msg_not_zero, function(){
        var rez = fun(0);
        console.log(rez);
        //определяет ожидания, которые проверяются в тесте
        expect(rez !==Infinity).toBeTruthy();
    });

    it(msg_badx, function(){
        var rez = fun(-1);
        console.log(rez);
        //определяет ожидания, которые проверяются в тесте
        expect(rez).toBeNan();
    });

        });


/**3.Написать свою подключаемую js библиотеку для 
 работы с массивом, хранящим целые числа.
Библиотека должна обладать следующими методами:
- поиск минимального элемента в переданном массиве;
- поиск максимально элемента в переданном массиве;
- расчет среднего арифметического значения элементов
 переданного массива;
- создание копии (клонирование) переданного массива.
Библеотука HomeWorkSevenDopMasLib.js
Object MyMass


+max_elment(mas):return int;
+min_elment(mas):return int;
+average(mas):return float;
+clone(mas):return mas; 





*/


function three() {

    test = [2,'a',10,35,1,2];
    test2 = ['a','я','c']; 
    test3 = [80,2,-1,0,3,2,55,1]; 
    test4 = []; 
    test5 = [1,2,3];
    console.log( MyMass.max_element(test3));
    console.log( MyMass.min_element(test3));
    console.log( MyMass.average(test3));
   
    var s = MyMass.clone(test5);
    s.push(10);
    console.log( MyMass.clone(test5));

    
};
/**
 * 
 * 
 * Задача повышенной сложности:
Написать кодер для шифра Цезаря (https://ru.wikipedia.org/wiki/Шифр_Цезаря). 
На вход принимается строка и сдвиг. На выход - зашифрованное/расшифрованное сообщение.
Выдержка из Вики:
Шифр Цезаря — это вид шифра подстановки, в котором каждый символ в открытом 
тексте заменяется символом, находящимся на некотором постоянном числе позиций левее 
или правее него в алфавите. Например, в шифре со сдвигом вправо на 3, А была бы 
заменена на Г, Б станет Д, и так далее.
 * 
 * 
 * 
 */



function code (text,n){
    var str = '';
    for (var i = 0 ; i< text.length;i++)
    str+= String.fromCharCode(text[i].charCodeAt()+n);

    return str;
}


function decode (text,n){
    var str = '';
    for (var i = 0 ; i< text.length;i++)
    str+= String.fromCharCode(text[i].charCodeAt()-n);

    return str;
}


function four() {
    var x= code ('Мама мыла раму',3);
    console.log(x);
    console.log(decode(x,3));    
}


three();
four();