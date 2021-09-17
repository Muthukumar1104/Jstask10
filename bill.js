let fruitp = JSON.parse(localStorage.getItem("fruits"))
   var empArr = [];
function myfn(){
   function Myfun(data){
   return `<option>${data.fruit_name}</option>`
}
   let output = fruitp.map(Myfun).join("");
   document.getElementById("variety").innerHTML += output;

}
function addfn(){
   var fruitname = document.getElementById("variety").value
   var quantity = document.getElementById('quantity').value;
   if (quantity == "") {
     alert("Enter quantity field!");
   }
   else{
   let fruit = fruitp.filter(data=>data.fruit_name === fruitname).map(data=>({name:fruitname,quantity:quantity,price:data.price*quantity}))
   empArr = [...empArr,...fruit]
   function Myfun(data){
   return `<tr>
           <td>${data.name}</td>
           <td>${data.quantity}</td>
           <td>${data.price}</td>
           </tr>`
   }
   let output = empArr.map(Myfun).join("");
   document.getElementById("body").innerHTML = output;

   let total = empArr.map(data=> Number(data.price))
   document.getElementById('amount').value = total.reduce((acc,curr)=>acc+curr);
}
}

function homefn(){
    window.location.href = "index.html";
}

function listfn(){
    window.location.href = "list.html"
}