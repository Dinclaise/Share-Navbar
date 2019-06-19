let open = document.querySelector('.navbar__icon');
let menu = document.querySelector('.nav__open');
let close = document.querySelector('.nav__open-icon');

open.addEventListener('click', function(){
	menu.classList.toggle('close');
})
close.addEventListener('click', function(){
	menu.classList.toggle('close');
})