<h1 align="center">Proffy</h1>
<h2 align="center">Next Level Week #2</h2>

<p align="center">
  <a href="#sobre">Sobre</a> 
  <a href="#tecnologias">Tecnologias</a> 
  <a href="#executar">Como Executar</a> 
</p>

<h3 id="sobre">Sobre </h3>
<p align="justify"> 
  O Proffy é uma aplicação web desenvolvida para auxiliar a conexão entre alunos e professores idealizada durante a Next Level Week #2 da 
  <a href="https://rocketseat.com.br">Rocketseat</a>. 
  Nela é possível que os professores registrem as aulas (informando a disciplina, horários disponíveis e custo hora/aula) e os alunos busquem professores
  por matéria e horário.
</p>


<h3 id="tecnologias">Tecnologias </h3>
<ul>
  <li>Typescript</li>
  <li>Node.js</li>
  <li>ReactJS</li>
  <li>Express</li>
  <li>axios</li>
</ul>

<h3 id="executar">Como Executar<h3>
<h4>Pré-requisitos: </h4>
<ul>
  <li>Possuir o Node.js instalado no computador </li>
  <li>Possuir um gerenciador de pacotes (NPM ou Yarn)</li>
  <li>Possuir o Git instalado e configurado no computador</li>
</ul>


1. Faça um clone do repositório
  ```
  $ git clone https://github.com/magnamoz/next_level_week_2
  ```

2. Vá para a pasta server 
```
$ cd server
# Para instalar as dependências do projeto:
$ yarn  install
# ou npm install
# Para configurar o banco de dados e criar as tabelas:
$ yarn knex:migrate 
# ou npm run knex:migrate

# Iniciar a API
$ yarn start
# ou npm start
 ```
 
3. Vá para a pasta web
```
$ cd web
#  Para instalar as dependências do projeto.
$ yarn install
# ou npm install
# Iniciar a aplicação web
$ yarn start 
# ou npm start
 ```
