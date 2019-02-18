
var pendientes = ["Planear", "Proyectar", "Ejecutar", "presupuestar y liquidar"]; 
console.log("Arreglos pendientes " + pendientes)


var carrito = [
{
id: 1,
articulo: "guantes" },
{
id: 2,
articulo: "chanclas" },
{
id: 3,
articulo: "palo" },
{
id: 4,
articulo: "escoba" },
{
id: 5,
articulo: "recojedor" },
{
id: 6,
articulo: "ollas" },
{
id: 7,
articulo: "platos" }
];


var automovil = 
{
marca: "Chevrolet", 
modelo: "Camaro", 
anio: 2014,
color: "Negro"
};


//----------------------------------------------------------------//
document.write("<h1>Recorriendo el arrelgo con un FOR Classic</h1>"); 
document.write("<ul>");
for (let index = 0; index < pendientes.length; index++) {
document.write("<li>"+pendientes[index]+"</li>") }
document.write("</ul>");


//----------------------------------------------------------------//
document.write("<h1>Recorriendo el arreglo con un FOR IN</h1>"); 
document.write("<ul>");
for (const key in pendientes) {
document.write("<li>"+pendientes[key]+"</li>"); }
document.write("</ul>");

//----------------------------------------------------------------//
document.write("<h1>Recorriendo el arreglo con un FOR EACH</h1>"); 
document.write("<ul>");
pendientes.forEach(element => {
document.write("<li>"+element+"</li>"); });
document.write("</ul>");

//----------------------------------------------------------------//


document.write("<h1>Recorriendo el arreglo con un FOR OF</h1>"); 
document.write("<ul>");
for (const iterator of pendientes) {
document.write("<li>"+iterator+"</li>"); }
document.write("</ul>");
//----------------------------------------------------------------//


document.write("<h1>Recoriendo el objeto Automovil con un FOR IN</h1>") 
document.write("<ul>");
for (const key in automovil) {
document.write("<li>" + key + ": "+ automovil[key]+" </li>");}
document.write("</ul>"); 
//----------------------------------------------------------------// 


document.write("<h1>Recorriendo el objeto Automovil con un FOR OF</h1>")
document.write("<ul>");
for (const iterator of Object.values(automovil)) {
document.write("<li>"+iterator+ "</li>"); }
document.write("</ul>");
//----------------------------------------------------------------//


document.write("<h1>Recorriendo el objeto Automovil con un FOR EACH </h1>")
document.write("<ul>");
Object.values(automovil).forEach(element => {
document.write("<li>"+element+ "</li>"); }); 
document.write("</ul>"); 

/**------------------------------------------------------------- */

document.write("<h1>Recorriendo el objeto carrito de compras con FOR CLASSIC</h1>") 
document.write("<ul>");
for (let index = 0; index < carrito.length; index++) {
document.write("<li>" + carrito[index] + "</li>") }
document.write("</ul>");

//--------------------------------------------------------------//


document.write("<h1>Recorriendo el objeto carrito de compras con FOR IN </h1>");
document.write("<ul>");
for (const key in carrito) {
    document.write("<li> Elemento " +key+ " del carrito </li>");
    document.write("<ul>");
    Object.values(carrito[key]).forEach(element => {
        document.write ("<li>"+ element+ "</li>");
    });
    document.write("</ul></li>");
}