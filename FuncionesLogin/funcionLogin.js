function leerTexto(){
    var usrN = document.getElementById("usrNm").value;
    var passw = document.getElementById("Pswd").value;

    //Mostrar valores
    //console.log(usrN);
    //console.log(passw);

    var ingresar = auntenticar(usrN, passw)

    if(ingresar){
        alert("Bienvenido a la web de servicios de consultoría")
        window.location.href="/Secciones/main.html"
    } else {
        alert("Password Incorrecto")
    }
}

function auntenticar(username, passw){
    if(username==="admin" && passw ==="passss34"){
        return true;
    } else {
        return false;
    }
}