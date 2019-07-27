const math = require('mathjs');

function generarArbol(gramatica, profundidadMaxima) {

    return generar(gramatica.inicio, gramatica, 0, profundidadMaxima);
}



function generar(inicio, gramatica, profundidad, profundidadMaxima) {

    let arbol = new math.ConstantNode(2);

    let m = gramatica.reglas.reduce((expresion, regla) => {

        // console.log('llamando replace con expresion: ' + expresion + ' id: ' + regla.id);

        return expresion.replace(regla.id, (id, posicion, cadena) => {

            // console.log('id: ' + id + ' posicion: ' + posicion + ' cadena: ' + cadena + ' regla: ' + regla.descripcion);

            const valor = math.pickRandom(regla.valores);
            let texto;

            switch (regla.tipo) {
                case 'ConstantNode':
                    switch (valor.tipo) {
                        case 'float':
                            texto = math.random(valor.rango.min, valor.rango.max);
                            break;
                        case 'int':
                            texto = math.randomInt(valor.rango.min, valor.rango.max);
                            break;
                        default:
                            texto = math.pickRandom(valor.valor);
                            break;
                    }

                    arbol = new math.ConstantNode(texto);
                    break;
                case 'OperatorNode':
                    let parametros = [];
                    for (const parametro of valor.parametros) {
                        parametros.push(generar(parametro, gramatica, profundidad + 1, profundidadMaxima));
                    }

                    texto = valor.operador;

                    arbol = new math.OperatorNode(valor.operador, valor.funcion, parametros);
                    break;
                case 'FunctionNode':
                    let parametros = [];
                    for (const parametro of valor.parametros) {
                        parametros.push(generar(parametro, gramatica, profundidad + 1, profundidadMaxima));
                    }

                    texto = valor.funcion;

                    arbol = new math.FunctionNode(valor.funcion, parametros);
                    break;
                default:
                    console.log('Error?');
                    break;
            }

            return cadena.slice(0, posicion) + texto.toString() + candena.slice(id.length);

        });

    }, inicio);

    return arbol;
}

module.exports = { generarArbol };