function hello (name, age){
    console.log("hello "+name);
    console.log("i am " + age + " years old");
}
hello("bat", 25);
hello("suvd", 20);
// 2 toonee niilber oloh function
function niilber(too,too1){
    console.log(too+too1);
}
niilber(5, 30);
niilber(503215631,165156);
function urjver(too2){
    console.log(too2*too2);
}
urjver(8);
function nas(nas){
}
nas(5)
//DOM -> Document -> html deer bga bvh code
console.log(document);
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
// var name.style.stylename = "value";
h1.style.color = "red";
h1.style.fontsize = "10px";
// varname.innertext = "newtext"; inner = dotroh
h1.innerText = "hi";
 var h2 = document.getElementsByTagName('h2')[0];
 console.log(h2);
 function change(){
    h2.style.color="green";
    h2.innerText = "baihgui";
 }
 var p = document.getElementsByTagName('p')[0];
function change(){
    p.style.color = "yellow";
    p.innerText = "darsand bayrlaa";
    p.style.backgroundColor = "black";
}
var input = document.getElementsByTagName('input')[0];
var result = document.getElementsByTagName('p')[1];
console.log(input);
console.log(result);
function find(){
    result.innerText="tanii tursun on :" + (2025-input.value);
}
var input = document.getElementsByTagName('input')[1];
var result = document.getElementsByTagName('p')[2];
function find() {
    if(input.value>120){
        result.innerText = "hun iim naslah bolomjgui" +" ta 10 jileen daraa :" + (parseInt(input.value)+10);
        result.style.color = "red";
    }else if(input.value<0){
        result.innerText = "turuugui bna"
    }else{
        result.innerText = "tursun on: " + (2025-input.value) +
        " ta 10 jileen daraa :" + (parseInt(input.value)+10);
    result.style.color = "green";
    }
}
