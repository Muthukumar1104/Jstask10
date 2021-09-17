function Myfn(){
let fruitp = JSON.parse(localStorage.getItem("fruits"));
function Myfun(data){
   return `<tr>
           <td></td>
           <td>${data.fruit_name}</td>
           <td>${data.price}</td>
           </tr>`
}
let output = fruitp.map(Myfun);
document.getElementById("body").innerHTML = output.join("");
}

function homefn(){
    window.location.href = "index.html"
}

function billfn(){
    window.location.href = "bill.html"
}