// Abin & Aswathy Website Effects ❤️


// Page loading animation

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



// Floating hearts effect

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.className = "heart";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
    (Math.random() * 3 + 3) + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    },5000);

}


setInterval(createHeart,1000);



// Smooth scroll

document.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});
