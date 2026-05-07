# Parcial de Taller de Programacion 2

## Descripción
Esta es una API desarrollada con **Node.js** y **Express** que permite obtener frases aleatorias desde una API externa (ZenQuotes) y gestionar una colección de frases persistida en un archivo JSON local.

---

## Dependencias requeridas
* **Node-fetch** 
* **Express** 
* **Morgan** 
* **npm** (instalado junto con Node.js).

---

## Instalación

1. **Clonar el repositorio** (o descargar los archivos):
   ```bash
   git clone <url-del-repositorio>
   cd Parcial_TP2

1. **Instalar dependencias**:
    ```bash
    npm install express morgan dotenv node-fetch

2. **Configurar variables de entorno:**

   Crea un archivo .env en la raíz del proyecto basándote en el archivo .env.example
   
   Asegurate de que el archivo .env contenga el puerto deseado:
   ```bash
   PORT=3000

--
## Inicia y proba el proyecto  
  ```bash
  npm start
  ```
--  
## Requisitos para Pruebas Manuales
Para ejecutar las pruebas desde el archivo quotes-api.http, es necesario contar con la siguiente extensión en VS Code:
* Nombre: **REST Client** 
