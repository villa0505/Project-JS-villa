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

let productnew = [
    {
        img: "img",
        name: " bage",
        price: " 25$",
    },
    {
        img: "img",
        name: " bage",
        price: " 25$",
    },
    {
        img: "img",
        name: " bage",
        price: " 25$",
    },
    {
        img: "img",
        name: " bage",
        price: " 25$",
    },
    {
        img: "img",
        name: " bage",
        price: " 25$",
    },
    {
        img: "img",
        name: " bage",
        price: " 25$",
    },
]

function reanderProduct(){

    let make_title = document.querySelector(".tbody");
    make_title.remove();
    
    make_title = document.createElement("tbody");
    // make_title.setAttribute("id", "tbody");

    make_title.className = "tbody"

    table_container.appendChild(make_title);
   


    for (let index = 0; index < productnew.length; index++){

        let tr = document.createElement("tr");
        // tr.setAttribute("id", "make_tr");
        make_title.appendChild(tr);

        let td_one = document.createElement("td");
        
        td_one.textContent = productnew[index].img;

        tr.appendChild(td_one);
        

        // // td_one.setAttribute("id", "img");
       
        // let imgs = document.createElement("img");
        // imgs.src = productnew[index].img;
        // // imgs.setAttribute("id", "img");
       
        // td_one.appendChild(imgs)
       

        let td_two = document.createElement("td");
        td_two.textContent = productnew[index].name;
        tr.appendChild(td_two);
        

        let td_Three = document.createElement("td");
        td_Three.textContent = productnew[index].price;
        tr.appendChild(td_Three);

        let td_four = document.createElement("td");
        td_four.textContent = productnew[index].action;
        tr.appendChild(td_four);
        

        let make_edit = document.createElement("button");

        make_edit.className = "edit";

        make_edit.textContent = "edit";
        td_four.appendChild(make_edit);
        

        let make_delete = document.createElement("button");

        make_delete.className = "delete";

        make_delete.textContent = "delete";
        td_four.appendChild(make_delete);

    } 
}
reanderProduct()
