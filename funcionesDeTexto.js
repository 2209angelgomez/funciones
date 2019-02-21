// var numero = 0;
// var txt1 ="Metodos para procesar textos, imagenes, y muchos más textos";
// var txt2 = "Utiles en archivos de texto";
// var ciudades = ["Tunja", "Bogotá", "Cali", "Medellin", "Pereira"]
// var email = "sena@misena.edu.co";


// /**LONGITUD DE STRING */
// document.write("La longitud de la variable num es: " + String(numero).length);
// document.write("La longitud de txt1 es: " + txt1.length+ "<br>");
// document.write("La longitud de txt2 es: " + txt2.length+ "<br>");
// document.write("La longitud de ciudades es: " + ciudades.length+ "<br>");

// /**CONCATENACION DE STRING */
// document.write("Concatenando txt1 y txt2" + txt1.concat(txt2));

// /**PASANDO A MAYUSCULAS */
// document.write("Pasando a mayusculas txt1"+ txt1.toUpperCase());

// /**PASANDO A MAYUSCULAS */
// document.write("Pasando a mayusculas txt1"+ txt2.toLowerCase());

// /**PRIMER INDICE DE TEXTOS */
// document.write("Primera coincidencia de textos es: " + txt1.indexOf("textos"));
// document.write("Primera coincidencia de textos es: " + txt1.lastIndexOf("textos"));

// /**BUSCAR UNA PALABRA */
// document.write("Buscar una palabra" + txt2.search("archivo") +"<br>")
// document.write("Recortar caractter del 10 al 15" + txt2.slice(10,15)+"<br>")
// document.write("Buscar inicio de letra" + txt2.startsWith("h")+"<br>")
// document.write("buscar fin de palabra" + txt2.endsWith("o")+"<br>")
// document.write("buscar palabra especifica" + txt1.includes("para")+"<br>")
// document.write("buscar @"+ email.includes("@"));


// /**CONVIRTIENDO ARREGLOS */
// Console.log("convirtiendo txt2 a arreglo" + txt2.split(""));



// var txt3 = "   Procesando textos          ";
// document.write("Valor de txt3"+ "<pre>" + txt3 + "</pre>");

// var sinpre =  txt3.trim(); 
// document.write("Valor de txt3"+ "<pre>" + sinpre + "</pre>");

// var remplazar = txt3.replace("imagenes","video");
// document.write("<h2> Remplazando palabras" + remplazar + "</h2>");







// //-------------------------------------------------------------------//

//    //                          /**ARREGLOS */

// //-------------------------------------------------------------------//

// //primera forma para hacer un array//
// var nombres = new Array("Angélica", "Lilo");
// document.write(nombres[0]);

// //Segunda forma para hacer un arrray//
// var nombres2 = new Array();
// nombres2[0]= "Angèlica";
// nombres2[1]= "wiiii";

// //Tercera forma para hacer un array//
// var nombres3= ["jhon", "Angèlica"];




// //------------------------------------------------------------------//

// //                       METODOS PARA ARREGLOS//

// //------------------------------------------------------------------//


// var programacion = ["js", "ruby", "java", "php", "C#"];
// var peliculas = ["avengers", "deadpool"];
// programacion.push("Swift");
// function imprimirArreglo(arreglos,opcion){
//     document .write("<h1> Imprimiendo arreglo de " + opcion + "</h1>");
//     document.write("<ul>");
//     for (const key in arreglos) {
//         document.write("<li>" + arreglos[key] +  "</li>");
//     }
//     document.write("</ul>");
// }
// imprimirArreglo(programacion, "Lenguajes de programacion");

// imprimirArreglo(peliculas, "Peliculas de superheroes");
// peliculas.pop();
// imprimirArreglo(peliculas, ("peliculas de seperheroes, borrando el ultimo"))

// // var indice = prompt ("ingrese el indice");
// // var arreglo = prompt ("ingrese"+ " l" + "para programacion o" + " p" + " para peliculas");

// // while (arreglo=!"l" || arreglo!="p"){
// //     alert ("Ingrese una letra valida")

// // }
// // while (isNaN(indice)){
// //     alert ("ingrese un numero");
// //     indice= parseInt (prompt("ingrese el numero del arreglo"));
// //     arreglo= prompt ("ingrese")
// // }


// var categorias = ["comedia", "terror", "accion", "ficcion" ];
// var peliculas = [ "X-men", "Toy Story", "Rapidos y furiosos", "titanic"];
// var cine = [categorias, peliculas];
// console.log("cine", cine);
// console.log(cine[0][3]);
// console.log(cine[1],[2]);









//crear un arreglo multimensionala de 4 filas y 3 columnas, cada columna corresponde
// al genereo de una pelicula ejemplo: la columna 0=ficcion, columna1=terror, columna 2=accion, 
// es asi como se tendrà que imprimir

// ficcion: jumanji                                   terror:xxxx                 accion:xxxxx
// ficcion: harry potter                              terror:xxxx                 accion:xxxxx
// ficcion: el dia de la independencia                terror:xxxx                 accion:xxxxx
// ficcion: x-men                                     terror:xxxx                 accion:xxxxx

var categorias = ["Ficción", "Terror", "Acción" ];
var peliculas = [ "Interestelar", "Elysium", "Misión rescate", "Chappie", "El payaso de la muerte", "El conjuro", "la monja", "Rec", "Rapidos y furiosos", "Londres bajo fuego", "Duro de matar", "Boume"];
var cine = [categorias, peliculas];


    document.write( "<li>" + cine[0][0] + ": " + cine[1][0] + " </li>" );
    document.write("<li>" + cine[0][0] + ": " + cine[1][1] + " </li>");
    document.write("<li>" + cine[0][0] + ": " + cine[1][2] + " </li>");
    document.write("<li>" + cine[0][0] + ": " + cine[1][3] + " </li>" + "<br>");


    document.write("<li>" + cine[0][1] + ": " + cine[1][4] + " </li>");
    document.write("<li>" + cine[0][1] + ": " + cine[1][5] + " </li>");
    document.write("<li>" + cine[0][1] + ": " + cine[1][6] + " </li>");
    document.write("<li>" + cine[0][1] + ": " + cine[1][7] + " </li>" + "<br>");

    document.write("<li>" + cine[0][2] + ": " + cine[1][8] + " </li>");
    document.write("<li>" + cine[0][2] + ": " + cine[1][9] + " </li>");
    document.write("<li>" + cine[0][2] + ": " + cine[1][10] + " </li>");
    document.write("<li>" + cine[0][2] + ": " + cine[1][11] + " </li>" + "<br>");
    






        for (let index = 0; index < cine.length; index++) {
        document.write( "<li>" + cine[0][1] + ": " + cine[1][3] + " </li>" );

        for (let index = 0; index < array.length; index++) {
            document.write( "<li>" + cine[0][2] + ": " + cine[1][2] + " </li>" );
        }
            
        }   

        document.write("<h1>Recorriendo el arreglo con un FOR EACH</h1>");
        cine.forEach(element => {
            document.write(element)
            
        });
   
