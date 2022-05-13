# Desenvolvimento do Back-end que irá servir as aplicações Web e Mobile. 

## 3° Dia Back-end da aplicação</br>
🇧🇷 Aqui começamos o desenvolvimento do nosso back-end das aplicações Web e Mobile, onde será possível reportar feedbacks com uma screenshot tirada da tela do usuario ao simples toque de um botão, salvando todas essas informações em um banco de dados e reportando ao setor de desenvolvimento desse projeto via e-mail.</br></br>

🇺🇸 Here we start the development of our back-end for Web and Mobile applications, where it will be possible to report feedbacks with a screenshot taken from the user's screen at the touch of a button, saving all this information in a database and reporting to the development department of this project via email.</br></br>

🇪🇸 Aquí iniciamos el desarrollo de nuestro back-end para aplicaciones Web y Móvil, donde será posible reportar feedbacks con una captura de pantalla tomada de la pantalla del usuario con solo tocar un botón, guardando toda esta información en una base de datos y reportando al departamento de desarrollo de este proyecto por correo electrónico.</br></br>

1. Já dentro da pasta do projeto aberta no VSCode, começamos com o seguinte código:</br>
```npm init -y```</br>
2. Agora podemos começar instalar as dependencias que usaremos durante todo o projeto:</br>
   ```npm i typescript @types/node ts-node-dev -D```</br>
   ```npx tsc --init```</br>
3. Dentro do arquivo tsconfig.json, precisamos setar algumas configurações.</br>
4. Dentro do arquivo package.json, adicionaremos o seguinte script.</br>
   ```"dev": "ts-node-dev src/server.ts"```</br>
5. Instalamos o Express</br>
   ```npm i express```</br>
   ```npm i -D @types/express```</br>
6. Seguimos com a instalação do Prisma para uso em desenvolvimento.</br>
   ```npm i prisma -D```</br>
7. E esta dependência para uso em Produção.</br>
   ```npm i @prisma/client```</br>
8. Iniciamos o prisma com o comando abaixo.</br>
   ```npx prisma init```</br>
9. Instalar a extenção do Prisma.</br>
    -> Prisma -> Adds syntax highlighting...</br>
    -> Dentro das configurações do VSCode no arquivo settings.json, habilitar o "editor.formatOnSave" : true</br>
    ```,```
    ```"[prisma]" : {```
        ```"editor.formatOnSave" : true```
    ```},```</br>
10. Executaremos o seguinte comando apos criarmos o schema do model do banco no arquivo schema.prisma.</br>
    ```npx prisma migrate dev```</br>
11. Dev, porque estamos em ambiente de desenvolvimento, caso fosse em produção utiliziarimos o deploy no final do comando.</br>
12. Apos a execução do comando acima, vamos dar um nome para a ação que fizemos -> "create table feedbacks"</br>
13. Para visualizarmos as tabelas criadas no banco, basta utilizarmos o seguinte comando no terminal.</br>
    ```npx prisma studio```</br>

   Continuar 3º apartir de 35:39min...