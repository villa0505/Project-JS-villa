const dialog= document.querySelector("dialog");
let tobuy = document.querySelectorAll(".buy");


function hide(element){
    element.style.display = "none";
}

function show(element){
    element.style.display = "block";
}

hide(dialog);

function buy(){
    show(dialog)
}
