# Visión de Arquitectura · Sabor & Amor

Documento interno para planificar la evolución del proyecto hacia una plataforma escalable.

## Panorama actual

- **Tipo de proyecto:** Landing page React 19 + TypeScript sobre Vite 7.
- **UI/UX:** TailwindCSS 4, shadcn/ui y Radix UI, paleta gestionada en `index.css` con tokens OKLCH.
- **Componentes clave ya implementados:**
  - `Navbar` con CTA primaria.
  - `Hero` con formulario preliminar de reservas.
  - `Locations`, `About`, `MenuCarousel`, `Testimonials`, `Footer`.
  - Página `HomePage` que compone los módulos anteriores.
  - `NotFound` básica.
- **Estados parciales:** Reservas sin backend, testimonios y menú destacados con datos mock.

## Mapa propuesto de páginas

| Ruta (planeada) | Descripción | Estado |
|-----------------|-------------|--------|
| `/` | Landing con hero, ubicaciones, testimonios, menú destacado | ✅ Implementada
| `/menu` | Página **Menu Danse** con cada plato, categoría, precio, etiqueta destacada | 🚧 Pendiente
| `/reservas` | Flujo completo de reserva (formulario multi‑paso + resumen) | 🚧 Pendiente
| `/dashboard` | Panel administrativo (roles, métricas, gestión de contenido) | 🗓️ Roadmap
| `/auth/*` | Rutas para autenticación (login, registro, recuperación) | 🗓️ Roadmap

> **Nota:** Al introducir React Router, conviene separar layout público (`LandingLayout`) de futuros layouts protegidos (`DashboardLayout`).

## Arquitectura de carpetas recomendada

```
src/
├─ app/
│  ├─ router/          # Configuración central de rutas (React Router)
│  ├─ providers/       # Contextos globales (tema, auth, query clients)
│  └─ store/           # Estado global (zustand/react-query segun decisión)
├─ features/
│  ├─ menu/            # Página Menu Danse, componentes y hooks propios
│  ├─ reservations/    # Flujo de reservas (formularios, validaciones)
│  ├─ testimonials/    # Lógica para cargar testimonios dinámicos
│  └─ locations/       # Manejo de sucursales y filtrado
├─ pages/              # Entry points de rutas (re-exportan features/layouts)
├─ shared/
│  ├─ components/      # Componentes reutilizables (Botones, Cards extendidos)
│  ├─ hooks/           # Hooks comunes (useBreakpoint, useCurrencyFormatter)
│  ├─ utils/           # Helpers, formateadores, constantes
│  └─ types/           # Tipos globales (MenuItem, ReservationPayload)
└─ assets/             # Imágenes y recursos estáticos
```

### Justificación

- **Separación por feature** facilita escalar sin crear dependencias circulares.
- `shared/` mantiene la biblioteca interna de componentes encima de shadcn/ui.
- `app/router` centraliza rutas, loaders y lazy imports.
- Preparar `app/providers` permite integrar fácilmente React Query, Zustand, i18n, etc.

## Plan para la página "Menu Danse"

1. **Datos:**
   - Definir un esquema `MenuItem` con campos `id`, `name`, `description`, `price`, `category`, `tags`, `isChefChoice`.
   - Cargar datos desde archivo JSON en `src/features/menu/data/menu-items.ts` de forma inicial; conectar a API NestJS cuando esté lista.
2. **UI:**
   - Layout con tabs o filtros por categoría (Entradas, Platos fuertes, Postres, Bebidas).
   - Tarjetas con foto, breve descripción, badges (`Chef`, `Veggie`, `Sin gluten`).
   - Barra lateral/resumen opcional con totales o recomendaciones.
3. **Routing:**
   - Crear `src/pages/MenuPage.tsx` que encapsule `<MenuFeature />`.
   - Añadir ruta en React Router (`/menu`).
   - Implementar lazy loading (`const MenuPage = lazy(() => import("@/pages/MenuPage"));`).
4. **Accesibilidad:**
   - Elementos interactivos con `aria-label`, `aria-pressed` para filtros, navegación con teclado.

## Estrategia de routing

- Integrar **React Router v7+** con arquitectura de layouts:
  - `PublicLayout` para `/` y `/menu`.
  - `AuthLayout` para `/auth/*` y `DashboardLayout` para `/dashboard/*` (futuro).
- Usar `createBrowserRouter` y `RouterProvider` en `main.tsx`.
- Configurar loaders para precargar datos de menú o reservas cuando se disponga del backend.
- Considerar `react-query` o `@tanstack/router` si se requiere data fetching avanzado.

## Funcionalidades futuras prioritarias

1. **Motor de sugerencias objetivas**
   - Analítica basada en preferencias, historial de reservas, ratings.
   - Motor inicial en front con datos locales; migración a NestJS + PostgreSQL.
2. **Reservas end-to-end**
   - Estados del formulario, validaciones (react-hook-form + zod).
   - Integración con servicio de notificaciones (correo/SMS).
   - Vista de confirmación y panel de seguimiento del cliente.
3. **Dashboard administrativo**
   - Gestión de menú, disponibilidad, promociones, testimonios.
   - Métricas (ocupación, ticket promedio) con gráficos.
4. **Backend NestJS**
   - Módulos: `auth`, `menu`, `reservations`, `locations`, `recommendations`.
   - Base de datos SQL (PostgreSQL) con Prisma u ORM elegido.
   - Swagger para documentación de API y Guards para roles.

## Recomendaciones de calidad

- Mantener las reglas de `AGENT.md`: pseudocódigo antes de cambios, código completo y accesible.
- Desarrollar tests unitarios a medida que se introduzcan servicios críticos (e.g., formatters, hooks).
- Automatizar lint + typecheck en CI antes de desplegar.

## Próximos pasos sugeridos

1. Definir dataset inicial de `Menu Danse` y maquetar la página.
2. Introducir React Router con layouts y lazy loading.
3. Refactorizar componentes actuales dentro de `features/` y `shared/`.
4. Especificar contrato de API para NestJS (endpoints de menú y reservas).
5. Prototipar flujo de reservas multi-step en Figma antes de implementarlo.

---

Documento de uso interno. Actualizar conforme avance la arquitectura.
