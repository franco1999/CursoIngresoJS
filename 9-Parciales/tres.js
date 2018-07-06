function mostrar()
{
	var precio;
	var porcentajeDeDescuento;
	var precioConDescuento;
	var iva;
	var descuentoEnDinero;
	var resultadoFinalIva;

	precio=prompt("Ingrese el precio");
	porcentajeDeDescuento=prompt("Ingrese el porcentaje de descuento");

	precio=parseInt(precio);
	porcentajeDeDescuento=parseInt(porcentajeDeDescuento);

	descuentoEnDinero=precio*porcentajeDeDescuento/100;
	precioConDescuento=porcentajeDeDescuento*precio/100;
	iva=121*precio/100;

	alert("Su descuento en dinero es de "+descuentoEnDinero+", su precio con descuento es de "+precioConDescuento+" y su precio con iva es de "+iva);

	resultadoFinalIva=121*precioConDescuento/100;

	document.getElementById('elPrecioFinal').value=resultadoFinalIva;


	
	


}
