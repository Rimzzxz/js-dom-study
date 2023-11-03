//     //DOM Selection


// // // getElementById -> element
// const judul = document.getElementById("judul");
// judul.style.color = "white";
// judul.style.backgroundColor = "black";
// judul.style.textAlign='center'
// judul.innerHTML = "Gw";

// //getElementsBytagName -> HTMLcolection
// const p = document.getElementsByTagName("p");
// // p[2].style.color = "blue";
// p[0].style.backgroundColor = "blue";
// p[1].style.backgroundColor = "violet";
// p[2].style.backgroundColor = "orange";


const p = document.getElementById('div#container section#a .p').
innerHTML = 'woi';

const p2 = document.querySelector('.p2')
p2.style.backgroundColor = 'black';

const p1 = document.querySelector('.p1')
p1.style.backgroundColor = 'red';

const p3 = document.querySelector('h1#judul')
p3.style.backgroundColor = 'yellow';

const a = document.querySelector('section#a a')

const b = document.querySelectorAll('section#b li')
b[0].style.backgroundColor = 'red';
b[1].style.backgroundColor = 'red';
b[2].style.backgroundColor = 'red';


// document.getElementById(section#b p). 
// innerHTML = "woi";

