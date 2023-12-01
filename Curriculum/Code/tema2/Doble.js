class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
    this.anterior = null;
  }
}

class ListaDoblementeEnlazada {
  constructor() {
    this.cabeza = null;
    this.cola = null;
  }

  insertarAlInicio(valor) {
    const nuevoNodo = new Nodo(valor);

    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
      this.cola = nuevoNodo;
    } else {
      nuevoNodo.siguiente = this.cabeza;
      this.cabeza.anterior = nuevoNodo;
      this.cabeza = nuevoNodo;
    }
  }

  insertarAlFinal(valor) {
    const nuevoNodo = new Nodo(valor);

    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
      this.cola = nuevoNodo;
    } else {
      nuevoNodo.anterior = this.cola;
      this.cola.siguiente = nuevoNodo;
      this.cola = nuevoNodo;
    }
  }

  eliminarAlInicio() {
    if (!this.cabeza) {
      return "La lista está vacía.";
    }

    const valorEliminado = this.cabeza.valor;

    if (this.cabeza === this.cola) {
      this.cabeza = null;
      this.cola = null;
    } else {
      this.cabeza = this.cabeza.siguiente;
      this.cabeza.anterior = null;
    }

    return valorEliminado;
  }

  eliminarAlFinal() {
    if (!this.cola) {
      return "La lista está vacía.";
    }

    const valorEliminado = this.cola.valor;

    if (this.cabeza === this.cola) {
      this.cabeza = null;
      this.cola = null;
    } else {
      this.cola = this.cola.anterior;
      this.cola.siguiente = null;
    }

    return valorEliminado;
  }

  buscar(valor) {
    let nodoActual = this.cabeza;

    while (nodoActual) {
      if (nodoActual.valor === valor) {
        return true;
      }
      nodoActual = nodoActual.siguiente;
    }

    return false;
  }

  mostrarElementos() {
    let nodoActual = this.cabeza;
    let elementos = [];

    while (nodoActual) {
      elementos.push(nodoActual.valor);
      nodoActual = nodoActual.siguiente;
    }

    return elementos;
  }
}

function menu() {
  const lista = new ListaDoblementeEnlazada();

  while (true) {
    const opcion = prompt(
      "Selecciona una opción:\n" +
        "1. Insertar elemento al inicio\n" +
        "2. Insertar elemento al final\n" +
        "3. Eliminar elemento al inicio\n" +
        "4. Eliminar elemento al final\n" +
        "5. Buscar elemento\n" +
        "6. Mostrar elementos\n" +
        "7. Salir"
    );

    switch (opcion) {
      case "1":
        const valorInicio = prompt("Ingresa el valor a insertar al inicio:");
        lista.insertarAlInicio(valorInicio);
        break;
      case "2":
        const valorFinal = prompt("Ingresa el valor a insertar al final:");
        lista.insertarAlFinal(valorFinal);
        break;
      case "3":
        const valorEliminadoInicio = lista.eliminarAlInicio();
        alert("Valor eliminado al inicio: " + valorEliminadoInicio);
        break;
      case "4":
        const valorEliminadoFinal = lista.eliminarAlFinal();
        alert("Valor eliminado al final: " + valorEliminadoFinal);
        break;
      case "5":
        const valorBuscado = prompt("Ingresa el valor a buscar:");
        const encontrado = lista.buscar(valorBuscado);
        if (encontrado) {
          alert("El valor está en la lista.");
        } else {
          alert("El valor no está en la lista.");
        }
        break;
      case "6":
        const elementos = lista.mostrarElementos();
        alert("Elementos en la lista: " + elementos.join(", "));
        break;
      case "7":
        return;
      default:
        alert("Opción inválida. Intenta nuevamente.");
        break;
    }
  }
}

menu();