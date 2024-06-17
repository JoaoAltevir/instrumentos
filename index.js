let entrada_usuario = "";
let instrumento = [{nome: 'violao', frase: 'modão e bar, combinação perfeita!'},];
let instrumentoUsuario = "";
let instrumentoNovo;
let mensagemInicial = "Você toca algum instrumento?"
console.log(mensagemInicial);
process.stdin.on("data", function (data){
    let input = data.toString().trim().toLowerCase();
    if(!instrumentoNovo){
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
            instrumentoUsuario = input;
            let instrumentoEncontrado;
            for(let i = 0; i < instrumento.length;i++){
                if(instrumentoUsuario == instrumento[i].nome)
                    instrumentoEncontrado = instrumento[i]
            }
            if(!instrumentoEncontrado){
                instrumento.push({nome: instrumentoUsuario, frase: ''});
                instrumentoNovo = true;
                console.log("Instrumento não encontrado! Porém adicionamos ele na nossa lista, que frase gostaria que aparecesse caso digitasse este instrumento?")    
            }else{
                console.log(instrumentoEncontrado.frase)
                console.log(mensagemInicial);
                instrumentoEncontrado = "";
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
//TODO o código funciona porém não totalmente, você consegue adicionar até 2 instrumentos sem problema, após isso o código pifa