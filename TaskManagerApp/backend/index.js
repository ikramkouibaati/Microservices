const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./models'); // Connexion à la base de données
const taskRoutes = require('./routes/taskRoutes'); // Import des routes pour les tâches

dotenv.config();
const app = express();

app.use(bodyParser.json());

// Définir les routes pour l'API
app.use('/api/tasks', taskRoutes);

// Route de test pour vérifier le serveur
app.get('/', (req, res) => res.send('API en ligne !'));

const PORT = process.env.PORT || 5000;

// Démarrage du serveur après la synchronisation avec la base de données
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
  });
});
