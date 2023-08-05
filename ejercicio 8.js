let sueldo,ahorro_mensual,total;
do{
    sueldo=parseInt(prompt("Ingrese su sueldo mensual"));
}
while (sueldo < 1)
total=0
for (let i = 1; i <= 12;i++){
    total = total + ahorro(sueldo)
}
alert ("Anualmente esta Ahorrando: "+ total +" Pesos")
function ahorro(sueldo){
    const porcentaje_ahorro = 0.40
    ahorro_mensual= sueldo - (sueldo * 0.40)
    return ahorro_mensual
}