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
        console.log(draw(( x/100),f))
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