document.querySelector("#mostrar").addEventListener("click",mostrar);

let div = document.querySelector("div");

function mostrar(e) {
    let xhr = new XMLHttpRequest();

    console.log(1+"funcion mostrar")
    
    xhr.open("GET","myTutorials.json", true);

    xhr.onreadystatechange = function() {

        console.log(2+"xhr.onreadystatechange");

        if (xhr.readyState === 4 && xhr.status === 200) {

            console.log(3+"xhr.readyState === 4 && xhr.status === 200");

            let objetoJSON = JSON.parse(this.responseText);

            console.log(xhr.responseText);

            let enlaces = "";

            for(let a of objetoJSON){
                enlaces += '<p><a href="'+ a.url+'">'+a.title+'</a></p>'
                
                console.log(a["title"]);
               console.log(a["url"]);
               
            }
            console.log(enlaces);
            div.innerHTML = enlaces;

        }
        
    }

    
    xhr.send();

}

