let examen1=0, examen2=0, examen3=0;
do{
examen1=parseFloat(prompt("Ingrese la nota del examen 1(25%)"))
examen2=parseFloat(prompt("Ingrese la nota del examen 2(25%)"))
examen3=parseFloat(prompt("Ingrese la nota del examen 3(50%)"))
}
while(examen1 < 0 || examen2 < 0 || examen3 < 0)
alert("El promedio total es: "+ promedio(examen1,examen2,examen3))

function promedio(examen1,examen2,examen3){
let prome
prome= (examen1 * 0.25)+(examen2 * 0.25)+(examen3 * 0.50)
return prome
}
