// ******************************************************************************************************

// ******************************************************************************************************
//
// * Compilador Watch Mode
//
// * Usamos o 'Watch Mode' do compilador para que ele compile automaticamente o código a cada alteração
// * que salvarmos ao arquivo. Caso tentamos salvar o arquivo com algum erro, o compilador nos retorna 
// * esse erro.
//
// ******************************************************************************************************

const userName = 'Joao Luca';

console.log(userName);

// ******************************************************************************************************
//
// * tsc --init
//
// * Podemos compilar todos os arquivos do projeto ao mesmo tempo no TSC. Fazemos isso através do
// * comando tsc --init. ELe gera um arquivo e compila todos os documentos ao mesmo tempo. Podemos
// * combiná-lo com o watch mode.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * tsconfig
//
// * Podemos configurar o tsconfig.json para compilar de maneira personalizada. Podemos, por exemplo,
// * fazer com que ele exclua alguns arquivos determinados na compilação. Fazemos isso com o comando
// * "exclude", e adicionando um array desses arquivos dentro. Podemos também utilizar o * para 
// * excluir da compilação todos os arquivos que terminarem com uma extensão. Podemos também utilizar
// * o "include" para fazer o contrário (apenas compilar o que for incluso). Semelhante ao include,
// * temos o "File", porém serve para trabalhos menores.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Opções do compilador - target
//
// * Dentre as opções do compilador, temos a opção "target", que atribui a versão do JS que queremos
// * trabalhar no TS. Podemos utilizar isso para trabalhar com navegadores mais antigos.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Opções do compilador - lib
//
// * Quando não especificarmos quais configurações queremos para cada opção dentro do compilador, ele
// * irá adotar valores padrões para todas as opções de acordo com o "target" que estiver definido.
// * Dentro da opção "Lib", definimos as bibliotecas padrões do JavaScript que iremos usar no projeto.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Opções do compilador - sourceMap
//
// * O sourceMap nos ajuda a debugar o nosso código, gerando o código em TS dentro do console do navega-
// * dor.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Opções do compilador - "outDir" e "rootDir", "removeComments", "noEmit"
//
// * Podemos utilizar as opções "outDir" e "rootDir" para definir em qual diretório queremos salvar
// * nossos arquivos JS gerados e de qual diretório queremos puxar nossos arquivos TS, respectivamente.
// * A opção "removeComments" serve para removermos comentários do arquivo JS gerado. "noEmit" serve
// * para impedirmos que o TS gere arquivos JS (útil em alguns casos).
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Opções do compilador - "noEmitOnError"
//
// * O TS sempre irá gerar códigos em JS, mesmo que o TS estiver com algum erro. Podemos desativar isso
// * com a opção "noEmitOnError".
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Opçoes estritas
//
// * As opções estritas dentro das configurações do compilador definem como o TypeScript irá fazer as
// * verificações de tipos no código. De acordo com as configurações definidas, podemos aumentar ou
// * diminuir as restrições de tipos ao trabalhar no código.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Checagens adicionais
//
// * Serve para melhorias de qualidade do código, como por exemplo evitarmos deixar alguma variável
// * declarada sem uso.
//
// ******************************************************************************************************

// ******************************************************************************************************
//
// * Debugando com o VS Studio
//
// * Podemos utilizar as próprias ferramentas do VS Code para debugar o nosso código. Fazemos isso
// * através do uso de marcador no código e através da ferramenta "run and debug", que gera um arquivo
// * chamado "launch.json", onde atribuimos configurações ao debugger.
//
// ******************************************************************************************************

// SALVAR GITTT

// ******************************************************************************************************