// Algunas veces vamos a desear ejecutar un codigo hasta que una condicion se cumpla o se deje de cumplir.
// Los For Loops tienen esa caracteristicas se ejecutan hasta que el codigo deja de cumplir esa condicion o en su defecto el ciclo while

// For loop

// for(inicializar ; condicion ; incremento){ Tarea a realizar };

for(let i = 0; i <= 10; i += 2) {
    console.log(`Numero:  ${i} `);
}

// Problema: Realizar un codigo que diga si un numero es par o impar
for(let i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log(`Numero ${i} ES PAR `);
    } else {
        console.log(`Numero ${i} ES IMPAR `);
    }
}
    


// Los for son útiles cuando quieres iterar en un array un ejemplo es el siguiente

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

for(let i = 0; i < carrito.length; i++ ) {
    console.log(`El producto Numero ${i}: Con el nombre ${carrito[i].nombre} tiene el precio de $${carrito[i].precio} pesos`);
}

// En este caso nuestro for loop corre hasta que una condición se cumple, ahora como este arreglo 
// el usuario se va a encargar de llenarlo, que el carrito tenga elementos, un for loop ejecutará 
// el código hasta que lleguemos al final del carrito...


/*********************************** Break - Continue ***********************************/
// Veamos lo que es break y continue, break cortará la ejecución del for loop, mientras que continue nos permitirá interceptar digamos un elemento y continuar su ejecucicón...

// Break

for(let i = 0; i <= 10; i++) {
    if( i === 5) {
        console.log('Estamos en el 5... FIN.');
        break;
    }
    console.log(`Numero:  ${i} `);
}

// Continue

for(let i = 0; i <= 10; i++) {
    if( i === 5) {
        console.log('Estamos en el 5... CONTINUAR....');
        continue;
    }
    console.log(`Numero:  ${i} `);
}

// RETO - Fizz Buzz
// Fizz Buzz es un reto que complica mucho a los programadores, básicamente si un número es múltiplo de 3 
// imprimes FIZ, si es múltiplo de 5 imprimes BUZZ y si es múltiplo de ambos como 15, 30, 45 
// debes imprimir FIZZ BUZZ, intenta realizarlo y si no veamos como realizarlo en el próximo video...

for(let i = 1; i <= 30; i++){
    if(i%3 == 0 && i%5 == 0) {
        console.log(`${i} fizz buzz`)
    } else if(i%3 == 0){
        console.log(`${i} fizz`)
    } else if(i%5 == 0) {
        console.log(`${i} buzz`)
    } else{
        continue; 
    }
};

// Iterador while-loop
// El while se ejecuta mientras una condición sea verdadera.
let i = 0;
while (i < 10) { // condicion
    console.log(`Numero: ${i}`); // Tarea
    i++; // incremento
}

// Iterador do-while
// A diferencia del for y del while, el do while se ejecuta al menos una vez, y después verifica si la condición se cumple...
// Do While va a correr al menos una vez.
let x = 0; // probar con 1000

do {
    console.log(`Numero: ${x}`)
    x++;
} while( x < 10 );

// For of........
// For of no es como un for tradicional que ejecuta una pieza de código mientras una condición sea verdadera, 
// este ejecuta mientras haya elementos por iterrar como puede ser un arreglo y otros llamados Maps y Sets 
// que veremos más adelante...

let actividades = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for (let actividad of actividades) {
    console.log(actividad);
}