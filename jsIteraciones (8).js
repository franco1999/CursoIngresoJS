function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumulador;
	var numero
	var respuesta='si';

	while(respuesta=="si")
	{
		contador ++; 
		numero= prompt("ingrese numero");
		numero= parseInt(numero);
		acumulador= acumulador + numero;


		if(numero<0)
	{
		contador++
		respuesta=prompt("¿quiere seguir?");
		numero=parseInt(numero);
		acumulador = acumulador + numero * 2;

	
	} else
		contador++;
		respuesta=prompt("¿quiere seguir sumando?");
		numero=parseInt(numero);
		acumulador= acumulador + numero;


	}	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN