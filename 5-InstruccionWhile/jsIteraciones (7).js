function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=='si')
	{
		
		contador++
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		respuesta = prompt("¿quiere seguir sumando?");
		acumulador= acumulador + numero;

	}




	




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN