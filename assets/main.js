//X = true, O = false
var player = true;
var fimdejogo = false;
//recebe os valores da velha
var campos = document.getElementsByClassName("p");

function status_jogador(){
    //retorna o jogador atual, e já atualiza o próximo player
    var status;
    if(player){
        document.getElementById("player").innerHTML = "VEZ DE : O";
        status = "X";
    }else{
        document.getElementById("player").innerHTML = "VEZ DE : X";
        status = "O";
    }
    player = !player;
   
    return status;
}
function verificar(x_o){
    /*não consegui pensar numa lógica para capturar as retas e as 
    diagonais automaticamente, me ajuda aqui filipe!*/

    var possibilidade = [[0, 1, 2], [0, 3, 6], [0, 4, 8], 
                        [1, 4, 7], [2, 5, 8], [3, 4, 5], 
                        [6, 4, 2], [6, 7, 8]];
  
    //verifica se o jogador ganhou                        
    for (var i = 0; i < possibilidade.length; i++) {
        if (
            campos[possibilidade  [i]    [0]].innerHTML == x_o &&
            campos[possibilidade  [i]    [1]].innerHTML == x_o &&
            campos[possibilidade  [i]    [2]].innerHTML == x_o) {
          
              avisar("JOGADOR "+x_o+" VENCEU!");
                fimdejogo = true;
            
            break;
        }
    }
    if(!fimdejogo){
        //se todos os campos forem preenchidos e não teve fim de jogo, significa que deu velha
        var velha = 0;
        for (var i = 0; i < campos.length; i++) {        
                if (campos[i].innerHTML != "") {
                    velha++;
                }                                   
        }
        if (velha == campos.length) {
            avisar("DEU VELHA!, CLIQUE EM REINICIAR");
            fimdejogo = true;
        }
       
    }
}
function avisar(mensagem){
    document.getElementById("mensagem").innerHTML = mensagem;
}
function marcar(pos){
    if(!fimdejogo){   
        if(campos[pos].innerHTML==""){
         //primeiro verifica se alguém não clicou, e então aplica
        var jogador = status_jogador();
        campos[pos].innerHTML= jogador;
        verificar(jogador);
        }
    }else{
        avisar("JOGO JÁ FINALIZADO!, CLIQUE EM REINICIAR");
    }
}
function carregar_clicks(i){
    campos[i].onclick= function() { marcar(i); };
}

function iniciar(){
    for(var i = 0; i < campos.length;i++){
        //carregar todos os blocos de click
          carregar_clicks(i);
    }
}
function reiniciar(){
    for(var i = 0; i < campos.length;i++){
        //reseta os valores
        campos[i].innerHTML= "";
    }
    fimdejogo = false;
    avisar("");
    player = true;
    document.getElementById("player").innerHTML = "VEZ DE : X";
}
iniciar();