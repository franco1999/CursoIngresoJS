
function mostrar()
{
	/*var base;
	var altura;
	var superficie;
	var perimetro;

	base=prompt("Ingrese la base");
	altura=prompt("Ingrese la altura");

	superficie=base*altura;
	perimetro=base+altura;

	alert("La superficie es "+superficie+" y el perimetro es "+perimetro);*/

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
