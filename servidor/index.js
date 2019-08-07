
const Individuo = require('./individuo.js');
const compilador = require('../lib/nearley');

const gramaticaCompilada = compilador.compilarGramatica('./gramatica.ne');

const SEMILLA = 1;

let equacion = new Individuo(gramaticaCompilada, 10,SEMILLA);

console.log(equacion.fenotipo);


