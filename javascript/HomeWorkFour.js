/*Заданы два массива 
A = [ 12, 4, 3, 10, 1, 20 ]  B = [-3, -7, -100, -33] 
необходимо их объединить в один массив C добавив массив B в конец(в начало) A.  */
//функция добовления в конец 

function addFinali(a,b,c){
/*
a - массив в который добавят доюовления
b- массив который добавят
с - атрибут если с = 1 то a.push(b[lastIndex]) next a.push(b[lastindex-1]) ...
если с = 0 то a.push(b[0]) next a.push(b[1])....... 

return new mas a.push(b);
*/
var b_leng = b.length;
var mas = new Array(a);
switch(true){
    case (c===1): 
        for (var i=1;i<b_leng+1;i++){
            mas.push(b[b_leng-i]);
        }
        break;
    case (c===0):
        for (var i=0;i<b_leng;i++){
            mas.push(b[i]);
        }
        
        break;
    default: return a;
}
return mas;
}

function addBegin(a,b,c){
    /*
    a - массив в который добавят доюовления
    b- массив который добавят
    с - атрибут если с = 1 то a.shift(b[lastIndex]) next a.shift(b[lastindex-1]) ...
    если с = 0 то a.shift(b[0]) next a.shift(b[1])....... 
    
    return new mas a.shift(b);
    */
    var b_leng = b.length;
    var mas = new Array(a);
    switch(true){
        case (c===1): 
            for (var i=1;i<b_leng+1;i++){
                mas.unshift(b[b_leng-i]);
            }
            break;
        case (c===0):
            for (var i=0;i<b_leng;i++){
                mas.unshift(b[i]);
            }
            
            break;
        default: return a;
    }
    return mas;
    }






function One(){
   var A = [ 12, 4, 3, 10, 1, 20 ];
   var  B = [-3, -7, -100, -33];
   var C =new Array();
    C = addFinali(A,B,0);
    console.log(C.toString());

    var C =new Array();
    C = addFinali(A,B,1);
    console.log(C.toString());

    var C =new Array();
    C = addBegin(A,B,0);
    console.log(C.toString());

    var C =new Array();
    C = addBegin(A,B,1);
    console.log(C.toString());


  
  
  console.log("Mas A = "+A.toString());
  console.log("Mas B = "+B.toString());

}


/*
2.
Одномерным массивом задана доска 3 на 3 
var area = [ null, null, null, null, null, null, null, null, null ]

Необходимо сформировать игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 

При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 

Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
*/

function ZeroOrX(a){
    if (a === 0){
        return "X";
    }else if (a===1) {
        return "O";
    }else {
        return "";
    }
}

function two(){
 var tag = '<table cellspacing="2" border="1" cellpadding="5" width="600" >';
 var mas =[ 1, null, 0, null, 1, null, null, null, null ];
 var i=0;
 var mas_leng= mas.length;

    if (mas_leng%3 >0){
        mas_leng=0;
        aler("Масив залон не верно");
    }else{
        mas_leng=mas_leng/3;
    }

 while (i<mas_leng) {
tag += "<tr><td>"+
ZeroOrX(mas[i])+"</td><td>"+
ZeroOrX(mas[i+1])+"</td><td>"+
ZeroOrX(mas[i+2])+"</td></tr>"   ; 
i++;
}
tag += "</table>";
document.write(tag);
}

/* 
3.
Задан массив  - [12,4,3,10,1,20]. Удалить из него наименьшее и наибольшее значение.
*/

function sortBuble(){
/**а потом в следуюшей жизни */
}

function sortSelect(mas){
    var min = 0;
    var lesen = 0;
    var tmp=0;

    for (min = 0;min<mas.length-1;min++)
    {
        lesen=min;
        for (var j=min+1; j<mas.length;j++ ){
            if (mas[j]<mas[lesen]){
                lesen=j;
            }
        }
        tmp = mas[min];
        mas[min]=mas[lesen];
        mas[lesen]=tmp;
    }


}



function three(){
var mas = [12,4,3,10,1,20];
sortSelect(mas);
mas.splice(0,1);//удалил  min;
mas.splice(-1,1);// удалил max;
alert (mas);

/*!Читерстов  да я знаю но можно было искать в цикли min и max  и сохронять их индекс  а потом по индесу удалить. */
}

function four(){

}
/**
 * Bonus.
4. Задача повышенной сложности.
Задан массив - [12,4,3,10,1,20] 
необходимо отсортировать его в порядке возрастания, 
при этом не использовать готовый метод sort и методы разобранные на занятии.
 */

function four(){
    var mas = [12,4,3,10,1,20];
    sortSelect(mas);
    alert (mas);

}

//One();
//two();
//three();
//four();
