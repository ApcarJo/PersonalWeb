
let nombre = document.getElementsByClassName("nombre").value = "Johnny Bravo";
var product;

let ite = nombre.length;
console.log(`Hola ${nombre}, tu nombre tiene ${length} letras`);

let arrayName = "Bienvenido!";


var square = document.getElementsByClassName("square");
var n = square.length;
let i=0;
var j=0;

function sub(){
    product = document.getElementsByName("nombre")[0].value;
    let arrayName2 = Array.from(product);
    
    for(var i = 0; i < arrayName2.length; i ++) { //Implementar do while para borrar el resto de la cadena -- DONE
        (function (i) {
            setTimeout(function () {
                square[i].innerHTML = arrayName2[i];
            }, 100*i);
          })(i);
    }
    while (i<n){
            square[i].innerHTML = "";
            i++;
    };
};

// product = document.getElementsById("nombre")[0].value;
// let arrayName2 = Array.from(product);

//     product.addEventListener("keydown", (e) {
//         if (e.keyCode === 13) {

//             for(var i = 0; i < arrayName2.length; i ++) {
//                 (function (i) {
//                     setTimeout(function () {
//                         square[i].innerHTML = arrayName2[i];
//                     }, 100*i);
//                 })(i);
//             }
//             while (i<n){
//                     square[i].innerHTML = "";
//                     i++;
//             };
//         }
//     });
