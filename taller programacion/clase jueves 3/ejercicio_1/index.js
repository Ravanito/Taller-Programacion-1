const construir_catalogo =async () => {

    const resultado =  await fetch ("https://jsonplaceholder.typicode.com/photos?albumId=10");
    
    const fotografias = await resultado.json();

    const total_columnas = [];

    fotografias.forEach(element => {
        
        //console.log(element.url)        
        const columna = `
            <div class="col-lg-3 mb-3">
                <div class="card" >
                    <img src="${element.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
             </div>`;

        total_columnas.push(columna)

    });


    const row = document.getElementById("row_catalogo")
    row.innerHTML = total_columnas.join("");
}

const boton= document.getElementById("btn_mostrar")
boton.addEventListener("click",construir_catalogo)