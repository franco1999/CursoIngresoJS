/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var resultado; 
	var descuento;

	importe = document.getElementById('importe').value;

	importe = parseInt(importe);
	resultado = parseInt (resultado);

	descuento = importe * 25 / 100;

    resultado = importe - descuento;

    document.getElementById('resultado').value = resultado;

    /* no olvidar los puntos y coma, para hacer funcionar
     la barra de resultado no olvidar el tomar por id al 
     final la barra de resultados

}
