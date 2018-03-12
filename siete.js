function Mostrar()
{
	var letra; 
	var numero = 101;
	var respuesta="si";
	var contadorPar=0;
	var contadorImpar=0;
	var contadorCeros=0;
	var acumuladorPositivos=0;
	var promedio = 0;
	var contadorPositivos=0;
	var acumuladorNegativos=0;
	var numeroMaximo=0;
	var numeroMinimo=0;
	var letraMaxima;
	var letraMinima;
	var contador =0;

	while(respuesta=="si")
	{
		letra = prompt("Ingrese una letra");
		
	
	 	while(!(numero>= -100 && numero<=100))
	  	{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);


	  	}


	  	if(numero % 2==0 && numero !=0)
	  	{
	  		contadorPar++; 
	  	}
	  	//MODULO (%) ES PARA SABER SI ES  PAR O IMPAR)
	  	else if(numero % 2 == 1 && numero !=0)
	  	{
	  		contadorImpar++;
	  	}
	  	else
	  	{
	  		contadorCeros++;
	  	}

	  	if(numero>0)
	  	{
	  		acumuladorPositivos = acumuladorPositivos + numero;
	  		contadorPositivos++;
	  	}
	  	else 
	  	{
	  		acumuladorNegativos = acumuladorNegativos + numero;

	  	}

	  	if(numero>numeroMaximo || contador==0)
	  	{
	  		numeroMaximo = numero;
	  		letraMaxima = letra;

	  	}
	  	if(numero<numeroMinimo || contador==0)
	  	{
	  		numeroMinimo = numero;
	  		letraMinima = letra;

	  		

	  	}

	  	contador++;

		numero = 200;
		respuesta = prompt("¿Quiere seguir ingresando numeros?");
		
	}
	promedio = acumuladorPositivos / contadorPositivos;
	


	 
	document.write("Cantidad pares: "+contadorPar+ "<br>");
	document.write("Cantidad impares: "+contadorImpar+ "<br>");
	document.write("Cantidad ceros: "+contadorCeros+ "<br>");
	//document.write(acumuladorPositivos);
	document.write("promedio "+promedio+ "<br>");
	//document.write(contadorPositivos);
	document.write("suma negativos "+acumuladorNegativos+ "<br>");
	document.write(numeroMaximo + ""+letraMaxima+ "<br>");
	document.write(numeroMinimo +""+ letraMinima+ "<br>");


}
