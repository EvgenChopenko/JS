/*1 Построить объект студент со свойствами:
Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент, 
а она выводит его содержимое.*/

function student(name, family,age,interes_mas,universiti){
/// вернет обект типа студент;
var odj ={
    name :name,
    family: family,
    age:age,
    interes_mas:interes_mas,
    universiti:universiti
} ;
// odj.name=name;

return odj;

}

var students=new Array();
function addStudent(){
    /* вызыввает запрос добовления студента и хранит все объекты в словаре gropup и пишит лог в консоль*/
 var   name = prompt("Введите Имя Студента");
 var   family = prompt("Введите Фамилию");
 var   age = parseInt( prompt("Введите Возврат"));
 var interes_mas =  [prompt("Введите интерес"), prompt("Введите интерес"), prompt("Введите интерес")];
 var universiti = prompt("ввкдите название уневерситета");
students.push(student(name, family,age,interes_mas,universiti));

    console.log(students[students.length-1]);

}

function output(){
  var s = "<p>";
  for (var i =0; i<students.length;i++){

  
   s+= students[i].name+" " + students[i].family+" "+students[i].age +" "+ students[i].universiti;
   s+="</p>";
   s+="<p>"+ students[i].interes_mas[0]+" "+students[i].interes_mas[1]+" "+students[i].interes_mas[2]+"</p>"
s+="</br>"
}
   document.write(s);
  

}


function one(){
    var flag = true
    while (flag) {
      
      addStudent();
      flag= (prompt("Введите + что бы добавить студента или любой символ что бы увидть результат")==="+") ? true : false;
    }
    output();
}


/*
2 Заданы два массива A и B необходимо их объединить 
в один массив C так, чтобы в массиве остались уникальные 
(неповторяющиеся) элементы. 
Например: A = [1,2], B = [2,3] получим С = [1, 2, 3].
*/


function masAnd(a,b){
var A = new Array().concat(a);
var B = new Array().concat(b);

for (var i=0;i<A.length;i++){
    for (var j=0;j<B.length;j++){
        if (A[i]!==B[j]){
          
            A.push(B[j]);
        }else
        {
            B.splice(j);
        }
    }
   

}

return A;
}


function two(){
A = [1,2,3,4];
 B = [2,3,4,5,6] ;

 C = masAnd(A,B);
 alert(C);
}



/*
3 Написать отдельную функцию, которая выводит пользователю 
заданное число чисел Фибоначчи. 
(например, первых 8 чисел Фибоначчи:  1, 1, 2, 3, 5, 8, 13, 21). 
Заданное число передается функции в качестве аргумента. 
Про числа Фибоначчи: https://ru.wikipedia.org/wiki/Числа_Фибоначчи


*/


function fibanachi(arg){
    var mas = new Array();
    mas[0]=1
    mas[1]=1
    var i =2;
    arg = parseInt(arg);
if (arg===0){
    return 0;

}else if(arg===1){
    return 1;

   
}else if (arg>1){
   
    while (i<arg){    
    mas.push(mas[i-2]+mas[i-1]);
    i++;
    }


    



return mas;
}
return 0;
}


function three(){
alert (fibanachi(8));
}



/*
 Напишите функцию (), которая в зависимости от переданных 
в нее целочисленных аргументов "количество дней", будет выводить 
слово "день" в нужно форме ("если передали - 1, то 1 день", 
"если передали - 3, то 3 дня" и т.д). 

0 дней 1 день 2 дня 3 дня 4 дня 5 дней 6 дней 7 дней 8 дней 10 дней 
11 12 13 14 15 16 17 18 19 20 дней 21 день 22 дня 23 дня 24 дня 25 дней  
26 27 28 29 30 дней 31 день

*/
function daydel(d){
   
    switch(true){
        case(d%10===1):return 1;
        case(d%10===2):return 2;
        case(d%10===3):return 3;
       case(d%10===4): return 4; 
       case(d%10===5): return 5; 
       case(d%10===6): return 6; 
       case(d%10===7): return 7; 
       case(d%10===8): return 8; 
       case(d%10===9): return 9; 
        default:return 0 ;
    }
}


function dayToText (d) {
    switch(true){
        case(d===0):return 0+" дней";
       case(d>=5 && d<=20): return d+" дней"; 
       case (d===1 || daydel(d)===1):return d + " день";
       case (d===2 || daydel(d)===2):return d + " дня";
         case (d===3 || daydel(d)===3):return d + " дня";
         case (d===4 || daydel(d)===4):return d + " дня";
         case (d===5 || daydel(d)===5):return d + " дней";
        case( daydel(d)===6):return d + " дней";
        case(  daydel(d)===7):return d + " дней";
        case(daydel(d)===8):return d + " дней";
         case(daydel(d)===9):return d + " дней";
         case(daydel(d)===0):return d + " дней";

    }
}

function four() {
   

for (var i =0;i<100000;i++){
    console.log( dayToText (i));
}




}

//one();
//two();
//three();
four();