/*Объекты и функции:

1 Построить объект студент:
- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
- метод выводящий в консоль биографическую справку в виде, например: 
«Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.*/


function student(name,famely,age,hoby,university) {
    
var s ={
    name:name,
    famely:famely,
    age:age,
    hoby:hoby,
    university:university,
    toString: function(){
        
        return this.name+' '+this.famely+'. '+ this.age+ 'год. Интересы: '+ this.hoby+'.' +'Учится в '+this.university +'.';
    }


}
return s;
}

function One(){
 var s = student('Василий','Пупкин',12,['Охотиться за людьми','Есть детей','18+'],'Итмо');
    console.log(s.toString());
}



/*Рекурсия:

2 Написать функцию вычисляющую факториал числа с использованием рекурсии.
Факториал числа - это число, умноженное на себя минус один, затем на себя 
минус два и так далее, до единицы. Обозначаетс n!
Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1 */

function factorial(params) {
    var result=0;
    var n = parseInt(params);
    if (n===1)
    return 1;
    result = factorial(n-1)*n;
    return result;

}



function Two() {
    console.log(factorial(100));
}

/*
Замыкания:
3 Сделайте функцию, каждый вызов который будет генерировать случайное число 
от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все 
числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
хранится массив чисел, которые уже были сгенерированы функцией.
*/

function autoGenRandom(min,max){
    var number ={
        mas : {},
        length: 0,
        set: function (p) {
                 if (this.mas[p]===undefined){
                   this.mas[p] = true;
                   this.length++;
                   
                 }
                },  
                
        get:function () {
            return Object.keys(this.mas);
        }



    };
    
    while (true){
       number.set('+'+Math.floor((Math.random()*(max-min+1))+min));
        if (number.length === max-min+1){
            break;
        }
        var _a = number.get();
    }

   

    function gen () {
        if (number.length !==0){
            number.length--;
            return +_a.pop();
        }else
        {
            console.log("список пуст");
        }
        
    }

    return gen;

}

function Three(){
    var d = autoGenRandom(10,20);

    var i = 0;
    while (i<(20-10)){
        console.log(d());  
    i++
    }
    }

