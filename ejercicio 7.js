let precio,total,totaliva;
do{
    precio=parseInt(prompt("Ingrese el valor del producto"))
}
while (precio < 1)
alert("El precio total con el 20% de descuento es: "+ descuento_producto(precio))
alert ("El precio total a pagar, con el IVA aplicado es: "+ iva_total(total))
function descuento_producto(precio){
    const descuento = 0.20
    total = precio - (precio * descuento)
    return total
}
function iva_total(total){
    const iva = 0.15
totaliva= total + (total * iva)
return totaliva
}