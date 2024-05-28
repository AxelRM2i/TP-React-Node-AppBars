// Importation des modules nécessaires
const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser les requêtes JSON
// app.use(express.json());

// Route de base pour vérifier le fonctionnement du serveur
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});