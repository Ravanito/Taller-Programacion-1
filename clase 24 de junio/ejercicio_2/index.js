const productos = {
    compania: "Google",
    productos: {
   office: {
    prod1: "Google Docs",
    prod2: "Google Sheets",
    prod3: "Google Slides"
   },
   general: {
    prod1:"Youtube",
    prod2: "Google Drive",
    prod3: "Google Meet"
    }
    }
} 
const mostrar_productos = () =>{
    let productos_office = `
    Producto 1: ${productos.productos.office.prod1}
    producto 2: ${productos.productos.office.prod2}
    producto 3: ${productos.productos.office.prod3} `
    document.getElementById("parrafo").textContent= productos_office;
    let productos_generales = `
    Producto 1: ${productos.productos.general.prod1}
    producto 2: ${productos.productos.general.prod2}
    producto 3: ${productos.productos.general.prod3} `
    document.getElementById("parrafo2").textContent= productos_generales;
}
const boton = document.getElementById ("btn_mostrar");
boton.addEventListener("click",mostrar_productos);