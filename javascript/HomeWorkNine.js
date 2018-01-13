/**
 * 
 * Задание 1
 * Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров». 
Приватные свойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара. */


/// Товар 
function Product(names,prices) {

    if (names===undefined){
        var name = '';
    }else{
        var name = names;
    }

    if (isNaN(prices) || prices ===undefined){
        var price = 0;
    }else{
        var price=prices;
    }
  
    

    this.get = function () {
        return 'Товар '+name + ' Стоимость '+ price+' p';
    }
    this.set = function(names,prices) {
        name = names;
        price =prices; 
    }

    this.getPrice = function () {
        return price;
    }
};

//Корзина товаров

function CartProducts() {
    var CartProd = [];
     var count = 0;
     var summ = 0;

     this.addProduct = function (product,count_p) {
         if ( typeof(product)=== 'object'){

           if (!isNaN(product.getPrice())||product.getPrice()!= undefined)  {
            CartProd.push(product);
           }

           if (count_p > 0){
            count += count_p;
            summ += count_p* product.getPrice();
           }
            

          
         }
       

     }

     this.getCount = function() {
         return count;
     }

     this.getSum = function() {
        return summ;
    }

    this.getProducts = function() {

        var s = '';
        for (i=0;i<CartProd.length;i++){
            s += CartProd[i].get()+'\n';
        }
        return s;
    }
};



// // тест
// var cart = new CartProducts();
// cart.addProduct(new Product("Макароны",200),20);
// cart.addProduct(new Product("Кукуруза",250),20);

// console.log(cart.getCount());
// console.log(cart.getSum());
// console.log(cart.getProducts());

/**
 * Задание 2.
 * Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов 
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке 
вида: «Студент: Иван. Возраст: 25 лет. Пол: м. 
Интересы: музыка, программирование. 
Обучается в ИТМО.» */

function Human(names,ages,sexs,interests) {
    //////
    if ( names=== undefined){
        this.name = '';
    } else{
        this.name =names;
    };
    //////
    if ( isNaN(ages)||ages=== undefined){
        this.age = 0;
    } else{
        if (ages>0){
            this.age =ages;
        }else{
            this.age = 0;
        }
        
    };
  ////////////// 
    if (sexs === 'М'){
        this.sex = sexs;
    }else if (sexs ==='Ж'){
        this.sex = sexs;
    }else{
        this.sex = 'Гемофродит';
    };
/////// 
 if (Array.isArray(interests)){
    this.interest = interests;
 }else{
    this.interest=[];
 };

  this.toString = function() {
       
    return 'ФИО - ' + this.name + '; Возвраст: '+  this.age + '; Пол: '+  this.sex + '; Интересы: '+  this.interest;
  }
    
};
 
function Student(names,ages,sexs,interests,universitis) {
    Human.call(this,names,ages,sexs,interests);
    ///
    if ( universitis=== undefined){
        this.universiti = '';
    } else{
        this.universiti =universitis;
    };
    ///

    this.toString = function() {
       
        return 'ФИО - ' +this.name + '; Возвраст: '
        + this.age + '; Пол: '+ this.sex + '; Интересы: '
        + this.interest
        + '; УнИверситет :' + this.universiti;
      }
      ///

};
// тест
// var h = new Human('Покемон ПИкачу',350,'М',['Бег','Стрельба','Секс']);
// var s = new Student('Покемон Студент',350,'М',['Бег','Стрельба','Секс','Итмо'],'bnvj');
// console.log(h.toString());
// console.log(s.toString());

/**
 * 
 * 
 * 
Создать шаблон объектов «Пользователь».
Метод преобразования к строке выводит имя пользователя.
Два фабричных метода:
- «Создать анонимного пользователя» не получает аргументов,
в качества имя пользователя устанавливает «Аноним».
- «Создать пользователя из данных» в качества аргументов 
получает объект с именем и возрастом пользователя.


*/

///Абстрактый Пользователь 

function User() {
    this.log = 'Jone_DOE'
    this.name = 'Anonymus'
    this.toString = function () {
        return 'Лог ' + this.log + ' Имя ' + this.name;
    }
}

User.user =function(names,logs) {
    var us = new User();
    us.log=logs;
    us.name=names;
  return us;
    
}

// console.log(new User());
// console.log(new User.user('вася пупкин','killfrost'));
