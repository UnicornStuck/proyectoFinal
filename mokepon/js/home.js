// BOTONES
const mokeponButton = document.getElementById('seleccionMascotaBtn')
const tarjetasContainer = document.getElementById('tarjetasContainer')
const ataquesContainer = document.getElementById('ataquesContainer')
const botonReiniciar = document.getElementById('resetBtn')

//SECCIONES
const sectionTitles = document.getElementById('titles')
const sectionTitlesFight = document.getElementById('titlesFight')
const sectionseleccionMokepon = document.getElementById('selectionMokepon')
const sectionSeleccionataque = document.getElementById('SelectionAttack')
const sectionMensaje = document.getElementById('messages')
const sectionMensajeFinal = document.getElementById('finalMessage')

//Inputs y confirmaciones
let inputHipodoge
let inputCapipero
let inputRatigueya

//SPAN
const spanMascotaJugador = document.getElementById('mascotaJugador')
const spanMascotaEnemigo = document.getElementById('mascotaEnemigo')
const spanVidasJugador = document.getElementById('vidasJugador')
const spanVidasNpc = document.getElementById('vidasEnemigo')

//OTROS
const imgJugador = document.createElement('img')
const imgEnemigo = document.createElement('img')

//VARIABLES
let mascotas = []
let mascotasSelection
let mascotaJugador
let mascotaNpc
let ataqueJugador
let ataqueNpc
let ataquesMokepon
let botonAtaqueFuego
let botonAtaqueAgua 
let botonAtaqueTierra
let vidasJugador = 3
let vidasNpc = 3
let resultadoAtaque

//Clases
class mokepon{
    constructor(nombre, imagen, vidas){
        this.nombre = nombre
        this.imagen = imagen
        this.vidas = vidas
        this.ataques = []
    }
}
let Hipodoge = new mokepon('Hipodoge', 'img/Hipodoge.png', 3)
let Ratigueya = new mokepon('Ratigueya', 'img/Ratigueya.png', 3)
let Capipero = new mokepon('Capipero', 'img/Capipero.png', 3)

Hipodoge.ataques.push(
    {nombre: '🔥', id:'fuegoBtn'},
    {nombre: '💧', id:'aguaBtn'},
    {nombre: '🌎', id:'tierraBtn'}
)
Capipero.ataques.push(
    {nombre: '🔥', id:'fuegoBtn'},
    {nombre: '💧', id:'aguaBtn'},
    {nombre: '🌎', id:'tierraBtn'}
)
Ratigueya.ataques.push(
    {nombre: '🔥', id:'fuegoBtn'},
    {nombre: '💧', id:'aguaBtn'},
    {nombre: '🌎', id:'tierraBtn'}
)

mascotas.push(Hipodoge, Capipero, Ratigueya)

//Funciones de inicio
function iniciarJuego(params){

    //Deshabilita secciones innecesarias de entrada
    sectionSeleccionataque.style.display = 'none'
    botonReiniciar.style.display = 'none'
    sectionTitlesFight.style.display = 'none'

    //Insertar HTML
    mascotas.forEach((mascotas) => {
        mascotasSelection = `
        <input type="radio" name="pet" id=${mascotas.nombre}>
        <label class="tarjetaSeleccion" for=${mascotas.nombre}>
            <p>${mascotas.nombre}</p> <img src=${mascotas.imagen} alt="${mascotas.nombre}">
        </label>`
        tarjetasContainer.innerHTML += mascotasSelection
    })

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipero = document.getElementById('Capipero')
    inputRatigueya = document.getElementById('Ratigueya')

    //Botones
    mokeponButton.addEventListener('click', seleccionarMascota)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function randomize(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)
}

//Funciones de selección de personajes
function seleccionarMascota(){
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if(inputCapipero.checked){
        spanMascotaJugador.innerHTML = inputCapipero.id
        mascotaJugador = inputCapipero.id
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else{
        alert('No sea imbecil, seleccione un mokepon')
        reiniciarJuego()
    }
    setAtaques(mascotaJugador)
    seleccionarMascotaNPC()
    
    //Añadir la imagen del mokepon en la pelea
    imgJugador.src = ('img/' + mascotaJugador + '.png')
    document.querySelector('#mokeponPresentacionImgJugador').appendChild(imgJugador)

    //Habilita la selección de ataque y deshabilita la selección de mokepón
    sectionseleccionMokepon.style.display = 'none'
    sectionTitles.style.display = 'none'
    sectionSeleccionataque.style.display = 'block'
    sectionTitlesFight.style.display = 'block'
}
function seleccionarMascotaNPC(){
    let mascotaRandomNpc = randomize(0, mascotas.length)

    //Añadir la imagen y el nomrbe del mokepon rival en la pelea
    spanMascotaEnemigo.innerHTML = mascotas[mascotaRandomNpc].nombre
    mascotaNpc = mascotas[mascotaRandomNpc].nombre
    imgEnemigo.src = ('img/' + mascotas[mascotaRandomNpc].nombre + '.png')
    document.querySelector('#mokeponPresentacionImgEnemigo').appendChild(imgEnemigo)
}

//Funciones de selección de ataques
function setAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mascotas.length; i++) {
        if(mascotaJugador === mascotas[i].nombre){
            ataques = mascotas[i].ataques
        }
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `<button class="ataqueBtn" id=${ataque.id}>${ataque.nombre}</button>`
        ataquesContainer.innerHTML += ataquesMokepon
    })
    //Seleccionar los botones en el HTML
    botonAtaqueFuego = document.getElementById('fuegoBtn')
    botonAtaqueAgua = document.getElementById('aguaBtn')
    botonAtaqueTierra = document.getElementById('tierraBtn')
    //Añadir el evento de los botones
    botonAtaqueFuego.addEventListener('click', ataqueFuego)
    botonAtaqueAgua.addEventListener('click', ataqueAgua)
    botonAtaqueTierra.addEventListener('click', ataqueTierra)
}
function ataqueFuego(){
    ataqueJugador = '🔥'
    ataqueEnemigo()
}
function ataqueAgua(){
    ataqueJugador = '💧'
    ataqueEnemigo()
}
function ataqueTierra(){
    ataqueJugador = '🌎'
    ataqueEnemigo()
}
function ataqueEnemigo(){
    let ataqueAleatorioNpc = randomize(1, 3)

    if (ataqueAleatorioNpc == 1){
        ataqueNpc = '🔥'
    }else if (ataqueAleatorioNpc == 2){
        ataqueNpc = '💧'
    }else{
        ataqueNpc = '🌎'
    }
    crearMensaje()
}

//Funciones de resultado de combate
function combate() {
    if(ataqueJugador == ataqueNpc) {
        resultadoAtaque = 'Bloqueado 🔰'
    }else if(ataqueJugador == '🔥' && ataqueNpc == '🌎') {
        resultadoAtaque = 'Impacto 💥'
        vidasNpc -= 1
        spanVidasNpc.innerHTML = vidasNpc
    }else if(ataqueJugador == '💧' && ataqueNpc == '🔥'){
        resultadoAtaque = 'Impacto 💥'
        vidasNpc -= 1
        spanVidasNpc.innerHTML = vidasNpc
    }else if(ataqueJugador == '🌎' && ataqueNpc == '💧'){
        resultadoAtaque = 'Impacto 💥'
        vidasNpc -= 1
        spanVidasNpc.innerHTML = vidasNpc
    }else{
        resultadoAtaque = 'Fallo ⛔'
        vidasJugador -= 1
        spanVidasJugador.innerHTML = vidasJugador
    }
    finPartida()
    return resultadoAtaque
}
function crearMensaje() {
    let anuncioCombate = document.createElement('p')
    let anuncioGolpe = document.createElement('p')
    anuncioCombate.innerHTML = ('Tu ' + mascotaJugador + ' Utilizó ataque de ' + ataqueJugador + ' y El ' + mascotaNpc + ' enemigo utilizó ' + ataqueNpc)
    anuncioGolpe.innerHTML = (combate())
    sectionMensaje.appendChild(anuncioCombate)
    sectionMensaje.appendChild(anuncioGolpe)
}

function finPartida() { 
    let anuncioFinal = document.createElement('h2')
    if(vidasJugador <= 0){
        anuncioFinal.innerHTML = ('Tu mokepón está demasiado debil para seguir luchando')
        botonAtaqueFuego.disabled = true
        botonAtaqueAgua.disabled = true
        botonAtaqueTierra.disabled = true
        botonReiniciar.style.display = 'block'
    }else if(vidasNpc <= 0){
        anuncioFinal.innerHTML = ('Has acabado con el mokepón rival!')
        botonAtaqueFuego.disabled = true
        botonAtaqueAgua.disabled = true
        botonAtaqueTierra.disabled = true
        botonReiniciar.style.display = 'block'
    }
    sectionMensajeFinal.appendChild(anuncioFinal)
}

function reiniciarJuego(){
    location.reload()
}
window.addEventListener('load', iniciarJuego)
