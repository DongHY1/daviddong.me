---
pubDatetime: 2023-11-11T05:57:57.217Z
title: How to Package React Official Source Code and Debug in Project
postSlug: how-to-build-react-sourcecode
featured: false
tags:
  - react
description: How to build React source code and debug in your Vite React project.
---

## Preliminary Work

First, clone the source code of React and checkout to version 18.2.0

```bash
git clone https://github.com/facebook/react.git
git checkout v18.2.0
```

## Build source code

- run yarn

run yarn build. However, if you build directly, there will be no sourcemap. Therefore, you need to:

- Modify the build.js file, enable sourcemap, and comment out some of the plugins in it.
- Copy the `react.development.js`, `react.development.map.js`, `react-dom.development.js`, and `react-dom.development.map.js` files that are packaged by yarn build.

## Importing the Source Code

- In your own project, import the four files you just packaged.
- Install the vite-plugin-externals plugin and externalize react and react-dom.
- In index.html, use script tags to load the packaged `react.development.js` and `react-dom.development.js`.

## Resources

[Video Version](https://www.youtube.com/watch?v=6M9FCe1rYsY)
[Repo](https://github.com/DongHY1/react-vite-debug-repo)
