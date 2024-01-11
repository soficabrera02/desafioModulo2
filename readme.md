## Sistema de Biblioteca 

Este proyecto es un sistema de gestion de libros que te permite realizar diversas operaciones, como obtener informacion sobre libros por ID, autor, nombre, genero.

# Obtener todos los libros:
 node index.js

# Obtener un libro por ID:
 node index.js --get (id)

# Obtener libros por nombre:
 node index.js --name (nombre_del_libro)

# Obtener libros por genero
 node index.js --tag (nombre_del_genero)

# Obtener libros por autor:
 node index.js --author (autor_del_libro)

En el caso de que lo que estes buscando no exista recibiras un mensaje de error.