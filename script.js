let nameBtn = document.getElementById("name")
let birthBtn = document.getElementById("birthday")
let emailBtn = document.getElementById("email")
let adressBtn = document.getElementById("adress")
let phoneBtn  = document.getElementById("phone")
let nydiv = document.getElementById("nydiv")

nameBtn.onclick = function () {
    imgchange.src = "./images/nombre.jpg"

}

birthBtn.onclick = function () {
    imgchange.src = "./images/fecha.jpg"
}

adressBtn.onclick = function () {
    imgchange.src = "./images/direccion.jpg"
}

phoneBtn.onclick = function () {
    imgchange.src = "./images/telefono.jpg"
}

emailBtn.onclick = function () {
    imgchange.src = "./images/email.jpg"
}