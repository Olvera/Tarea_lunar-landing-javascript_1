# Task_Lan_Markup_UT_02
##Tarea 2ª unidad - LMSGI - ASIX 1º - Lunar landing - javascript

###Notas sobre diseño
    Se mantiene la imagen al pie de la superficie lunar (_sonda LRO - [NASA](www.nasa.gov/multimedia/imagegallery/index.html)_), en origen con la curva natural del satélite, para convertirla en plana y no tener problemas de transparencia con el fondo, a la que se añade el selenita/alien, este en _.svg_, formato elegido también para la nave espacial, ambas de [Open Clipart](openclipart.org), al igual que las de _la Tierra_, _explosión_ y _motor encendido_, esta última como combinación de la nave original a la que se ha añadido, con InkSpace, el efecto de motor encendido, todas optimizadas con Riot.
    Añadida decoración (astronauta y Tierra) a las páginas _Acerca de..._ e _Instrucciones_, con la información referente al proyecto y la necesaria para jugar, respectivamente.
    A partir del diseño base establecido, se han realizado diversas modificaciones, atendiendo a las exigencias establecidas para la creación y desarrollo del juego:
   * El encendido del motor al mantener pulsada una tecla
   * Mensaje de felicitación y explosión de la nave, según el resultado del juego
   * Límite de alunizaje de 5 m/s y 100 ltr de combustible para conseguirlo
   * Menú horizontal con enlaces a la página principal (juego), con algo de decoración, con el fin de romper la monotonía de la  pantalla
   * Páginas: Instrucciones y detalles del proyecto (oculto en dispositivos 'pequeños' y/o móviles, accesible mediante un enlace que, al mostralo, esconde el panel informativo, que se recupera al esconder el primero -_SHOW MENU_-_HIDE MENU_-)
   * Imagen de la Tierra centrada en el fondo.
   
    También se ha modificado el código suministrado para adecuar la lectura de altura, de más (80) a menos (0 - alunizaje), así como inplementadas funciones necesarias para que al aparecer el mensaje de felicitación, o la explosión, se detenga el juego, reanudandose al actualizar la página (actualizando desde el navegador o clikcando en _Inicio juego_ del menú general).

###Mecánica del juego
    El juego consiste, sencillamente, en una nave espacial que desciende sobre la superficie lunar, con la aceleración de la atracción gravitatoria de la Luna. Ha de realizarse dicho alunizaje a una velocidad final adecuada, evitando su exceso, que conlleva la explosión de la nave al tocar la superficie. 
     Para conseguir un alunizaje correcto, ha de encenderse el motor de la nave, mediante la pulsación de cualquier tecla del teclado del dispositivo (y mantenimiento de esta), que se apaga al soltarla, antes de consumir el combustible. Podemos comprobar, en la esquina superior izquierda, en el cuadro de lecturas, la velocidad actual, el combustible y la altura, referencia con la que controlar el descenso.
    Se felicita si se consigue la velocidad final fijada, pero, de lo contrario, la nave explota. En ambos casos se finaliza el juego.
    Para reaundarlo, basta clickar sobre el enlace _Inicio juego_, en el menu horizontal de la esquina superior derecha (oculto en dispositivos móviles o pequeñas pantallas, accesibles en un link: _SHOW MENU - HIDE MENU_).
     

###Diseño de páginas

1. Página principal (index.html)  
    Para el contenido HTML, varios contenedores '_DIV_', separando por capas imágenes y menús 
   * Panel de información
       * Una lista vertical de 3 elementos (esq. sup. izq.): 
          * Velocidad - m/s
          * Fuel - ltr
          * Altura - m
   * Nave espacial
   * Menú de enlaces
      * Inicio juego (link a pág. principal - _index.html_)
      * Instrucciones (link a pág. con info sobre como jugar - _howto.html_)
      * Acerca de ... (link a pág. con info del proyecto - _about.html_)
   * Fondo estrellado con globo terraqueo
   * Imagen inferior: superficie lunar con selenita
       
2. Página de instruciones (howto.html)    
   * Descripción del escenario de juego y como jugar: acciones, reacciones, límites...
   
3. Página Acerca de..._ (about.html)
   * Información breve sobre diseño y recursos
   * Contacto
   * Sin panel de datos ni de acciones. Desaparece también la nave.
