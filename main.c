#include <stdio.h>
#include <stdlib.h>

int pedirEntero(char[]);

int main()
{
    int edad;
    edad= pedirEntero("Ingrese su edad: ");
    return 0;
}
//puntero = es una direccion de variable que guarda otra variable

int pedirEntero(char texto[], int min, int max)
{
    int numero;
    printf("%s", texto);
    while(numero<min || numero>max)
        {
            int numero;
            printf("%s", texto);
        }
}
