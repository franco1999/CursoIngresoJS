function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
	
	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
		alert("Abrigate que hace frio");
		break;
		case "Abril":
		case "Mayo":
		case "Junio":
		alert("Falta para el invierno");
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		alert("Ya pasamos el frio, ahora calor!!!");
		break;
		case "Diciembre":
		case "Enero":
		case "Febrero":
		case "Marzo":
		alert("ahora el calor xd");
		break;
	}




}//FIN DE LA FUNCIÓN