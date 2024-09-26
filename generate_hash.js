const bcrypt = require("bcryptjs");
const password = "senha"; // Senha de acesso

bcrypt.hash(password,10,(err, hash) =>{
    if(err){
        console.log("Erro ao gerar hash:", err);
    }else{
        console.log("Hash gerado:", hash);
    }
})