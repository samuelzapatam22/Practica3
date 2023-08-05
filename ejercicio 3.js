let año;
    do{
        año =parseInt(prompt("Ingrese su año de nacimiento"))
    }
    while (año < 1)
alert ("El Entrevistado tiene o va a cumplir "+ edad(año)+" Años")
function edad(año){
    return 2023 - año
}