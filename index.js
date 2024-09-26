const express = require ("express");
const bodyParser = require ("body-parser");
const authRoutes = require ("./routes/authRoutes");
const sequelize = require ("./config/bd");


const app = express();

app.use(bodyParser.json());

// Usar as rotas de autenticação
app.use("/auth", authRoutes);

// Sincronizar o banco de dados e iniciar o servidor
sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("Servidor rodando na porta 3000");
    });
})
.catch( err =>{
console.log( "Erro ao sincronizar o banco de dados",err)
});