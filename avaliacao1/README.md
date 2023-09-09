# Avaliação - 1

Neste desafio vocês deveria criar uma calculadora para funcionar e ela deve pelo menos fazer as 4 operações da matemática: **soma, subtração, multiplicação ou divisão**. Foi utilizado esse layout pronto, disponível neste [repositório](https://github.com/profalves/calculadora-template-sample.git), onde editei somente o arquivo typescript(app.ts), que foi compilado para o javascript(app.js) que é o foco do desafio.

---

## Executando o projeto

Primeiramente, caso não tenha feito, clone o repositório raiz para sua maquina, execute o seguinte comando no terminal bash:

<pre>
git clone git@github.com:erikadeolima/erika-de-oliveira-lima.git
</pre>

Entre na pasta da avaliação, como comando:

<pre>
cd avaliacao1
</pre>

Já dentro da pasta, de a fim de facilitar a execução do projeto, foram adicionados scripts de execução, sendo eles:

`yarn compile` - executa o processo de compilação do arquivo app.ts para app.js.

`yarn clear` - recomenda-se executar este script pois a porta localhost:5501 pode estar ocupada, então a execução desse codigo "limpa" os processos executados na porta em questão.

> Caso ao executar apareça uma mensagem "error Command failed with exit code 2.", siginifica que não havia nenhum processo em execução nessa porta.

`yarn start` - executa o processo de "Go Live" dos arquivos, e possibilita visualizar o arquivo index.html. Para acessa-lo, em um navegador de sua preferência, navege até http://localhost:5501/ .

> Caso não tenha executado o comando yarn clear, e tenha algum outro processo na porta em questão, ele automaticamente redirecionará para uma porta aleatória. Portanto, caso ao acessar o http://localhost:5501/, e aparecer um erro, ou algo diferente de uma
> ![calculadora](https://github.com/erikadeolima/erika-de-oliveira-lima/blob/master/avaliacao1/calc.png).

> Verifique no terminal qual a porta que se encontra o processo de live-server, exe:
> ![terminal qual a porta que se encontra o processo de live-server](https://github.com/erikadeolima/erika-de-oliveira-lima/blob/master/avaliacao1/terminal.png)

> e acesse http://localhost:{porta real}. Ex: http://localhost:35795/.
