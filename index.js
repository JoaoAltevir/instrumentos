let entrada_usuario = "";
console.log("Você toca algum instrumento?");
process.stdin.on("data", function (data){
    let input = data.toString().trim().toLowerCase();
    if(!entrada_usuario){
        entrada_usuario = input;
        if(entrada_usuario == "s" || entrada_usuario == "sim"){
            console.log("Parabéns! Você é um artista! =D");
        } else if(entrada_usuario == "não" || entrada_usuario == "n" || entrada_usuario == "nao"){
            console.log("Já pensou em aprender algum?")
            process.exit();
        } else {
            console.log("Opção não válida, digite novamente:");
            entrada_usuario = "";
        }
    }
})