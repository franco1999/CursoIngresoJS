function Mostrar()
/*{
	var numero;
	var contador;

	for(var i=2; i<numero; i++){

		if(numero % i==0){
			if(numero/i==1)
			{
				"es primo"
			} else
			{
				"no es primo"
				break
			}




}//FIN DE LA FUNCIÓN */

{
	var divisores=0;
	var numeroIngresado;
	var numeroAnterior;


	numeroIngresado=prompt("Ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroAnterior=numeroIngresado;numeroAnterior>1;numeroAnterior--)
	{
		if(numeroIngresado % numeroAnterior==0)
		{
			divisores++;
		}
	}
	if(divisores==0)
	{
		console.log("Es primo");
	} else 
	{
		console.log("NO es de los numeros primos");
	}
	console.log(divisores);
	
}