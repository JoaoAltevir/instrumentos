let entrada_usuario = "";
let instrumento = [{nome: 'violao', frase: 'modão e bar, combinação perfeita!'},];
let instrumentoUsuario = "";
console.log("Você toca algum instrumento?");
process.stdin.on("data", function (data){
    let input = data.toString().trim().toLowerCase();
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
                    process.exit();
                }else{
                    instrumento.push({nome: instrumentoUsuario, frase: ''});
                    console.log(instrumento)
                    console.log("Instrumento não encontrado! Porém adicionamos ele na nossa lista, que frase gostaria que aparecesse caso digitasse este instrumento?")
                }
            }
        }
    }
})