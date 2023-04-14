# captain_zw

# Electron Mac 打包报 Error: Exit code: ENOENT. spawn /usr/bin/python ENOENT 解决方法
<!--
1、重新安装 python2 
下载地址：https://www.python.org/ftp/python/2.7.18/python-2.7.18-macosx10.9.pkg 
2、使用 

    which python
找到安装后的 python2 真实位置，我的 Mac 上是得到的真实位置路径是

/Library/Frameworks/Python.framework/Versions/2.7/bin/python

3、打开 dmg.js 文件
/node_modules/dmg-builder/out/dmg.js
 
4、dmg.js文件闪找到
 "/usr/bin/python" 
替换为 
"/Library/Frameworks/Python.framework/Versions/2.7/bin/python"

5. 保存重新运行后即可正常编译出 dmg 安装包

 -->

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### 启动命令
npm run electron:serve

### 打包app
npm run electron:build

### 修改app图标 先安装npm i electron-icon-builder
npm run build-icon

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
