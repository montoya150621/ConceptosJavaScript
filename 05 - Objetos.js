// Los objetos son la pieza principal en JavaScript, en lugar de crear diferentes variables podemos crear un objeto:

const nombreProducto = "Monitor 20 Pulgadas";
var precio = 30;
const disponible = true;

var producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 30, 
    disponible: true
};

// Acceder a las propiedades de un objeto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Agregar propiedades a un objeot
producto.imagen = "imagen.jpg";

// Eliminar propiedades a un objeto
delete producto.nombre;

// Formas de extraer valores de un objeto
// 1.- Primera forma

var nombre = producto.nombre;
console.log(nombre);

// 2.- Segunda forma

var {nombre} = producto;
var {nombre, precio} = producto;

// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        medidas: {
            peso: '1kg',
            medida: '1m'
        }, 
        fabricacion: {
            pais: 'China'
        }
    }
};

// Formas de acceder a la informacion de mi producto anidado
console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);
console.log(producto.informacion.medidas.peso);


// Una variable const no funciona igual al momento de hablar objetos, en el caso de objetos veremos que si se pueden modificar

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
};
producto.disponible = false; 
console.log(producto); // No nos marca ningun error

// Para evitar que nuestro objeto se pueda modificar hay dos opciones freeze y seal

// 1.- freeze
// No podemos agregar propiedades
// No podemos eliminar propiedades
// No podemos moficar propieades
Object.freeze(producto);

//  2.- Seal
// No podemos eliminar
// No podemos agregar
// Si podemos modificar nuestras propiedades
Object.seal(producto);


// ------------------- Forma de unir dos objetos -------------------

const producto = {
    nombre: "Monitor 20 pulgadas", 
    precio: 30, 
    disponible: true
};
const medidas = {
    peso: "1 kg", 
    medida: "1 metro"
};
// 1.- Primer forma
var resultado = Object.assign(producto, medidas);
// 2.- Segunda forma
var resultado = { ...producto, ...medidas};


/* ------------------- Palabras recervada this ------------------- */
const producto = {
    nombre: "Monitor 20 Pulgadas", 
    precio: 300, 
    disponible: true, 
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
};

producto.mostrarInfo();

/* ------------------- Iteradores de objetos como ciclo for ------------------- */
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

// nos devolverá un arreglo con los keys del objeto
console.log(Object.keys(producto));
// nos devolverá un arreglo con los valores del objeto
console.log(Object.values(producto));
// Entries nos va a retornar una matriz de llaves y valores
console.log(Object.entries(producto));