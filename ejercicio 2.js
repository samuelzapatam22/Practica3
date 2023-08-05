let pesos;
    do{
        pesos = parseFloat(prompt("ingrese la cantidad de pesos"));
    }
    while (pesos < 1)

alert ("Puede obtener $"+ conversion(pesos)+" Dolares")

function conversion(pesos){
    return pesos * 0.00025;
}
