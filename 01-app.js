/*
Las variables son una caracteristica de cualquier lenguaje de programación existen 3 formas de crear variables en JavaScript, en nuevas versiones solo se utilizan 2:

var: Las variables declaradas con var tienen un alcance global o de función, lo que significa que pueden ser accedidas desde cualquier parte del código dentro de la misma función o del ámbito global. Además, las variables declaradas con var se pueden reasignar en cualquier momento.

let: Las variables declaradas con let tienen un alcance de bloque, lo que significa que solo están disponibles dentro del bloque en el que fueron declaradas. Esto las hace más seguras y fáciles de usar en comparación con las variables declaradas con var. Además, las variables declaradas con let se pueden reasignar.

const: Las variables declaradas con const también tienen un alcance de bloque y no se pueden reasignar. Una vez que se ha asignado un valor a una variable declarada con const, su valor no puede ser cambiado a lo largo del programa.

En general, se recomienda usar const para variables que no cambian y let para variables que pueden cambiar. var se utiliza en menor medida en la programación actual y solo se recomienda en casos muy específicos.

var - let
*/


// Variable es un lugar en memoria
// Es una representacion de algun lugar en la memoria para guardar datos

// Iniciar variables
var producto;
// Asignarle valor
producto = 'Audifonos Gamers';
// Iniciar variable y asignarles valor
var producto = 'Audifononos Gamers'; 

// Inicializar multiples variables
var producto = 'Computadora', 
    disponible = true, 
    categoria = 'Computadoras';

    
// Variable tipo objeto
var persona = {
  nombre: "Fernando",
  edad: 30
}
// Acceder a un valor especifico en nuestro array(objeto)
var elementos = ["Computadora","Celular"];
console.log(elementos[1]);
// Nos entregara el valor de celular