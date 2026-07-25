// =====================================
// Abin & Aswathy ❤️
// Together Since Counter + Effects
// =====================================


// Wedding Date
const weddingDate = new Date("March 30, 2026 00:00:00").getTime();


// Update counter every second
function updateCounter() {

    const now = new Date().getTime();

    const distance = now - weddingDate;


    // Calculate time difference

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    // Update HTML safely

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");


    if(daysElement){
        daysElement.innerHTML = days;
    }


    if(hoursElement){
        hoursElement.innerHTML = hours;
    }


    if(minutesElement){
        minutesElement.innerHTML = minutes;
    }


    if(secondsElement){
        secondsElement.innerHTML = seconds;
    }

}


// Run counter

setInterval(updateCounter,1000);


// Run immediately when page loads

updateCounter();





// =====================================
// Floating Hearts Animation ❤️
// =====================================


function createHeart(){

    const heart = document.createElement("div");


    heart.innerHTML = "❤️";


    heart.classList.add("heart");


    heart.style.left =
    Math.random() * 100 + "vw";


    heart.style.animationDuration =
    (Math.random() * 3 + 3) + "s";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },5000);

}


// Create hearts periodically

setInterval(createHeart,1500);





// =====================================
// Smooth Scroll Navigation
// =====================================


document.querySelectorAll('a[href^="#"]')
.forEach(link => {


    link.addEventListener("click", function(event){


        event.preventDefault();


        const target =
        document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});





// =====================================
// Page Load Animation
// =====================================


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});
