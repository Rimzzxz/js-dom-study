const p = document.getElementById('judul');
p.innerHTML = '<p>Rimo</p>'

const a = document.querySelector('section#b p');
a.innerHTML = '<p>cik</p>'

// const a = document.querySelector('section#b p');
// a.innerHTML = '<div><p>woiiii</p></div>'

const b = document.querySelectorAll('section#b li');
b[0].style.backgroundColor = 'red';
b[1].style.backgroundColor = 'red';
b[2].style.backgroundColor = 'red';

const c = document.querySelectorAll('section#a p')
c[0].style.backgroundColor = 'yellow';
c[1].style.backgroundColor = 'purple';
c[2].style.backgroundColor = 'brown';