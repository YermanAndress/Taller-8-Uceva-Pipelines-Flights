# UCEVA Pipelines - SkyRoute Flights

Aplicación Angular desarrollada para el laboratorio de **Pipelines** de la
asignatura Arquitectura de Software. Este proyecto implementa **Path Location
Strategy**, por lo que las rutas son convencionales y **no incluyen el carácter
`#`**.

## Vistas

| Vista    | Ruta        | Contenido                                                       |
| -------- | ----------- | --------------------------------------------------------------- |
| Inicio   | `/inicio`   | Presentación, estadísticas y destinos destacados                |
| Vuelos   | `/vuelos`   | Catálogo de vuelos con búsqueda y filtro por estado             |
| Destinos | `/destinos` | Tarjetas de destinos con tarifa de referencia y mejor temporada |

La ruta raíz `/` redirige automáticamente a `/inicio`, y cualquier ruta
desconocida también vuelve a `/inicio`.

## Tecnologías

- Angular 22 con componentes standalone
- TypeScript
- Bootstrap 5 y Bootstrap Icons (CDN)
- Vitest para pruebas unitarias
- Bun como gestor de paquetes
- GitHub Actions para CI/CD
- GitHub Pages para el despliegue

## Estrategia de rutas

La aplicación usa `provideRouter(routes)` sin `withHashLocation()`. Por defecto,
Angular utiliza `PathLocationStrategy`, que produce URLs como:

```text
/inicio
/vuelos
/destinos
```

Para que los enlaces profundos funcionen en GitHub Pages, el workflow copia
`index.html` a `404.html`, de modo que el servidor entregue la aplicación aunque
la ruta no exista como archivo estático.

## Comandos

```bash
# Instalar dependencias
bun install

# Servidor de desarrollo
bun run start

# Pruebas unitarias
bun run test

# Pruebas en modo no interactivo
bun run test -- --watch=false

# Build de producción
bun run build -- --base-href /Taller-8-Uceva-Pipelines-Flights/
```

## Despliegue

El pipeline está definido en `.github/workflows/deploy-github-pages.yml`. En cada
_push_ a la rama `main` se instalan las dependencias con Bun, se ejecutan las
pruebas, se genera el build de producción y se publica automáticamente en GitHub
Pages.

- Repositorio: <https://github.com/YermanAndress/Taller-8-Uceva-Pipelines-Flights>
- Aplicación desplegada: <https://yermanandress.github.io/Taller-8-Uceva-Pipelines-Flights/>

## Convención de commits

El proyecto utiliza **Conventional Commits** (`feat`, `fix`, `docs`, `refactor`,
`chore`, `ci`, entre otros).
