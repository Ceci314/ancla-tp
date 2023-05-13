const formulario= document.querySelector("#formulario");
const inputs= document.querySelectorAll ("#formulario input");
const exprRe = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    apellido:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/,
    password2: /^.{4,12}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ 
}

const objeto= {
    nombre: false,
    apellido: false,
    password: false,
    correo: false,
    telefono: false
}


const validarFormulario = (evento) =>{
    console.log("se ejecuto");
    console.log (evento.target.name)
    switch (evento.target.name){
        case "nombre":
            if(exprRe.nombre.test (evento.target.value)){
                document.getElementById("grupoNombre").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupoNombre").classList.add("formGrupo-correcto");
                document.querySelector("#grupoNombre").classList.remove("formInput-error-activo");
                objeto["nombre"] = true
            }else{
                document.getElementById("grupoNombre").classList.add("formGrupo-incorrecto");
                document.getElementById("grupoNombre").classList.remove("formGrupo-correcto");
                document.querySelector("#grupoNombre").classList.add("formInput-error-activo");
                document.querySelector("#grupoNombre .formInput-error").classList.add("formInput-error-activo");
                objeto["nombre"] = false
            }
        break
        case "apellido":    
            if(exprRe.apellido.test (evento.target.value)){
                document.getElementById("grupoApellido").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupoApellido").classList.add("formGrupo-correcto");
                document.querySelector("#grupoApellido").classList.remove("formInput-error-activo");
                objeto["apellido"] = true
            }else{
                document.getElementById("grupoApellido").classList.add("formGrupo-incorrecto");
                document.getElementById("grupoApellido").classList.remove("formGrupo-correcto");
                document.querySelector("#grupoApellido").classList.add("formInput-error-activo");
                document.querySelector("#grupoApellido .formInput-error").classList.add("formInput-error-activo");
                objeto["apellido"] = false
        }
    
        break
        case "password":
            if(exprRe.password.test (evento.target.value)){
                document.getElementById("grupoPassword").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupoPassword").classList.add("formGrupo-correcto");
                document.querySelector("#grupoPassword").classList.remove("formInput-error-activo");
                objeto["password"] = true
            }else{
                document.getElementById("grupoPassword").classList.add("formGrupo-incorrecto");
                document.getElementById("grupoPassword").classList.remove("formGrupo-correcto");
                document.querySelector("#grupoPassword").classList.add("formInput-error-activo");
                document.querySelector("#grupoPassword .formInput-error").classList.add("formInput-error-activo");
                objeto["password"] = false
        }
                
        break
        case "password2":
            validarPassword2()
        
        break
        case "correo":
            if(exprRe.correo.test (evento.target.value)){
                document.getElementById("grupoCorreo").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupoCorreo").classList.add("formGrupo-correcto");
                document.querySelector("#grupoCorreo").classList.remove("formInput-error-activo");
                objeto["correo"] = true
            }else{
                document.getElementById("grupoCorreo").classList.add("formGrupo-incorrecto");
                document.getElementById("grupoCorreo").classList.remove("formGrupo-correcto");
                document.querySelector("#grupoCorreo").classList.add("formInput-error-activo");
                document.querySelector("#grupoCorreo .formInput-error").classList.add("formInput-error-activo");
                objeto["correo"] = false
        }
        break
        case "telefono":
            if(exprRe.telefono.test (evento.target.value)){
                document.getElementById("grupoTelefono").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupoTelefono").classList.add("formGrupo-correcto");
                document.querySelector("#grupoTelefono").classList.remove("formInput-error-activo");
                objeto["telefono"] = true
                
            }else{
                document.getElementById("grupoTelefono").classList.add("formGrupo-incorrecto");
                document.getElementById("grupoTelefono").classList.remove("formGrupo-correcto");
                document.querySelector("#grupoTelefono").classList.add("formInput-error-activo");
                objeto["telefono"] = false
                
               
        }
        break                
    }
}   
const validarPassword2 = ()=> {
    const inputPassword1= document.getElementById("password");
    const inputPassword2= document.getElementById("password2");
    if (inputPassword1.value !== inputPassword2.value ){
        document.getElementById("grupoPassword2").classList.add("formGrupo-incorrecto");
        document.getElementById("grupoPassword2").classList.remove("formGrupo-correcto");
        document.querySelector("#grupoPassword2").classList.add("formInput-error-activo");
        document.querySelector("#grupoPassword2 .formInput-error").classList.add("formInput-error-activo");
        objeto["password"] = false
    }else{
        document.getElementById("grupoPassword2").classList.remove("formGrupo-incorrecto");
        document.getElementById("grupoPassword2").classList.add("formGrupo-correcto");
        document.querySelector("#grupoPassword2").classList.remove("formInput-error-activo");
        document.querySelector("#grupoPassword2 .formInput-error").classList.remove("formInput-error-activo");
        objeto["password"] = true

    }
}
  
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener ("blur", validarFormulario);
})

const terminos= document.getElementById("terminos")

formulario.addEventListener ("submit", (evento) =>{
    evento.preventDefault();
    if (objeto.nombre && objeto.apellido && objeto.password && objeto.telefono && objeto.correo && terminos.checked){
        formulario.reset()
        document.getElementById("formMensaje-exito").classList.add("formMensaje-exito-activo")
        setTimeout(() => {
            document.getElementById("formMensaje-exito").classList.remove("formMensaje-exito-activo")
        }, 4000);
    }else{
    document.getElementById("formMensaje").classList.add("formMensaje-activo")
    setTimeout(() => {
        document.getElementById("formMensaje").classList.remove("formMensaje-activo")
    }, 4000);
}
})

