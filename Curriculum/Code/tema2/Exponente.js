// para poder empezar el programa empesamos con funtion 
function potenciaRec(base, potencia) {
    if (potencia === 0) {
        return 1
    } else {
        return base * potenciaRec(base, potencia-1)
    }
}
//para poder hacer el trabajo debemos poner potencial
function potenciaFor(base, potencia) {
    resultado = 1
    if (potencia === 0) {
        return 1
    } else {
        for(i = 0; i < potencia; i++) {
            resultado *= base
        }
        return resultado
    }
}
//esta parte es para mostrar el menu
function mostrarMenu() {
    var option = prompt(
        "Selecciona una opcion\n " +
        "1. Exponente con Recursion\n" +
        "2. Expoenente con For" 
        )
    
    switch(option) {
        case "1":
            var base = prompt("Introduzca la base: ")
            var potencia = prompt("Introduzca la potencia: ")
            var resultado = potenciaRec(base, potencia)
            alert ("El resultado es: " + resultado)
            break
        case "2":
            var base = prompt("Introduzca la base: ")
            var potencia = prompt("Introduzca la potencia: ")
            var resultado = potenciaFor(base, potencia)
            alert ("El resultado es: " + resultado)
            break

        default:
            alert("Opcion Invalida")
            break
        }
        
        
}
mostrarMenu()
