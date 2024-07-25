let menu = document.getElementById("menu");
let dropDown = document.querySelector(".dropDown");
let salir = document.getElementById("salir")

// menu.addEventListener('click', function(){
//     if(dropDown.style.opacity === "0" || dropDown.style.opacity === ""){
//         dropDown.style.opacity = "1";
//         dropDown.style.visibility = "visible";
//     } else {
//         dropDown.style.opacity = "0";
//         dropDown.style.visibility = "hidden";
//     }
// });



menu.addEventListener('click', function() {
    if (dropDown.style.transform === "translateX(-100%)" || dropDown.style.opacity === "0") {
        dropDown.style.transform = "translateX(0)"; // Vuelve a la posición original
        dropDown.style.opacity = "1"; // Vuelve a ser visible
    };
});

salir.addEventListener('click', function(){

        dropDown.style.transform = "translateX(-100%)"; // Mueve el elemento a la izquierda
        dropDown.style.opacity = "0"; // Hace que el elemento sea invisible
    


})

