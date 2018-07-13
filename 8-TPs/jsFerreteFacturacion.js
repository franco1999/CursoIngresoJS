/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var percioDos;
	var precioTres;
	var resultadoFinal;

	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	resultadoFinal=precioUno+precioDos+precioTres;

	alert("El resultado de la suma es "+resultadoFinal);

}
	
	function Promedio () 
{
	var precioUno;
	var percioDos;
	var precioTres;
	var resultadoFinal;
	var resultadoPromedio;

	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	resultadoFinal=precioUno+precioDos+precioTres;
	resultadoPromedio=resultadoFinal/3;


	alert("El promedio es "+resultadoPromedio);
	
}
	
	function PrecioFinal () 
{
	var precioUno;
	var percioDos;
	var precioTres;
	var resultadoFinal;
	var precioIva;

	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	resultadoFinal=precioUno+precioDos+precioTres;
	precioIva=121*resultadoFinal/100;

	alert("El precio final es de "+precioIva); 
	
}