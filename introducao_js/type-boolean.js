const value1 = true;
const value2 = true;

console.log(value1 == value2);

//Thrusty / Falsy --> Variáveis vaizias ou com valor 0, se submeter
// a um teste lógico, se tornarão um tipo  boolean (true/false)

//teste lógico
if (value1) {
    console.log('Verdadeiro')
}

// 0 de cima vira
if (value1) console.log('Verdadeiro')

// Operador ternário
const resultado = value1 ? 'Verdadeiro' : 'Falso';