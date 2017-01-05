Cube Summation Challenge
===================
Esta es la implementación de la solución al problema de Cube Summation

- __[Demo](http://develop.convenienceselect.com:3000/)__ - Sitio para pruebas

----------
Estructura
-------------
```
.
├── app
│   ├── controllers
│   │   └── cube.controller.js
│   ├── models
│   │   └── cell.js
│   ├── services
│   │   └── cube.service.js
│   └── views
│       ├── error.nunjucks
│       ├── index.nunjucks
│       └── layout.nunjucks
├── app.js
├── bower.json
├── config
│   ├── config.js
│   └── express.js
├── package.json
├── public
│   ├── components
│   ├── css
│   │   └── style.css
│   ├── img
│   └── js
└── test
    └── cube.service.spec.js
```

Descripción
-------------

La implementación se encuentra en el directorio app y esta separado en sus respectivas capas.

**Modelo - app/models/cell.js**: Representación del modelo que se va a persistir y sobre el cual se va a operar.

**Controlador - app/controllers/cube.controller.js**: Atiende a los eventos o peticiones del usuario e invoca al servicio correspondiente.

**Servicio - app/services/cube.service.js**: Contiene la lógica del negocio, ejecuta las rutinas necesarias y se encarga de invocar la persistencia.

**Vista - app/views/.nunjucks**: Son los templates que se construyen como la interfase de usuario.
