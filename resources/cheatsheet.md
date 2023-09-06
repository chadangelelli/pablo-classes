# PABLOs CHEAT SHEAT

## NVIM ##

### CURSOR MOVEMENT

- *h -*    cursor izquierda
- *j -*    cursor abajo
- *k -*    cursor arriba
- *l -*    cursor derecha

- *w -*     avanza inicio siguiente palabra
- *e -*    avanza final siguiente palabra
- *b -*    retrocede inicio anterior palabra
- *ge -* retrocede final anterior palabra

- *$ -*   avanza final línea
- *0 -*   regresa inicio línea

- *gg -* primera línea documento
- *G -*  última línea documento

### INSERT
- *a -*  inserta después cursor
- *I -*  inserta inicio línea
- *A -*  inserta final línea
- *o -*  inserta nueva línea debajo
- *O -*  inserta nueva línea arriba

### EDIT
- *r -*  reemplazar caracter
- *s -*  eliminar caracter y sustituir
- *u -*  deshacer
- *U -*  deshacer última línea

### VISUAL mode
- *v -*  iniciar visual mode
- *V -*  inciar visual mode línea

### GLOBAL
- *:q -*     salir
- *:q! -*    salir sin preguntar
- *:wq! -*   guardar y salir

### NAV
- *ctrl+N -*     open navegation panel
- *ctrl+W+W -*   switch between panes
- *tab -*        navigate between tabs

## TERMINAL (iTerm2)
- *ls -¨*                           enumera los archivos y carpetas en el directorio actual
- *pwd -*                           muestra ruta actual
- *cd -*                            cambia directorio de trabajo actual. Uno solo lleva a directorio de inicio
- *cd [FOLDER] -*                   cambiar directorio a [FOLDER] deseado
- *cd... -*                         cambia directorio de trabajo al directorio de arriba
- *cat ^[FILE] -*                   envía contenido de un archivo a la terminal (entre otras funciones)
- *mkdir [FOLDER_NAME] -*           crea nueva carpeta con nombre deseado
- *touch [FILE_NAME] -*             crea un archivo
- *cp [FILE] [DUPLICATE_FILE] -*    hacia copia de archivo
- *mv [FILE] [MOVED_FILE] -*        mueve archivos y carpetas, también para renombrar
- *rm [FILE] -*                     Borrar archivo
- *rm -r [FOLDER] -*                Elimina [FOLDER] y todo adentro de ello

## GIT / GITHUB

- *git add .* or *git add [FILENAME] -* add file to Git
- *git commit -a* or *git commit [FILENAME] -* save file in Git ("committing")
- *git push origin main -* saving files to Git (remotely to share) ("pushing")
