Olá bem-vindo ao projeto web-store:

Antes de mais nada, gostaria de agradecer seu interesse no meu projeto. Agora vou passar algumas informações:

-> Antes de mais nada se certifique que tenha o Docker instalado em sua maquina, ele será algo bem importante para que o projeto rode de forma eficaz.

-> Já possui / instalou o docker? Então podemos continuar:

-> No seu terminal, cerifique-se que ele esteja com o path relativo a raiz do projeto. Algo com `/erika-de-oliveira-lima`

-> Peço que rode o "docker compose -f "web-store/docker-compose.yaml" up -d --build" no seu terminal bash, isso fará com que o banco de dados possua o ambiente ideal para funcionar corretamente.

-> Rodou?

cd web-store/backEnd

yarn install

yarn run db:reset

yarn run clear

yarn run dev

OUUU `cd web-store/backEnd && yarn install && yarn run db:reset && yarn run clear && yarn run dev`

Esses comandos garantem que o back end esteja funcionando.

Depois siga os seguinte comando em outro terminal com o path relatiovo em `/erika-de-oliveira-lima`:

cd web-store/frontEnd

yarn

yarn run clear

yarn run dev

OUUU `cd web-store/frontEnd && yarn install && yarn run clear && yarn run dev`

Esses comandos garantem que o fron-end esteja funcioando corretamente no endereço 'http://localhost:3000'

Com ambas aplicações funcionando, pode usar a aplicação do front-end no endereço indicado (http://localhost:3000), da forma como preferir.
