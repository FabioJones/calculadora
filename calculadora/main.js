function insert(n){
   let numero = document.querySelector('.tela').innerHTML
   document.querySelector('.tela').innerHTML = numero + n
}
function clean(){
    document.querySelector('.tela').innerHTML=''
}
function backSpace(){
    let resultado = document.querySelector(".tela").innerHTML
   document.querySelector('.tela').innerHTML = resultado.substring( 0 , resultado.length -1)
}
function calcular(){
    
    let resultado = document.querySelector(".tela").innerHTML
   
    if(resultado){
      document.querySelector(".tela").innerHTML = eval(resultado)
    }
}