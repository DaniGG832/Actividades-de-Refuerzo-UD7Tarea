const boton = document.getElementById( 'mostrar');
const objetoXHR = new XMLHttpRequest();

function respuesta() {
 if (objetoXHR.readyState === 4 && objetoXHR.status === 200) {
    const divi = document.getElementById( 'parrafo' );
    const datos = JSON.parse(this.responseText);
    for(let item of datos){
        divi.innerHTML += `<a href="${item.enlace}">${item.enlace}</a><br>`;
    }
 }
}

function peticion() {
 objetoXHR.open( 'GET', 'mytutorials.json' , true);
 objetoXHR.onreadystatechange = respuesta;
 objetoXHR.send();
}

boton.addEventListener( 'click', peticion);
