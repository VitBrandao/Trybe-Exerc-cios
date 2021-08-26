const peça = "rei";

if (peça == "rei") {
    console.log("Pode mover-se em qualquer direção, uma casa por vez");
} else if (peça == "rainha") {
    console.log("Pode mover-se em qualquer direção, quantas casas quiser")
} else if (peça == "torre") {
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser");
} else if (peça == "bispo") {
    console.log ("Move-se na diagonal, quantas casas quiser");
} else if (peça == "cavalo") {
    console.log("Pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. É a única peça que pode saltar sobre as outras peças do tabuleiro");
} else if (peça == "peão") {
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas");
} else {
    console.log("Peça inválida.")
}