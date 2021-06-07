<<<<<<< HEAD
const mostrar_usuarios = async () =>{

    const respuesta= await fetch("https://jsonplaceholder.typicode.com/users")

    const data= await respuesta.json();
    const total_items = []

    data.forEach(element => {
        let item =`<li class="list-group-item">${element.name}</li>` 
        total_items.push(item);
    });

    document.getElementById("ul_usuario").innerHTML=total_items.join("");
}

const boton = document.getElementById("btn_mostrar");

=======
const mostrar_usuarios = async () =>{

    const respuesta= await fetch("https://jsonplaceholder.typicode.com/users")

    const data= await respuesta.json();
    const total_items = []

    data.forEach(element => {
        let item =`<li class="list-group-item">${element.name}</li>` 
        total_items.push(item);
    });

    document.getElementById("ul_usuario").innerHTML=total_items.join("");
}

const boton = document.getElementById("btn_mostrar");

>>>>>>> aba59f4e572b11cf411dd2c93b2fbd0a0d023ff1
boton.addEventListener("click",mostrar_usuarios)