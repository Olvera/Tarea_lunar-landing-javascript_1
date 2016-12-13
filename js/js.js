var y = 10;  // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo.
var y2= 70;  //Añadimos variables para presentar la altura adecuadamente, ya que estamos descendiendo,la altura
var alt= 70; // ha de decrementarse (estamos 'alunizando'). Aproximamos valores: fin de recorrido= 80% - altura inicial 'y'.
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer;
var timerFuel=null;
var fuel=100;
//al cargar por completo la página...
window.onload = function() //definición de eventos
{
	//mostrar menú móvil. Añadido línea para evitar superposición con 'HIDE MENU'.
	//Ya que paramos el juego, sustituimos 'cpanel' por menú.
	document.getElementById("showm").onclick = function ()
    {
		document.getElementById("cpanel").style.display = "none";
		document.getElementsByClassName("c")[0].style.display = "block";
		document.getElementById("showm").innerHTML="";
		stop();
		
	}
		
	//ocultar menú móvil. Volvemos a mostrar 'SHOW MENU' y recuperamos 'cpanel'.
	document.getElementById("hidem").onclick = function ()
	{
		document.getElementById("cpanel").style.display = "block";
		document.getElementsByClassName("c")[0].style.display = "none";
		document.getElementById("showm").innerHTML="SHOW MENU";
		start();
	}

	/*encender/apagar el motor al hacer click en la pantalla--OJO!! No compatible con mostrar/ocultar menus ".onclick"
	document.onclick = function()
	{
 		if (a==g)
 		{
  			motorOn();
 		}
 		else
 		{
  			motorOff();
		}*/

	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;

	//Empezar a mover nave
	start();
}

//Definición de funciones
function start()
{
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop()
{
	clearInterval(timer);
}

//Optimizamos visualización limitando a dos decimales las lecturas
function moverNave()
{
	v +=a*dt;
	vel = v.toFixed(2);
	document.getElementById("velocidad").innerHTML=vel;
	y +=v*dt;
	y2 -=v*dt;
	alt = y2.toFixed(2);
	document.getElementById("altura").innerHTML= alt;
	
	//mover hasta que top sea un 80% de la pantalla. Ajustado a imágenes.
	if (y<80)
	{ 
		document.getElementById("nave").style.top = y+"%"; 
	}
	else
	{ 
		stop(); alunizajeNave();

	}  

}

function alunizajeNave()
{
	if (v <= 5)
	{
		//Mensaje de felicitación por un buen alunizaje (velocidad menor a 5 m/s).
		alert("FELICIDADES!!\nGran alunizaje\n\nCONGRATULATIONS!!\nGood landing!!");
		stop();
	}
	else
	{
		//explosion. Velocidad del alunizaje supera el límite de 5 m/s.
		document.getElementById("nav").src="img/explosion.gif";
		stop();
	}	
}

function motorOn()
{	
	a=-g;
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 100);
	document.getElementById("nav").src="img/nave.gif";
}

function motorOff()
{   
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
	document.getElementById("nav").src="img/nave1.svg";
	
}

function actualizarFuel()
{
	//Cambia el valor del marcador de Fuel, según vamos empleando el motor y dejamos sin función,
	//una vez alunizamos o acabamos el combustible, los eventos de teclado finalizando el juego.
	if (fuel>0 && alt>0)
	{
		fuel-=1;
		document.getElementById("fuel").innerHTML=fuel;
	}
	else
	{
		motorOff()
		document.getElementById("nav").src=null;
		document.onkeydown = null ;
		document.onkeyup = null;
	}
}