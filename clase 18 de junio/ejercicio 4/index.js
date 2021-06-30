const promediar = (arreglo) =>{
    
    let numeros_arreglo = arreglo.length
    let resultado = 0;
    arreglo.forEach(element => {
        resultado = resultado+element;
    });
    let resultado_final = resultado/numeros_arreglo
    let mensaje = 'el promedio es '+ resultado_final;
    return mensaje;
}



const resultado_promedio = () => {
    let arreglo = [88,11,21,25,36]

    const respuesta = promediar(arreglo)

    document.getElementById("parrafo").textContent= respuesta;   
}
const boton = document.getElementById ("btn_calcular");
boton.addEventListener("click",resultado_promedio);