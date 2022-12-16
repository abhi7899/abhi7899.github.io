'use strict';

let vchl = document.getElementById('vehicle');
let port = document.getElementById('spaceport');
let caps = document.getElementById('capsule');

let li1 = document.getElementById('list1');
let li2 = document.getElementById('list2');
let li3 = document.getElementById('list3');

let img1 = document.getElementById('img_vehicle');
let img2 = document.getElementById('img_spaceport');
let img3 = document.getElementById('img_capsule');


function one(){
    if(vchl.style.display !=='block' ){
        
        vchl.style.display = 'block';
        li1.style.backgroundColor = 'white';
        li1.style.color = 'gray'
    }
    if( img1.style.display!=='block'){
        img1.style.display = 'block';
        
    }

    if(port.style.display !=='none' && img2.style.display !=='none'){
        img2.style.display = 'none';
        port.style.display = 'none';
        li2.style.backgroundColor = '';
    }
    if(caps.style.display !=='none' && img3.style.display !=='none'){
        img3.style.display = 'none';
        caps.style.display = 'none';
        li3.style.backgroundColor = '';
    }
}

function two(){
    if(port.style.display !=='block'){
        
        port.style.display = 'block';
        li2.style.backgroundColor = 'white';
        li2.style.color = 'gray'
    }

    if( img2.style.display!=='block'){
        img2.style.display = 'block';
        
    }

    if(vchl.style.display !=='none' && img1.style.display !=='none'){
        img1.style.display = 'none';
        vchl.style.display = 'none';
        li1.style.backgroundColor = '';
    }
    if(caps.style.display !=='none' && img3.style.display !=='none'){
        img3.style.display = 'none';
        caps.style.display = 'none';
        li3.style.backgroundColor = '';
    }
}

function three(){
    if(capsule.style.display !=='block' ){
        
        capsule.style.display = 'block';
        li3.style.backgroundColor = 'white';
        li3.style.color = 'gray'
    }

    if( img3.style.display!=='flex'){
        img3.style.display = 'flex';
    }

    if(port.style.display !=='none' && img2.style.display !=='none'){
        img2.style.display = 'none';
        port.style.display = 'none';
        li2.style.backgroundColor = '';
    }
    if(vchl.style.display !=='none' && img1.style.display !=='none'){
        img1.style.display = 'none';
        vchl.style.display = 'none';
        li1.style.backgroundColor = '';
    }
}