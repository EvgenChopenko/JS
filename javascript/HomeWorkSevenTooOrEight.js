/*
1.Создать функцию которая выводит время 
в html и обновляет значения каждую секунду. 
Время выводить в формате чч:мм:cc, при этом 
часы, минуты и секунды отобразить разными цветами.

24h
60m
60s


*/  
///////

var hours= document.getElementById('hours');
hours.style.color = 'red';
var minutes =document.getElementById('minutes');
minutes.style.color = 'green';
var seconds= document.getElementById('seconds');
seconds.style.color = 'blue';

function overflow(params) {

    switch (params){
        case 0:return '00';
        case 1:return '01';
        case 2: return '02';
       
        case 3: return '03';
        case 4: return '04';
        case 5: return '05';
        case 6: return '06';
        case 7: return '07';
        case 8: return '08';
        case 9: return '09';
        default:return params;
    
    }
    
}


function clock() {
  
    var d  = new Date();    


  hours.innerText =overflow(d.getHours());
  seconds.innerText =overflow(d.getSeconds());
 minutes.innerText =overflow(d.getMinutes());


}

function One(params) {
    clock();
    setInterval(clock, 1000); 
}
    


//////
/*2*Создать объект «Товар» включающий:
- свойства, такие как фото, артикул, 
описание и т.п.;
- метод, которому при вызове передается 
id пустого div элемента и в этот html 
элемент данный метод создаст и внесёт 
все необходимые html элементы, стили, 
и содержание для отображения 
всей информации хранящихся в свойствах 
объекта о данном товаре. Дизайн оформления 
информации в html о товаре – 
это ваше творчество. 

Product
-name
-photo
-atribute
-comment
-count
-keiyd
-amount

+getName(name)
+getPhoto(photo)
+getAtribute(atr)
+getComment(comm)
+getCount(n)
+getKeyid(n)
+getAmount(n)

+setName()
+setPhoto()
+setAtribute()
+setComment()
+setCount()
+setKeyid()
+setAmount()

+outputHTMLtabel(div_id)
+outputHTMLp(div_id)
*/

var Product ={
     name:'',
    photo:'',//cсылка
    atribute:'',
    comment:'',
    count:0,
    keiyd:0,
    amount:0,


    getName(){
return this.name;
    },
getPhoto(){
    return this.photo;
},
getAtribute(){
    return this.atribute;
},
getComment(){
    return this.comment;
},
getCount(){
    return this.count;
},
getKeyid(){
    return this.keiyd;
},
getAmount(){
    return this.amount;
},

    setName(name){
     this.name = name;
        },
    setPhoto(photo){
     this.photo = photo;
    },
    setAtribute(atr){
         this.atribute =atr;
    },
    setComment(comment){
       this.comment = comment;
    },
    setCount(count){
     this.count = count;
    },
    setKeyid(id){
        this.keiyd = id;
    },
    setAmount(amount){
        this.amount = amount;
    },


    outputHTMLtable:function (){
/**<tr>
    <td>...</td>
  </tr> */
  var tag = document.createElement('table');

  var tr = document.createElement('tr');
  tag.appendChild(tr);
  var name_td = document.createElement('td');//name
  name_td.innerText= this.name;
  tr.appendChild(name_td);
  var photo_td = document.createElement('td');//photo
  photo_td.innerText = this.photo;
  tr.appendChild(photo_td);
  var atribute_td = document.createElement('td');//atribute
  atribute_td.innerText = this.atribute;
  tr.appendChild(atribute_td);
  var comment_td = document.createElement('td');//comment
  comment_td.innerText = this.comment;
  tr.appendChild(comment_td);
  var count_td = document.createElement('td');//count
  count_td.innerText = this.count;
  tr.appendChild(count_td);
  var keyid_td = document.createElement('td');//keyid
  keyid_td.innerText = this.keiyd;
  tr.appendChild(keyid_td);
  var amount_td = document.createElement('td');//amount
  amount_td.innerText=this.amount;
  tr.appendChild(amount_td);
    
  
  
  
  return tag;
    },


    outputHTMLp:function (){
        /**<p><span></span></p> */


  var tag = document.createElement('p');

  var name_td = document.createElement('span');//name
  name_td.innerText= this.name+" ";
  tag.appendChild(name_td);
  var photo_td = document.createElement('span');//photo
  photo_td.innerText = this.photo+" ";
  tag.appendChild(photo_td);
  var atribute_td = document.createElement('span');//atribute
  atribute_td.innerText = this.atribute+"  ";
  tag.appendChild(atribute_td);
  var comment_td = document.createElement('span');//comment
  comment_td.innerText = this.comment+"  ";
  tag.appendChild(comment_td);
  var count_td = document.createElement('span');//count
  count_td.innerText = this.count+"  ";
  tag.appendChild(count_td);
  var keyid_td = document.createElement('span');//keyid
  keyid_td.innerText = this.keiyd+"  ";
  tag.appendChild(keyid_td);
  var amount_td = document.createElement('span');//amount
  amount_td.innerText=this.amount+" ";
  tag.appendChild(amount_td);

    
  return tag;
    }




}

function Two(params) {
    

var bread = Product;


bread.setAmount(10);
bread.setAtribute("Атр");
bread.setComment("хлеб еще теплый ");
bread.setCount(10000);
bread.setKeyid(1);
bread.setName("Булочка Городская");
bread.setPhoto("Фото");


console.log(bread);
var http = document.getElementsByTagName('body');
http[0].appendChild(bread.outputHTMLtable());
http[0].appendChild(bread.outputHTMLp());

}




/*3*Создать светофор (красный, желтый, зелёный). 
Переключать цвет у 
светофора через каждые 2 сек сверху вниз и снизу вверх. */

function createTrafficLight() {
    var TrafficLight = document.createElement('div');
    var green = document.createElement('div');
    green.style.background='white';
    green.style.width = '150px';
    green.style.height = '150px';
    green.style.borderRadius='50%';
    green.id= 'green';
    // green.style.opacity=0;
    green.style.border ='2px solid black';
    var yellow = document.createElement('div');
    yellow.style.background='white';
    yellow.style.width = '150px';
    yellow.style.height = '150px';
    yellow.style.borderRadius='50%';
    yellow.id ='yellow';
    yellow.style.border ='2px solid black';
    // yellow.style.opacity =0
    var red = document.createElement('div');
    red.style.background='red';
    red.style.width = '150px';
    red.style.height = '150px';
    red.style.borderRadius='50%';
    red.id='red';   
    red.style.border ='2px solid black';
    TrafficLight.appendChild(red);
    TrafficLight.appendChild(yellow);

    TrafficLight.appendChild(green);
    var http = document.getElementsByTagName('body');

    http[0].appendChild(TrafficLight);

}
var down=0;
function TrafficLightrun() {
    
var green = document.getElementById('green'); 
var red= document.getElementById('red'); 
var yellow= document.getElementById('yellow'); 

if (yellow.style.background === 'white' &&(red.style.background==='red'||green.style.background ==='green')&&(down ===0||down===1)){
    yellow.style.background='yellow';
    red.style.background='white';
    green.style.background='white';
    return 0;

} else if (yellow.style.background='yellow' && (red.style.background==='white'||green.style.background ==='white')&& down===1){
    yellow.style.background='white';
    red.style.background='red';
    green.style.background='white';
    down = 0;
    return 0;
}else if (yellow.style.background='yellow' && (red.style.background==='white'||green.style.background ==='white')&& down===0){
    yellow.style.background='white';
    red.style.background='white';
    green.style.background='green';
    down = 1;
    return 0;
}



}


function three() {
    createTrafficLight();
    setInterval( TrafficLightrun,2000);
}









One();
Two();
three()

