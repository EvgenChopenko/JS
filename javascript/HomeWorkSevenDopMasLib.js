var MyMass={

   
    arr : new Array(),
    reg : /[A-Z]|[А-Я]/igm,
 
    sorts:function(num1,num2) {
   if (num1>num2){
    return 1 ;
   }else if(num1<num2){
        return -1;
   }
   else
   return 0;
    
    
} ,

testNumMas:function(mas) {

    var str = mas.toString() ;
    if ( isNaN(str.match(this.reg)) || str.length===0 ){
        return false;
    }else{
        return true;
    }
   

   
},



max_element:function(mas){

    this.arr= mas.slice(0);
    if (this.testNumMas(this.arr)){
        this.arr.sort(this.sorts);
        return parseInt( this.arr[0]);
    }
    throw new Error('Массив содержит буквы или он пуст');
 
} ,

min_element:function(mas){

    this.arr= mas.slice(0);
    if (this.testNumMas(this.arr)){
        this.arr.sort(this.sorts);
         this.arr.reverse();
        return parseInt( this.arr[0]);
    }
    throw new Error('Массив содержит буквы или он пуст');
 
} ,

average:function(mas){

    this.arr= mas.slice(0);
var length = this.arr.length;
var sum = 0;

    if (this.testNumMas(this.arr) && length > 0){
       for (var i =0 ; i<length; i++ ){
           sum +=this.arr[i];
       }

       return parseFloat( sum/length);

    }
    throw new Error('Массив содержит буквы или он пуст');
 
} ,

clone:function clone(mas) {

    if (mas.toString().length>0)
  
        return mas.slice(0)
    else {
        return new Array();

    }

}



};

/*
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
 console.log( MyMass.clone(test5));

// console.log(test);

// console.log(MyMass.testNumMas(test4));*/