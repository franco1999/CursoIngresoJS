function Mostrar()
{
	var precio;
	var porcentajeDeDescuento;
	//var descuento;
	var precioFinal;

	precio = prompt("Ingrese el precio");
	porcentajeDeDescuento = prompt("Ingrese el porcentaje de descuento");

	precioFinal = precio * porcentajeDeDescuento / 100;
	precioFinal = precio - precioFinal;

	document.getElementById('importeFinal').value = precioFinal;


}
