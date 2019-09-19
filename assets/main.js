//X = true, O = false
var player = false;
//recebe os valores da velha
var campos = document.getElementsByClassName("p");

function status_jogador(){
    //retorna o jogador atual, e já atualiza o próximo player
    var status;
    if(player){
        status = "X";
    }else{
        status = "O";
    }
    player = !player;
    return status;
}
function carregar_clicks(i){
    campos[i].onclick= function() { marcar(i); };
}

function verificar(x_o){
    var x = [0, 1, 2, 0, 3, 6, 0, 4, 8, 1, 4, 7, 2, 5, 8, 3, 4, 5, 4, 2, 6, 6, 7, 8];
    var aux = 1; //essa variavel q é para dar uma ajuda nos saltos de 3 em 3 posisoes
    //for para verificar se ganhou
    for (var i = 0; i < x.length; i++) {
        aux += 2;
        //esses q-1,q-2,q-3, é pra justamente pegar os valores de 3 em 3
        if (
            campos[x[i + aux - 1]].innerHTML == x_o &&
            campos[x[i + aux - 2]].innerHTML == x_o &&
            campos[x[i + aux - 3]].innerHTML == x_o) {
           alert(x_o+"--GANHOU");
            
            break;//para o for
        }
    }
}

function marcar(pos){
    var jogador = status_jogador();
  //primeiro verifica se alguém não clicou, e então aplica
  if(campos[pos].innerHTML=="-"){
    campos[pos].innerHTML= jogador;
  }
  verificar(jogador);
}
function iniciar(){
    for(var i = 0; i < campos.length;i++){
        //carregar todos os blocos de click
          carregar_clicks(i);
    }
}
iniciar();