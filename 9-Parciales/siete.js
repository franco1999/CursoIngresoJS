function Mostrar()
{
	/* NOMBRE|SEXO|EDAD	

   JOSE    M    25 
   
   MARIA   F    16
   
   JESUS   M    33
   
   FER     M    81*/

function mostrar()
{	
	var sexo;
	var edad;
	var contador=0;
	var nombre;

	contador=0;
	
	while(contador<4)
	{
		contador++;
		nombre=prompt("Ingrese nombre valido");
		
		sexo=prompt("Ingrese sexo valido");
		while(sexo!="m" && sexo=="f")
		{
			sexo=prompt("Ingrese sexo valido");
		}
		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(insNaN(edad)||edad<0||edad>100)
		{
			edad=prompt("Ingrese edad");
			edad=parseInt(edad);
		}
	}

	if(contador==0){
		edadMax=edad;
		edadMin=edad;
		nombreMayor=nombre;
	} else {
		if(edad<edad){
			edadMax=edad;
			nombreMayor=nombre;
		}
		if(edadMin>edad){
			edadMin=edad;
		