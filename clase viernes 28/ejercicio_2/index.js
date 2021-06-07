<<<<<<< HEAD
const recorrer_arreglo2 = () =>{
    let elementos = [1,2,3,4,5,6]

    elementos.push (7);
    elementos.push (8);

    let suma = 0;
    let cantidad_elementos = elementos.length

    elementos.forEach(element =>{
        suma= suma + element
    }); 
    let promedio = suma/cantidad_elementos;
    

}
const boton = document.querySelector("#btn_calculo")
=======
const recorrer_arreglo2 = () =>{
    let elementos = [1,2,3,4,5,6]

    elementos.push (7);
    elementos.push (8);

    let suma = 0;
    let cantidad_elementos = elementos.length

    elementos.forEach(element =>{
        suma= suma + element
    }); 
    let promedio = suma/cantidad_elementos;
    

}
const boton = document.querySelector("#btn_calculo")
>>>>>>> aba59f4e572b11cf411dd2c93b2fbd0a0d023ff1
boton.addEventListener("click",recorrer_arreglo2)