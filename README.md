# Infoamazonia - Arco Mineiro 2

Versão do REACT: 16.0.0

# PRÉ REQUISITOS
- Instalar o docker: https://docs.docker.com/install/
- Instalar o git: https://git-scm.com/downloads

# INSTALAÇÃO DO SITE

- CLONANDO O SITE DO GITHUB
git clone https://github.com/studiocuboweb/arcomineiro2.git

- INSTALANDO O NPM E AS DEPENDENCIAS
docker run -v "$PWD":/usr/src/app -w /usr/src/app node:8 yarn install<br/>

- BugFix
docker run -v "$PWD":/usr/src/app -w /usr/src/app node:8 yarn upgrade<br/>
docker run -v "$PWD":/usr/src/app -w /usr/src/app node:8 yarn global add webpack@3.6.0<br/>
docker run -v "$PWD":/usr/src/app -w /usr/src/app node:8 yarn add -D webpack-cli@2.0.4<br/><br/>

docker run -v "$PWD":/usr/src/app -w /usr/src/app node:8 yarn remove webpack<br/>
docker run -v "$PWD":/usr/src/app -w /usr/src/app node:8 yarn remove webpack-cli<br/>

- FAZENDO O BUILD
docker-compose build


# LIGANDO O DOCKER
docker-compose up (com visualização de log)
docker-compose up -d (rodar em background)

# DESLIGANDO O DOCKER
docker-compose down


# HEROKU DEPLOY
https://blog.heroku.com/deploying-react-with-zero-configuration

# INSTALAR HEROKU:
https://devcenter.heroku.com/articles/heroku-cli

- Logar no heroku com o login e senha cadastrados no site
heroku login

- verificando APP atual
heroku apps:info


#HEROKU BASH
- heroku run bash

# DEPLOY EM infoam-template-video
https://infoam-template-video.herokuapp.com/

heroku git:remote -a infoam-template-multimedia
git checkout related-news
git push heroku master

# DEPLOY EM infoam-template-multimedia
https://infoam-template-multimedia.herokuapp.com/

heroku git:remote -a infoam-template-video
git checkout template-video
git push heroku master

# DEPLOY EM ifoam-template-mapas
https://infoam-template-multimedia.herokuapp.com/

heroku git:remote -a ifoam-template-mapas
git checkout template-mapa
git push heroku master

# OUTROS PROCEDIMENTOS:
- Apagando o local Storage do browser:
Abrir o console dev do browser e rodar:
localStorage.clear()
localStorage.removeItem('elapsed-time')

#BUILD EM PRODUCAO SEM DOCKER
1- Instalar o yarn (falei node, mas estamos utilizando o yarn)
https://yarnpkg.com/lang/en/docs/install/#debian-stable

2- Instalar as dependências
Na raiz do projeto onde está o package.json rodar o comando:

yarn install

Vai instalar as dependencias na pasta node_modules 

3- Fazer o build
na raiz do projeto rodar o comando:

npm run build
