document.querySelector("#mostrar").addEventListener("click",mostrar);

let div = document.querySelector("div");

function mostrar(e) {
    let xhr = new XMLHttpRequest();

    console.log(1+"funcion mostrar")
    
    

    xhr.onreadystatechange = function() {

        console.log(2+"xhr.onreadystatechange");

        if (xhr.readyState === 4 && xhr.status === 200) {

            console.log(3+"xhr.readyState === 4 && xhr.status === 200");

            let textoEmpleado = this.responseText;
            
            let json = JSON.parse(textoEmpleado);

            json.employees.firstName;

            /* console.log(textoEmpleado); */
            console.log(json);
           console.log(json.employees[0].firstName);
           
           for (const value of json.employees) {

            div.innerHTML += "<p>Empleado: "+value.firstName+" "+value.lastName+"</p>";
           }

            

        }
        
    }

    xhr.open("GET","servidor.php", true);
    xhr.send();

}

