function mostrar()
{
	//alert("comentar esta linea 9");
	function mostrar()
{
	//alert("comentar esta linea 8");

	var nombre;
	var sexo;
	var estadoCivil;
	var cantidad;
	var importeTotal;
	var respuesta;
	var mayorCantidad;
	var mayorCantidadNombre;
	var banderaYaPaso;
	var banderaSoltero;
	var masGasto;
	var menosGasto;
	var masGastoSexo;
	var menosGastoSexo;
	var primerMujerImporte;
	var primerMujerNombre;
	var primerMujerBandera;
	var cantidadViudos;
	var acumuladorViudos;
	var promedioTotal;

	respuesta = "n";
	banderaYaPaso="no";
	banderaSoltero="no";
	primerMujerBandera=0;
	acumuladorViudos=0;
	cantidadViudos=0;



	while(respuesta!="n"){
		nombre=prompt("Introducir nombre");
		sexo=prompt("Introducir sexo");
		while(sexo!="f" && !="m")
		{
			nombre=prompt("Introducir sexo");
		}
		estadoCivil=prompt("Introducir estadoCivil");
		while(estadoCivil!="soltero" && !="casado" && estadoCivil!="viudo")
		{
			nombre=prompt("Introducir estadoCivil");
		}
		cantidad=prompt("Introducir cantidad");
		cantidad=parseInt(cantidad);
		while(cantidad>0 && isNan(cantidad))
		{
			nombre=prompt("Introducir cantidad");		
			cantidad=parseInt(cantidad);

		}
		importeTotal=prompt("Introducir importeTotal");
		importeTotal=parseInt(importeTotal);
		while(importeTotal>0 && isNan(importeTotal))
		{
			nombre=prompt("Introducir importeTotal");		
			importeTotal=parseInt(importeTotal);

		}

		//analisis

		if(banderaYaPaso=="no"){
			banderaYaPaso="si";
			mayorCantidad=cantidad;
			mayorCantidadNombre=nombre;
		} else {
			if(cantidad>mayorCantidad){
				mayorCantidad=cantidad;
				mayorCantidadNombre=nombre;
			}
		}
		
		if(estadoCivil=="soltero"){
			if(banderaSoltero=="no"){
				banderaSoltero="si";
				masGasto=importeTotal;
				menosGasto=importeTotal;
				menosGastoSexo=sexo;
				masGastoSexo=sexo;
			} else {
				if(importeTotal>masGasto){
					masGasto=importeTotal;
					masGastoSexo=sexo;
				} if(importeTotal<menosGasto){
					menosGasto=importeTotal;
					menosGastoSexo=sexo;
				}
			}
		}
		
		if(sexo="f" && primerMujerBandera==0){
			primerMujerBandera=1;
			primerMujerNombre=nombre;
			primerMujerImporte=importeTotal;
		}

		if(estadoCivil=="viudo"){
			cantidadViudos++;
			acumuladorViudos=acumuladorViudos+importeTotal;
		}





		respuesta=prompt("Ingrese (n) para salir ")
	}

}


}
