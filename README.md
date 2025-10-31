# Sabor & Amor · Landing Experience

Bienvenido a **Sabor & Amor**, una experiencia web enfocada en presentar la propuesta gastronómica de un restaurante premium. El proyecto se encuentra en etapa de landing page y sienta las bases para futuras funcionalidades de reservas, recomendaciones inteligentes y un panel administrativo completo.

> Autor: **Cesar Londoño** · proyectosenevolucion@gmail.com

## Tabla de contenido

1. [Descripción general](#descripción-general)
2. [Características actuales](#características-actuales)
3. [Stack tecnológico](#stack-tecnológico)
4. [Estructura del proyecto](#estructura-del-proyecto)
5. [Guía de inicio rápido](#guía-de-inicio-rápido)
6. [Scripts disponibles](#scripts-disponibles)
7. [Estado y próximos pasos](#estado-y-próximos-pasos)
8. [Contribución](#contribución)
9. [Contacto](#contacto)

## Descripción general

Aplicación **React + TypeScript** construida sobre **Vite**, con estilos gestionados mediante **TailwindCSS** y componentes **shadcn/ui**. La landing comunica identidad visual, menú destacado, testimonios y presencia física del restaurante, preparando el terreno para evolucionar hacia una plataforma completa de reservas y gestión.

## Características actuales

- **Navbar dinámica** con estado sticky y llamada a la acción “Reservar Ahora”.
- **Hero interactivo** con selección de sucursal, número de personas y fecha, listo para conectarse a un motor de reservas.
- **Sección de sucursales** con tarjetas responsive y estilos consistentes en distintos breakpoints.
- **Bloque “Sobre nosotros”** que resume la propuesta de valor y filosofía del restaurante.
- **Carrusel de menú** con autoplay móvil y control manual en escritorio para destacar platos insignia.
- **Testimonios** realzados con branding dorado.
- **Footer informativo** con enlaces clave y redes sociales.

## Stack tecnológico

- **React 19** + **TypeScript 5**
- **Vite 7** como bundler y entorno de desarrollo
- **TailwindCSS 4** y **tailwind-merge** para utilidades de estilo
- **shadcn/ui + Radix UI** para componentes accesibles y personalizables
- **date-fns** para manejo de fechas en el selector de reservas
- **Embla Carousel** para la sección de platos destacados

## Estructura del proyecto

```
src/
├─ auth/
│  └─ Navbar.tsx
├─ components/ui/         # Librería shadcn/ui extendida
├─ landingPage/page/
│  ├─ HomePage.tsx        # Página principal
│  ├─ Hero.tsx            # Hero con formulario preliminar de reservas
│  ├─ Locations.tsx       # Sucursales
│  ├─ About.tsx           # Información del restaurante
│  ├─ MenuCarousel.tsx    # Carrusel de platos
│  ├─ Testimonials.tsx    # Opiniones de clientes
│  ├─ Footer.tsx          # Pie de página
│  └─ NotFound.tsx        # Página 404 (placeholder)
├─ main.tsx               # Bootstrap de React
└─ index.css              # Tokens de diseño (OKLCH)
```

## Guía de inicio rápido

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repo>
   cd saboramor
   ```
2. **Instalar dependencias**
   ```bash
   npm install
   ```
3. **Ejecutar el modo desarrollo**
   ```bash
   npm run dev
   ```
4. Abre tu navegador en `http://localhost:5173`.

## Scripts disponibles

| Comando         | Descripción                                   |
|-----------------|-----------------------------------------------|
| `npm run dev`   | Inicia el servidor de desarrollo (Vite).       |
| `npm run build` | Construye la aplicación para producción.       |
| `npm run preview` | Sirve la build generada para verificación. |
| `npm run lint`  | Ejecuta ESLint con la configuración del proyecto. |

## Estado y próximos pasos

La landing ya comunica la propuesta gastronómica, pero quedan hitos para transformar la plataforma en una solución integral:

1. **Motor de sugerencias inteligentes**: recopilar preferencias del usuario y mostrar recomendaciones objetivas de platos o sucursales.
2. **Activar reservas end-to-end**: conectar el formulario del hero con lógica de disponibilidad, confirmaciones por correo/SMS y panel de seguimiento.
3. **Menú navegable completo**: construir vistas para categorías, filtrado y detalles nutricionales.
4. **Dashboard y panel administrativo**: gestión de mesas, inventario, métricas de ocupación y administración de contenidos.
5. **Backend con NestJS**: implementar API REST/GraphQL con autenticación, servicios de reservas, catálogo y analítica.

Cada hito se integrará con las vistas existentes, priorizando accesibilidad, performance y mantenibilidad.

## Contribución

1. Haz un fork del repositorio.
2. Crea una rama descriptiva: `git checkout -b feature/nueva-funcionalidad`.
3. Envía un pull request describiendo claramente los cambios y captura de pantalla si afecta al UI.

## Contacto

- **Cesar Londoño**
- 📧 proyectosenevolucion@gmail.com

---

_Sabor & Amor · Inspirando momentos memorables a través de la gastronomía._
