#Sintaxis para crear gramaticas
#https://mathjs.org/docs/expressions/syntax.html

expresion -> constante 
    | operacion
    | funcion

constante -> decimal
    | "x"

operacion -> expresion "+" expresion
    | "(" expresion "+" expresion ")"
    | "-" expresion
    | expresion "-" expresion
    | "(" expresion "-" expresion ")"
    | expresion "*" expresion
    | expresion "/" expresion
    | expresion "^" expresion # esto se entiende como potencia a pesar de que JS no lo haga
    
funcion -> "sqrt(" expresion ")" 
    | "ceil(" expresion ")" 


decimal -> "0." entero:+  {% function(d) {return {v:parseFloat(d[0] + d[1] + d[2].v)}} %}

entero -> [0-9]    {% function(d) {return {v:d[0].join("")}} %}

