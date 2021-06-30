const calcular = (datoa,datob) =>{
    let potencia_A = Math.pow(datoa,2)
    let potencia_B = Math.pow(datob,2)
    let suma = potencia_A + potencia_B;
    let C = Math.sqrt(suma)
    return C;
}



const verificar = () => {
    let datoa = document.getElementById("inp_a").value;
    let datob = document.getElementById("inp_b").value;

    const respuesta = calcular(datoa,datob)

    document.getElementById("resultado").textContent= respuesta;   
}
const boton = document.getElementById ("btn_calcular");
boton.addEventListener("click",verificar);