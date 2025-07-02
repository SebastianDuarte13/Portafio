# 🚀 Guía de Instalación Rápida

## Requisitos Previos
- Node.js 18 o superior
- npm o yarn
- Git

## Instalación

1. **Clonar e instalar**
```bash
cd portafolio-react
npm install
```

2. **Ejecutar en desarrollo**
```bash
npm run dev
```

3. **Construir para producción**
```bash
npm run build
```

## Estructura Completada

✅ **Componentes principales:**
- Header (navegación responsiva)
- Hero (sección de inicio con partículas)
- About (acerca de mí)
- Purpose (misión y visión)
- Skills (habilidades técnicas)
- Projects (portafolio de proyectos)
- Contact (formulario funcional)
- Footer (pie de página)

✅ **Componentes UI:**
- ParticlesBackground (partículas animadas)
- AnimatedText (texto animado)
- SocialLinks (enlaces sociales)
- Loading (pantalla de carga)

✅ **Hooks personalizados:**
- useCursorEffect (efecto de cursor)
- useScroll (detección de scroll)

✅ **Utilidades:**
- Funciones helper
- Validaciones
- Animaciones

## Características Implementadas

### 🎨 Diseño y UX
- Diseño moderno y responsivo
- Animaciones fluidas con Framer Motion
- Partículas de fondo interactivas
- Cursor personalizado
- Pantalla de carga animada

### 🔧 Funcionalidad
- Navegación suave entre secciones
- Formulario de contacto funcional
- Slider de proyectos interactivo
- Tooltips informativos
- Enlaces externos

### 📱 Responsividad
- Diseño mobile-first
- Menú hamburguesa para móviles
- Adaptable a todas las pantallas
- Optimizado para touch

### ♿ Accesibilidad
- Navegación por teclado
- Texto alternativo para imágenes
- Contraste de colores apropiado
- Soporte para reducción de movimiento

## Próximos Pasos

1. **Personalización de datos:**
   - Editar `src/data/portfolio.ts` con tu información
   - Reemplazar imágenes en `public/img/`
   - Actualizar CV en `public/hoja_vida.pdf`

2. **Configuración del formulario:**
   - Configurar MockAPI o tu servicio preferido
   - Actualizar endpoint en `Contact.tsx`

3. **Despliegue:**
   - Vercel: `vercel --prod`
   - Netlify: subir carpeta `dist/`
   - GitHub Pages: configurar GitHub Actions

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Construcción
npm run build

# Vista previa
npm run preview

# Linting
npm run lint

# Instalación limpia
rm -rf node_modules package-lock.json && npm install
```

## Tecnologías Utilizadas

- **React 19** + **TypeScript**
- **Vite** (herramienta de construcción)
- **Framer Motion** (animaciones)
- **CSS3** (estilos avanzados)
- **MockAPI** (backend simulado)

---

🎉 **¡Proyecto completado y listo para personalizar!**
