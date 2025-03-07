# parcel-experiment
学习创建npm包，并用parcel进行构建

1. 打开终端Git Bash
2. 创建并进入目录parcel-experiment
<pre>$ cd /d/desktop/Chuang_GIS/项目结题/test/parcel-experiment</pre>
3. 启动git
<pre>$ git init</pre>
4. 初始化一个npm包
<pre>$ npm init</pre>
<pre>
npm将根据回答创建一个默认的package.json文件
{
  "name": "parcel-experiment",
  "version": "1.0.0",
  "description": "test npm package",
  "main": "index.js",    (npm包的入口javascript文件)
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "duanjian",
  "license": "ISC"
}
</pre>
5. 本地安装parcel1(parcel2不好用)
<pre>$ npm install --save-dev parcel-bundler</pre>

6. 创建src文件夹，进入；
7. 创建文件夹images(图像)、scripts(javascript)、styles(css)
8. 创建文件夹后，开始创建源文件(注意更改npm包的入口文件，src/scripts/main.js)

9. 创建本地服务器，进行测试
<pre>
$ npx parcel src/index.html
</pre>

10. 测试完成后，对代码进行打包Bundle(捆绑包)，并进行摇树优化构建
<pre>$ npx parcel build src/index.html --experimental-scope-hoisting</pre>

11. 提交到远程仓库
<pre>
$ git add .
$ git commit -m ""
</pre>


12. 上传到远程仓库(通过ssh，事先在github上创建仓库parcel-experiment)
<pre>
$ git remote add origin git@github.com:jianage/parcel-experiment.git
$ git push -u origin main
</pre>
