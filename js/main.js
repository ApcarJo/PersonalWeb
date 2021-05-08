
let nombre = document.getElementsByClassName("nombre").value = "Johnny Bravo";
var product;

let ite = nombre.length;
console.log(`Hola ${nombre}, tu nombre tiene ${length} letras`);

let arrayName = Array.from(nombre);

console.log(arrayName);
console.log(arrayName[0]);
console.log(arrayName[4]);

var elms = document.getElementsByClassName("square");
var n = elms.length;
let i=0;


function changeColor() {
        for(var i = 0; i < ite; i ++) {
        (function (i) {
            setTimeout(function () {
                elms[i].innerHTML = arrayName[i];
                elms[i].style.backgroundColor = color;
            }, 100*i);
          })(i);
        }
}

function sub(){
    product = document.getElementsByName("nombre")[0].value;
    let arrayName2 = Array.from(product);
    for(var i = 0; i < product.length; i ++) {
        (function (i) {
            setTimeout(function () {
                elms[i].innerHTML = arrayName2[i];
                elms[i].style.backgroundColor = color;
            }, 100*i);
          })(i);
        }
  };

for(var w = 0; i < n; w ++) {
    elms[w].onclick = function() {
        changeColor();
    };
    // elms[w].onmouseout = function() {
    //     changeColor();
    // };
}