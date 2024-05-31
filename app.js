let menu = document.querySelector('#hamburger')
let nav = document.querySelector('.navbar')

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open')
}