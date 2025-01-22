FROM node:16

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances, y compris 'pg'
RUN npm install

# Copier le reste de l'application
COPY . .

# Exposer le port pour le backend
EXPOSE 5000

# Commande pour démarrer le backend
CMD ["node", "index.js"]
