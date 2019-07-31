expresion -> constante 
    | expresion operador expresion
    | funcion "(" expresion ")" 

constante -> decimal
    | "x"

operador -> "+" 
    
funcion -> "sqrt" 


decimal -> "0." entero:+  {% function(d) {return {v:parseFloat(d[0] + d[1] + d[2].v)}} %}

entero -> [1-9]:+    {% function(d) {return {v:d[0].join("")}} %}

