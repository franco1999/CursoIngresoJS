function Mostrar()
{
	var nota =-1;
	var sexo = "";
	var acumulador=0;
	var promedio;
	var notaMenor = 0;
	var sexoMenor;
	var contador=0;

	// CANTIDAD DE VECES QUE SE VA A REPETIR EL CICLO.
	for(var i=0; i<5; i++)
	{	
		//MIENTRAS LA NOTA NO ESTE EN EL RANGO ENTRE 0 Y 10
		//EL WHILE VA A REPETIR EL INGRESO DE LA NOTA 
		while(!(nota >= 0 && nota <=10))
		{
			nota = prompt("Ingrese una nota");
			nota = parseInt(nota);
		}
		//MIENTRAS EL SEXO SEA DISTINTO A "F" Y A "M" SE VA A REPETIR EL INGRESO DE SEXO.
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese su sexo");
		}
		
		acumulador = acumulador + nota;


		if(nota < notaMenor || i == 0)
		{
			//I SIGNIFICA LA REPETICION DEL SICLO Y EL 0 ES LA PRIMERA VEZ QUE SE REPITE EL CICLO.
			//ENTONCES LA PRIMERA VEZ QUE SE HAGA EL CICLO NOTAMENOR= A PRIMERA NOTA INGRESADA. 
			notaMenor = nota;
			sexoMenor = sexo;

		}
		if(sexo=="m" && nota>=6)
		{
			contador++;
		}
		
		//RESETEAR LAS VARIABLES PARA QUE SE PUEDA VOLVER A HACER EL WHILE (PARA VOLVER A INGREESAR NOTA O SEXO)
		//(SIEMPRE VA AL FINAL DEL WHILEEEEEEEEEEEEEEEEEE <3)
		nota = -1;
		sexo = "";
	}
	
	promedio = acumulador / 5;
	alert("Su promedio es " + promedio);
	alert("La nota mas baja es " + notaMenor + " y su sexo es " + sexoMenor );
	alert("La cantidad de varones que su nota es mayor o igual a 6 es de " + contador + " varones");



}
