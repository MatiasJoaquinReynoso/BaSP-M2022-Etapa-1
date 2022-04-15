/* VARIABLES Y DATOS PRIMITIVOS */

/* Tipo de dato spring */
var primerNombre = 'Grover';
console.log(primerNombre)

/* Tipo de datos numerales */
var edad = 34;
var sueldo = 1800.99;
console.log(edad);

/* Tipo de dato boolean */
var tieneTrabajo = true;
console.log(tieneTrabajo);

/* Tipo de dato undefined */
var puestoDeTrabajo;
console.log(puestoDeTrabajo);

/* Tipo de dato null */
tieneTrabajo = null;
console.log(tieneTrabajo);

/* Definir varias variables al mismo tiempo */

var primerNombre, edad, sexo;
primerNombre = 'Matias'
edad = 34;
sexo = 'M'
console.log('El nombre es' + primerNombre + 'y su edad es:' + edad);

/* javascript :

1) es un lenguaje de programacion --> orientados a objetos, multiplataforma, (no es como html q es un lenguaje de marcado).
En js puedo hacer iteraciones, definir variables , aplicar logica. 

2) responsable de aparicion de librerias y frameworks. */

/* MUTACION DE VARIABLES */ 

edad = 'Veinte';
console.log(edad);

/* OPERADORES MATEMATICOS (+ , - , * , / */ 

var edadMatias, edadRamiro, diferenciaEdad, sumaEdad; edadPablo;

edadMatias = 34;
edadRamiro = 20;

var edadMatias = edadRamiro - edadPablo;
console.log(diferenciaEdad);

var edadRamiro = edadPablo + edadMatias;
console.log(sumaEdad);

/* OPERADORES LOGICOS */

var mayorGrover = edadMatias > edadRamiro;
var mayorGrover = edadMatias < edadRamiro;
var mayorGrover = edadMatias == edadRamiro;
console.log(mayorGrover);

/* OPERADORES TYPEOF */
/* Sirve para saber el tipo de dato de una variable */

console.log(typeof edadMatias);

/* OPERADORES ARITMETICOS */

/* De incremento (++) y decremento (--) */

var edadCarmen = 18;
var edadMaria = 14;

++edadCarmen;
console.log(edadCarmen);

/* OPERADORES DE ASIGNACION 

Lo que hace el += es permitir utilizar la misma variable dentro de la operación,
es decir: si yo pongo x += y es lo mismo que poner x = x + y. 
Por lo que entendí se utiliza más que nada para contadores*/

var a = 5;
var b = 18;

a += b;
a -= b;
a *= b;
a /= b;
a %= b;
c = a % b; /* El % devuelve el resto de una division */







