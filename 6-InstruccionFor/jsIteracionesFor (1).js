function Mostrar()
{
	var contador;
	contador=0;
	
	for(contador<5;contador++;)
	{
		console.log(contador);
		if(contador==5)
		break;
	}
	console.log("Final" + contador);
}