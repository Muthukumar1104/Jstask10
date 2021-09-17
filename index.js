function addfn(){
	const fruits = {
            "fruit_name":"",
            "price":"",
            "id":"",
} 

fruits.fruit_name = document.getElementById('frname').value;
fruits.price = document.getElementById('price').value;
fruits.id = Math.round(Math.random() * 100000000);

var frname = document.getElementById('frname').value
let fruitList= JSON.parse(localStorage.getItem("fruits"))
let Getfruits = fruitList && fruitList.length !==0 ?fruitList:[]
let CheckValue = Getfruits.find(data=>data.fruit_name === fruits.fruit_name)
let CheckStatus = fruits.fruit_name === "" || fruits.price === ""
if (CheckStatus) {
alert("Enter the field!");
}
else if(!CheckValue){
var fruitp = JSON.parse(localStorage.getItem('fruits'));
fruitp !== null ? localStorage.setItem('fruits', JSON.stringify([...fruitp,fruits])) :localStorage.setItem('fruits', JSON.stringify([fruits]));
alert("Added successfully!");
document.getElementById('frname').value = "";
document.getElementById('price').value = "";
}
else{
    alert(`${fruits.fruit_name} item already exist!`)
}

}

function listfn(){
    window.location.href = "list.html";
}

function billfn(){
    window.location.href = "bill.html";
}