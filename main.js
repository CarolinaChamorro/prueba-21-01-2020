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
        //radio button
         var radioBombero= document.createElement('input');
        radioBombero.setAttribute('type', 'radio');
        casillero.className = 'celdas';
        radioBombero.setAttribute("value", j);
        radioBombero.id = j;
        var radioB=radioBombero.id;
       console.log("el numero de radioBombero  "+radioB);
       radioBombero.appendChild(document.createTextNode(radioB));
        casillero.appendChild(document.createTextNode(listaBomberos[j].nombre));
        document.getElementById("nombre").value = " ";
        document.getElementById("nacimiento").value = " ";
    }
    contenedorBombero.appendChild(radioBombero);
    contenedorBombero.appendChild(casillero);
}
console.log("mirar toda la lista en listaBomberos");

function agregarMotobomba() {
    //obtener datos motobomba
    let codigo = document.getElementById("nombMoto").value;
    let nuevaMoto = new Motobomba(codigo);
    listaMoto.push(nuevaMoto);
    
    //lista motobomba
    for (let i = 0; i < listaMoto.length; i++) {
        var casillero = document.createElement('div');
        //radiobutton
        var radioMoto= document.createElement('input');
        radioMoto.setAttribute('type', 'radio');
        radioMoto.setAttribute("value", i);
        radioMoto.id = i;
       var radioM=radioMoto.id;
       console.log("el numero de radioMoto  "+radioM);
        casillero.className = 'celdas';
        radioMoto.appendChild(document.createTextNode(radioM));
        casillero.appendChild(document.createTextNode(listaMoto[i].codigo));
        document.getElementById("nombMoto").value = " ";
    }
    contenedorMoto.appendChild(radioMoto);
    contenedorMoto.appendChild(casillero);
}
console.log("mirar toda la lista en listaMoto");

//asociar
function asociar() {
    let seleccionados=[];
  for (let b = 0; b < radioMoto.length; b++) {
    if (radioMoto[b].checked==true) {
     console.log("el numero de radioMOTO"+radioMoto[b]);
      
    }
    /* for (let a = 0; a < listaB.options.length; a++) {
    if (listaB.options[a].selected==true) {
      for (let c = 0; c < indices.length; c++) {
        lMotobombas[indices[c]].addBombero(lBomberos[a]);   
      }
    } else {
      console.log("a la vivora de la mar");
    }    
  } */
  }
  

  }
