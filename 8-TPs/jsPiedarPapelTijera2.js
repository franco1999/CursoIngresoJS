var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina=Math.floor(Math.random()*3)+1;


	 	



}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra=1;

	if(eleccionMaquina==piedra){
		ContadorDeEmpates>+1;
		alert("EMPATÒ");
	
	} else if(eleccionMaquina==3) {
		ContadorDeGanadas+1;
		alert("GANÒ");
	
	} else {
		ContadorDePerdidas++;
		alert("PERDIÒ");

	} 

	// acumulador= var 1 + var 2
	
	}

	mostarResultado

}//FIN DE LA FUNCIÓN
function papel()
{

}//FIN DE LA FUNCIÓN
function tijera()
{
	
}//FIN DE LA FUNCIÓN

function mostarResultado()
{
	document.getElementById('ganadas').value=ContadorDeGanadas;
	document.getElementById('perdidas').value=ContadorDePerdidas;
	document.getElementById('empatadas').value=ContadorDeEmpates;

}