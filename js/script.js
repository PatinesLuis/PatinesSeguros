let vCapital = document.getElementById('capital')
let Vrc = document.getElementById('rc')
let vEletricos = document.getElementById('eletricos')
let vRoubo = document.getElementById('rb')
let vPequenas = document.getElementById('pequenasr')
let resultado = document.getElementById('res')
let nomeCliente = document.getElementById('nome')

console.log("Teste")
let rua = ''
let numero = document.getElementById('numero')
let complemento = document.getElementById('complemento')
let bairro = ''
let cidade = ''
let estado = ''



const preencherFormulario = (endereco) =>{

    rua = document.getElementById('rua').value = endereco.logradouro
    bairro = document.getElementById('bairro').value = endereco.bairro
    cidade =document.getElementById('cidade').value = endereco.localidade
    estado = document.getElementById('estado').value = endereco.uf

}

    function calcular(){

        
        if(vCapital.value == 0 && Vrc.value ==0 && vEletricos.value == 0 && vRoubo.value == 0 && vPequenas.value == 00){
            alert("Você precisa inserir pelo menos um valor em alguma cobertura !!")

            }else if(numero.value <= 0 || nomeCliente.value == ""){
                alert('Verifique o campo DADOS PESOAIS')
            
            }else{
            let calcCapital = 0.025 * vCapital.value /100 
            let calcRc = 0.01 * Vrc.value / 100
            let calcEletricos = 0.04 * vEletricos.value /100
            let calcRoubo = 0.10 * vRoubo.value /100
            let calcPequenas = 0.08 * vPequenas.value /100

            let calcular = calcCapital + calcRc + calcEletricos + calcRoubo + calcPequenas

           let valorCotacao = new Intl.NumberFormat('pt-BR',{style: 'currency',currency:'BRL'}).format(calcular)
            
            resultado.innerHTML = "Olá " + nomeCliente.value +"<br>O resultado da cotação foi: " + valorCotacao + "<br>" +
                                "Seu endereço é: <br>"+
                                "RUA: " + rua + "<br>" +
                                 "numero: " + numero.value + "<br>" +
                                 "Complemento  " + complemento.value +"<br>" +
                                 "bairro: " + bairro + "<br>" +
                                "cidade: " + cidade + "<br>"        
        }
    }
//API de CEP

const pesquisaCep = async() => {
   const cep = document.getElementById('cep').value
   const url = `http://viacep.com.br/ws/${cep}/json/`  
   const dados = await fetch(url)
   const endereco = await dados.json();

   if(endereco.hasOwnProperty('erro')){
    document.getElementById('rua').value = 'CEP não encontrado'
    document.getElementById('rua').style.background = '#B22222'
    document.getElementById('bairro').value = ' '
    document.getElementById('cidade').value = ' '
    document.getElementById('estado').value = ' '
    
   }else{
    preencherFormulario(endereco)
    document.getElementById('rua').style.background = 'white'
   }
} 

document.getElementById('cep').addEventListener('focusout', pesquisaCep)
