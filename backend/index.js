import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import './config/customConsole.js';
import barsRoutes from './routes/bars.js';
import biere_commandeRoutes from './routes/biere_commande.js';
import bieresRoutes from './routes/bieres.js';
import commandesRoutes from './routes/commandes.js';
// import seedDatabase from './config/seed.js';
import Bar from './models/bar.js';
import Biere_Commande from './models/biere_commande.js';
import Biere from './models/biere.js';
import Commande from './models/commande.js';

const app = express();
const port = 3000;

// Utilisation du middleware CORS
app.use(cors());

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Utilisation des routes
app.use('/bars', barsRoutes);
app.use('/biere_commande', biere_commandeRoutes);
app.use('/bieres', bieresRoutes);
app.use('/commandes', commandesRoutes);

// Route de base pour vérifier le fonctionnement du serveur
// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });
sequelize//bars
  // Synchronisation des modèles avec la base de données
  .sync({ force: true })
  .then(async () => {
    console.log('✅ Database & tables created!');
    // Vérifier s'il y a 0 enregistrement dans la table bars
    const barCount = await Bar.count();
    if (barCount === 0) {
      console.log('No bars found, seeding database...');
      await seedDatabase();
    }
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  sequelize//biere_commande
  // Synchronisation des modèles avec la base de données
  .sync({ force: true })
  .then(async () => {
    console.log('✅ Database & tables created!');
    // Vérifier s'il y a 0 enregistrement dans la table biere_commande
    const biere_commandeCount = await Biere_Commande.count();
    if (biere_commandeCount === 0) {
      console.log('No biere_commande found, seeding database...');
      await seedDatabase();
    }
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  sequelize//biere
  // Synchronisation des modèles avec la base de données
  .sync({ force: true })
  .then(async () => {
    console.log('✅ Database & tables created!');
    // Vérifier s'il y a 0 enregistrement dans la table biere
    const biereCount = await Biere.count();
    if (biereCount === 0) {
      console.log('No biere found, seeding database...');
      await seedDatabase();
    }
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  sequelize//commande
  // Synchronisation des modèles avec la base de données
  .sync({ force: true })
  .then(async () => {
    console.log('✅ Database & tables created!');
    // Vérifier s'il y a 0 enregistrement dans la table commande
    const commandeCount = await Commande.count();
    if (commandeCount === 0) {
      console.log('No biere_commande found, seeding database...');
      await seedDatabase();
    }
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Démarrage du serveur
app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});