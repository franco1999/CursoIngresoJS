/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadDeLamparas;
	var marca;
	var precioConDescuento;
	var precioUnitario

	

	
}



/*var cantidadDeLamparitas;
	var precio=35;
	var precioTotal=precio*cantidadDeLamparitas;
	var marca;
	var precioConDescuento;
	var precioConImpuesto;

	cantidadDeLamparitas=document.getElementById('Cantidad').value;
	marca=document.getElementById('Marca').value;

	if(cantidadDeLamparitas>=6){
		precioConDescuento=(50*precioTotal)/100;
	
	} else if(cantidadDeLamparitas==5 && marca=="ArgentinaLuz"){
		precioConDescuento=(60*precioTotal)/100;

	} else if(cantidadDeLamparitas==5){
		precioConDescuento=(70*precioTotal)/100;

	} else if(cantidadDeLamparitas==4){
		if(marca=="FelipeLamparas" || marca=="ArgentinaLuz")
		precioConDescuento=(75*precioTotal)/100;
		} else {
			precioDescuento=(80*precioTotal)/100;
	
	} else if(cantidadDeLamparitas==3 && marca=="FelipeLamparas"){
		precioConDescuento=(90*precioTotal)/100;

	} else if(cantidadDeLamparitas==3 && marca=="ArgentinaLuz"){
		precioConDescuento=(85*precioTotal)/100;
		
		} else if(cantidadDeLamparitas==3){
		precioConDescuento=(95*precioTotal)/100;
		} else {
			precioConDescuento=0;
		}

		if(precioConDescuento>120){
			precioConImpuesto=(precioConDescuento*110)/100;
			alert("Usted pago "+precioConImpuesto);
		}
	
		document.getElementById('precioDescuento').value=precioConDescue
