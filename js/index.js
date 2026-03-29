const hamburger = document.querySelector(".hamburger");
const meniLista = document.querySelector(".meni-lista");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    meniLista.classList.toggle("active");
})

document.querySelectorAll(".meni-dugme").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        meniLista.classList.remove("active")
    }))
