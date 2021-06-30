let lenguajes = ["python","javaScript","Csharp","C++","java","PHP","Ruby"]
const modificar_arreglo = () =>{
    let longitud = lenguajes.length;

    document.getElementById("parrafo").textContent= longitud; 
    let tercer_elemento = lenguajes[2]

    document.getElementById("parrafo2").textContent= tercer_elemento;

    lenguajes.push('Go')
    lenguajes.unshift('kotlin')
    let pos = 5;
    let eliminarElementos = lenguajes.splice(pos, 2);
    lenguajes.forEach(function(element, indice, array){
        console.log(element, indice)
    });

}
const boton = document.getElementById ("btn_mostrar");
boton.addEventListener("click",modificar_arreglo);