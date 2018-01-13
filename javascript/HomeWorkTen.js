/**
 * 
 * 
 * 1. Используя прототипы:
Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров». 
Cвойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.
 */


function Product(names,prices) {

    if (names===undefined){
        this.name = '';
    }else{
        this.name = names;
    }

    if (isNaN(prices) || prices ===undefined){
        this.price = 0;
    }else{
        this.price=prices;
    }
} ;
    

Product.prototype.get = function () {
        return 'Товар '+this.name + ' Стоимость '+ this.price+' p';
    }
    Product.prototype.set = function(names,prices) {
        this.name = names;
        this.price =prices; 
    }

    Product.prototype.getPrice = function () {
        return this.price;
    }


//Корзина товаров

function CartProducts() {
    this.CartProd = [];
     this.count = 0;
     this.summ = 0;

     this.addProduct = function (product,count_p) {
         if ( typeof(product)=== 'object'){

           if (!isNaN(product.getPrice())||product.getPrice()!= undefined)  {
            this.CartProd.push(product);
           }

           if (count_p > 0){
           this.count += count_p;
            this.summ += count_p* product.getPrice();
           }
            

          
         }
       

     }
    };
    CartProducts.prototype.getCount = function() {
         return this.count;
     }

     CartProducts.prototype.getSum = function() {
        return this.summ;
    }

    CartProducts.prototype.getProducts = function() {

        var s = '';
        for (i=0;i<this.CartProd.length;i++){
            s += this.CartProd[i].get()+'\n';
        }
        return s;
    }



// var s1 = new Product('Кукуруза',600); 
// var s2 = new Product('Макароны',600); 
// console.log(s1.getPrice());
// console.log(s2.getPrice());
// CartProduc = new CartProducts();

// CartProduc .addProduct(s1);
// CartProduc .addProduct(s2);

// console.log(CartProduc .getProducts());
/**
 * Задача 2
 * 
 * 
 * 
 * 
 *  Используя смешанное наследование:
Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов 
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке вида: 
«Студент: Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование. Обучается в ИТМО.»



*/

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
};
Human.prototype.toString = function() {
       
    return 'ФИО - ' + this.name + '; Возвраст: '+  this.age + '; Пол: '+  this.sex + '; Интересы: '+  this.interest;
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
};
    Student.prototype.toString = function() {
       
        return 'ФИО - ' +this.name + '; Возвраст: '
        + this.age + '; Пол: '+ this.sex + '; Интересы: '
        + this.interest
        + '; УнИверситет :' + this.universiti;
      };
      ///

Student.prototype.__proto__ = Human.prototype;

// тест
// var h = new Human('Покемон ПИкачу',350,'М',['Бег','Стрельба','Секс']);
// var s = new Student('Покемон Студент',350,'М',['Бег','Стрельба','Секс','Итмо'],'bnvj');
// console.log(h.toString());
// console.log(s.toString());

/**
 *Задача 3. Задача повышенной сложности:
Дана таблица. Несколько столбцов и строк. У каждого 
столбца есть заголовок (например, №, ФИО, возраст). 
По нажатию на заголовок столбца осуществлять сортировку 
строк таблицы по значениям этого столбца. По возможности 
использовать объектно-ориентированное программирование.

 */
/// Таблица 
 function Tabel(params) {
     /** создание таблицы , наполнение его тегами сортировка     */

     
 }
/// header tag

 ///tr
 ///td
 ///
