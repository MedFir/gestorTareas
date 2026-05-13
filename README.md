# App de Gestión de Tareas

Una aplicación web intuitiva y dinámica desarrollada para la creación y gestión de tareas. Este proyecto permite organizar actividades pendientes mediante un sistema de tarjetas interactivas, facilitando el seguimiento del trabajo diario. 

## 🚀 Características

* **Creación de Tareas:** Interfaz sencilla para agregar nuevas tareas al tablero.
* **Sistema de Tarjetas:** Cada tarea se renderiza como una tarjeta individual que muestra la siguiente información:
  * **Título:** Nombre principal de la actividad.
  * **Descripción:** Detalles específicos de lo que se debe realizar.
  * **Prioridad:** Nivel de urgencia o importancia (ej. Alta, Media, Baja).
  * **Categoría:** Etiqueta para clasificar la tarea (ej. Universidad, Personal, Trabajo).
* **Gestión de Estado Centralizada:** Manejo eficiente de los datos de las tareas para reflejar los cambios en tiempo real en la interfaz.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando tecnologías web modernas:

* **HTML5:** Para la estructura semántica de la aplicación.
* **CSS3:** Estilos personalizados para un diseño limpio, atractivo y responsivo.
* **JavaScript (ES6+):** Lógica base de la aplicación.
* **React:** 
  * **Componentes Funcionales:** Arquitectura modular para separar la interfaz en piezas reutilizables (como `TaskForm`, `TaskCard`, `TaskList`).
  * **Hooks Nativos:** Uso de `useState` y `useEffect` para el manejo del estado local y efectos secundarios.
  * **Hooks Personalizados:** Lógica de negocio extraída en custom hooks (ej. `useTasks` o `useForm`) para mantener los componentes limpios y enfocados únicamente en la vista.

## ⚙️ Instalación y Configuración Local

Si deseas ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. **Clona el repositorio** (o descarga el código fuente):
   ```bash
   git clone [https://github.com/tu-usuario/nombre-del-repositorio.git](https://github.com/tu-usuario/nombre-del-repositorio.git)