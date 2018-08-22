#include <stdio.h>
#include <stdlib.h>

int main()
/*{
    printf("Hello world!\n");
    return 0;
}*/
{
    int nro1,nro2,nro3;
    printf("Ingrese: ");
    scanf("%d", &nro1);
    printf("\n Ingrese: ");
    scanf( "%d", &nro2);
    printf("\n Ingrese: ");
    scanf("%d", &nro3);

    if(nro1>nro2 && nro1>nro3){
        printf("El numero mayor es %d", nro1);
    } else {
        if(nro2>nro1 && nro2>nro3){
            printf("El numero mayor es %d", nro2);
        } else {
            printf("El numero mayor es %d", nro3);
        }
    }

}
