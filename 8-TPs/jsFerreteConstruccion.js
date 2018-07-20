/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var resultado;
	var resultadoFinal;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	resultado=(largo*2)+(ancho*2);
	resultadoFinal=resultado*3;

	alert("Se necesitan "+resultadoFinal+" metros de alambre.");



}
function Circulo () 
{
	var radio;
	var resultado;
	var resultadoFinal;

	radio=document.getElementById('Radio').value;
	
	radio=parseInt(radio);

	resultado=(2*radio)*3.14;

	resultadoFinal=resultado*3;

	alert("Se necesitan "+resultadoFinal+" metros de alambre.")


	
}
function Materiales () 
{
	var largo;
	var ancho;
	var perimetro;
	var resultadoDeCemento;
	var resultadoDeCal;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=largo*ancho;

	resultadoDeCemento=(perimetro*2)/1;

	resultadoDeCal=(perimetro*3)/1;

	alert("Se necesitan "+resultadoDeCemento+" bolsas de cemento y "+resultadoDeCal+" bolsas de cal para este terreno.");





	
}