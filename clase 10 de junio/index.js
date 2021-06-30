const calcular = (num) =>{
    
    let resto = num % 2;
    let mensaje = ''
    if (resto == 0){
        mensaje= 'el numero es par';
    }else{
        mensaje='el numero es impar';
    }
    return mensaje;
}



const verificar = () => {
    let num = document.getElementById("inp_dato").value;

    const respuesta = calcular(num)

    document.getElementById("parrafo").textContent= respuesta;   
}
const boton = document.getElementById ("btn_calcular");
boton.addEventListener("click",verificar);