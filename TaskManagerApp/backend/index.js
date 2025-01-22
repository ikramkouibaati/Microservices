const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./models'); // Import des modèles Sequelize

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Test de la connexion à la base de données
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie.');
  })
  .catch((err) => {
    console.error('Erreur de connexion à la base de données :', err);
  });

// Synchroniser les modèles avec la base de données
db.sequelize.sync({ force: false }).then(() => {
  console.log('Base de données synchronisée.');
});

// Définir une route de test
app.get('/', (req, res) => res.send('API en ligne !'));

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
