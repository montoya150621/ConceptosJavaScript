// En palabras mas simples una funcion son las instrucciones para realizar una tarea. 
// Pueden ser reutilizables

// Existen 2 formas de crear funciones en JavaScript

// Funcion declarativa

function sumar() {
    console.log(2 + 2);
};
sumar();


// Funciones expresivas

var sumar2 = function() {
    console.log(3 + 3);
};
sumar2();

/* -------------------------Hoisting-------------------------*/

// Si llamamos la función antes de declararla, el function expression va a funcionar bien, mientras que el otro nos va a marcar un error..

sumar();
function sumar() {
    console.log(2 + 2);
}

sumar2();
var sumar2 = function() {
    console.log(3 + 3);
}

// Eso pasa porque JavaScript se ejecuta digamos en 2 vueltas - Eso se le conoce como Hoisting , la primer vuelta registra todas las funciones y determina las variables, esta etapa se le llama de creación, 

// la segunda pasada es la que executa tu codigo, se llama de ejecución.

// Por lo tanto el primer código funciona porque function se registra primero y después se ejecuta el código.

// el segundo no funciona porque si bien es una función no es declarada como tal, lo ve más bien como una variable...

// Esto se le conoce como hosting que basicamente son esas 2 etapas (creación y ejecución)

// básicamente tu código se ejecuta asi:

var sumar2;
sumar2(); // a estas alturas es undefined...
sumar2 = function() {
    console.log(3 + 3); // pero como ya habiamos llamado la función, se queda como undefined
}

// Y esta es pregunta para obtener un trabajo como JS Developer...

/* ---------------Termina - Hoisting---------------*/

/* Funciones del Lenguaje
JavaScript cuenta con mas de 4 mil funciones. 
Java, python, PHP todos incluyen miles de funciones, estas funciones se les conoce como la libreria estandard.. 
En JavaScript no hay librería estandard, pero si hay funciones que son parte digamos del Core...
*/

alert('Hubo un error...'); // Te regresa una alerta
prompt('Cual es tu edad?'); // Le pide un valor al usuario
parseInt('1'); // Te convierte los strings a enteros


/* ----------------------Metodos - Funciones----------------------*/
// Aunque en realidad terminan siendo practicamente lo mismo, la forma en que se utilizan tiene que ver más que nada en el contexto que son utilizadas..

const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2) ); // Funcion
console.log(numero1.toString()); // Metodo

// Metodo: Añade un punto seguido del nombre 
// Funcion: Toma el valor en el parentesis ese valor se llama argumentos de la funcion.


// Funciones que toman parametros y argumentos...
function saludar(nombre, apellido) {
    console.log( `Hola ${nombre} ${apellido}`);
}
var nombre = prompt("¿Cual es tu nombre: ? ");
var apellido = prompt("¿Cual es tu apellido: ? ");
saludar(nombre, apellido);

/* ----------------------Comunicacion entre funciones----------------------*/
iniciarApp();

function iniciarApp() {
    console.log('Iniciando App...');
    segundaFuncion();
}


function segundaFuncion() {
    console.log('Desde la segunda función...')
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado con éxito ${usuario} `)
}

/* ----------------------Funciones que retornan valores----------------------*/
// Aveces en lugar de querer que nuestra funcion nos imprima algo en consola vamos a querer que no los returne en valores esta es una de esas formas

function sumar(a, b) {
    return a + b;
}
const resultado = sumar(1,2);

// Ejemplo un poco mas avanzado
let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
console.log(total);


const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);

/* Metodos de propiedades: Es decir son funciones con una sintaxis similar a las de un metodo */

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción con id: ${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`)
    }
}
reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlaylist('Heavy Metal');

// Arrow function

var aprendiendo = function() {
    console.log("Aprendiendo JavaScritp");
}

var aprendiendo = () => {
    console.log("Aprendiendo JavaScript");
}
var aprendiendo = () => "Aprendiendo JavaScript";


// Pequeño ejemplo
const aprendiendo = lenguaje => (`Estoy aprendiendo ${lenguaje}`); 
aprendiendo("python");
