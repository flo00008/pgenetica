const math = require('mathjs');
const unparser = require('grammar-unparser').default;


class Individuo {

    constructor(gramaticaCompilada, profundidadMaxima, semilla) {
        this.genotipo = Individuo.generarArbol(gramaticaCompilada, profundidadMaxima,semilla);
        this.fenotipo = this.genotipo.toString();
        this.error = 0;
        // console.log(generador);
        this.genotipo = this.genotipo.compile();
    }

    evaluar(contexto) {
        return this.genotipo.evaluate(contexto);
    }

    static generarArbol(gramatica, profundidadMaxima,semilla) {
        const up = new unparser({
            Rules: gramatica.ParserRules,
            Start: gramatica.ParserStart,
            MaxStack: profundidadMaxima,
            MaxLoops: profundidadMaxima
        });

        up.SetSeed(semilla);

        return math.parse(up.Parse());
    }

    static cruzar(padre1, padre2) {

    }

    static mutar(individuo, probabilidad) {



    }

    static calcularECM(equacion, solucion) {
        let suma = 0;

        for (const punto of solucion) {
            const y = punto.y - equacion.evaluar(punto.x);
            suma += y * y;
        }

        const ecm = suma / solucion.length;
        equacion.error = ecm;
        return ecm;
    }

}

module.exports = Individuo;
