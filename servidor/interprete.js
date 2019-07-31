const math = require('mathjs');
const fs = require('fs');

const unparser = require("nearley-unparse");


function generarArbol(gramatica, profundidadMaxima) {
    return generar(gramatica, profundidadMaxima);
}

function generar(gramatica, profundidad) {

    g = fs.readFileSync(gramatica);

    gramar = compilarGramatica(g);

    let texto = unparser(gramar, { max_stack_size: 5 });

    console.log(texto);


}


function compilarGramatica(sourceCode) {
    const nearley = require("nearley");
    const compile = require("nearley/lib/compile");
    const generate = require("nearley/lib/generate");
    const nearleyGrammar = require("nearley/lib/nearley-language-bootstrapped");


    // Parse the grammar source into an AST
    const grammarParser = new nearley.Parser(nearleyGrammar);
    grammarParser.feed(sourceCode);
    const grammarAst = grammarParser.results[0]; // TODO check for errors

    // Compile the AST into a set of rules
    const grammarInfoObject = compile(grammarAst, {});
    // Generate JavaScript code from the rules
    const grammarJs = generate(grammarInfoObject, "grammar");

    // Pretend this is a CommonJS environment to catch exports from the grammar.
    const module = { exports: {} };
    eval(grammarJs);

    return module.exports;
}


module.exports = { generarArbol };