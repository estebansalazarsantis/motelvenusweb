# Motel Los Ángeles de Venus — propuesta logo v2

Versión basada en la página original aprobada, con encabezado corregido, identidad visual inspirada en el letrero histórico y optimización responsive para teléfono.

# Motel Los Ángeles de Venus — sitio web estático

Primera versión comercial preparada para GitHub Pages, sin frameworks ni dependencias externas.

## Contenido

- Página responsive para móvil, tablet y escritorio.
- Galería con fotografías reales seleccionadas.
- Dos recorridos en video sin audio.
- Secciones de habitaciones, jacuzzi, ubicación y contacto.
- Diseño sin cookies de seguimiento ni scripts de terceros.
- CSP básica, página 404 y archivos optimizados WebP.

## Fotografías seleccionadas

La web prioriza las imágenes que mejor comunican amplitud y presentación:

1. Habitación roja con zona de estar — portada.
2. Habitación roja frontal.
3. Habitación roja amplia con TV y ventanales.
4. Jacuzzi.
5. Exterior y acceso vehicular.
6. Habitación rosada con sector de baño.
7. Habitación rosada amplia.
8. Zona de estar.

Los originales no fueron reemplazados ni retocados. Las copias del sitio solo fueron redimensionadas y convertidas a WebP para mejorar velocidad de carga.

## Datos pendientes

Editar `config.js` y completar:

```js
whatsapp: "569XXXXXXXX",
phone: "+56 43 ...",
mapUrl: "https://maps.google.com/..."
```

También conviene confirmar antes de la publicación final:

- número de WhatsApp;
- teléfono;
- horario o si la atención es 24/7;
- medios de pago;
- tipos de habitación y diferencias entre ellas;
- tarifas, si se desean publicar;
- enlace oficial de Google Maps;
- Instagram/Facebook, si existen.

## Publicar en GitHub Pages

1. Crea un repositorio, por ejemplo `motel-venus`.
2. Sube el contenido de esta carpeta a la raíz del repositorio.
3. En GitHub ve a **Settings → Pages**.
4. En *Build and deployment*, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`.
6. Guarda. GitHub entregará una URL del tipo `https://TU_USUARIO.github.io/motel-venus/`.

Todas las rutas del proyecto son relativas, por lo que funciona tanto en un proyecto de GitHub Pages como posteriormente en `motelvenus.cl`.

## Dominio `motelvenus.cl`

Cuando compres el dominio en NIC Chile:

1. Verifica el dominio en GitHub antes de conectarlo.
2. En **Settings → Pages → Custom domain**, agrega `motelvenus.cl` o `www.motelvenus.cl`.
3. Configura los DNS según la documentación vigente de GitHub Pages.
4. Configura también la variante `www` para que GitHub pueda redirigir entre ambas versiones.
5. Cuando el certificado esté disponible, activa **Enforce HTTPS**.
6. No uses registros DNS wildcard (`*.motelvenus.cl`).

> Las IP de GitHub Pages pueden actualizarse con el tiempo. Confírmalas siempre en la documentación oficial de GitHub al momento de configurar NIC Chile.

## Mejoras sugeridas para una segunda versión

- WhatsApp flotante una vez confirmado el número.
- Tarjetas separadas por tipo de habitación.
- Tarifas y promociones administrables desde un archivo JSON.
- Google Business Profile y mapa exacto.
- SEO local con datos de contacto confirmados.
- Fotos profesionales adicionales del acceso nocturno, fachada, estacionamiento y detalles de habitación.
- Dominio propio y correo corporativo (`contacto@motelvenus.cl`).


## Datos incorporados
- Teléfono: +56 43 231 3782
- Ubicación: Km 8 Camino a Santa Bárbara, sector Cunibal Oriente, Los Ángeles, Biobío.
- Mapa: enlace y mapa incrustado de Google Maps mediante la ficha de Motel Venus.

## Mapa

El mapa embebido utiliza una búsqueda específica del Motel Los Ángeles de Venus con un nivel de zoom 16, para mostrar el sector inmediato en vez de una vista general de Chile.


## Tarifas vigentes en esta versión
- Jacuzzi VIP: $65.000
- Jacuzzi normal: $55.000
- Normal VIP: $45.000
- Normal: $35.000
- Silla erótica: $36.000
- Cama de agua: $36.000

Estadía de 8 horas, habitaciones para 2 personas.

## V8
- Tarifas corregidas: Silla erótica $36.000 y Cama de agua $36.000.
- Archivos de imagen de tarifas renombrados para evitar caché de versiones anteriores.
