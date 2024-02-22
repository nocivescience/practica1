const generatePasswordEl = document.getElementById('generate');
const claveEl = document.getElementById('clave');

function generarPassword(longitud){
    var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
    var password = "";
    for (i=0; i<longitud; i++) password += caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
    return password;
}

window.onload = function(){
    generatePasswordEl.addEventListener('click', function(){
        const lugarClave = document.createElement('p');
        lugarClave.textContent += `${generarPassword(8)}`;
        claveEl.appendChild(lugarClave);
    });
}