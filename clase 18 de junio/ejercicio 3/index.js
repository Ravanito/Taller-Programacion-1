
const calcular_area = () =>{
    let catetoa = document.getElementById("inp_1").value;
    let catetob = document.getElementById("inp_2").value;
    let multiplicacion = catetoa * catetob ;
    let area = multiplicacion / 2;
    let mensaje = 'el area es:'+area; 
    document.getElementById("prrfo").textContent= mensaje;   

}
const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",calcular_area)