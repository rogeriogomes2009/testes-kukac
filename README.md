# Projeto - Desafios KUKAC

## Sobre o projeto

Construir um aplicativo WEB. Por orientação da própria KUKAC o frontend e o backend deverão estar completamente separados um do outro, e todo o processamento de dados seja feito no backend.

_________

## Sobre o Frontend

O layout deverá ser desenvolvido conforme escolha e criatividade do desenvolvedor. 
Será permitido utilizar o Angular ou React, mas não obrigatório.

_________

## Sobre o Backend

Deve ser completamente desenvolvido com Node.js.
Deve ser utilizado Testes Unitários na aplicação.

_________

## Conteúdo do Desafio

Existem 4 problemas que precisamos de uma solução, que são:

1. Números palíndromos são aqueles que escritos da direita para esquerda ou da esquerda para direita tem o mesmo valor. Exemplo: 929, 44, 97379.  Fazer um algoritmo que imprima todos os números palíndromos entre um intervalo que será escolhido pelo usuário da aplicação.
_________
2. Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais. Considerando que alguém está pagando uma compra, escreva um algoritmo que mostre o número mínimo de notas que o caixa deve fornecer como troco.
Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do troco. Suponha que o sistema monetário não utilize moedas.
O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário.
_________
3. Precisamos controlar melhor os dados de alguns veículos que ficam na nossa garagem e para isso precisamos que seja feito o seguinte:
  Crie a interface “Veiculo” com os seguintes atributos:
   - Modelo
   - Ano de fabricação
   - Quantidade de Portas
   - Marca

    > Crie a classe “Carro”, que herda de Veículo e tem os seguintes atributos:
    – Quantidade de Portas: entre 2 e 4

    > Crie a classe “Moto”, que herda de Veículo, e possui os seguintes atributos:
    – Rodas: 2
    – Passageiros: entre 1 e 2

    > Deve ser solicitado ao usuário que preencha as informações sobre o seu veículo, os dados devem ser salvos em um arquivo JSON (para não precisar trabalhar com banco de dados, até porquê já vai ser bem próximo de um banco NoSQL);
_________
4. Deve ser informado pelo usuário 5 CEP’s, a aplicação deve consumir a api VIACep (https://viacep.com.br/) e obtiver dados sobre esses CEP’s. 
Os CEP’s informados pelo usuário devem ser inicialmente armazenados em um array, e o consumo da API deve ser de forma síncrona (aguardar a resposta do primeiro para iniciar a requisição do segundo e assim por diante).
Os dados após o processamento devem ser exibidos na tela.

### ‼ Observações

>As questões 1, 2 e 4 podem estar em JavaScript ou TypeScript. A questão 3 precisa estar em TypeScript.

_________

## Ferramentas de Desenvolvimento

As seguintes ferramentas foram usadas na construção do Front-end:

 - **HTML5**
 - **ReactJS**
 - **Axios**

 - **Formik**
 - **Javascript**
 - **editorconfig**
 
 - **yarn**
 - **sweetalert2**
 - **Sass**

_________

Ferramentas para desenvolvimento do Back-end:
 
- **yarn**
- **editorconfig**

- **Express**
- **Nodemon**
- **cors**
- **express-async-erros**
- **Jester**
- **JavaScript**
- **TypeScript**

- **Postman**


- Programado no **Visual Studio Code**.

_________

## Como startar o app

    # Clone esse repositório
    $ git clone https://github.com/rogeriogomes2009/testes-kukac.git
    
    # Entrando na pasta do projeto
    $ cd testes-kukac
    
    # Iniciando o frontend
    $ cd frontend
    
    # Instalando dependências
    $ yarn ou npm i 
    
    # Executando
    $ yarn start ou npm start
    
    # Abra o browser de sua preferência e digite http://localhost:3001/
    
    # Instalando o backend
    $ cd backend
    
    # Instalando dependências
    $ yarn ou npm i 
    
    # Executando
    $ yarn server ou npm run server
    
    
    # Realizando os testes
    $ yarn test ou npm run test
    
    # Avaliando o poder de cobertura dos testes
    $ yarn coverage ou npm run coverage
    
    # Startando testes automatizados
    $ yarn testWatch ou npm run testWatch
    
_________


Desafio realizado por ***Rogério Gomes - rogerio.gomes2009@gmail.com***


**Axios**: https://axios-http.com/docs/intro
**cors**: https://www.npmjs.com/package/cors
**editorconfig**: https://editorconfig.org/
**Express**: https://expressjs.com/
**express-async-erros**: https://www.npmjs.com/package/express-async-errors
**formik**: https://formik.org/
**HTML5**: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
**JavaScript**: https://www.javascript.com/  
**Jester**: https://jestjs.io/
**Nodemon**: https://www.npmjs.com/package/nodemon
**Postman**: https://www.postman.com/
**ReactJS**: https://reactjs.org/
**Sass**: https://sass-lang.com/ 
**sweetalert2**: https://sweetalert2.github.io/
**TypeScript**: https://www.typescriptlang.org/
**yarn**: https://yarnpkg.com/

**Visual Studio Code**: https://code.visualstudio.com/ 
