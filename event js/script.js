let judul = document.querySelector('p');
judul.innerHTML = 'My To Do List';

let list = document.getElementById('list');
list.innerHTML = `
<div class="row">
<div class="col-8">
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
  Tugas Baru
</label>
</div>
</div>
<div class="col-auto">
<div class="btn"><i class="bi bi-trash"></i></div>
  </div>
</div>`

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightgreen';
// judul.style.backgroundColor = 'salmon';

let container = document.querySelector('.container');
container.style.margin = '135px auto';
container.style.maxWidth = '550px';
container.style.background = '#ffff';
container.style.borderRadius = '7px';
container.style.padding = '28px 0'; 

document.body.style.backgroundImage = 'linear-gradient(to right,grey,lightgreen,lightblue,lightyellow)';

// document.querySelector("#input input");
// document.setAttribute("placeholder", "Masukan Tugas Baru");

function klik() {
  alert("OK");
}

inputButton.onclick = klik;


inputButton.addEventListener("mouseover", gantiRed);
inputButton.addEventListener("mouseover", gantiBlack);

function gantiRed () {
    inputButton.style.backgroundColor = "red";
}

function gantiBlack () {
    inputButton.style.backgroundColor = "black";
}

inputButton.addEventListener("click",btnAktif); 

function btnAktif() {
  console.log("button aktif!");
}

