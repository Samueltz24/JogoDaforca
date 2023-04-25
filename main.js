let acerto = 0
let erro = 0
let dica = 0
let correto1 = 0
let incorreto1 = 0

let palavracorreta =''

let butao = document.querySelectorAll('.butao')
const res1 = document.querySelector('.res1')
const letra = document.querySelector('.letras')
const imgs = document.getElementById('t') 
const span = document.getElementById('span') 
const res = document.getElementById('res')
const correto = document.getElementById('correto')
const incorreto = document.getElementById('incorreto')

const Jogo=['CASA','CARRO','BRASIL','AZUL','AVIAO','SPORT','MESA','EUROPA','GATO','CELULAR','TELEVISAO','ARVORE','CAMA','MOTO','COMPUTADOR']

const foto=['cabeca','corpo','braco1','braco2','perna1','perna2']

const Teclado = () => {
butao.forEach((botao) => {
  botao.addEventListener('click', (event) => {
   res1.innerHTML += botao.innerHTML
   VerificaLetra(event)
  })
})
}


const VerificaLetra = (event) =>{
   let letra1 = event.target.dataset.letra
      if(Jogo[0].includes(letra1)){
         for(let n = 0; n < Jogo[0].length; n++){
            if(Jogo[0][n] === letra1){
               palavracorreta=palavracorreta.slice(0,n) + letra1 + palavracorreta.slice(n+1)
                  span.innerHTML=palavracorreta
                  acerto++
               if(acerto == Jogo[0].length){
                  acerto=0
                  correto1++
                  correto.innerHTML=correto1
                  res.innerHTML=`parabens vc acerto o nome ${Jogo[0]}`
                  Jogo.shift()
                  span.innerHTML=''
                  imgs.src = `./forca/vazia.png`
                  res1.innerHTML = ''
                  if(Jogo.length === 0){
                     span.innerHTML='O JOGO ACABO '
                     letra.style.display='none'

                  }
                  Letra()
               }
            }

         }

      }
      else{
         erro++
         Erro()
         if(erro == 6){
            incorreto1++
            incorreto.innerHTML= incorreto1
            erro=0
            Reseta()
            Jogo.shift()
            console.log(Jogo)
            setTimeout(() => {
               imgs.src=`./forca/vazia.png`

            },1000)
            span.innerHTML=''
            if (Jogo.length === 0) {
               span.innerHTML='O JOGO ACABO ' 
               letra.style.display='none'
            }
            Letra()

         }
      }


      
}

const Letra = (jogo) => {
   palavracorreta=''
   for (let n = 0; n < Jogo[0].length; n++) {
      palavracorreta += `_`
   }
   span.innerHTML=palavracorreta
   
}

const Erro = () => {
   imgs.src = `./forca/${foto[erro-1]}.png`
}

const Reseta = () => {
   res1.innerHTML=''
   res.innerHTML=`O NOME ERA ${Jogo[0]}`

}

const Loga = () => {
   Jogo.sort(() => Math.random() -0.5)
   Letra()
   butao=Teclado()
}

Loga()

const Dicas = () => {
 dica++
if(Jogo[0].includes('CARRO')){
    if(dica == 1 ){
       alert('tem quatro roda')
    }
    else if (dica == 2 ){
       alert('tem esportivo e familia')
    }else{
       alert('comeca com C')
       dica= 0
    }
}
if(Jogo[0].includes('CASA')){
    if(dica == 1){
       alert('tem em varios lugares ')
    }
    else if(dica == 2){
       alert('luga onde muitas pessoas mora')
    }else{
       alert('tem telhado')
       dica= 0
    }
}
if(Jogo[0].includes('BRASIL')){
   if(dica == 1){
      alert('é um pais')
   }
   else if(dica == 2 ){
      alert('fica na america do sul')
   }
   else{
      alert('maior pais')
      dica= 0
   }
}
if(Jogo[0].includes('AZUL')){
   if(dica == 1){
      alert('é Uma cor')
   }
   else if(dica == 2){
      alert('muito usado por homens')
   }else{
      alert('cor dos mares')
      dica = 0 
   }
}
if(Jogo[0].includes('AVIAO')){
   if(dica == 1 ){
      alert('é um objeto')
   }
   else if(dica == 2 ){
      alert('é um objeto voado')
   }
   else{
      alert('tem como transporta pessoas e carga')
      dica = 0
   }
}
if(Jogo[0].includes('SPORT')){
   if(dica == 1 ){
      alert('um time do nordeste ')
   }
   else if(dica == 2 ){
      alert('maior time do nordeste')
   }
   else{
      alert('fica em pernambuco')
      dica = 0 
   }
}
if(Jogo[0].includes('MESA')){
   if(dica == 1 ){
      alert('tem quatro pernas')
   }
   else if(dica == 2 ){
      alert('familia se reúne para comer ou comvesar')
   }
   else{
      alert('tem de vidros marmore madeira e outros tipo  ')
      dica = 0 
   }
}
if(Jogo[0].includes('EUROPA')){
   if(dica == 1 ){
      alert('é um continente')
   }
   else if(dica == 2 ){
      alert('uns do continente mas pequeno')
   }
   else{
      alert('continente mais rico')
      dica = 0 
   }
}
if(Jogo[0].includes('GATO')){
   if(dica == 1 ){
      alert('é um animal')
   }
   else if(dica == 2 ){
      alert('solta muito pelo')
   }
   else{
      alert('é muito maioso')
      dica =0 
   }
}
if(Jogo[0].includes('CELULAR')){
   if(dica == 1 ){
      alert('muito usudo para se comunica')
   }
   else if(dica == 2 ){
      alert('é um aparelho')
   }
   else{
      alert('tem como fazer ligação jogar e muito mas ')
      dica =0  
   }
}
if(Jogo[0].includes('TELEVISAO')){
   if(dica == 1 ){
      alert('tem de varias polegada ')
   }
   else if(dica == 2 ){
      alert('geralmente usa atena para assiste  ')
   }
   else{
      alert('hoje é colorida mas ja foi preto e branco ')
      dica = 0 
   }
}
if(Jogo[0].includes('ARVORE')){
   if(dica == 1 ){
      alert('muito importante para a humanidade')
   }
   else if(dica == 2 ){
      alert('produz madeira')
   }
   else{
      alert('o brasil tem maio estado que fica no norte ')
      dica = 0  
   }
}
if(Jogo[0].includes('CAMA')){
   if(dica == 1 ){
      alert('usado para dormi')
   }
   else if(dica == 2 ){
      alert('os medicos recomenda dormi 8h ')
   }
   else{
      alert('usamos o travisero para coloca a capeça')
      dica = 0 
   }
}
if(Jogo[0].includes('MOTO')){
   if(dica == 1 ){
      alert('tem 2 rodas ')
   }
   else if(dica == 2 ){
      alert('o transporte mais usado no brasil ')
   }
   else{
      alert('passa em lugares mas apertado tipo beco ')
      dica = 0  
   }
}
if(Jogo[0].includes('COMPUTADOR')){
   if(dica == 1 ){
      alert('muito usado para estudo')
   }
   else if(dica == 2 ){
      alert('progamadores usa para fazer jogos etc  ')
   }
   else{
      alert('tem de varias polegadas ')
      dica = 0 
   }
}
}
