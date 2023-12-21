// 1 - Variaveis
let nome = "Luiz";

console.log(nome);

nome = "Luiz Carlos";

console.log(nome);

const idade = 21;

console.log(idade);

console.log(typeof nome);

console.log(typeof idade);

// 2 - mais sobre variaveis
// let 2teste = "Invalido"
// let @teste = "Invalido"

let a = 10, b = 20, c = 30;

console.log(a, b, c);

const nomecompleto = "Luiz Silva"

const nomeCompleto = "Batman"

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

// 3 - prompt
// const age = prompt("Digite a sua idade:");

// console.log(`Você tem ${age} anos.`);

// 4 - alert
/*alert("Testando");

const z = 11;

alert(`O número é ${z}`)*/

// 5 - Math
console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.15));

console.log(Math.ceil(6.14));

// 6 - Console
console.log("teste!");

console.error("erro!");

console.warn("aviso!");

// 7 - if
const m = 10

m > 5

if (m > 5) {
    console.log("M é maior que 5!");
}

const user = "Silva";

if (user === "Silva") {
    console.log("Ola Silva!");
}

if (user === "Flash") {
    console.log("Olá Flash");
}

console.log(user === "Silva", user === "flash");

// 8 - else
const loggedIn = false;

if (loggedIn) {
    console.log("Esta autenticado!");
} else {
    console.log("Não esta autenticado!");
}

const q = 10;
const w = 25;

if (q > 5 && w > 20) {
    console.log("Números mais altos")
} else {
    console.log("Os números não são mais altos")
}

// 9 - else if
if (1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("teste 2");
} else if (5 > 3) {
    console.log("Agora sim!");
}

const userName = "Luiz"
const userAge = 21

if (userName === "Vasyl") {
    console.log("Bem vindo Vasyl");
} else if (userName === "Luiz" && userAge === 21) {
    console.log("Olá Luiz, você tem 21 anos!");
} else {
    console.log("Nenhuma condição aceita");
}

// 10 - while
let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// loop infinito
/*
let x = 10;

while (x > 5) {
    console.log(`Imprimindo ${x}`);
}
*/

// 11 - do while
let o = 10;

do {
    console.log(`Valor de o: ${o}`);
    o--;
} while (o > 1);

// 12 - for
for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo...");
}

let r = 10;

for (r; r > 0; r = r - 1) {
    console.log(`O r está diminuido: ${r}`);
}

// 13 - identação
for(let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`);
    } else {
        if (u / 2 === 0) {
            console.log("Deu 0");
        }
    }
}

// 14 - break
for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);
    if(g === 15) {
        console.log("o g é igual a 15");
        break;
    }
}

for(let l = 31; l > 21; l--) {
    console.log(`O valor de l é: ${l}`);
    if(l === 27) {
        console.log("O l é igual a 27");
        break;
    }
}

// 15 - continue
for(let s = 0; s < 10; s = + 1) {
    // operador resto = %
    if(s % 2 === 0) {
        console.log("Número par");
        continue;
    }
    console.log(s)
}