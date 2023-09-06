Criar um e-mail para o seu site (Eu sempre uso o GMAIL)
Criar uma senha para este e-mail (guardar essa informação)
Ir nas configurações do e-mail e ativar o IMAP
Ir nas configurações do e-mail e ativar a verificação em duas etapas (esse passo é necessário para gerar senha de APP)
Ir nas configurações do e-mail e ativar uma senha de APP (guardar essa informação)

Vercel
Ir na vercel.com e adicionar um novo projeto usando seu repositório no Github
Com o projeto publicado guardar a informação do endereço (link) do seu site na vercel.

mongodb.com
Ir no site mongodb.com, criar uma conta (sugiro o tipo M0, região São Paulo)
Ainda no mongodb criar um usuário e senha
Adicionar o IP público 0.0.0.0/0 à listas de IPs que podem acessar os dados
Buscar a seguinte informação: String de Conexão (ela inicia por "mongodb+srv...")
Substitua a informação <password> na string de conexão pela senha criada anteriormente e guarde a string com a senha

Agora preencha essas informações com os dados coletados nas etapas anteriores
NEXTAUTH_URL= https://link-do-seu-site.vercel.app
NEXTAUTH_SECRET= "Aqui você gera uma senha segura, sugiro um hash com muitos caracteres"
EMAIL_SERVER_HOST= smtp.gmail.com
EMAIL_SERVER_PORT= 587
EMAIL_SERVER_USER= seu-email@gmail.com
EMAIL_SERVER_PASSWORD= "Aqui você inclui a senha de APP do e-mail"
EMAIL_FROM= seu-email@gmail.com
MONGODB_URI= "String de conexão já com a senha"




# Aplicativo Web com Autenticação por E-mail e Magic Links

Este é um template de projeto para criação de aplicativos web que oferece autenticação segura por e-mail, utilizando magic links. É baseado em tecnologias populares, como Node.js, Next.js, React, NextAuth.js e Nodemailer, e foi projetado para simplificar o processo de início de projetos.

## Visão Geral

Um aplicativo web é um programa de computador que pode ser acessado de praticamente qualquer lugar do mundo através de um navegador web. Este template permite criar um ambiente onde os usuários podem navegar em uma página inicial pública e, a partir dela, acessar áreas restritas garantidas por autenticação por e-mail. O método de autenticação envolve o envio de um e-mail com um link de acesso único.

## Tecnologias Utilizadas

Para começar, você precisará das seguintes tecnologias:

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Next.js**: Framework React para renderização no lado do servidor.
- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **NextAuth.js**: Biblioteca para implementar autenticação segura.
  - **Nodemailer**: Para o envio de e-mails.
  - **Credenciais para envio de e-mails no arquivo .env**.
  - **Banco de dados para NextAuth.js - MongoDB**.

## Como Usar

1. Clone este repositório: `git clone https://github.com/tiagogarrais/base-para-aplicativo-web`.
2. Copie o arquivo .env.example e o renomeie para .env.
3. Preencha as informações necessárias no arquivo .env.
4. Execute `npm install` para instalar as dependências.
5. Execute `npm run dev` para iniciar o servidor de desenvolvimento.
6. Personalize a interface do usuário e adicione recursos conforme necessário.
7. Implemente seu aplicativo e comece a usá-lo.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para fazer melhorias, correções de bugs ou adicionar recursos adicionais a este template. Basta abrir uma issue ou enviar um pull request.

---

Criado por Tiago das Graças Arrais - [Perfil no GitHub](https://github.com/tiagogarrais)
