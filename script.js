
function sort(){
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("result").innerHTML = random;
    //o value retorna uma string, ai tem que colocar parseInt pra converter para numero
    //a equacao random: indica que o sorteio vai obdecer o intervalo digitado
}

function remove(){
    document.getElementById("min").value = ""
    document.getElementById("max").value = ""
    document.getElementById("result").innerHTML = ""
}

var array = [];
function add(){
    let input = '<li>' + document.getElementById("input").value 
     document.getElementById("item").innerHTML += input
     document.getElementById("input").value = "" // para o campo ficar vazio apos o incremento
     document.getElementById("input").focus() //para o cursor do mouse ficar no input
     array.push(input)
}
//para add ã lista ao apertar enter
let enter = document.getElementById("input");
enter.addEventListener('keyup', function(e){
    if(e.keyCode === 13){ //13 é o valor da tecla enter
        add();
    }
})

function sorteio(){
    let num = array.length;
    let equacao = Math.floor(Math.random()*num)
    document.getElementById("resultado").innerHTML = array[equacao]

}

function apagar(){
    document.getElementById("resultado").innerHTML = ""   
    document.getElementById("item").innerHTML = ""
}


