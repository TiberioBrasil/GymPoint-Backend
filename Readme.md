<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

#### Desafio final da Turma 08 do GoStack!

- [Sobre o Desafio](#sobre-o-desafio)
  - [Ferramentas](#ferramentas)
  - [Executando o projeto](#executando-o-projeto)

# Sobre o Desafio

A aplicação desenvolvida é um app gerenciador de academia, o **Gympoint**.

A mesma foi desenvolvida utilizando

## Ferramentas

Para o desenvolvimento da aplicação doram utilziadas as seguintes ferramentas:

- [Sucrase](https://www.npmjs.com/package/sucrase) + [Nodemon](https://www.npmjs.com/package/nodemon);
- [ESLint](https://www.npmjs.com/package/eslint) + [Prettier](https://www.npmjs.com/package/prettier) + [EditorConfig](https://www.npmjs.com/package/editorconfig);
- [Sequelize](https://www.npmjs.com/package/sequelize) (com banco de dados [PostgreSQL](https://www.npmjs.com/package/pg)).

## Executando o projeto

1. Crie um arquivo [.env](https://www.npmjs.com/package/dotenv) para rodar o projeto. Consulte o arquivo **.env.example** para verificar quais as variáveis necessárias.

2. Para iniciar a ferramenta:
   - Inicia os containers do Docker (Node + PostgreSQL + Redis);
   - Executa o comando `yarn install`;
   - Rodas as migrations.

```shell
$ yarn docker:yarn || docker-compose run --rm app yarn \
&& docker-compose up
```

3. Para executrar as Seeds:

```shell
$ yarn docker:yarn || docker-compose run --rm app yarn sequelize db:seed:all
```
