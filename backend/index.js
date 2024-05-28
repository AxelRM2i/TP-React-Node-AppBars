import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import './config/customConsole.js';
import barsRoutes from './routes/bars.js';
import biere_commandeRoutes from './routes/biere_commande.js';
import bieresRoutes from './routes/bieres.js';
import commandesRoutes from './routes/commandes.js';
// import seedDatabase from './config/seed.js';

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
sequelize
  .sync({ force: true })
  .then(async () => {
    console.log('✅ Database & tables created!');
    await seedDatabase();
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});