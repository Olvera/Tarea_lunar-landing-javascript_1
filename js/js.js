var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
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
	alt = y.toFixed(2);
	document.getElementById("altura").innerHTML= alt;
	
	//mover hasta que top sea un 80% de la pantalla
	if (y<80)
	{ 
		document.getElementById("nave").style.top = y+"%"; 
	}
	else
	{ 
		stop();  alunizajeNave();
	}

}

function alunizajeNave()
{
	if (v < 8)
	{
		alert("FELICIDADES!!\nGran alunizaje\n\nCONGRATULATIONS!!\nGood landing!!");
		
	}
	else
	{
		//explosion
		
	}
	
}

function motorOn()
{	cambiaNave();
	a=-g;
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarAltura(); }, 100);
	
}

function motorOff()
{   cambiaNave();
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
	
}

function actualizarAltura()
{
	//Aquí hay que cambiar el valor del marcador de Fuel...
	fuel-=1;
	document.getElementById("fuel").innerHTML=fuel;	
}

function reStart()
{
	var r = confirm("Otra partida?\n\nAnother Game?");
	if (r == true)
	{
    	moverNave();
	}
	else
	{
		stop();
	} 
}

function cambiaNave()
{
	imgSrc = document.getElementById("nav").src;
	if (imgSrc=="img/nave1.svg")
	{
		imgSrc="img/nave.gif";
	}
	else
	{
		imgSrc="img/nave1.svg";
	}

}