let lado
do{
lado = parseFloat(prompt("Ingrese la medida del lado del cuadrado"))
}
while(lado < 1)
area(lado);

function area(lado){
alert("El area del cuadrado es: "+lado * lado)
}