const generador = require('./interprete');

class Individuo {

    constructor(gramatica) {
        this.arbol = generador.generarArbol(gramatica, -1);
        // console.log(generador);
    }
    
}

module.exports = Individuo;
