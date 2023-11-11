---
pubDatetime: 2023-11-11T05:57:57.217Z
title: 如何打包react官方源码并在项目中debug
postSlug: how-to-build-react-sourcecode
featured: false
tags:
  - react
description: how to build react sourcecode and debug in your vite react project.
---

## 前置工作

首先clone react的源码，并checkout到18.2.0这个版本

```bash
git clone https://github.com/facebook/react.git
git checkout v18.2.0
```

## 打包源码

- 运行yarn

成功后，运行yarn build，但是如果直接build，是不会有sourcemap的，因此需要：

- 修改build.js文件，开启sourcemap，并注释掉其中的一些plugin
- 把yarn build 打包出来的 `react.development.js`,`react.development.map.js`,`react-dom.development.js`,`react-dom.development.map.js`复制

## 引入源码

- 在自己的项目中，引入刚刚打包出来的四个文件
- 安装vite-plugin-externals插件，把react和react-dom external掉
- 在index.html中，用script脚本加载打包出来的`react.development.js`和`react-dom.development.js`

## 资源

[视频版](https://www.youtube.com/watch?v=6M9FCe1rYsY)
[repo](https://github.com/DongHY1/react-vite-debug-repo)
