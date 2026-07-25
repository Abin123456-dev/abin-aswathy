// Abin & Aswathy ❤️
// Our Forever Journey Counter


const weddingDate = new Date("March 30, 2026 00:00:00");



function updateCounter(){


const now = new Date();



let years = now.getFullYear() - weddingDate.getFullYear();



let anniversary = new Date(weddingDate);



anniversary.setFullYear(
weddingDate.getFullYear() + years
);



if(now < anniversary){

years--;

anniversary.setFullYear(
weddingDate.getFullYear() + years
);

}




const remaining = now - anniversary;



const days = Math.floor(
remaining / (1000 * 60 * 60 * 24)
);



const hours = Math.floor(
(remaining / (1000 * 60 * 60)) % 24
);



const minutes = Math.floor(
(remaining / (1000 * 60)) % 60
);



const seconds = Math.floor(
(remaining / 1000) % 60
);




document.getElementById("years").innerHTML = years;

document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;



}



updateCounter();


setInterval(updateCounter,1000);
