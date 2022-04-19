console.log('--EXERCISE 5: FOR');

// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un 
// bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

console.log('Exercise 5.a:');

var food = [' pear ',' banana ',' carrot ',' tomato ',' ettuce '];

for (var x = 0; x < 5 ; x++) {
	alert(food[x]);
}

// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar 
// una alerta por cada palabra modificada.

console.log('Exercise 5.b:');

for (var x = 0; x < 5 ; x++) {
	food[x] = food[x].substring(0,1).toUpperCase() + food[x].substring(1);
	alert(food[x]);
}

// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto 
// a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
// Al final mostrar una única alerta con la cadena completa.

console.log('Exercise 5.c:');

var food = [' pear ',' banana ',' carrot ',' tomato ',' lettuce '];

var sentence = '';

for (var x = 0; x < food.length ; x++) {
	sentence += food[x] + ' ';
}

alert(sentence);

// d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número 
// de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos 
// dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el 
// array final (utilizar console.log).

console.log('Exercise 5.d:');

var numbers = [];

for (var x = 0 ; x < 10 ; x++) {
	numbers.push(x);
}

console.log(numbers);