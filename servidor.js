var express = require('express');
var aplicacion = express();

aplicacion.get('/', inicio);
aplicacion.get('/cursos', cursos);

function inicio (peticion, resultado) {
  resultado.send("Éste es el <strong>home genial</strong>")
}

function cursos (peticion, resultado) {
  resultado.send("Éstos son los <strong>cursos</strong>")
}


aplicacion.listen(8989)
