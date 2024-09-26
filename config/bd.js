const {Sequelize} = require ("sequelize");



const sequelize = new Sequelize("bd", "root", "",{
host: "localhost",
dialect: "mysql"
});

sequelize.authenticate()
.then(()=> console.log(" Conectado ao banco de dados"))
.catch(err => console.log("Erro ao conectar ao banco de dados", err));

module.exports = sequelize;
