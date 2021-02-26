# Portal de notícias  :newspaper:

### Este projeto foi desenvolvido utilizando:

- NodeJS;
- Express;
- EJS;
- Consign;
- Body-parser;
- Express-validator;
- MySql;
- Padrão MVC.

### Rotas do projeto:

- ''/home": exibi as últimas 5 noticias postando tendo acesso a noticia através do titulo;
- "/noticias": lista as noticias postadas começando pela ultima;
- "/noticia": exibi a noticia selecionada de forma integra;
- "/form_inclusao_noticia": disponibiliza um formulário pra cadastro de novas noticias;
- "/noticias/salvar": efetua a postagem da noticia no banco de dados, , caso algum campo não esteja preenchido corretamente um aviso será exibido apontando o campo que será necessário ser corrigido, caso esteja preenchido corretamente encaminhara para pagina de noticias.

### Para visualizar o projeto em funcionamento:

- Após clonar o diretório do projeto execute o comando `npm install` para que todas a dependências necessárias sejam instaladas;

- Caso não tenha o MySQL instalado no seu computador faça o download em https://dev.mysql.com/downloads/ (nesse projeto foi utilizado a versão 8.0), será somente necessário o server;

- no promp/cmd entre no diretório `c:\Program Files\MySQL\MySQL Server 8.0\bin>mysql -u root -p "sua senha"`

- `mysql> create database portal_noticias;`

- ` mysql> use portal_noticias;`

-    ``` 
     mysql> create table noticias(
     id_noticia int not null primary key auto_increment,
      titulo varchar(100),
      noticia text,
      data_criacao timestamp default current_timestamp,
      resumo varchar(100),
      autor varchar(30),
      date_noticia date
  );  
  ```

-  no arquivo config/dbConnection será necessário alterar a linha 8 colocando o valor da propriedade password igual sua senha do banco de dados;

- inicie o servidor com o comando `node app.js`;

- abra o projeto no browser em localhost:3000;

- para adicionar noticia basta acessar localhost:3000/form_inclusao_noticia.

Esse foi um projeto feito durante o curso de nodejs do professor Jorge Santana, por ser um curso de 2016 foi necessário efetuar  pesquisas e atualizar sintaxes da linguagem o que tornou o aprendizado mais dinâmico e de entendimento mais amplo.

