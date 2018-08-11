function mostrar()
{
	//alert("comentar esta linea 4");

	var numeroUno;
	var numeroDos;
	var numeroTres;
	var menor;
	var mayor;

	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");
	numeroTres=prompt("Ingrese el tercer numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);

	if(numeroUno>numeroDos && numeroUno>numeroTres){
		mayor=numeroUno
	} else {
		if(numeroUno>numeroUno&&numeroDos> numeroTres){
			mayor=numeroDos
		} else {
			mayor=numeroTres
		}
	}

	if(numeroUno<numeroDos&&numeroUno<numeroTres){
		menor=numeroUno
	} else {
		
		if(numeroDos<numeroUno && numeroDos<numeroTres){
			menor=numeroDos;
		} else {
			menor=numeroTres;
		}
	}

	alert("el mayor es " + mayor);
	alert("el menor es " + menor);

}	

