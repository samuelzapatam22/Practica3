let hora,cobro,hora1,hora2,horas_mayores;
hora1= parseInt(prompt("ingrese cuanto va a cobrar por una hora de uso"));
hora2= parseInt(prompt("ingrese cuanto va a cobrar por 2 horas de uso"))
horas_mayores = parseInt(prompt ("ingrese cuanto va a cobrar por 3 o mas horas de uso"))
do{
    hora = prompt("Ingrese la cantidad de horas(Las fracciones de hora se cuantan como completas), si desea agregar una fraccion hagalo con hora.minuto ")
}
while(hora < 1)

if (hora == 1){
    cobro = hora1
    alert("Debe pagar: $"+ cobro+ " Pesos")
}else{
    if (hora == 2){
        cobro = hora2
        alert("Debe pagar: $"+ cobro+ " Pesos")
    }
 }
if (hora > 1 && hora <2){
cobro = hora2
alert("Debe pagar: $"+ cobro+ " Pesos")
}
if(hora > 2 && hora <=3){
      cobro = horas_mayores
    alert("Debe pagar: $"+ cobro+ " Pesos")
}
if(hora > 3){
    cobro = horas_mayores
    alert("Debe pagar: $"+ cobro + " Pesos")
}
