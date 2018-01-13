/** 
 * Даны несколько div элементов на html. По первому
 *  нажатию на каждый div он перекрашивается зеленым цветом,
 *  при повторном нажатии перекрашивается обратно и 
 * так далее каждый клик происходит чередование цвета.
 * task01.html
*/

function styleelement(){
 var colors = document.getElementById('color1');
    colors.style.height='500px';
    colors.style.width ='150px';
    colors.style.background = 'red';
    var colors = document.getElementById('color2');
    colors.style.height='500px';
    colors.style.width ='150px';
    colors.style.background = 'red';
    var colors = document.getElementById('color3');
    colors.style.height='500px';
    colors.style.width ='150px';
    colors.style.background = 'red';
};
styleelement();

function clicklisening() {
    var colors = this;
    if (colors.style.background === 'red'){
        colors.style.background = 'green';
    }else if(colors.style.background === 'green')
    {
        colors.style.background = 'red';
    }

}

color1.addEventListener('click',clicklisening);
color2.addEventListener('click',clicklisening);
color3.addEventListener('click',clicklisening);

/*
Реализовать счётчик нажатий на 
кнопку: Дана кнопка внутри неё 
записана цифра. При клике на 
кнопку – её значение должно 
увеличиваться на единицу.
task02.html
*/


function createButton() {
    var but = document.getElementById('btn');
    but.style.color='red';
    but.style.width='50px'
    but.style.height='50px'

}

createButton();


function btnLisn() {
    var but=this;
    but.innerText = parseInt(but.innerText)+1;
}

btn.addEventListener('click',btnLisn);

/**Задача повышенной сложности: 
Изобразить клавиатуру и расположенные на ней клавиши в виде html документа. 
При нажатии клавиши пользователем на клавиатуре, подсвечивать нажатую 
клавишу на клавиатуре изображенной в html и выводить нажатое значение. */

/** task02.html  */

function creatBoard(){

    keyboard.style.color='red';

};


creatBoard();


var keycode  = {
    '113': document.getElementById('q'),
    '119': document.getElementById('w'),
    '101': document.getElementById('e'),
    '114': document.getElementById('r'),
    '116': document.getElementById('t'),
    '121': document.getElementById('y'),
    '117':document.getElementById('u')

/**   и так далее лень писать  */




};

function  funs(e) {
    alert(e.keyCode);
    
        keycode[e.keyCode].style.color = 'green';
    l
    
};

addEventListener("keypress", funs);
