
const denominar_edad = () =>{
    const edad_persona= document.querySelector("#inp_edad").value;
    if (edad_persona >= 1 && edad_persona < 13) {
        alert('es menor de 13 años')
    }
    else{
        if (edad_persona >= 13 && edad_persona < 21){
            alert('si,esta entre los 13 y 21 años');
        }else{
            if (edad_persona >= 21){
                alert('es mayor de edad')
            }
        }
    }
}
const boton =document.querySelector("#btn_edad");
boton.addEventListener("click",denominar_edad);

