// Estructuras de control

// Condicional if
// Comparadores
// <    menor que
// >    mayor que
// <=   menor o igual que
// >=   mayor o igual que
// ==   igual
// ===  Estrictamente igual
// !==  Diferente
// && - El operador && revisa que se cumplan ambas condiciones
// || (OR) - El operador OR revisa que se cumpla una de las dos condiciones



// Primer ejemplo de condicional if
const puntaje = '1000';

if(puntaje > 800) {
    console.log("Felicidades ganaste un puntaje mayor a 800");
} else {
    console.log("Suerte para la proxima");
}

// Segundo ejemplo de condicional if
let rol = 'ADMIN';

if(rol === 'ADMIN') {
    console.log('El Usuario puede editar, eliminar y ver toda la información');
} else if(rol === 'EDITOR' ) {
    console.log('El usuario solo puede editar sus registros');
} else {
    console.log('El Usuario es visitante, solo puede ver la información');
}

// Cuando tienes multiples condiciones se vuelve complicado leer el codigo en esas situaciones es recomendable usar el switch
const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos primero`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago} espere un momento...`);
        break;
    default:
        console.log('Aún no has pagado');
        break;
}

// Operadores ternario

// console.log( condicion ? "Si se cumple la condicion" : "No se cumple la condicion")

// Ejemplo

const valor = 5;

console.log( (valor => 10) ? "Es mayor" : "No es mayor")