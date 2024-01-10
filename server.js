// Inclut le module http de Nodejs
const http = require("node:http");
const app = require("./app");
const hostname = "127.0.0.1";
const port = 3000;
/**
 * La méthode createServer de http crée et renvoie un serveur http
 * A chaque fois qu'une requêtte est reçue, l'évènement requette est déclenchée
 * Et donne acces à 2 objets: la requette(http.IncomingMessage)
 * La réponse(http.ServerResponse)
 * Le premier donne les détails sur la requette
 * Le deuxième est utilisé pour renvoyer de la donnée au client
 */
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
