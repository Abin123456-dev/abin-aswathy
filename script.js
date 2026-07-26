// Abin & Aswathy ❤️
// Together Since Counter


// Change this date to your actual "together since" date
const startDate = new Date("December 01, 2025 00:00:00");


function updateCounter(){

    const now = new Date();


    const diff = now - startDate;


    const totalSeconds = Math.floor(diff / 1000);


    const years = Math.floor(
        totalSeconds / (365 * 24 * 60 * 60)
    );


    const remainingAfterYears =
        totalSeconds % (365 * 24 * 60 * 60);



    const days = Math.floor(
        remainingAfterYears / (24 * 60 * 60)
    );


    const hours = Math.floor(
        (remainingAfterYears % (24 * 60 * 60)) / (60 * 60)
    );


    const minutes = Math.floor(
        (remainingAfterYears % (60 * 60)) / 60
    );


    const seconds =
        remainingAfterYears % 60;



    document.getElementById("years").innerHTML = years;

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}



updateCounter();

setInterval(updateCounter,1000);
