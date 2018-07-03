function mostrar()
{
	var precio;
	var porcentajeDeDescuento;
	var precioFinal;

	precio=prompt("Ingrese el precio");
	porcentajeDeDescuento=prompt("Ingrese el porcentaje de descuento");
	
	precioFinal=porcentajeDeDescuento*precioFinal/100;

	document.getElementById('elPrecioFinal').value=precioFinal;


}
