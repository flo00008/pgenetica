
const Individuo = require('./individuo.js');
const compilador = require('./nearley.js');

const gramaticaCompilada = compilador.compilarGramatica('./gramatica.ne');

let equacion = new Individuo(gramaticaCompilada, 5);

console.log(equacion.equacion);


// console.log(equacion.coste);

// Individuo.calcularCoste(equacion);

// console.log(equacion.coste);
