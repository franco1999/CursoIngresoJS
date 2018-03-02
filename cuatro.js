function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;

	numeroUno = prompt("ingrese un numero");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("ingrese un numero")
	numeroDos = parseInt(numeroDos);

	numeroTres = prompt("Ingrese un numero")
	numeroTres = parseInt(numeroTres);

	if ((numeroUno > numeroDos && numeroUno > numeroTres))
	{
		alert("el numero mayor es " + numeroUno);

	}
	else if 
		((numeroDos > numeroUno && numeroDos > numeroTres))
	{
		alert("su numero mayor es " + numeroDos);
	
	}
	else
		((numeroTres > numeroUno && numeroTres > numeroDos))
	{
		alert("su numero mayor es " + numeroTres);
	
	}
	

}
