let acerto = 0
let erro = 0
let dica = 0

let palavracorreta =''

let butao = document.querySelectorAll('.butao')
const res1 = document.querySelector('.res1')
const letra = document.querySelector('.letras')
const imgs = document.getElementById('t') 
const span = document.getElementById('span') 
const res = document.getElementById('res')

const Jogo=['CASA','CARRO','BRASIL','AZUL','AVIAO']
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
                  res.innerHTML=`parabens vc acerto o nome ${Jogo[0]}`
                  Jogo.shift()
                  span.innerHTML=''
                  imgs.src = `vazia.png`
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
            erro=0
            Reseta()
            Jogo.shift()
            console.log(Jogo)
            setTimeout(() => {
               imgs.src=`vazia.png`

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
   imgs.src = `${foto[erro-1]}.png`
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
       dica=0
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
       dica=0
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
      dica=0
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
      dica =0 
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
      dica= 0
   }
}
   
}
