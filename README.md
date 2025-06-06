# Portafolio Personal - Angular + PrimeNG

Este portafolio personal está desarrollado con Angular y PrimeNG para mostrar información profesional, proyectos, habilidades y datos de contacto.

## Tecnologías

- Angular
- PrimeNG
- PrimeIcons
- TypeScript
- (Opcional) TailwindCSS

## Instalación

```bash
git clone https://github.com/tu-usuario/portfolio-angular.git
cd portfolio-angular
npm install
ng serve
```

Abre `http://localhost:4200` en tu navegador.

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── app.module.ts
├── assets/
├── styles.css
```

## Configuración PrimeNG

Asegúrate de tener las versiones correctas:

```bash
npm install primeng@^16.0.0 primeicons@^6.0.0
```

Agrega en `angular.json`:

```json
"styles": [
  "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/primeicons/primeicons.css",
  "src/styles.css"
]
```

## Autor

- **Juan felipe** - [@Philipao0122](https://github.com/Philipao0122)

