<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

#### Desafio final da Turma 08 do GoStack!

- [Sobre o Desafio](#sobre-o-desafio)
  - [Ferramentas](#ferramentas)
  - [Rodando o projeto](#rodando-o-projeto)

# Sobre o Desafio

A aplicação desenvolvida é um app gerenciador de academia, o **Gympoint**.

A mesma foi desenvolvida utilizando

## Ferramentas

Para o desenvolvimento da aplicação doram utilziadas as seguintes ferramentas:

```javascript
- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (com banco de dados PostgreSQL).
```

## Rodando o projeto

1. Crie um arquivo [.env](https://www.npmjs.com/package/dotenv) para rodar o projeto. Consulte o arquivo **.env.example** para verificar quais as variáveis necessárias.

2. Crie o banco de dados PostgreSQL através de um container do Docker:

```javascript
docker run --name desafiofinal_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 postgres:11
```

3. Execute as migrations:

```javascript
yarn sequelize db:migrate:all
```

4. Execute as seeds:

```javascript
yarn sequelize db:seed:all
```

5. Crie o gerenciador de filas Redis através de um container do Docker:

```javascript
docker run --name desafiofinal_redis -p 6379:6379 -d -t redis:alpine
```

6. Para realizar o build, utilize o comando:

```javascript
yarn build
```

7. Inicie o gerenciador de filas

```javascript
yarn queue
```

7. Para rodar o projeto em modo de DEBUG, utilize o comando

```javascript
yarn queue
```
