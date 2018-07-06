
function mostrar()
{
	//se ingresan 3 numeros, informar en un solo alert: la suma, el promedio, y la resta 
	//de los numeros tal cual fueron ingresados.
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var resultadoDeSuma;
	var promedio;
	var resultadoDeResta;

	numeroUno=prompt("Ingrese un numero");
	numeroDos=prompt("Ingrese un numero");
	numeroTres=prompt("Ingrese un numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);

	resultadoDeSuma=numeroUno+numeroDos+numeroTres;
	promedio=numeroUno+numeroDos+numeroTres/3;
	resultadoDeResta=numeroUno-numeroDos-numeroTres;

	alert("El resultado de la suma es "+resultadoDeSuma+", el promedio es "+promedio+" y el resultado de la resta es "+ resultadoDeResta);

}
