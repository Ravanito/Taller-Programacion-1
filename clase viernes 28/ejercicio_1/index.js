<<<<<<< HEAD
const recorrer_arreglo =() =>{
    let clasificaciones = ('ana','oswaldo','celia','maria','antonio')
    
    clasificaciones.forEach(element => {
        document.write(element)
    });
    for(indice in clasificaciones){
        document.write(`
        1 puesto: ${clasificaciones[0]}
        2 puesto: ${clasificaciones[1]}
        3 puesto: ${clasificaciones[2]}
        `);
    }
}
const boton =document.querySelector("#btn_clasificados")
=======
const recorrer_arreglo =() =>{
    let clasificaciones = ('ana','oswaldo','celia','maria','antonio')
    
    clasificaciones.forEach(element => {
        document.write(element)
    });
    for(indice in clasificaciones){
        document.write(`
        1 puesto: ${clasificaciones[0]}
        2 puesto: ${clasificaciones[1]}
        3 puesto: ${clasificaciones[2]}
        `);
    }
}
const boton =document.querySelector("#btn_clasificados")
>>>>>>> aba59f4e572b11cf411dd2c93b2fbd0a0d023ff1
boton.addEventListener("click",recorrer_arreglo)