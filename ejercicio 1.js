let a,b,area
do{
b= parseFloat(prompt("Ingrese La Medida (cm) de la Base del Triangulo"));
a= parseFloat(prompt("Ingrese La Medida (cm) de la altura del Triangulo"));
}
while(b < 1 || a < 1 )
areatriangulo(b,a);
alert("El area del triangulo es: "+ area)

function areatriangulo(b,a){
area= (b*a)/2
return area
}