function Mostrar()
{
	var planeta;

	planeta = prompt("Ingrese un planeta");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
		alert("aca hace mas calor");
		break;
		case "tierra":
		alert("aca vivimos");
		break;
		case "saturno":
		case "neptuno":
		case "urano":
		case "marte":
		case "jupiter":
		alert("aca hace mas frio");
		break;
		default:
		alert("Este no es un planeta")
		break;

	}





}
