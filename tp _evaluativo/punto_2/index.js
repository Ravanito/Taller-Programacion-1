const framework = {
    titulo: 'Framework utilizado en la actualidad',
    nombre: 'Angular',
    caracteristicas: {
    lenguaje: 'TypeScript',
    patron: 'MVVM',
    spa: 'si'
    },
}

const mostrar_productos = () =>{
    console.log(`
    titulo : ${framework.titulo}
    nombre: ${framework.nombre}
    lenguaje: ${framework.caracteristicas.lenguaje}
    patron: ${framework.caracteristicas.patron} 
    spa: ${framework.caracteristicas.spa}`) 
}
const boton = document.getElementById ("btn_mostrar");
boton.addEventListener("click",mostrar_productos);