let valor_total, cantidad_cuotas, cuota,total;
do{
valor_total= parseInt(prompt("Ingrese el valor total de su compra"))
cantidad_cuotas=parseInt(prompt("Ingrese a cuantas cuotas desea pagar: 1,2 o 6"))
}
while (valor_total < 1 || cantidad_cuotas < 1 )
if(cantidad_cuotas==1){
    alert("El pago sera en: 1 cuota de "+valor_total+" (0% de Recargo)")
}else{
if(cantidad_cuotas==2){
        total = valor_total+(valor_total * 0.05)
        cuota = total/2
        alert("El pago sera en: 2 cuotas de $"+cuota+" En total $"+total+" (5% de Recargo)")
}else{
    if(cantidad_cuotas==6){
        total = valor_total+(valor_total * 0.40)
        cuota = total/6
        alert("El pago sera en: 6 cuotas de $"+cuota+" En total $"+total+" (40% de Recargo)")    
    }
    }

}


