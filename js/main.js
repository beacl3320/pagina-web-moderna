/* SCROLL MENU */

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');

function menus() {
    let desplazamientoActual = window.pageYOffset;
    if(desplazamientoActual <= 200) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        menu.style.top = '100px';
    }
}

window.addEventListener('load', menus);
window.addEventListener('scroll', function() {
    console.log(this.window.pageYOffset);
    menus();
})

/* MENU HAMBURGER */

let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function apertura(){
    if(cerrado){
        menu.style.width = '40vh';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('resize', function() {
    if(screen.width >= 768){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
})

abrir.addEventListener('click', function() {
    apertura();
})

