FROM node:16

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Ajouter une commande pour nettoyer les caches
RUN npm cache clean --force

# Copier le reste de l'application
COPY . .

# Exposer le port du frontend
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
