const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

// Créer une instance Sequelize avec les informations de la base de données
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,      // Nom de la base de données
  process.env.DATABASE_USER,      // Nom d'utilisateur
  process.env.DATABASE_PASSWORD,  // Mot de passe
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres', // Utilisation de PostgreSQL
  }
);

const db = {};

// Charger tous les modèles dans le dossier models
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js' && file.endsWith('.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Associer les modèles (si des associations sont définies dans vos modèles)
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Ajouter l'instance Sequelize à l'objet db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
