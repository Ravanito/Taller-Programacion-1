let vacunas = ["pfizer","moderna","aztraZeneca","sinopharm","Sputnik V","sinovac","covishield"]

const mostrar_longitud = () => {
    let longitud = vacunas.length;

    document.getElementById("parrafo").textContent= longitud; 
}
const mostrar_ultimoElemento = () =>{
    let ultimo = vacunas[vacunas.length - 1]
    document.getElementById("parrafo2").textContent= ultimo; 
}
const mostrar_tercero = () =>{
    let tercer_elemento = vacunas[2]

    document.getElementById("parrafo3").textContent= tercer_elemento; 
}
const cambiar_arreglo = () =>{
    vacunas.forEach(function(element, indice, array){
        console.log(element, indice)
    });
    vacunas.push('Johnson & johnson')
    vacunas.shift()
    vacunas.unshift('Novavax')
    let pos = 2;
    let eliminarElementos = vacunas.splice(pos, 2);
    vacunas.forEach(function(element, indice, array){
        console.log(element, indice)
    });

}

const boton = document.getElementById ("btn_calcular");
boton.addEventListener("click",mostrar_longitud);
const boton1 = document.getElementById ("btn_mostrar1");
boton1.addEventListener("click",mostrar_ultimoElemento);
const boton2 = document.getElementById ("btn_mostrar2");
boton2.addEventListener("click",mostrar_tercero);
const boton3 = document.getElementById ("btn_mostrar3");
boton3.addEventListener("click",cambiar_arreglo);