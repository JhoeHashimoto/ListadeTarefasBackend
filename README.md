<h2>Template prontos:</h2>

https://nativebase.io/
![image](https://github.com/user-attachments/assets/44d653e7-161d-408d-b706-2ead83c5bd5c)




Aula 16/08/2024 - Aula de React Native com Expo

Proposta da Aula
Nesta aula, vamos introduzir o desenvolvimento de aplicações móveis utilizando React Native com Expo. Vamos configurar um projeto básico para gerenciamento de tarefas, onde aprenderemos os conceitos fundamentais de React Native, Expo, e o uso de bibliotecas importantes como NativeBase.
Tópicos que serão abordados
Introdução ao React Native:
O que é React Native?
Diferença entre React Native e desenvolvimento nativo.
Vantagens de usar React Native.
   
Introdução ao Expo:
O que é Expo e como ele facilita o desenvolvimento em React Native.
Ferramentas e funcionalidades oferecidas pelo Expo.

Configuração do Ambiente de Desenvolvimento:
Instalação do Expo CLI.
Criando um novo projeto com Expo.
   
Implementação do Projeto Inicial:
Criação do arquivo App.tsx.
Explicação detalhada de cada trecho de código.

1. Introdução ao React Native
React Native é um framework de desenvolvimento móvel criado pelo Facebook, que permite criar aplicativos móveis para iOS e Android usando apenas JavaScript e React. Ele possibilita a construção de aplicações nativas, utilizando componentes equivalentes aos nativos das plataformas móveis, com uma única base de código.
Vantagens do React Native:
Reutilização de código: Grande parte do código pode ser reutilizado entre as plataformas iOS e Android.
Desenvolvimento mais rápido: Ferramentas como Expo permitem uma configuração rápida e fácil do ambiente de desenvolvimento.
Comunidade ativa: Grande quantidade de pacotes e bibliotecas disponíveis para acelerar o desenvolvimento.
2. Introdução ao Expo
Expo é uma plataforma e um conjunto de ferramentas que facilita o desenvolvimento de aplicativos móveis com React Native. Ele oferece um ambiente de desenvolvimento simplificado e várias APIs prontas para uso, o que reduz a complexidade de configuração e desenvolvimento de projetos móveis.
Benefícios de usar o Expo:
Configuração Rápida: Com apenas um comando, você cria um projeto React Native pronto para começar a desenvolver.
Hot Reloading: Visualização imediata das mudanças no código sem precisar recompilar a aplicação.
APIs Integradas: Acesso fácil a APIs como câmera, localização, e mais, sem a necessidade de configuração adicional.
3. Configuração do Ambiente de Desenvolvimento
Passo 1: Instalação do Node.js
Baixe e instale o Node.js (recomendado LTS).
Passo 2: Instalação do Expo CLI
Abra o terminal e execute o comando: 
npm install -g expo-cli
Passo 3: Criando um Novo Projeto com Expo
Execute o comando no terminal para criar um novo projeto:
expo init listatarefastype  // nome do projeto
Escolha o template blank (TypeScript) para iniciar com suporte a TypeScript.
Passo 4: Iniciando o Projeto
Navegue até o diretório do projeto e inicie o ambiente de desenvolvimento:
cd listatarefastype
npm start

4. Implementação do Projeto Inicial
Vamos analisar os dois arquivos gerados na configuração inicial do projeto Expo com TypeScript: App.tsx e package.json.
1. Arquivo App.tsx
Este arquivo é o ponto de entrada do aplicativo e contém um exemplo básico de código para que você comece a desenvolver sua aplicação. Vamos ver o que cada parte faz:
Código:
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá Mundo do 2TDSZ da FIAP Lins!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
Explicação do Código:
Importações:
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
StatusBar: Componente do Expo que permite controlar o estilo da barra de status do sistema (hora, bateria, etc.).
StyleSheet, Text, View: Componentes básicos do React Native. StyleSheet é usado para criar estilos, Text exibe texto, e View é um contêiner para outros componentes.
Função App:
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá Mundo do 2TDSZ da FIAP Lins!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
A função App é o componente principal que é exportado e executado quando o aplicativo inicia.
Dentro da função, há uma estrutura de componentes do React Native:
View: Envolve outros componentes e aplica o estilo container.
Text: Exibe a mensagem "Open up App.tsx to start working on your app!".
StatusBar: Ajusta o estilo da barra de status com o valor "auto".
Estilos:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
StyleSheet.create: Cria um objeto de estilos para ser usado no aplicativo.
container: Estilo aplicado ao View, que define o contêiner para ocupar todo o espaço disponível (flex: 1), com fundo branco (backgroundColor: '#fff'), e centraliza os filhos vertical e horizontalmente (alignItems: 'center' e justifyContent: 'center').
2. Análise do Arquivo package.json
Este arquivo define as dependências e scripts do projeto, controlando como o projeto é executado e as bibliotecas que utiliza.
Código:
{
  "name": "listatarefastype",
  "version": "1.0.0",
  "main": "expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~51.0.28",
    "expo-status-bar": "~1.12.1",
    "react": "18.2.0",
    "react-native": "0.74.5"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.45",
    "typescript": "^5.1.3"
  },
  "private": true
}
Explicação do Código:
Metadados do Projeto:
{
  "name": "listatarefastype",
  "version": "1.0.0",
  "main": "expo/AppEntry.js",
}
"name": Nome do projeto.
"version": Versão do projeto.
"main": O ponto de entrada do aplicativo (arquivo que o Expo usa para iniciar o aplicativo).
Scripts:
{
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
}
"start": Inicia o servidor de desenvolvimento Expo.
"android", "ios", "web": Inicia o aplicativo diretamente em um dispositivo Android, iOS ou navegador web, respectivamente.
Dependências:
{
  "dependencies": {
    "expo": "~51.0.28",
    "expo-status-bar": "~1.12.1",
    "react": "18.2.0",
    "react-native": "0.74.5"
  },
}
"expo": A base do projeto que contém todas as ferramentas e APIs fornecidas pelo Expo.
"expo-status-bar": Biblioteca para controlar a barra de status do dispositivo.
"react": A biblioteca principal para construir interfaces de usuário.
"react-native": Framework que permite construir aplicativos móveis usando React.
DevDependencies:
{
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.45",
    "typescript": "^5.1.3"
  },
}
"@babel/core": Ferramenta de compilação que converte código ES6/JSX para uma versão mais compatível com navegadores antigos ou ambientes de execução.
"@types/react": Tipagens TypeScript para a biblioteca React.
"typescript": Compilador TypeScript que permite o uso de tipos no JavaScript.
Privacidade:
{
  "private": true
}
"private": Define que este projeto é privado e não pode ser publicado em repositórios públicos, como o npm.
Esses dois arquivos fornecem a base para o desenvolvimento de um aplicativo React Native utilizando Expo e TypeScript. O App.tsx é o ponto de partida da interface do usuário, e o package.json gerencia as dependências e scripts do projeto.

Vamos commitar nosso projeto a cada evolução no GitHub
Aqui está um passo a passo  para criar um repositório no GitHub, configurar o Git localmente e sincronizar o projeto Expo listatarefastype com o repositório remoto e, no final, tem um link mais detalhado de como usar o github em linha de código e interface gráfica do vscode
Passo a Passo para Sincronizar o Projeto com o GitHub
1. Criação do Repositório no GitHub
Acessar o GitHub:
Entre no site GitHub e faça login na sua conta.
Criar um Novo Repositório:
No canto superior direito, clique no botão + e selecione New repository.
Preencha o nome do repositório como listatarefastype.
Opcional: Adicione uma descrição para o repositório.
Defina o repositório como Public ou Private.
Clique em Create repository.
2. Configuração do Git no Computador Local
Configurar Usuário e E-mail do Git:
Abra o terminal ou prompt de comando.
Configure o nome do usuário:
git config --global user.name "Seu Nome"
Configure o e-mail:
git config --global user.email "seuemail@example.com"
Essas configurações garantem que as suas alterações sejam associadas a você no histórico do repositório.
3. Clonar o Repositório Remoto para o Computador Local
Clonar o Repositório:
No terminal, navegue até o diretório onde você deseja salvar o projeto.
Execute o comando para clonar o repositório do GitHub para o seu computador local:
git clone https://github.com/seuusuario/listatarefastype.git
Substitua seuusuario pelo seu nome de usuário no GitHub.
4. Mover os Arquivos do Projeto para o Repositório Clonado
Mover os Arquivos do Projeto:
Navegue até o diretório clonado:
cd listatarefastype
Mova todos os arquivos do projeto Expo (App.tsx, package.json, etc.) para dentro deste diretório.
Certifique-se de que os arquivos do projeto estejam agora dentro do diretório do repositório clonado.
5. Fazer o Commit e Enviar as Alterações para o GitHub
Adicionar os Arquivos ao Controle de Versão:
No terminal, adicione todos os arquivos ao Git:
git add .
O . indica que todos os arquivos modificados devem ser adicionados.
Fazer o Commit das Alterações:
Execute o comando de commit com uma mensagem descritiva:
git commit -m "Inicialização do projeto listatarefastype com Expo e TypeScript"
Enviar as Alterações para o Repositório Remoto:
Envie as alterações para o GitHub:
git push origin main
Isso sincroniza o repositório local com o repositório remoto no GitHub.
Recomendações para uso dos computadores da FIAP
Repetir a Configuração do Git: Como as configurações de usuário e e-mail do Git são perdidas a cada sessão, lembre-se de configurá-las novamente toda vez que iniciar uma nova aula.
Verificação de Configurações: Para verificar se as configurações de usuário e e-mail foram aplicadas corretamente, use:
git config --global user.name
git config --global user.email
