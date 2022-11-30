const create_product = document.querySelector("dialog");
const table_container = document.querySelector("table");
console.log(table_container)
// console.log(create_product)

function hide(element){
    element.style.display = "none";
}

function show(element){
    element.style.display = "block";
}


hide(create_product)

function add(){
    show(create_product)
}

function cancel(){
    hide(create_product)
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

        //dataset for remove
        tr.dataset.index =index
        
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
        
        //for edit
        make_edit.addEventListener("click", editProduct);
        


        let make_delete = document.createElement("button");

        make_delete.className = "delete";

        make_delete.textContent = "delete";
        td_four.appendChild(make_delete);

        // for remove
        make_delete.addEventListener("click", removeProduct);
        

    } 
}
reanderProduct()


function savePorduct() {
    localStorage.setItem("productnew",JSON.stringify(productnew));
    console.log(localStorage);
}
function loadProduct(){
    let productsStorage = JSON.parse(localStorage.getItem("productnew"));
    if (productsStorage !== null){
        productnew = productsStorage
    }
}

let index = 0
function Oncreate(){
    hide(create_product);
    
    let newproduct = {};

    newproduct.img = document.querySelector("#chose_img").value;
    newproduct.name = document.querySelector("#chose_name").value;
    newproduct.price = document.querySelector("#chose_price").value;
    productnew.push(newproduct);
    savePorduct()
    reanderProduct()
}
savePorduct()


function editProduct(event){
    // document.querySelector("menu").lastElementChild.textContent = "Edit";
    let index = event.target.parentElement.parentElement.dataset.index;

    document.querySelector("#chose_img").value = productnew[index].img;
    document.querySelector("#chose_name").value = productnew[index].name;
    document.querySelector("#chose_price").value = productnew[index].price;
    
    show(create_product)
}




function removeProduct(event) {
    let index = event.target.parentElement.parentElement.dataset.index;
    productnew.splice(index, 1);
    savePorduct();
    reanderProduct();
  }

  


