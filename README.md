
# Prestige Imobiliária

Este projeto foi desenvolvido para fins de estudo e portfólio. Neste projeto foi implementado o CRUD completo para imóveis, implementação de autenticação via token, testes unitários.

Este projeto traz a ideia de uma plataforma onde será possivel, gerir imóveis com usuários de perfil CORRETOR, ou até mesmo acessar a plataforma como um COMPRADOR. Todas as regras de negócio foram baseadas em ROLES.


## Tecnologias utilizadas


## Stack utilizada

**Front-end:** React, Next Js, TailwindCSS

**Back-end:** Node, Prisma, Fastify, JWT

**Cloudinary:** Upload de imagens


## Criando container Docker

Para criação do container no docker para o banco de dados Postgres, rode o seguinte comando

```bash
  docker compose up
```
## Criando migrations

Após a criação do container execute as migrations, rode o seguinte comando

```bash
  npx prisma migrate dev
```
## Para Executar o programa pela primeira vez

 Instale as depêndencias do projeto, rode o seguinte comando

```bash
  npm ci
```
Iniciando o projeto, rode o seguinte comando
```bash
  npm run dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`NODE_ENV`

`NEXT_PUBLIC_BASE_API`

`NEXT_PUBLIC_BASE_FRONT`

`NEXT_PUBLIC_BASE_FRONT_PROD`



## Demonstração

https://real-state-front-blue.vercel.app/


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

