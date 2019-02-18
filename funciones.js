'use strict'


// //declaracion de funcion
// saludar ();
// function saludar (){
//     console.log('hola');
// }



// //expresion de funcion

// const suma = function(){
    // console.log ( 1 + 2);
// }



// /**FUNCIONES CON PARAMETROS */

// function operacion (num1 , num2){
//     var res = num1+ num2;
//     console.log ("res", res);
// }

// operacion (5,8);
// operacion (10, 5);
// operacion (5,7);



// /** FUNCIONES DE RETORNO SIN PARAMETROS */

// function retorno1(){
//     var numero = 5;
//     return numero;
// }

// retorno1();
// var retorno= retorno1();
// console.log("sin retorno" + retorno);
// console.log("sin retorno" + retorno1());



// /** Funcion para realizar potenciacion */

// function calcular (base, exp){
//     var result = Math.pow(base, exp);
//     return result;
// }
//  var m = calcular(5,8);
//  console.log("el resultado es " + m);
//  console.log("el resultado es " + calcular (baseNum, expNum));
//  function validaNumero(){
//     let numeroo = prompt("Ingrese un numero");
//     while (isNaN(numeroo)){
//         alert ("Ingrese un número");
//         numeroo = prompt ("Ingrese un numero");
//     }
//     return numeroo;

//  }

//  var baseN=validaNumero();
//  var expN=validaNumero();
//  console.log("el resultado de:" + calcular(baseN,expN));



/**------------------------------------------------------------------------------ */


 /** Funcion para registrar un usuario donde el nombre del usuario no puede llevar
  * numeros, y la contraseña tiene que ser en numeros */

//  var user="";
//  var password="";

//  function ValidaUser(){
//  var user = prompt ("Ingrese su usuario");
//  while (!isNaN(user)){
//     alert ("Ingrese un usuario correcto");
//     user= prompt ("Ingrese su contraseña");
// }
// return user;
//  }

//  function ValidaPassword(){
//     password = prompt("Ingrese su contraseña");
//     while (isNaN(password)){
//         alert ("Ingrese una contraseña correcta");
//         password = prompt ("Ingrese su contraseña");
//     }
//     return password;
// }
// var us = ValidaUser();
// var pa = ValidaPassword();
// document.write ("Felicidades, su usuario ha sido registrado");

/**------------------------------------------------------------------------------ */


/**FUNCIONES CON PARAMETROS OPCIONALES */


// function operaciones(num1, num2, activo= "true"){

//     if (!activo)
// {
// console.log("suma: "(num1+num2));
// console.log("Resta: "(num1-num2));
// console.log("División: "(num1/num2));
// console.log("Producto: "(num1*num2));
// console.log("Activo: "+ activo);
// console.log("*********");
// }

// else{
//     document.write("Suma: "+ (num1+num2)+ "</br>");
//     document.write("Resta: "+ (num1-num2)+ "</br>");
//     document.write("División: "+ (num1*num2)+ "</br>");
//     document.write("Producto: "+ activo+ "</br>");
//     document.write("Activo: "+ (num1+num2)+ "</br>");
//     document.write("*********"+ "</br>");
// }
// }
// operaciones (2,3);
// operaciones(3,5,true);

/**------------------------------------------------------------------------------- */

// var nombre = prompt ("Ingrese su nombre");
// function conocerTrabajo (nombre, trabajo= "No esta tranajando"){
//     document.write(" Hola " + nombre+ " tu trabajo es: " + trabajo);

// }

// conocerTrabajo("Angélica", "Modelo");
// conocerTrabajo("yo");

/**------------------------------------------------------------------------------ */
/**FUNCIONES IIEP */

// (function(){
//     console.log("aqui estoy");
// })();

/**------------------------------------------------------------------------------ */

/** FUNCIONES CON PARAMETROS REST ySpread*/ 
/**mete todos los valores dentro de un array esto es rest */

function listarFrutas(fruta1, fruta2,...restFrutas){
    console.log("fruta1", fruta1);
    console.log("fruta2", fruta2);
    console.log("restFrutas", restFrutas);
}
listarFrutas("Naranja", "Manzana", "Sandia", "Durazno", "Coco");

/*Pararmetros tipo spread* */

function listarFrutas2(fruta1, fruta2,...restFrutas){
    console.log("fruta1", fruta1);
    console.log("fruta2", fruta2);
    console.log("restFrutas", restFrutas);
}
var frutas =("Melon", "Uva", "Kiwi");
listarFrutas2(...frutas, "Naranja", "Manzana", "Sandia", "Durazno", "Coco");




/**Funciones normales */


function sumar (num1, num2){
    var res = num1+num2;
    return res;
}
var resultado= sumar(2,5);
console.log("resultado de sumar con la funcion sumar", resultado);



/**Funcion anonima */

var resultado= function(num1, num2){
    var res= num1+num2;
    return res;
}
console.log("resultado de sumar con la funcion anonima", resultado(10,20));


/**Funcion Lamda */

var resultado = (num1, num2) => {
    var res = num1 +num2;
    return res;
}
console.log("resultado de sumar con la funcion lamda", resultado(90,30));

/**Ejemplo */

function viajarMundo (destino){
    let viajar = "viajando por" + destino;
    return viajar;
}
let destino = viajarMundo("Londres");
console.log(destino)


let destino2 = function(destino){
    let viajar= "viajando por"+ destino;
    return viajar;
}
console.log(destino2("Paris"));


let destino3 = (destino) => "Viajando por"+ destino;
console.log(destino3("EUA"));



/**================================================================== */

/**FUNCIONES CALLBACKS */

/**================================================================== */



function adicion( num1, num2, suma, prod, resta){
    console.log("num1", num1);
    console.log("num2", num2);
    var res = num1 + num2;
    suma(res);
    prod(res);
    resta(num1, num2);
}

adicion(5,7, function(total){
             console.log("La suma es: " +total);
             }, function(total){
                 console.log("el doble de: "+ total + "es "+total*2);
             },function(n1, n2){
                 console.log("La resta de: " +n1+ "-" +n2+ "=" + (n1-n2));
             });





adicion 
    
