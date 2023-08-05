let metros,cobrometro;

do{
    cobrometro =parseInt(prompt("ingrese cuanto va a cobrar por pintar m2"))
    metros=parseFloat(prompt("Ingrese la cantidad de metros cuadrdos que desea pintar"))
}
while (metros < 1 || cobrometro < 1 )

alert("El total a pagar es: $"+ cobro_total(metros,cobrometro)+ " Pesos")

function cobro_total(metros,cobrometro){
return cobrometro * metros
}

