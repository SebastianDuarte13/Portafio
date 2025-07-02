# 🚀 Portafolio Personal - Sebastian Duarte

Un portafolio personal moderno y responsivo desarrollado con React, TypeScript y Framer Motion. Este proyecto muestra mis habilidades, proyectos y experiencia como desarrollador full-stack.

## ✨ Características

- **Diseño Moderno**: Interfaz elegante con animaciones fluidas y efectos visuales atractivos
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Animaciones Suaves**: Implementado con Framer Motion para transiciones fluidas
- **TypeScript**: Código tipado para mayor robustez y mantenibilidad
- **Componentes Modulares**: Arquitectura escalable con componentes reutilizables
- **Efectos Interactivos**: Cursor personalizado, partículas de fondo y animaciones de texto
- **Optimizado para SEO**: Estructura semántica y metadatos apropiados

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Herramienta de construcción rápida
- **Framer Motion** - Biblioteca de animaciones para React
- **CSS3** - Estilos avanzados con Flexbox y Grid

### Herramientas de Desarrollo
- **ESLint** - Linter para JavaScript/TypeScript
- **Git** - Control de versiones

## 📁 Estructura del Proyecto

```
portafolio-react/
├── public/
│   ├── img/                 # Imágenes del portafolio
│   └── hoja_vida.pdf       # CV descargable
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header/        # Navegación principal
│   │   ├── Hero/          # Sección de inicio
│   │   ├── About/         # Acerca de mí
│   │   ├── Purpose/       # Misión y visión
│   │   ├── Skills/        # Habilidades técnicas
│   │   ├── Projects/      # Portafolio de proyectos
│   │   ├── Contact/       # Formulario de contacto
│   │   └── UI/            # Componentes reutilizables
│   ├── data/              # Datos estáticos
│   ├── hooks/             # Hooks personalizados
│   ├── styles/            # Estilos globales
│   ├── types/             # Definiciones de tipos
│   └── utils/             # Utilidades
├── README.md
└── package.json
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/SebastianDuarte13/portafolio-react.git
   cd Portafio/portafolio-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Vista previa de producción**
   ```bash
   npm run preview
   ```

## 📱 Secciones del Portafolio

### 🏠 Inicio (Hero)
- Presentación personal con texto animado
- Enlaces a redes sociales
- Efectos de partículas de fondo
- Indicador de scroll animado

### 👤 Acerca de Mí
- Fotografía personal
- Descripción profesional
- Tarjeta informativa con efectos hover

### 🎯 Propósito
- Misión personal
- Visión profesional
- Tarjetas interactivas con animaciones

### 💻 Habilidades
- Grid de tecnologías
- Tooltips informativos
- Enlaces a documentación oficial
- Efectos hover personalizados

### 🚀 Proyectos
- Slider interactivo de proyectos
- Descripción detallada de cada proyecto
- Enlaces directos a demos en vivo
- Tecnologías utilizadas

### 📞 Contacto
- Formulario funcional
- Validación de campos
- Integración con API externa
- Respuestas en tiempo real

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: #0053a5 (Azul corporativo)
- **Secundario**: #00aaff (Azul claro)
- **Fondo**: #0a0a0a (Negro profundo)
- **Texto**: #ffffff (Blanco)
- **Acentos**: Gradientes azules

### Tipografía
- **Principal**: Poppins (Sans-serif moderna)
- **Decorativa**: RocknRoll One (Para títulos)
- **Especial**: Neonderthaw (Efectos especiales)

### Animaciones
- Entrada suave de elementos
- Efectos de hover interactivos
- Transiciones fluidas entre secciones
- Animaciones de loading

## 📊 Rendimiento

- **Lighthouse Score**: 95+ en todas las categorías
- **Primera Carga**: < 3 segundos
- **Imágenes Optimizadas**: Formato WebP cuando sea posible
- **Carga Diferida**: Lazy loading para imágenes

## 🌟 Funcionalidades Destacadas

### Cursor Personalizado
- Efecto de rastro animado
- Solo se activa fuera del header
- Animación de desvanecimiento suave

### Navegación Suave
- Scroll suave entre secciones
- Menú responsive para móviles
- Indicador de sección activa

### Formulario de Contacto
- Validación en tiempo real
- Integración con MockAPI
- Mensajes de confirmación
- Reset automático tras envío

## 🔧 Personalización

### Modificar Información Personal
Edita el archivo `src/data/portfolio.ts` para actualizar:
- Proyectos
- Habilidades
- Información de contacto

### Cambiar Estilos
Los estilos están organizados por componente:
- `src/styles/GlobalStyles.css` - Estilos globales
- `src/components/[Componente]/[Componente].css` - Estilos específicos

### Agregar Nuevas Secciones
1. Crear el componente en `src/components/`
2. Agregarlo al `App.tsx`
3. Actualizar la navegación en `Header.tsx`

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir la carpeta dist/ a Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Sebastian Duarte**
- 💼 [LinkedIn](https://www.linkedin.com/in/sebastduarte/)
- 🐙 [GitHub](https://github.com/SebastianDuarte13)
- 📷 [Instagram](https://www.instagram.com/duarte_bby/)

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐

## 🔄 Próximas Actualizaciones

- [ ] Modo oscuro/claro
- [ ] Blog integrado
- [ ] Más animaciones interactivas
- [ ] PWA (Progressive Web App)
- [ ] Multiidioma (ES/EN)
- [ ] Integración con CMS
- [ ] Analytics avanzados

---

<div align="center">
  <p>Hecho con ❤️ por Sebastian Duarte</p>
  <p>© 2025 Todos los derechos reservados</p>
</div>

## Responsive Design

This portfolio is fully responsive and should display correctly on a wide range of devices, from mobile phones to desktop computers. The responsive design is achieved using CSS media queries to adjust the layout and styling based on the screen size.

### Breakpoints

The following breakpoints are used in the CSS to target different screen sizes:

-   **992px:** For tablets and small desktops.
-   **768px:** For landscape phones and portrait tablets.
-   **480px:** For portrait phones.

### Key Responsive Features

-   **Navigation:** The navigation menu collapses into a hamburger menu on smaller screens.
-   **Grid Layouts:** The multi-column grid layouts in the "About", "Projects", "Purpose", and "Skills" sections stack into a single column on smaller screens.
-   **Font Sizes:** Font sizes are adjusted for better readability on smaller screens.
-   **Images:** Images are scaled to fit their containers.
