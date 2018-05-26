## 项目结构

```bash
.
├── client
│   ├── common
│   ├── package-lock.json
│   ├── package.json
│   ├── react
│   └── vue
├── dist
│   ├── react.bundle.js
│   ├── react.bundle.js.map
│   ├── vue.bundle.js
│   └── vue.bundle.js.map
├── docs
│   ├── developer.md
│   ├── environment.md
│   └── struct.md
├── flow-typed
│   └── npm
├── nodemon.json
├── package-lock.json
├── package.json
├── server
│   ├── index.babel.js
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── webpack.config.js
├── tasks
│   └── init.sh
└── views
    ├── index.ejs
    ├── react.ejs
    └── vue.ejs
```

`server`定义对应的是node服务，IM+HTTP，为了使用`flowtype`语法，采用`webpack`打包的方式，`index.babel.js`是源文件，打包后生成了`index.js`（因为`node`模块的`require`路径问题，所以打包前后的文件会在同一层级）。  
`client`则是前端相关代码，分为`react`和`vue`版本，而`common`里边则是两者通用的代码。  
`views`与`dist`为`webpack`生成的文件。   