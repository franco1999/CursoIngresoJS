function mostrar()
{
	//alert("comentar esta linea 6");
	var estacionesDelAño;
	var temperatura;

	estacionesDelAño=prompt("Ingrese la estacion del año");
	temperatura=prompt("Ingrese la temperatura");	

	switch(estacionesDelAño)
	{
		case"Otoño":
		{	
			if(temperatura==15){
				alert("Esta lindo")
			} else {
				if(temperatura<15){
					alert("Se vino el frio");
				} else {
					if(temperatura>15 && temperatura<=21){
						alert("Esta re bueno");
					} else {
						alert("Hace mucho calor para otoño");
					}
				}
			}
		}

	}

}
