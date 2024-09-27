# Projeto de renovação de token com Node.js
Este projeto é uma aplicação de back-end simples  utilizando Node.js que implementa a funcionalidade de renovação de token usando JWT (JSON Web Tokens) e um banco de dados MySQL para armazenar usuários e tokens de renovação. 
## Instruções de Instalação

Siga os passos abaixo para configurar e executar o projeto:

### 1. Inicializar o Projeto

Execute o comando abaixo para criar um novo arquivo `package.json`, que armazenará as dependências do projeto.

``` bash
npm init -y
```

### 2. Instalar Dependências

Instale as dependências necessárias: express, mysql2, sequelize  jsonwebtoken, bcryptjs body-parser, nodemon.

```bash
npm install express mysql2 sequelize jsonwebtoken bcryptjs body-parser nodemon
```

### 3. Script para gerar o hash da senha

Execute o comando:

```bash
node generate_hash.js
```

### 4. Criar o Banco de Dados

Crie o banco de dados .

```sql
CREATE DATABASE db;

```

### 5. Criar a Tabela users

Crie a tabela.

```sql
USE db;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

### 6. Inserir um Usuário

Insere um usuário na tabela.
```sql
INSERT INTO users (email, password) VALUES ('exemplo@exemplo.com', 'hash_gerado_aqui');
```

### 7. Executar o Servidor

Agora, você pode iniciar o servidor em modo de desenvolvimento usando o nodemon com o comando:

```bash
npm run dev
```
### 8. Fazer login

Crie um POST para  http://localhost:3000/auth/login com um corpo JSON e coloque o código abaixo:

```json
{
    "email": "usuario@example.com",
    "password": "sua_senha"
}
```
### 9. Renovar o token

Crie um POST para  http://localhost:3000/auth/refresh com um corpo JSON e coloque o código abaixo:

```json
{
    "refreshToken": "refresh_token_gerado_aqui"
}
```
