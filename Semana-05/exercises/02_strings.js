console.log('--EXERCISE 2: STRGINS');
// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('Exercise 2.a:');

var palVar1 = 'argentinos';
console.log('The word', palVar1.toUpperCase() , 'has 10 characters');

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('Exercise 2.b:');

var subVar01 = 'Hola Matias'
console.log(subVar01.substring(0,6) , 'are the first five letters of Hola Matias');


// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('Exercise 2.c:');

var subChar01 = 'argentinos'
var subChar02 = subChar01.substring(7,10)

console.log(subChar02, 'are the 3 last words of argentinos');

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log('Exercise 2.d:');

var moreLongString = 'anOtHeR saMpLe teXT';

var formattedString = moreLongString.substring(0,1).toUpperCase() + moreLongString.substring(1).toLowerCase();

console.log(formattedString);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log('Exercise 2.e:');

var longWithSpace = 'Example with space !';

var spaceIndex = longWithSpace.indexOf(' ');

console.log(spaceIndex);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula 
// y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('Exercise 2.f:');

var longWordsString = 'argenTiNoS aCadéMicoS';

var formattedSentence = longWordsString.substring(0, 1).toUpperCase() // A
 + longWordsString.substring(1, longWordsString.indexOf(' ')).toLowerCase() // rgentinos
 + longWordsString.substring(longWordsString.indexOf(' '), longWordsString.indexOf(' ') + 2).toUpperCase() // a
 + longWordsString.substring(longWordsString.indexOf(' ') + 2, longWordsString.length).toLowerCase(); // cademicos

console.log(formattedSentence);