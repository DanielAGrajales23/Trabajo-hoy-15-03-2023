let Nombre, Correo , Mensaje;

let Formulario = document.getElementById("Form")

Formulario.addEventListener("Summit", (e)=>{
    e.preventDefault()
})
function leeDatos(){
    Nombre = document.getElementById("Nombre").Value
    Correo = document.getElementById("Correo").Value
    Mensaje = document.getElementById("Textarea").Value
}
Formulario.addEventListener("Summit", (e)=>{
    e.preventDefault()
    leeDatos()
})
function ValidarData(Nombre,Correo,Textarea){
    if(Nombre.length==0 || Correo.length==0 || Mensaje.length==0){
        Swal.fire({
            Title: "Error!",
            Text:  "Do you want to continue",
            icon:  "erorr",
            confirmButtonText: "Cool",
            iconColor: "Purple"
        })  
    }
}
