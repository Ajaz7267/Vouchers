document.querySelector('#local').addEventListener("click",getData);

let Data =JSON.parse(localStorage.getItem("user"))||[];
function getData(e){
e.preventDefault();
let element=[{
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    amount: document.getElementById("amount").value,
}]
document.getElementById("name").value="";
document.getElementById("email").value="";

document.getElementById("address").value="";
document.getElementById("amount").value="";



localStorage.setItem("user",JSON.stringify(element));



}