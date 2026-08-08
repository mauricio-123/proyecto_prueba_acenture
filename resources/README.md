# lista de que hacer - App - Prueba Técnica Ionic & Angular

Aplicación híbrida de gestión de tareas desarrollada con Ionic, Angular y Cordova. Este proyecto implementa categorización de tareas, persistencia de datos mediante almacenamiento local y control de funcionalidades en tiempo real a través de Firebase Remote Config.

**Desarrollador:** Mauricio Andrés Palacios Benta

---

## Requisitos Previos

Para compilar y ejecutar este proyecto, asegúrate de tener configurado tu entorno con las siguientes herramientas:
* **Node.js** (v18 o superior) y **npm**.
* **Ionic CLI** (`npm install -g @ionic/cli`).
* **Cordova CLI** (`npm install -g cordova`).
* **Xcode** (para compilación en iOS).
* **Android Studio** y SDK de Android configurado (para compilación en Android).

---

##  Instrucciones de Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone <https://github.com/mauricio-123/proyecto_prueba_acenture.git>
   cd ToDoList

---

##  Respuesta a las preguntas


1. **¿Cuáles fueron los principales desafíos que enfrentaste al implementar las nuevas funcionalidades?**
    Lo más difícil fue hacer que herramientas un poco más antiguas funcionaran sin problemas con las tecnologías modernas de hoy. Tuve que hacer varios ajustes manuales en la configuración para asegurar que la aplicación se pudiera instalar bien en cualquier celular sin crear conflictos.

    Además, fue un reto lograr que la aplicación se conectara rápidamente a la nube (para saber qué botones u opciones mostrar) justo antes de que el usuario empezara a tocar la pantalla, para que todo se viera perfecto desde el primer segundo.

2. **¿Qué técnicas de optimización de rendimiento aplicaste y por qué?**
    Para que la aplicación se sienta muy rápida y no se trabe en el celular, apliqué tres cosas clave:

    Carga inteligente: Configuré la app para que no cargue todo de golpe al abrirla, sino solo lo que el usuario necesita ver en ese momento. Así abre rapidísimo.

    Listas eficientes: Cuando el usuario marca una tarea como terminada, la app solo actualiza ese pequeño pedacito en la pantalla y no recarga toda la lista completa.

    Ahorro de memoria: Organicé la información guardada (las tareas y categorías) de una forma muy sencilla y ligera. Así, el celular no tiene que esforzarse de más ni gastar tanta memoria.

3. **¿Cómo aseguraste la calidad y mantenibilidad del código?**
    Me enfoqué en dejar todo muy bien organizado para que el día de mañana sea fácil agregarle cosas nuevas sin romper lo que ya funciona. Lo logré principalmente con dos reglas:

    Cada cosa en su lugar: Separé por completo la parte visual (lo que ve el usuario) de los "motores" que guardan los datos. Es como en un restaurante: los meseros y la cocina están separados; si un día decidimos cambiar la cocina, los meseros pueden seguir haciendo su trabajo sin tener que aprender todo desde cero.

    Reglas estrictas contra errores: Usé herramientas que me obligan a escribir el código con reglas muy claras. Esto actúa como un filtro que atrapa los errores y "choques" antes de que la aplicación llegue a las manos del usuario.



These are Cordova resources. You can replace icon.png and splash.png and run
`ionic cordova resources` to generate custom icons and splash screens for your
app. See `ionic cordova resources --help` for details.

Cordova reference documentation:

- Icons: https://cordova.apache.org/docs/en/latest/config_ref/images.html
- Splash Screens: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/
