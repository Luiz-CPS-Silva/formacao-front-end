// 1 - Number
console.log (typeof 2);
console.log (typeof 5.14);
console.log (typeof -127);

// 2 - Ops. aritméticas
console.log(2 + 7);
console.log(10 - 5);
console.log(5 * 3);
console.log(7/2);
console.log(6 + (3*7));
console.log(4 - (5*9));

// 3 - Special numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - Strings
console.log("Um texto");
console.log('Outro texto');

console.log(`13`);

console.log(typeof "Um texto");
console.log(typeof 'Outro texto');

// 5 - Simbolos especiais em strings
console.log("Testando a \n quebra de linha");

console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("Oi, " + "tudo " + "bem?");

console.log(`Testando ` + `com ` + `crase!`);

// 7 - Interpolação / Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("Teste")}`);

// 8 - Boolean
console.log(true);

console.log(5 > 20);

console.log(30 > 10);

console.log(typeof false);

// 9 - Comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log (10 != 9)

// 10 - Idênticos
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log( 9 !== "9");

// 11 - Oparadores lógicos
/*
&& = AND
|| = OR
! = NOT
*/
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Luiz" === 1);

console.log(5 > 2 || "Luiz" === 1);

console.log(5 < 2 || 5 > 100);

console.log(!true);

console.log(!5 > 2);

// 12 - Empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - Mudança de tipos
console.log(5 * null);

console.log("Teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);

