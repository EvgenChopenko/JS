/*
1. Перераспределить значения переменных X и Y так, 
чтобы в X оказалось меньшее из этих значений, 
а в Y — большее. 
*/

function one(){
    var x = parseFloat( prompt("Введите Х:"));
    var y = parseFloat (prompt ("Введите Y"));
    var xy = x;
    switch(true){
        case(x/y <=1): break;
        case(x/y>1): var x = y; var y = xy; break;
        default: xy="z";
    }
    if (xy!="z"){
        alert("X="+x + ", Y="+y);
    }
    else if(xy=="z"){
        alert("Что то пошло не так");
    }

}


/*2. Есть три вершины. Координаты X, Y, Z заданы 
как целые числа.  Нужно определить - 
является ли треугольник с заданными 
координатами прямоугольным. */

function input(text){
    var x = prompt(text);
    x =x.trim();
    return  x.split(' ');

}


function two(){

  
    while (true){
        var A = input("Ведеите три числа через пробел?");
        var B = input("Ведеите три числа через пробел?");
        var C = input("Ведеите три числа через пробел?");
        if (A.length === 3 && B.length===3 && C.length===3)
        break;
    }
    alert("Заданы Вершины треугольника : "+"A= "+A+" B="+B+" C="+C);

    //Как я люблю Пифогора A+B=C;
    var longA= Math.pow((A[0]-B[0]),2) +Math.pow((A[1]-B[1]),2)+Math.pow((A[2]-B[2]),2);  
    var longB= Math.pow((B[0]-C[0]),2) +Math.pow((B[1]-C[1]),2)+Math.pow((B[2]-C[2]),2); 
    var longC= Math.pow((C[0]-A[0]),2) +Math.pow((C[1]-A[1]),2)+Math.pow((C[2]-A[2]),2); 
    

    alert("длиный сторон треугольника : "+"A= "+longA+" B="+longB+" C="+longC);

    if (longA + longB === longC ||longC + longB === longA||longA + longC === longB ){
        alert("Треугольник прямокгольный");
    }
    else{
        alert("Треугольник не прямокгольный");
    }
       
 

}
//one();
//two();

/*
3. Дан номер месяца (1 — январь, 2 — февраль, ...). 
Вывести название соответствующего времени года 
("зима", "весна" и т.д.).
*/
function three(){
    while (true){
        var months =input("введите число месяца");
        if (months.length ===1){
            if (months>0&& months<13){
                break;
            }
            else{
                alert("Такого месяца не существует");
            }
           

        }
        else{
            alert("Повторите ввод");
        }
    }

    switch(true){
        case(months ==12 ||months==1||months==2): alert ("Зима"); break;
        case(months ==3 ||months==4||months==5): alert ("Весна"); break;
        case(months ==6 ||months==7||months==8): alert ("Лето"); break;
        case(months ==9 ||months==10||months==11): alert ("Осень"); break;
        default:alert("Не верный месяц");

    }
    


  
    


}
/*
4. Единицы длины пронумерованы следующим образом: 
1 — дециметр, 2 — километр, 
3 — метр, 4 — миллиметр, 5 — сантиметр. 
Дан номер единицы длины и длина 
отрезка L в этих единицах (вещественное число). 
Вывести длину данного отрезка в метрах.


*/
function four(){
    while(true){
        var TypeLength = parseInt( prompt("Выберете размерность длины:\n1 — дециметр\n 2 — километр\n"+ 
        "3 — метр\n 4 — миллиметр\n 5 — сантиметр\n"))
        if (TypeLength <6 &&TypeLength >0 ){
            break;
        }
        else{
            alert("не верная размерность");
        }
    }
 

    var length = parseFloat(prompt("Введите длину L:"));

    switch(true){
        case(TypeLength==1): alert (length/10); break;
        case(TypeLength==2): alert (length*1000); break;
        case(TypeLength==3): alert (length); break;
        case(TypeLength==4): alert (length/1000); break;
        case(TypeLength==5): alert (length/100); break;
        default:alert("Не верная размерность");

    }
    
}

/*5. 
Вывести используя (document.write) таблицу 
умножения чисел до 10. */

function five(n){
    var s = "<table>" 
    for(i=1;i<=n;i++){
        s=s+"<tr><td>"+i+"</td><td>*"+n+"</td><td> = </td><td>"+n*i+"</td></tr>"
    }
    s=s+"</table>";
   document.write(s);
}

//one();
//two();
//three();
//four();
// five(10);

