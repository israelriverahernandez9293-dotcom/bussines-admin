# ConversoAI Admin Frontend

Frontend administrativo construido con React 18 + Vite, organizado por capas para facilitar integración con backend.

## Arquitectura

- `src/app`: composición raíz (providers + router)
- `src/layouts`: layouts compartidos
- `src/components`: componentes UI reutilizables
- `src/pages`: vistas por módulo de negocio
- `src/services`: servicios HTTP y contratos para backend
- `src/config`: configuración central (rutas, etc.)
- `src/styles`: estilos globales y utilitarios

## Variables de entorno

Copia `.env.example` a `.env` y ajusta:

```bash
VITE_API_BASE_URL=http://localhost:3000/api
```

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```
