class Queue {
  constructor() {
    this.items = [];
  }

  // Agrega un elemento al final de la cola
  enqueue(element) {
    this.items.push(element);
  }

  // Elimina y devuelve el elemento frontal de la cola.
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Devuelve el elemento frontal de la cola sin eliminarlo.
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Comprobar si la cola está vacía.
  isEmpty() {
    return this.items.length === 0;
  }

  // Devuelve el número de elementos en la cola.
  size() {
    return this.items.length;
  }

  // Elimina todos los elementos de la cola.
  clear() {
    this.items = [];
  }

  // Muestra los elementos de la cola.
  print() {
    let element = "null\n->\n";
    element += this.items.reverse().join('\n -> \n');
    alert(element);
  }
}

// Define el menú
function menu() {
  const cola = new Queue();

  while (true) {
    const opcion = prompt(
      "Selecciona una opción:\n" +
      "1. Insertar elemento en la cola\n" +
      "2. Obtener el elemento frontal de la cola\n" +
      "3. Eliminar el elemento frontal de la cola\n" +
      "4. Comprobar si la cola está vacía\n" +
      "5. Mostrar el número de elementos de la cola\n" +
      "6. Eliminar todos los elementos de la cola\n" +
      "7. Mostrar elementos de la cola\n" +
      "8. Salir"
    );

    switch (opcion) {
      case "1":
        const data = prompt("Ingresa el dato a insertar en la cola:");
        cola.enqueue(data);
        break;
      case "2":
        const resultFront = cola.front();
        alert("Resultado del elemento frontal: " + resultFront);
        break;
      case "3":
        const resultDequeue = cola.dequeue();
        alert("Resultado de la eliminación: " + resultDequeue);
        break;
      case "4":
        const resultIsEmpty = cola.isEmpty();
        alert("Resultado del estado de la cola: " + resultIsEmpty);
        break;
      case "5":
        const resultSize = cola.size();
        alert("Resultado del tamaño de la cola: " + resultSize);
        break;
      case "6":
        cola.clear();
        alert("Los datos se han borrado");
        break;
      case "7":
        cola.print();
        break;
      case "8":
        return;
      default:
        alert("Opción inválida. Intenta nuevamente.");
        break;
    }
  }
}

// Ejecuta el menú
menu();