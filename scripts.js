//1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

let link = document.querySelectorAll('a')
link.addEventListener('click', function (e) {
        e.preventDefault();
    })



//2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*. 
let images = document.getElementsByTagName('img')
function gifPorImagen() {
for (const iterator of images) {
    iterator.setAttribute('src','./assets/magic-6.gif')
    }
}
gifPorImagen()

