## 📌 **Objetivo do Script**

Este script foi desenvolvido para auxiliar na verificação da quantidade de usuários cadastrados em um leitor Hikvision. Ele foi criado para integrar-se ao Zabbix, permitindo que o monitoramento seja automatizado através de uma requisição que utiliza as credenciais do dispositivo.

---

## 🚀 **Como Funciona?**

1. **🔗 Requisição ao Dispositivo:**  
   O script faz uma requisição HTTP ao leitor Hikvision, utilizando o IP, `username` e `password` fornecidos.

2. **📊 Contagem de Usuários:**  
   Após a autenticação, o script retorna a quantidade de usuários cadastrados no leitor.

3. **📡 Integração com Zabbix:**  
   O script é chamado pelo Zabbix, que utiliza os dados para gerar alertas e relatórios em tempo real.

---

## ⚙️ **Tecnologias Utilizadas**

- **TypeScript**: Linguagem de programação para garantir tipagem forte e escalabilidade.
- **Fastify**: Framework web de alta performance para a construção de APIs RESTful.
- **DigestFetch**: Biblioteca para facilitar requisições HTTP com suporte a autenticação Digest.

---

## 🛠️ **Pré-requisitos**

- **Node.js** e **npm** instalados no servidor.
- **Bibliotecas necessárias**:  
  - `fastify`
  - `digest-fetch`

Para instalar as dependências, execute:  
npm install fastify digest-fetch

---

## 📂 Passo a Passo para Executar o Script

1. Clone o repositório ou copie o arquivo do script para o seu servidor:<BR>
   git clone https://https://github.com/Ordeeep/hikvision-facial-reader-api

3. Instale as dependências necessárias para o projeto utilizando o npm:<BR>
   npm install fastify digest-fetch

4. Execute o script utilizando o comando:<BR>
   npm run dev

5. A rota para testar a aplicação é a **http://localhost:3398/**<BR>
   Parâmetros necessários para a requisição:<BR>
   -`host_ip:` IP do leitor<BR>
   -`login:` nome de usuário do leitor<BR>
   -`password:` senha do leitor<BR>
