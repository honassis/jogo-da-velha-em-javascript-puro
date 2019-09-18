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



function marcar(pos){
  //primeiro verifica se alguém não clicou, e então aplica
  if(campos[pos].innerHTML!="-"){
    campos[pos].innerHTML= status_jogador();
  }

}
function iniciar(){
    for(var i = 0; i < campos.length;i++){
        //carregar todos os blocos de click
          carregar_clicks(i);
    }
}
