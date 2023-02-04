// Los Strings o cadenas de texto representan un Texto que se puede asignar a una variable

// Formas de crear un string

var producto = "Television";
var producto = string("Television");

// Forma menos comun
var producto3 = new String('Monitor 30 Pulgadas'); // Esto crea un objeto cadena

// Reglas para escribir strings
var producto2 = "Monitor 20 Pulgadas"; // Utiliza comillas sencillas o dobles pero no las mescles


// -------------------------------- Metodos para los strings -------------------------------- 

// .lenght: Conocer la extension de una cadena.
console.log(producto.length);

// IndexOf
console.log(producto.indexOf("Pulgadas")) // Nos dirá que posición tiene el texto en caso de no encontrarlo nos marcara un -1.

// Includes Retorna true o false
console.log(producto.includes('Monitor')); // Conocer si un texto existe

// trim: Elimina los espacios en blanco tanto del principio como del final
console.log(producto.trim());

// .toUpperCase() - Todo a mayusculas
const producto = 'Monitor 24 pulgadas ';
console.log(producto.toUpperCase() );

// .toLowerCase() - Todo a minusculas
console.log(producto.toLowerCase() );

// .toString() - Cambiar de numeros a strings
const cantidad = 200;
console.log(cantidad);
console.log(cantidad.toString());

// Replace - Te permite remplazar
const producto = 'Monitor 20 Pulgadas';
console.log(producto.replace("20", "24"));

// Split - Convertir un string a una lista
const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

// Formas de concatenar dos variables
var nombre = "Fernando";
var pais = "Antartida";

console.log(`Mi nombres es ${nombre} y soy avitante de la ${pais}`);
