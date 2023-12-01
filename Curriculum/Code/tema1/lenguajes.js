var nombres = ['C','PHP', 'Python', 'C++','Javascritd', 'Java','C#','GO','Visual']


function imprimeForbasico(nombres){
    var salida= ''
    for(var i=0; i<nombres.length; i++){
        salida += nombres[i] + '\n'
    }
    alert(salida)
 }

function imprimeFor(nombres){
    var salida= ''
    for(var i=0; i<nombres.length; i++){
        salida += nombres[i] + ' se encuentra en el indice ' + i + '\n'
    }
    alert(salida)
 }

function imprimeForechbasico(nombres){
    var salida=''
    nombres.forEach(element => 
        salida += element + '\n'
    )
    alert(salida)
}

function imprimeForech(nombres){
    var salida=''
    nombres.forEach(function (valor, indice){
        salida += valor + ' se encuentra en el indice ' + indice + '\n'
        })

    alert(salida)
}

function imprimeTamaño(nombres){
  var salida = nombres.length;
  alert(salida)
}

function  imprimeElemento(posicion){
  //verificar posicion existe en el arreglo
  // si la posicion existe imprimo el elemeto
  // si la posicion no existe imprimo el elemeto no existe en esa psosicon
}

function mostrarMenu(){
    var opcion = prompt('Seleccione una opción:' + 
    '\n1. Imprimir lenguajes con "for" básico.'+
    '\n2. Imprimir lenguajes con "for" y su índice.' + 
    '\n3. Imprimir lenguajes con "forEach" básico.'+
    '\n4. Imprimir lenguajes con "forEach" y su índice.' + 
    '\n5. Imprime tamaño del arreglo' +
    '\n6. Imprime elemento del arreglo' +
    '\nIngrese el número de la opción:');
  switch (opcion) {
    case '1':
      imprimeForbasico(nombres);
      break;
    case '2':
      imprimeFor(nombres);
      break;
    case '3':
      imprimeForechbasico(nombres);
      break;
    case '4':
      imprimeForech(nombres);
      break;
      case '5':
      imprimeTamaño(nombres);
      break;
      case '6':
      imprimeElemento(posicion);
      break;
    default:
      alert('Opción inválida. Seleccione otra opción.');
      break;
  }
}

mostrarMenu()