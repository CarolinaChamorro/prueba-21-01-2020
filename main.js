//clase Bombero
class Bombero {
    constructor(nombre, fechNaci) {
        this.nombre = nombre;
        this.fechNaci = fechNaci;
    }
}
//clase Motobomba
class Motobomba {
    constructor(codigo, bombe = []) {
        this.codigo = codigo;
        this.bombe = bombe;
    }
    addBombero(bomberoMan) {
        this.bombe.push(bomberoMan);
    }
}


let contenedorBombero = document.getElementById("casillaBombero");
let contenedorMoto = document.getElementById("casillaMotobomba");
let listaBomberos = [];
let listaMoto = [];
//bomberos
function agregarBombero() {
    //bomberos datos
    let nombre = document.getElementById("nombre").value;
    let fechNaci = document.getElementById("nacimiento").value;
    let nuevoBombero = new Bombero(nombre, fechNaci);
    listaBomberos.push(nuevoBombero);
    //lista de bomberos
    for (let j = 0; j < listaBomberos.length; j++) {
        var casillero = document.createElement('div');
        casillero.className = 'celdas';
        casillero.setAttribute("value", j);
        casillero.id = j;
        console.log("numero de casillero bombero " + casillero.id);
        casillero.appendChild(document.createTextNode(listaBomberos[j].nombre));

        document.getElementById("nombre").value = " ";
        document.getElementById("nacimiento").value = " ";
    }
    contenedorBombero.appendChild(casillero);
}
console.log("mirar toda la lista en listaBomberos");
// motobombas
function agregarMotobomba() {
    //obtener datos motobomba
    let codigo = document.getElementById("nombMoto").value;
    let nuevaMoto = new Motobomba(codigo);
    listaMoto.push(nuevaMoto);
    //lista motobomba
    for (let i = 0; i < listaMoto.length; i++) {
        var casillero = document.createElement('div');
        casillero.className = 'celdas';
        casillero.id = i;
        console.log("numero de casillero bombero " + casillero.id);
        casillero.setAttribute("value", i);
        casillero.appendChild(document.createTextNode(listaMoto[i].codigo));
        document.getElementById("nombMoto").value = " ";
    }
    contenedorMoto.appendChild(casillero);
}
console.log("mirar toda la lista en listaMoto");

let seleccionados=[];
//asociar
function asociar() {


    var serie = generarNumero(0, 90);//listaMo listaBom
    if ((seleccionados.includes(serie) || seleccionados === [])) {
        console.log("ya existe el numero : " + serie);
        asociar();
    } else if (numUsados.length <91) {//91 listas.length
        verNum=serie;
        numUsados.push(serie);
        //numeros que se van a guardar
        console.log("numero guardado",numUsados[numUsados.length - 1]);
    } else {
        var marco=document.getElementById("mostrar");
        marco.style.backgroundColor = "pink";
        alert("Todos los numeros ya han sido jugados");
    }
    document.getElementById("verNumero").innerHTML=verNum;

   /*  for (let z = 0; z < listaMoto.length; z++) {
      if (listaMoto[z]) {
        seleccionados.push(z);
      }
    }
    for (let x = 0; x < listaBomberos.length; x++) {
      if (contenidoBom[x].selected==true) {
          contenidoBom[x].style.color="green";
        for (let y = 0; y < seleccionados.length; y++) {
          listaMoto[seleccionados[y]].addBombero(listaBomberos[x]);   
        }
      } else {
        console.log("a la vivora de la mar");
      }    
    } */
}