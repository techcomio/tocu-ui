# Tổ Cú UI
mã nguồn phần UI website [tocu.vn](http://tocu.vn), tương tác với API [tocu-api](https://github.com/techcomio/tocu-api)

## Tech stack:
- [react](http://facebook.github.io/react/)
- [react-router 1.0.0-beta](https://github.com/rackt/react-router)
- [alt](https://github.com/goatslacker/alt)
- [bootstrap](http://getbootstrap.com)
- [axios](https://github.com/mzabriskie/axios)
- [immutable](https://facebook.github.io/immutable-js)
- [webpack](http://webpack.github.io)
- [babel](https://babeljs.io)

...and more

## Start the app
```
$ npm install
$ [sudo] npm install -g nodemon
$ [sudo] npm install -g babel
$ [sudo] npm install -g webpack
$ [sudo] npm install -g gulp
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
│   │   ├── html.jsx      # Renders the whole HTML document server side (via server/index.js)
│   │   └── index.js      # Send the server-rendered HTML document as response
│   │
│   ├── client            # Client-side code
│   │   └── index.js      # Entry point for the browser: mounts the <Router /> component on document.body.
│   │
│   └── shared            # The root Application component
│       ├── actions       # Alt Actions
│       ├── components    # React components
│       ├── handlers      # Contains components acting as "page" for each route
│       ├── store         # Alt Store
│       ├── Alt.js        # new Alt
│       └── routes.js     # Routes config
│
├── server.js       # Run the express server
│
└── webpack.config.js    # Webpack config for the build task

```
