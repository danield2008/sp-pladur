# RSP Pladur — sitio web

Web corporativa estática, adaptable a móviles, en español. Preparada para GitHub Pages.

## Archivos
- `index.html`: estructura y contenido.
- `styles.css`: identidad visual y diseño responsive.
- `script.js`: menú móvil, año automático y formulario que prepara un correo.

## Antes de publicar
1. Abre `script.js` y cambia `CONTACT_EMAIL` por el email real de RSP.
2. Comprueba los servicios, el área de trabajo y los textos.
3. Sustituye las fotos de inspiración por fotografías reales de trabajos de RSP cuando estén disponibles. Las imágenes externas requieren conexión a Internet y pueden cambiar; el texto indica que son imágenes de inspiración.
4. Revisa la web desde el móvil y el ordenador.

## Activar GitHub Pages
En el repositorio, entra en **Settings → Pages**. En **Build and deployment**, selecciona **Deploy from a branch**, luego la rama **main** y la carpeta **/(root)**, y guarda. Cuando termine el despliegue, GitHub mostrará la URL pública en esa misma pantalla.

Nota: el formulario no envía datos a un servidor; abre la aplicación de correo del visitante. Para recibir consultas sin abrir el correo, habría que integrar un servicio de formularios/backend y configurar sus credenciales de forma segura.
