// Una nota muy importante es que en la consola los números se muestran de diferente color cuando es número que cuando es un string que representa un número

var numero = 1; // Numero
var numero = "1" // String

// Operadores
// Suma
resultado = numero1 + numero2;
// Resta
resultado = numero1 - numero2;
// Mult
resultado = numero1 * numero2;
// Division
resultado = numero1 / numero2;
// Modulo
resultado = numero1 % numero2;

// Operaciones para numeros
// Pi
resultado = Math.PI;
// redondeo
resultado = Math.round(2.5);
// redondeo abajo o arriba (ceil o floor )
resultado = Math.ceil(2.2);
// Raiz cuadrada
resultado = Math.sqrt(144);
// Abssoluto
resultado = Math.abs(-300);
// Potencia
resultado = Math.pow(8, 3);
// Minimo
resultado = Math.min(3,5,1,2,9,4,2, -3);
// Max
resultado = Math.max(4,1,21,4,15,5,11,5);
// Aleatorio
resultado = Math.random();
// Aleatorio dentro de un rango:
resultado =  Math.floor( Math.random() * 30 );
// Convertir de string a numero
console.log(Number.parseInt(numero1));
// Convertir a flotante
console.log(Number.parseFloat(numero2));
// Revisar si un número es entero o no
console.log(Number.isInteger(numero4) );
// Convertir String a numero
console.log(numero4.toString());


// ---------------- Formas de incrementos / Decremento ----------------
let puntaje = 5;
puntaje++; // Incremento en 1
puntaje--; // Decremento en 1
++puntaje; // Incremento en 1
--puntaje; // Decremento en 1

puntaje += 3;
puntaje -= 3;