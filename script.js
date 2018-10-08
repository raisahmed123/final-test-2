// write your JS code here

let key = " ";
function message(x){
    key = x;
    document.querySelector(".card-header").innerHTML += key;
}

function clrText(){
    document.querySelector(".card-header").innerHTML = "";
    alert("Your message has been send");


}

