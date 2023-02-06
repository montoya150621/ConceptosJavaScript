// Metodos para arrays

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Para saber si nuestro arreglo tiene un valor que ocupamos podemos usar.....
// forEach - Te va a recorrer todo el array

meses.forEach(mes => {
    if(mes === 'Enero') {
        console.log('Enero si existe...')
    }
})

// Includes - Te va a retornar true en caso de que lo contenga o false en caso de que no
const opcion1 = meses.includes('Enero');
const opcion2 = meses.includes("Diciembre");
console.log(opcion1, opcion2);

// Some en un arreglo tradicional...
const existe2 = meses.some( mes => mes === 'Febrero' );
console.log(existe2);


// Para saber en que posicion se encuentra nuestra variables tenemos dos opciones
// forEach
meses.forEach( (mes, index) => {
    if(mes === 'Abril') { // Si ponemos diciembre no lo va a encontrar...
        console.log(`Encontrado en el indice ${index}`);
    }
});


// FindIndex te dirá el indice es decir la ubicación del elemento en el arreglo...
// Nos retornara un -1 en caso de no contener la variable
const indice = meses.findIndex( mes => mes === 'Abril' );
console.log(indice);


// Unir dos arreglos

const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


// Unir 2 arreglos con concat...
const meses3 = meses1.concat(meses2);
console.log(meses3);

// Existe otra forma... que es con rest operator o spread operator..
const meses4 = [...meses1,...meses2 ]; // Tienes que asegurarte de que sean arrays cuando usas ...  'Otro mes'
console.log(meses4)










// En el caso de un arreglo de objetos... .includes no es la mejor opción, podrías utilizar uno llamado .some
// Some - Te va a retornar true en caso de que lo contenga o false en caso de que no
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

console.log(carrito.some( producto => producto.nombre === 'Celular'));


// Filter - Te va a filtrar las variables con las caracteristicas que estas buscando
// Al igual que te creara un array nuevo
var resultado = carrito.filter( producto => producto.precio > 400 ); // Todos los mayores a 400 - añadir  && producto.precio < 600
var resultado2 = carrito.filter( producto => producto.nombre === 'Celular'  ); // Traerte el celular
let resultado3 = carrito.filter(producto => producto.nombre !== 'Laptop'); // Todos menos la laptop

console.log(resultado);
console.log(resultado2);
console.log(resultado3);

// fiND te creará un arreglo nuevo en base al primer resultado que sea true...
// con un foreach seria algo asi...
let resultado = '';
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Bocinas') {
        resultado = carrito[index]
    }
});
console.log(resultado);


// con .find seria

const resultado2 = carrito.find( producto => producto.nombre === 'Bocinas');
console.log(resultado2);