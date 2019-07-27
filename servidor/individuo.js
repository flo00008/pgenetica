const generador = require('./interprete');

class Individuo {

    constructor(JSONgramatica) {
        this.arbol = generador.generarArbol(JSONgramatica, -1);
        // console.log(generador);
    }
    
}

module.exports = Individuo;
