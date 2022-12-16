'use Strict'

let cmndr = document.getElementById("commander");
let special = document.getElementById("spcl");
let pilott = document.getElementById("pilot");
let enginr = document.getElementById("engnr");

let btnOne = document.getElementById("nxt_one");
let btnTwo = document.getElementById("nxt_two");
let btnThree = document.getElementById("nxt_three");
let btnFour = document.getElementById("nxt_four");


// Commander btn Function
function one(){
    if(cmndr.style.display !== "flex"){
        cmndr.style.display ="flex";
        btnOne.style.color = "white";
    }
    if(spcl.style.display !== "none"){
        spcl.style.display = "none";
        btnTwo.style.color = "gray";
    }
    if(pilott.style.display !== "none"){
        pilott.style.display = "none";
        btnThree.style.color = "gray";
    }
    if(enginr.style.display !=="none"){
        enginr.style.display = "none";
        btnFour.style.color = "gray";
    }           
};

// Special btn Function
function two(){
    if(spcl.style.display !== "flex"){
        spcl.style.display ="flex";
        btnTwo.style.color = "white";
    }

    if(cmndr.style.display !== "none"){
        cmndr.style.display = "none";
        btnOne.style.color = "gray";
    }
    if(pilott.style.display !== "none"){
        pilott.style.display = "none";
        btnThree.style.color = "gray";
    }
    if(enginr.style.display !=="none"){
        enginr.style.display = "none";
        btnFour.style.color = "gray";
    }           
};

// Pilot btn Function
 function three(){
    if(pilott.style.display !== "flex"){
        pilott.style.display ="flex";
        btnThree.style.color = "white";
    }


    if(cmndr.style.display !== "none"){
        cmndr.style.display = "none";
        btnOne.style.color = "gray";
    }
    if(spcl.style.display !=="none"){
        spcl.style.display = "none";
        btnTwo.style.color = "gray";
    }
    if(enginr.style.display !=="none"){
        enginr.style.display = "none";
        btnFour.style.color = "gray";
    }
};

// Engineer btn Function
function four(){
    if(enginr.style.display !== "flex"){
        enginr.style.display ="flex";
        btnFour.style.color = "white";
    }

    if(cmndr.style.display !== "none"){
        cmndr.style.display = "none";
        btnOne.style.color = "gray";
    }

    if(spcl.style.display !=="none"){
        spcl.style.display = "none";
        btnTwo.style.color = "gray";
    }

    if(pilott.style.display !== "none"){
        pilott.style.display = "none";
        btnThree.style.color = "gray";
    }

};
