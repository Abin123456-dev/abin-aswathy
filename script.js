// Abin & Aswathy ❤️
// Together Since Counter


const startDate = new Date("January 01, 2026 00:00:00");


function updateCounter(){

    const now = new Date();

    const diff = now - startDate;


    const totalSeconds = Math.floor(diff / 1000);


    if(totalSeconds < 0){
        return;
    }


    const years = Math.floor(
        totalSeconds / (365 * 24 * 60 * 60)
    );


    const days = Math.floor(
        (totalSeconds % (365 * 24 * 60 * 60))
        /
        (24 * 60 * 60)
    );


    const hours = Math.floor(
        (totalSeconds % (24 * 60 * 60))
        /
        (60 * 60)
    );


    const minutes = Math.floor(
        (totalSeconds % (60 * 60))
        /
        60
    );


    const seconds = Math.floor(
        totalSeconds % 60
    );


    document.getElementById("years").textContent = years;

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

}


updateCounter();

setInterval(updateCounter,1000);
