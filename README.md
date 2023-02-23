# Beeteller - Desenvolvedor Full Stack

Olá, me chamo Edberg Nóbrega e é com muita satisfação que venho apresentar meu código proposto para o desafio da Beeteller, para vaga de desenvolvedor Full Stack

## Instruções

Bem como o proprio nome do desafio sugere, este código é dividido em duas partes a do front e a do back. Para isso eu fiz o clone do repositório que me foi enviado e a partir deste clone criei duas pastas, as quais tem as finalidades expecificas de cada stack. Então vamos iniciar nosso onboarding ? 

De início precisamos clonar os códigos que estão neste link : https://github.com/EdbergMartins/selecao-full-stack

Após acessar o link a cima clique no botão verde "Code" que está localizado no lado direito do repositório, acima da lista de arquivos.

Selecione a opção "HTTPS" para clonar o repositório usando o método HTTP.

Copie a URL que aparece na caixa de diálogo.

Abra o terminal ou prompt de comando em seu computador e navegue até a pasta onde deseja clonar o repositório.

Digite o comando git clone seguido da URL que você copiou anteriormente. Por exemplo:
git clone https://github.com/EdbergMartins/selecao-full-stack.git

Pressione Enter e aguarde enquanto o Git baixa os arquivos do repositório para a pasta selecionada.

Pronto com isso concluimos a etapa de baixar o repósitório, agora vamos configurar os ambientes de backend e frontend. Iniciando pelo ambiente de backend

Para o backend foram utilizados o Node.Js juntamente com o PostgreSQL e o pgAdmin4, portanto preciso que sua máquina esteja com esses programas instalados, mas não se preocupe aqui vai um breve tutorial de como instalar e configurar estes pre-requisitos

Para instalação do PostgresSQL e o PgAdmin você pode seguir os seguintes passos:

Acesse o site oficial do PostgreSQL em https://www.postgresql.org/ e clique no botão "Download".

Selecione a versão 15 do PostgreSQL e o sistema operacional em que está trabalhando.

Faça o download do instalador apropriado para o seu sistema operacional.

Execute o arquivo de instalação e siga as instruções na tela para instalar o PostgreSQL em seu computador. Durante a instalação, você precisará definir uma senha para o usuário "postgres", que é o superusuário padrão do PostgreSQL.

Depois de concluir a instalação do PostgreSQL, acesse o site oficial do PgAdmin 4 em https://www.pgadmin.org/ e clique no botão "Download".

Selecione a versão v6 do PgAdmin 4 que e o sistema operacional em que está trabalhando.

Execute o arquivo de instalação e siga as instruções na tela para instalar o PgAdmin 4 em seu computador.

Depois de concluir a instalação do PgAdmin 4, abra o programa e selecione "Add New Server" para adicionar um novo servidor PostgreSQL.

Preencha as informações necessárias, como nome do servidor, endereço do servidor (geralmente "localhost"), porta (geralmente 5432) e nome de usuário (geralmente "postgres").

Digite a senha que você definiu durante a instalação do PostgreSQL e clique em "Save".

O servidor PostgreSQL agora será adicionado ao PgAdmin 4 e agora precisamos criar um database com nome de " beeteller " para que nosso backend consiga se comunicar com o PgAdmin 4.

Para isso basta seguir estes passos :

Abra o PgAdmin 4 e selecione o servidor PostgreSQL no qual deseja criar o novo banco de dados.

Clique com o botão direito do mouse no nó "Databases" na barra lateral e selecione a opção "Create" > "Database".

Na tela de criação do banco de dados, insira o nome do banco de dados na seção "General", só lembrando que o nome precisa ser "beeteller" exatemnte assim sem as aspas .

Clique em "Save" para criar o novo banco de dados.

Pronto agora que temos nosso banco de dados configurado, vamos para o nosso editor de código para que possamos instalar as dependencias do nosso backend e ele consiga rodar sem maiores problemas.

Para isso abra no seu editor de código na pasta de trabalho do backend, e em seguida vamos instalar o gerenciador de pacotes yarn, eu prefiro o yarn proque as vezes o npm da uns bugs rsrsrs.

Então ao abrir o seu editor de codigo na pasta do backend abra um terminal, no mesmo e insira o comando "npm install -g yarn" assim já podemos utilizar o gerenciador de pacotes yarn.

Com o yarn isntalado você pode digitar o simples comando "yarn" em seu terminal e ele irá isntalar as dependencias necessárias para que o nosso projeto backend funcione corretamente.

Com as dependencias instaladas agora só precisamos configurar as credenciais para que o nosso back consiga se comunicar com o pgadmin, para isso vamos navegar até o arquivo de conecção que fina na pasta src>modules>db.js nesta pasta você deverá inserir as credenciais que foram configuradas na instalação do PostgreSQL e com isso teremos nosso backend configurado.

Agora podemos iniciar o nosso backend a partir do comando " yarn run dev". Após isso o no console do terminar irá aparecer a mensagem "Server is listening on port 3000" significando que o backend está 100%.

Agora com nosso back funcionando vamos configurar o fornt.

Para o front não temos tantos passos como o back, ainda bem rsrsrs.

Abra a pasta "front-beeteller" em seu editor de código.

Caso necessário faça a instalação do yarn novamente na pasta do front, seguindo os mesmos passos que foram descritos anteriromente.

Com o yarn instalado vamos enviar o comendo " yarn " no terminarl para o gerenciador de pacotes faça a instalação de todas as dependencias necessárias para que nosso front esteja funcionando.

Após a instalação de todas as dependencias já podemos dar inicio ao projeto através do comando "yarn start"

Com isso no terminal irá aparecer o link para acessar a nossa aplicação, se você estiver utilizando o VScode basta segurar Ctrl e clicar no link.

E Xaram temos nossa aplicação fullstack rodando em sua maquina. 

Gostaria de agradecer a todos que tiveram a pasciencia de executar este tutoral ate o fim e que façam bom proveito da aplicação, ela tem alguns pontos de melhoria. Mas eu dei o meu melhor dentro do possivel :D
