var numero = 0;
var txt1 ="Metodos para procesar textos, imagenes, y muchos más textos";
var txt2 = "Utiles en archivos de texto";
var ciudades = ["Tunja", "Bogotá", "Cali", "Medellin", "Pereira"]
var email = "sena@misena.edu.co";


/**LONGITUD DE STRING */
document.write("La longitud de la variable num es: " + String(numero).length);
document.write("La longitud de txt1 es: " + txt1.length+ "<br>");
document.write("La longitud de txt2 es: " + txt2.length+ "<br>");
document.write("La longitud de ciudades es: " + ciudades.length+ "<br>");

/**CONCATENACION DE STRING */
document.write("Concatenando txt1 y txt2" + txt1.concat(txt2));

/**PASANDO A MAYUSCULAS */
document.write("Pasando a mayusculas txt1"+ txt1.toUpperCase());

/**PASANDO A MAYUSCULAS */
document.write("Pasando a mayusculas txt1"+ txt2.toLowerCase());

/**PRIMER INDICE DE TEXTOS */
document.write("Primera coincidencia de textos es: " + txt1.indexOf("textos"));
document.write("Primera coincidencia de textos es: " + txt1.lastIndexOf("textos"));

/**BUSCAR UNA PALABRA */
document.write("Buscar una palabra" + txt2.search("archivo") +"<br>")
document.write("Recortar caractter del 10 al 15" + txt2.slice(10,15)+"<br>")
document.write("Buscar inicio de letra" + txt2.startsWith("h")+"<br>")
document.write("buscar fin de palabra" + txt2.endsWith("o")+"<br>")
document.write("buscar palabra especifica" + txt1.includes("para")+"<br>")
document.write("buscar @"+ email.includes("@"));


/**CONVIRTIENDO ARREGLOS */
Console.log("convirtiendo txt2 a arreglo" + txt2.split(""));


