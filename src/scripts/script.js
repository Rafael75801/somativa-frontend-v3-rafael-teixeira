// ======= Missão 1 =======
const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#saudacao-voluntario')

if (hora > 7 && hora < 12) saudacao.textContent = "Plantão matinal, Protetor!"
if (hora > 12 && hora <= 18) saudacao.textContent = "Plantão da tarde, Protetor!"
if (hora > 18 && hora < 7) saudacao.textContent = "Plantão noturno, Protetor!"


// ======= Missão 2 =======
const bannerAdocao = document.querySelector('#banner-adocao')

bannerAdocao.addEventListener("mouseover", () => {
    bannerAdocao.classList.add('destaque-pet')
})

bannerAdocao.addEventListener("mouseout", () =>{
    bannerAdocao.classList.remove('destaque-pet')
})

// ======= Missão 3 =======
const idadePet = document.querySelector('#idade-pet')
const idadeHumana = document.querySelector('#idade-humana')

if (idadePet && idadeHumana){
    idadePet.addEventListener('input', () =>{
        const idadeCalc = Number(idadePet.value) * 7
        idadeHumana.textContent = `${idadeCalc}`
    })
}

// ======= Missão 4 =======
const btnCadastrar = document.querySelector('#btn-cadastrar')
const btnNome = document.querySelector('#nome-pet')
const listaAdocao = document.querySelector('#lista-adocao')

btnCadastrar.addEventListener('click', () =>{
    listaAdocao.innerHTML += '<article class="card-adocao"><h3>🐾</h3></article>'
    listaAdocao
})

// ======= Missão 5 =======
const btnLimpar = document.querySelector('#btn-limpar')

btnLimpar.addEventListener('click', () =>{
    idadeHumana.textContent = '0'
    idadePet.value = 0
    listaAdocao.innerHTML = ''
})