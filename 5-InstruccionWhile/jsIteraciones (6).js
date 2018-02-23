function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var interaciones=50;
	while(contador<interaciones)

	{
		contador= contador+1
		numero=prompt("ingrese numero");
		numero= parseInt (numero);
		acumulador=acumulador+numero
		promedio=acumulador/contador;

	}
		promedio=acumulador/contador
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN