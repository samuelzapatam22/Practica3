let lado1,lado2,h2;
do{
lado1=parseFloat(prompt("ingrese la medida de un lado"))
lado2=parseFloat(prompt("ingrese la medida del otro lado"))
}
while(lado1 < 1 && lado2 < 1)
alert("La Hipotenusa es: "+ hipotenusa(lado1,lado2))
function hipotenusa(lado1,lado2){
    h2 = (lado1 * lado1) + (lado2 * lado2)
    let hipotenusa = Math.sqrt(h2)
    return hipotenusa 
}
