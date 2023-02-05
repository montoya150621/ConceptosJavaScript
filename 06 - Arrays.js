// Al igual que los objetos los arreglos forman una parte muy importante en cualquier lenguaje de programación.

// ------------------------------------- Ejemplos de arrays -------------------------------------

const numeros = [10,20,30,40,50];
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');
const deTodo = ["Hola", 10, true, "si", null, { nombre: 'Juan', trabajo: 'Programador'}, [1,2,3,4]];


/* Saber cuantos elementos tiene nuestro array */

var arreglo = [1, 2, 3, 4, 5, 6];
console.log(arreglo.length);

/* Forma de recorrer todos nuestro array */

for(let i=0; i<arreglo; i++){
    console.log(arreglo[i]);
};

// Agregar contenido a nuestro array - Se puede agregar desde numeros, strings, objetos e incluso mas arrays
// .push

const carrito = []; // Se crea el array
const objeto = {
    nombre: "Netflix", 
    mensualidad: 350, 
    usuarios: "5 Personas"
};
carrito.push(objeto);
carrito.push("Hola", "mundo",1 ,2, 3);
console.log(carrito);

// ------------------------------------- Eliminar contenido de nuestro array -------------------------------------

// Eliminar el primer elemento y poder asignarlo a una variable
carrito.shift();
var resultado = carrito.shift;

// Eliminar el ultimo elemento
carrito.pop;
resultado = carrito.pop;

// Eliminar elemento conforme parametros desde donde asta donde si el segundo parametro es 0 quiere decir que unicamente eliminaremos el que esta en la posicion del primer parametro

carrito.splice(1,0);

// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:

const valores = [1,2,3,4,5,6];
const [uno, dos, tres, cuatro, ,seis] = valores;

console.log(uno);
console.log(dos);
console.log(tres);
console.log(cuatro);
console.log(seis);


// ------------------------------------- Recorrer arreglos -------------------------------------

// Muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo...
const productos = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
];
const nuevoArray = productos.map( function(producto) {
    return  `Articulo: ${ producto.nombre } Precio: $ ${producto.precio} `;
 });

console.log(nuevoArray);

// for

for(let i = 0; i < productos.length; i++ ){
    console.log( `Articulo: ${ productos[i].nombre } Precio: $ ${productos[i].precio} ` )
};

// forEach

productos.forEach( function(producto) {
    console.log( `Articulo: ${ producto.nombre } Precio: ${producto.precio} ` )
})