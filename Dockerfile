# Etapa 1: Construcción
FROM node:22 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de la aplicación
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Ejecución
FROM node:22

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos del paso anterior
COPY --from=build /app ./

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]