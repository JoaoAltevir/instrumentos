let entrada_usuario = "";
let instrumento = [{nome: 'violao', frase: 'modão e bar, combinação perfeita!'},];
let instrumentoUsuario = "";
let instrumentoNovo = false;
let mensagemInicial = "Você toca algum instrumento?"
console.log(mensagemInicial);
process.stdin.on("data", function (data){
    let input = data.toString().trim().toLowerCase();
    if(instrumentoNovo == false){
        if(!entrada_usuario){
            entrada_usuario = input;
            if(entrada_usuario == "s" || entrada_usuario == "sim"){
                console.log("Qual? (digite sem acentuação)");
            } else if(entrada_usuario == "não" || entrada_usuario == "n" || entrada_usuario == "nao"){
                console.log("Já pensou em aprender algum?")
                process.exit();
            } else {
                console.log("Opção não válida, digite novamente:");
                entrada_usuario = "";
            }
        } else {
            if(!instrumentoUsuario){
                instrumentoUsuario = input;
                for(let i = 0; i < instrumento.length;i++){
                    if(instrumentoUsuario == instrumento[i].nome){
                        console.log(instrumento[i].frase);
                    }else{
                        instrumento.push({nome: instrumentoUsuario, frase: ''});
                        instrumentoNovo = true;
                        console.log("Instrumento não encontrado! Porém adicionamos ele na nossa lista, que frase gostaria que aparecesse caso digitasse este instrumento?")
                    }
                }
            }
        }
    } else {
        for(let i = 0; i < instrumento.length;i++){
            if(!instrumento[i].frase){
                instrumento[i].frase = input;
                instrumentoNovo = false
                instrumentoUsuario = "";
                entrada_usuario = "";
                console.log(mensagemInicial)
            }
        }
    }
})