function Mostrar()
{
	var numero
	var contador=0; 
	

	numero = prompt("ingrese un numero");
	numero = parseInt(numero);

	for(var i=2 ; i<numero ; i++){ 

		if(i % 2==0) {
			contador++
			console.log(i);
		}
	
	}




}//FIN DE LA FUNCIÓN