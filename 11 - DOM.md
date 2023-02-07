>  # 1. Como conectar html con JavaScript

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulacion del DOM basica - Curso Practico de JavaScript</title>
</head>
<body>
    <h1>Manipulacion del DOM basica</h1>
    //Script: Nos ayuda a conectar html con JS
    <script src="./script.js"></script> 
</body>
</html>
```
> # 2. Funciones de JS y su uso
```jsx
 //Accede al elemento por medio de la etiqueta 'li'. 
console.log(document.getElementsByTagName('li'));
//Accede al elemento por medio de la clase 'card'.
console.log(document.getElementsByClassName('card')); 
//Accede a los elementos por medio del atributo "name" del documento, name se utiliza en los formularios.
console.log(document.getElementsByName('nombre'));
//Accede a los elementos por medio del identificador tipo id con el nombre "menu".
console.log(document.getElementById('menu'));
//Accede al elemento por medio de la etiqueta 'a'. Accede solo a el primer elemento de tipo 'a' del documento.
console.log(document.querySelector('a'));
//Accede al elemento por medio de la etiqueta a. Accede a todos los elemento de tipo 'a' del documento.
console.log(document.querySelectorAll('a'));
//Accede al elemento por medio de la clase '.card".
console.log(document.querySelector('.card'));
//Accede a los elementos por medio del identificador tipo id con el nombre #card'.
console.log(document.querySelector('#card'));
//Accede al elemento por medio de la clase card' y busca el elemento en la posicion indicada.
console.log(document.querySelectorAll('.card')[2]);
//Accede a todos los elementos 'li' que tengan la clase 'menu'.
console.log(document.querySelectorAll('.menu li'));
```
> # 3. Modificar HTML desde JavaScript
1. Modificando etiquetas tipo h1
```jsx
h1.innerHTML = "Texto de broma <br> muchas bromas"; // Se incorpora codigo
h1.innerText = "Texto de broma <br> muchas bromas"; // Se incorpora texto
```
2. Modificar un atributo
```jsx
console.log(h1.getAttribute('class')); // Nos enseña que clase tienen nuestro h1
h1.setAttribute('class','rojo'); // Nos modifico el nombre de nuestro atributo de class
h1.classList.add('rojo'); // Nos agrega una clase
h1.classList.remove('verde');  // Nos elimina una clase
```
3. Modificar un input
```jsx
input.value = "456"; // Nos modifico el value de nuestro input
input.placeholder = "Texto de prueba"; // Nos modifico nuestro placeholder
```
> # 4. Eventos
```jsx
// onchange: Escucha cuando el usuario termino de ponerle informacion al input
<input onchange="console.log('Cambio el input')" id="calculo2" placeholder="Escribe algo aquí" />

//onclick: Escucha cuando le dan click al boton
<button id="btnCalcular" onclick="console.log('click dek btn')">Calcular</button>

// addEventListener: Nos ayuda a poner un escuchador de eventos ya no en html si no directamente en JS unicamente necesita dos argumentos.
// form: Es donde vamos a escuchar el evento
// submit: El nombre del evento
// sumarInputValues: Tarea de JS que queremos que realize cuando escuche el evento
form.addEventListener('submit', sumarInputValues)'
```
### Cuando queremos que nuestro codigo JS escuche un evento que pasa en nuestro codigo html como por ejemplo el click de un boton, el llenado de un cuestionario o de un input tenemos dos opciones. 
1. Ponerle en html el escuchador de eventos como por ejemplo el onchange o el onclick pero tendriamos que ponerles muchos escuchadores de evento*/
2. Podemos crear una funcion en js que realice todas las tareas que queremos que realice todos los botones de cierto tipo y simplemente se la incorporamos al boton que queremos que realice ese tipo de tareas como si fuera un tipo class
```jsx
//Ejemplo 1 del boton - mala idea
<button id="btnCalcular" onclick="console.log('click dek btn')">Calcular</button>

//Ejemplo 2 del boton - Buena idea
// 1. Creamos la funcion en JS de lo que queremos que realice nuestro boton
function btnOnClick(){
    console.log('Escuchando el evento del click');
    };
// 2. La funcion que creamos en JS se la incorporamos a nuestro o nuestros botones como si fuera un tipo class
<button id="btnCalcular" onclick="btnOnClick()">Calcular</button>
```
### Otro ejemplo para cuando queremos crear un evento
```jsx
// Creamos nuestras variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Creamos el evento del click y la funcion que queremos que realice al momento de escuchar el evento
menuEmail.addEventListener('click', toggleDesktopMenu);

// Creamos la funcion que queremos que realice
function toggleDesktopMenu(){
     desktopMenu.classList.toggle('inactive'); // toggle: Es como una palanca algo que queremos que realice cuando precionamos click y que tiene que hacer cuando volvemos a hacer click por ejemplo una barra de menu la quita y la pone en cada click
 }
```




















