const elegir_topping = () => {
    let helado = 250;
    const respuesta = window.prompt("ingrese topping a ordenar");

    if (respuesta == 'oreo'){
        let total = helado + 40;
        document.write('el precio de su helado seria:'+ total);
    }else{
        if(respuesta == 'kitkat'){
            let total = helado + 55;
            document.write('el precio de su helado seria:'+ total);
        }else{
            if(respuesta == 'brownie'){
                let total = helado + 65;
                document.write('el precio de su helado seria:'+ total);
            }else{
                if(respuesta == 'rocklets'){
                    let total = helado + 75;
                    document.write('el precio de su helado seria:'+ total);
                }else{
                    if(respuesta == ''){
                        document.write('el precio de su helado sin toppings seria:'+ helado)
                    }else{
                        document.write('lo sentimos ese topping no se encuentra disponible, el precio de su helado sin toppings seria:'+ helado)
                    }
                }
            }
        }
    }
}
const bottom = document.querySelector("#btn_topping");
bottom.addEventListener('click',elegir_topping);