const math = require('mathjs');
const unparser = require("nearley-unparse");

class Individuo {

    constructor(gramaticaCompilada,profundidadMaxima) {
        this.genotipo = Individuo.generarArbol(gramaticaCompilada, profundidadMaxima);
        this.fenotipo = this.arbol.toString();
        this.error = 0;
        // console.log(generador);
        this.genotipo = this.genotipo.compile();
    }

    evaluar(contexto){
        return this.genotipo.evaluate(contexto);
    }

    static generarArbol(gramatica, profundidadMaxima) {
        return math.parse(unparser(gramatica, { max_stack_size: profundidadMaxima , max_loops: profundidadMaxima}));
    }

    static cruzar(padre1,padre2){

    }

    static mutar(individuo){

    }

    static calcularECM(equacion,solucion){
        let suma = 0;

        for (const punto of solucion) {
            const y = punto.y - equacion.evaluar(punto.x);
            suma += y*y;
        }

        const ecm = suma/solucion.length;
        equacion.error = ecm;
        return ecm;
    }

}

module.exports = Individuo;
