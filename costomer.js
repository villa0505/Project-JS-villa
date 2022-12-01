const dialog = document.querySelector("dialog");
// let tobuy = document.querySelectorAll(".buy");
const Card_containers  = document.querySelector("Card_container");

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
function cancel(){
    hide(dialog)
}
//================create_Card=================
let products = [
    {
        imgs:"../img/images.jpg", nameProduct: "bags", price: "25$"
    },
    {
        imgs:"../img/images.jpg", nameProduct: "bags", price: "25$"
    },
    {
        imgs:"../img/images.jpg", nameProduct: "bags", price: "25$"
    },
    {
        imgs:"../img/images.jpg", nameProduct: "bags", price: "25$"
    },
    {
        imgs:"../img/images.jpg", nameProduct: "bags", price: "25$"
    },
    {
        imgs:"../img/images.jpg", nameProduct: "bags", price: "25$"
    },
    {
        imgs:"../img/images.jpg", nameProduct: "bags", price: "25$"
    },
    {
        imgs:"../img/images.jpg", nameProduct: "bags", price: "25$"
    }
]

let main = document.createElement("main");
console.log(main)
function CardProduct(){
    for ( value of products){
        let div = document.createElement("div");
        div.className = "Card_container";
        main.appendChild(div)
        
        let div1 = document.createElement("div");
        div1.className = "Shirt";
        div.appendChild(div1)
        
        let div2 = document.createElement("div");
        div2.className = "T-shirt";
        div1.appendChild(div2);
        
        let imgs = document.createElement("img");
        imgs.src = value
        div2.appendChild(imgs)
    }
}
CardProduct()
