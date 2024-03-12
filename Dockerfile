# Stage 1: Build the Angular application
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm install -g @angular/cli

RUN ng build

# Stage 2: Slim image for serving the application
FROM nginx:alpine

COPY --from=builder /app/dist/frontend /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
