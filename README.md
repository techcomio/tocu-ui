# Tổ Cú UI
mã nguồn phần UI website [tocu.vn](http://tocu.vn), tương tác với API [tocu-api](https://github.com/techcomio/tocu-api)

## Tech stack:
- [react](http://facebook.github.io/react/)
- [react-router](https://github.com/rackt/react-router)
- [flummox](http://acdlite.github.io/flummox)
- [bootstrap](http://getbootstrap.com)
- [superagent](https://github.com/visionmedia/superagent)
- [immutable](https://facebook.github.io/immutable-js)
- [webpack](http://webpack.github.io)
- [babel](https://babeljs.io)

...and more

## Start the app
```
$ npm install
$ npm install -g nodemon
$ npm install -g webpack
$ npm start
```

## App structure

```bash
.
├── public        # Container for the static files. Cache-busted on build.
│
├── src     			# React's components container
│   ├── assets
│   │   ├── css           # Container for .css files
│   │   ├── img           # Container for images files
│   │   └── scss          # Container for .scss files
│   │
│   ├── server            # Server-side code
│   │   ├── html.jsx      # Renders the whole HTML document server side (via server/index.es6)
│   │   └── index.es6     # Send the server-rendered HTML document as response
│   │
│   ├── client            # Client-side code
│   │   └── index.es6     # Entry point for the browser: mounts the <App /> component on document.body.
│   │
│   └── shared            # The root Application component
│       ├── actions       # flummox Actions
│       ├── components    # React components
│       ├── handlers      # Contains components acting as "page" for each route
│       ├── store         # flummox Store
│       ├── Flux.es6      # flummox Flux
│       └── routes.es6    # Routes config
│
├── server.js       # Run the express server
│
└── webpack.config.js     # Webpack config for the build task

```
