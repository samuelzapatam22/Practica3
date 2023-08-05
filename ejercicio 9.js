let dias,diario_total,total,respuesta;
const diario = 200
do{
dias = parseInt(prompt("Ingrese la cantidad de dias del viaje "));
diario_total = diario * dias
}
while(dias < 1)
respuesta=parseInt(prompt("¿El Hotel incluye las 3 comidas? si(1),no(0)"))
if (respuesta == 0){
    total = diario_total + hotel(dias) + comida(dias) ;
    alert("EL monto del cheque es de: "+ total + " pesos")
}else{
total= diario_total + hotel(dias) ;
alert("EL monto del cheque es de: "+ total + " pesos")
}
function hotel(dias){
    let precio_hotel=parseInt(prompt("Ingrese el costo de una noche en el Hotel seleccionado"))
    return precio_hotel * (dias - 1)
    
}

function comida(dias){
    let presupuesto_por_comida= parseInt(prompt("Ingrese el Presupuesto para cada Comida"))
    return presupuesto_por_comida * (dias * 3)

}
