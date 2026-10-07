# Seguridad del sitio

Este sitio está diseñado como una web estática para GitHub Pages.

- No contiene backend, base de datos, login ni procesamiento de pagos.
- No almacena credenciales, API keys ni secretos.
- No incluye librerías JavaScript de terceros.
- No incluye analítica ni cookies de seguimiento.
- La política CSP está declarada en `index.html` como capa adicional de protección en el navegador.
- Los enlaces externos que abren una pestaña nueva usan `rel="noopener noreferrer"`.
- Los videos publicados son copias sin audio para evitar exponer conversaciones o sonidos ambientales accidentales.

## Antes de publicar

1. Revisa que el repositorio no contenga archivos personales, documentos privados ni metadatos sensibles.
2. Activa autenticación de dos factores/passkey en GitHub.
3. En GitHub Pages activa **Enforce HTTPS**.
4. Al conectar un dominio propio, verifica primero el dominio en GitHub y evita registros DNS wildcard (`*`).
5. No agregues formularios que reciban datos sensibles usando solo GitHub Pages.
