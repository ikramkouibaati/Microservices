FROM node:16

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Reconstruire les dépendances natives comme sqlite3
RUN npm rebuild sqlite3

# Copier le reste du code
COPY . .

# Exposer le port du backend
EXPOSE 5000

# Commande pour démarrer le serveur
CMD ["node", "index.js"]
