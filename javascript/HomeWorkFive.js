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


/*
3 Написать отдельную функцию, которая выводит пользователю 
заданное число чисел Фибоначчи. 
(например, первых 8 чисел Фибоначчи:  1, 1, 2, 3, 5, 8, 13, 21). 
Заданное число передается функции в качестве аргумента. 
Про числа Фибоначчи: https://ru.wikipedia.org/wiki/Числа_Фибоначчи


*/

/*
 Напишите функцию (), которая в зависимости от переданных 
в нее целочисленных аргументов "количество дней", будет выводить 
слово "день" в нужно форме ("если передали - 1, то 1 день", 
"если передали - 3, то 3 дня" и т.д). 
*/

//one();