// Abin & Aswathy ❤️
// Together Since Counter


const startDate = new Date("March 30, 2026 00:00:00");


function updateCounter(){

    const now = new Date();

    const difference = now - startDate;


    if(difference < 0){
        return;
    }


    const totalSeconds = Math.floor(difference / 1000);


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



    document.getElementById("years").innerHTML = years;

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;


}



updateCounter();

setInterval(updateCounter,1000);
