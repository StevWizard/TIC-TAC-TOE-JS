document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.getElementsByClassName("tabla");
    const recuadros_tabla = document.getElementsByClassName("cuadros");

    if (tabla.length > 0) {
        tabla[0].addEventListener("click", () => {
            
            const parrafo = document.createElement("p");
            recuadros_tabla[0].appendChild(parrafo);
            parrafo.innerHTML = "X"

        });
    } else {
        console.error("No elements found with class 'tabla'");
    }
});
