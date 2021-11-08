let menu = document.querySelector("#menu"),
    opciones = document.querySelectorAll("nav li:not(#menu)");

menu.addEventListener("click", () => {
    [].forEach.call(opciones, (opcion) => {
        if (opcion.classList.contains("hide")){
            opcion.classList.remove("hide");
        }
        else{
            opcion.classList.add("hide");
        }
    });
}, false);