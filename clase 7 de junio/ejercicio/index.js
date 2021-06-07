let marcas = ["Ford","Renault","Volkswagen","Seat","Peugeot","Chevrolet","Fiat","Toyota", "Chery"]

const mostrar_longitud = () => {
    console.log(marcas.length)
}

const acceder_elemento = () =>{
    let primero = marcas[0]
    console.log(primero);

    let ultimo = marcas[marcas.length - 1]
    console.log(ultimo);
}
const recorrer_array = () => {
    marcas.forEach(function(elemento, indice, array) {
        console.log(elemento, indice);
    })
}

const anadir_elemento = () => {
    let nuevoElemento = marcas.push('Audi')
    console.log(marcas)
}

const eliminar_elemento = () => {
    let ultimo = marcas.pop()
    console.log(marcas)
}
const agregar_elemento = () => {
    let nuevaLongitud = marcas.unshift('Chevy');
    console.log(marcas)
}   
const eliminar_primerElemento = () => {
    let primero = marcas.shift()
    console.log(marcas)
}
const encontrar_indice = () => {
    let pos = marcas.indexOf('Chevrolet')
}

const eliminar_elemento2 = ()  =>{
    let pos = 2;
    let elementoEliminado = marcas.splice(pos, 1);

}
const eliminar_variosElementos = () =>{
    let marcas = ["Ford","Renault","Volkswagen","Seat","Peugeot","Chevrolet","Fiat","Toyota", "Chery"]
    console.log(marcas)
    let pos = 1, numElementos = 2
    let elementosEliminados = marcas.splice(pos, numElementos)
    console.log(`
        elementos borrados: ${elementosEliminados}
        elementos que se mantienen:${marcas}
    `)
}
const copiar_array = () => {
    let copiaArray = marcas.slice();
}


const boton1 = document.getElementById("btn_mostrar")
boton1.addEventListener("click",mostrar_longitud);
const boton2 = document.getElementById("btn_mostrar1")
boton2.addEventListener("click",acceder_elemento);
const boton3 = document.getElementById("btn_mostrar2")
boton3.addEventListener("click",recorrer_array);
const boton4 = document.getElementById("btn_mostrar3")
boton4.addEventListener("click",anadir_elemento);
const boton5 = document.getElementById("btn_mostrar4")
boton5.addEventListener("click",eliminar_elemento);
const boton6 = document.getElementById("btn_mostrar5")
boton6.addEventListener("click",agregar_elemento);
const boton7 = document.getElementById("btn_mostrar6")
boton7.addEventListener("click",eliminar_primerElemento);
const boton8 = document.getElementById("btn_mostrar7")
boton8.addEventListener("click",encontrar_indice);
const boton9 = document.getElementById("btn_mostrar8")
boton9.addEventListener("click",eliminar_elemento2);
const boton10 = document.getElementById("btn_mostrar9")
boton10.addEventListener("click",eliminar_variosElementos);
const boton11 = document.getElementById("btn_mostrar10")
boton11.addEventListener("click",copiar_array);