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

2. Para iniciar a ferramenta:
   - Inicia os containers;
   - Executa o comando `yarn`;
   - Rodas as migrations.

```bash
yarn docker:yarn || docker-compose run --rm app yarn \
&& docker-compose up
```

3. Para executrar as Seeds:

```javascript
yarn docker:yarn || docker-compose run --rm app yarn sequelize db:seed:all
```
