# Étape 1 : Utiliser une image de base avec Node.js pour construire l'application
FROM node:latest as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Installer les dépendances
RUN npm install

# Étape 2 : Utiliser une image Nginx pour servir l'application Angular construite
FROM nginx:latest

# Copier les fichiers construits de l'étape précédente dans le répertoire de travail de Nginx
COPY --from=build /app/dist/frontend/browser/ /usr/share/nginx/html/

# Exposer le port 80 pour accéder à l'application Angular
EXPOSE 8081

# Laisser tourner Nginx en arrière-plan lors de l'exécution du conteneur
CMD ["nginx", "-g", "daemon off;"]
