var cont;
var auth;
var vec=[];

vec[0]='imagenes/1.jpg'
vec[1]='imagenes/2.jpg'
vec[2]='imagenes/3.jpg'
vec[3]='imagenes/4.jpg'
vec[4]='imagenes/5.jpg'
vec[5]='imagenes/6.jpg'
vec[6]='imagenes/7.jpg'

function cambiarImagen(int) {
    if (int == 1) {
        if (cont < vec.length - 1) {
            cont++
        } else {
            cont = 0
        }
    } else {
        if (cont > 0) {
            cont--
        } else {
            cont = vec.length - 1
        }
    }
    document.getElementById("imagenes").src = vec[cont]
}

function startSlide() {
    let btn = document.getElementById("start")
    if (btn.value == 'Iniciar') {
        auth = setInterval(cambiarImagen, 2000)
        btn.value = 'Parar'
    } else {
        clearInterval(auth)
        btn.value = 'Iniciar'
    }
}