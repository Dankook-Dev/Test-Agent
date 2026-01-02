# Pavimentadora MVP - MERN Stack

Este es un MVP para una empresa de pavimentación con maquinaria pesada, construido con el stack MERN (MongoDB, Express, React, Node.js) y TypeScript.

## Estructura del Proyecto

- `/client`: Frontend desarrollado con React, Vite, TypeScript y Tailwind CSS.
- `/server`: Backend desarrollado con Node.js, Express, TypeScript y Mongoose.

## Requisitos Previos

- Node.js (v16 o superior)
- MongoDB (Local o Atlas)

## Instalación y Ejecución

### 1. Configurar el Servidor (Backend)

```bash
cd server
npm install
# Crea un archivo .env con MONGO_URI=tu_conexion_mongodb
npm run dev
```

### 2. Configurar el Cliente (Frontend)

```bash
cd client
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:5173` y el backend en `http://localhost:5000`.

## Características

- **Diseño Mobile-first:** Optimizado para dispositivos móviles usando Tailwind CSS.
- **Modelado de Datos:** Esquemas de Mongoose para servicios y maquinaria.
- **Integración API:** El frontend consume datos del backend con fallback a datos semilla.
- **Iconografía:** Uso de Lucide-React para una interfaz profesional.
