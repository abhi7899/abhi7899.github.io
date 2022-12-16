'use strict';

let Moon = document.getElementById('moon');
let Mars = document.getElementById('mars');
let Europa = document.getElementById('europa');
let Titan = document.getElementById('titan');

let li1 = document.getElementById('list1');
let li2 = document.getElementById('list2');
let li3 = document.getElementById('list3');
let li4 = document.getElementById('list4');

function one(){
    if(Moon.style.display!=='flex'){
        Moon.style.display = 'flex';
        li1.style.color = 'white';
        li1.style.textDecoration = 'underline';
    }
    if(Mars.style.display!=='none'){
        Mars.style.display = 'none';
        li2.style.color = 'gray';
        li2.style.textDecoration = 'none';
    }
    if(Europa.style.display!=='none'){
        Europa.style.display = 'none';
        li3.style.color = 'gray';
        li3.style.textDecoration = 'none';
    }
    if(Titan.style.display!=='none'){
        Titan.style.display = 'none';
        li4.style.color = 'gray';
        li4.style.textDecoration = 'none';
    }
}

function two(){
    if(Mars.style.display!=='flex'){
        Mars.style.display = 'flex';
        li2.style.color = 'white';
        li2.style.textDecoration = 'underline';
    }
    if(Moon.style.display!=='none'){
        Moon.style.display = 'none';
        li1.style.color = 'gray';
        li1.style.textDecoration = 'none';
    }
    if(Europa.style.display!=='none'){
        Europa.style.display = 'none';
        li3.style.color = 'gray';
        li3.style.textDecoration = 'none';
    }
    if(Titan.style.display!=='none'){
        Titan.style.display = 'none';
        li4.style.color = 'gray';
        li4.style.textDecoration = 'none';
    }
}

function three(){
    if(Europa.style.display!=='flex'){
        Europa.style.display = 'flex';
        li3.style.color = 'white';
        li3.style.textDecoration = 'underline';
    }
    if(Mars.style.display!=='none'){
        Mars.style.display = 'none';
        li2.style.color = 'gray';
        li2.style.textDecoration = 'none';
    }
    if(Moon.style.display!=='none'){
        Moon.style.display = 'none';
        li1.style.color = 'gray';
        li1.style.textDecoration = 'none';
    }
    if(Titan.style.display!=='none'){
        Titan.style.display = 'none';
        li4.style.color = 'gray';
        li4.style.textDecoration = 'none';
    }
}

function four(){
    if(Titan.style.display!=='flex'){
        Titan.style.display = 'flex';
        li4.style.color = 'white';
        li4.style.textDecoration = 'underline';
    }
    if(Mars.style.display!=='none'){
        Mars.style.display = 'none';
        li2.style.color = 'gray';
        li2.style.textDecoration = 'none';
    }
    if(Europa.style.display!=='none'){
        Europa.style.display = 'none';
        li3.style.color = 'gray';
        li3.style.textDecoration = 'none';
    }
    if(Moon.style.display!=='none'){
        Moon.style.display = 'none';
        li1.style.color = 'gray';
        li1.style.textDecoration = 'none';
    }
}