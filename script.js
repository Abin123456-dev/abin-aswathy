// Abin & Aswathy ❤️
// Our Forever Journey Counter


const startDate = new Date("March 30, 2026 00:00:00");


function updateCounter() {


    const today = new Date();


    let diff = today - startDate;


    if (diff < 0) {
        diff = 0;
    }


    const totalSeconds = Math.floor(diff / 1000);


    const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));


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
