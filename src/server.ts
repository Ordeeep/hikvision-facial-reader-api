import Fastify from 'fastify'// Importanto o framework que irá rodar o server
import 'dotenv/config'// Importanto variaveis de ambiente
import DigestFetch from 'digest-fetch'; // Realiza o auth
const server = Fastify({ logger: false })

const SERVER_PORT = parseInt(process.env.SERVER_PORT ?? '3000'); //Importanto o valor da porta da aplicação
const SERVER_IP = process.env.SERVER_IP; //Importanto o valor do ip da aplicação

//Adicionando type no queryString
server.get<{ Querystring: { host_ip: string, login: string, password: string } }>('/', async (req, res) => {
  const { host_ip, login, password } = req.query;
  //Host_ip: Ip do leitor
  //login e password sao o acesso do leitor.
  const client = new DigestFetch(login, password);
  await client.fetch(`http://${host_ip}/ISAPI/AccessControl/UserInfo/Count`, { method: 'GET' })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      //Retorna o total de cadastro no leitor
      res.send(parseInt(data.UserInfoCount.userNumber))
    })
    .catch((error) =>{
      //Caso a aplicação de erro, mostra o erro no conole e retorna -1
      console.error('Erro:', error)
      res.send(-1)
    });
});

server.listen({
  port: SERVER_PORT,
  host: SERVER_IP
}, () => {
  console.log(`Server is running in: http://${SERVER_IP}:${SERVER_PORT}`)
})