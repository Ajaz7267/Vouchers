
let Data =JSON.parse(localStorage.getItem("user"))||[];

const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

async function usersData(){
   try{
    let res = await fetch(url);
    let data =await res.json()
    append(data[0].vouchers);
    console.log(data[0].vouchers);
   }
   catch(err){
   console.log(err);

   }
}
usersData()
function append(data){
    let container = document.getElementById("voucher_list")

    data.forEach(function(el){
        let div =document.createElement("div")
        div.setAttribute("class","voucher")

        let img = document.createElement("img")
        img.src =el.image

        let name = document.createElement("name")
        name.innerText=el.name

        let price = document.createElement("price")
        price.innerText=el.price

        let btn = document.createElement("button");
        btn.setAttribute("class","buy_voucher");
        btn.innerText="Buy";
        btn.addEventListener("click",function(){
            buyProduct(el);
        })

        div.append(img,name,price,btn);
        container.append(div);
    });
}

function buyProduct(el){
    voucherData.push(el)
    alert("applied voucher successfully")
    localStorage.setItem("purchase",JSON.stringify(voucherData));
    // window.location.reload();
}
let voucherData =JSON.parse(localStorage.getItem("purchase"))||[];



// key="purchase"