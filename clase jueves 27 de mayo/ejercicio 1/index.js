const mostrar_culpable = () => {
    const respuesta = window.prompt("usted es culpable? responder con SI/NO?");

    if (respuesta == 'SI'){
        document.write('iras a la carcel')
    }else{
        if(respuesta == 'NO'){
            document.write('no iras a la carcel')
        }else{
            document.write('la documentacion por favor')
        }
    }

}
const bottom = document.querySelector("#btn_mostrar")
bottom.addEventListener('click',mostrar_culpable)