function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingrese un numero");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese un numero");
	numeroDos = parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		alert(numeroUno +""+ numeroDos);
	}
	else if (numeroUno > numeroDos)
	{
		resultado = numeroUno - numeroDos;
		alert(resultado);
	}
	else
	{
		resultado = numeroUno + numeroDos;
		
		if(resultado>10)
		{ 
			alert("La suma es " + resultado + " y supero el 10");
		}
		else
		{
			alert(" su resultado es " + resultado);
		}

	}


 


}
