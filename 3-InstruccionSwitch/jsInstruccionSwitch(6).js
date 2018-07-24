function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

	switch(laHora)
	{
		case"Siete":
		case"Ocho":
		case"Nueve":
		case"Diez":
		case"Once":
			alert("Es de mañana");
			break;
		case"Doce":
		case"Trece":
		case"Catorce":
		case"Quince":
		case"Dieciseis":
		case"Diecisiete":
		case"Diesiocho":
		case"Diesinueve":
			alert("Es de tarde");
			break;
		default:
			alert("Es de noche");
			break;
	}



}//FIN DE LA FUNCIÓN