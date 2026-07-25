// Abin & Aswathy ❤️
// Together Since Counter

alert("Script is working ❤️");

const weddingDate = new Date("March 30, 2026 00:00:00");


function updateCounter(){


    const now = new Date();


    const difference = now - weddingDate;


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );



    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;


}


updateCounter();


setInterval(updateCounter,1000);
