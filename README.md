# gshop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



### 准备

```javascript
项目描述
1 web App spa
2 商家, 商品,购物车,用户
3 vue全家桶+ES6+Webpjack等前端最新最热的技术
4 采用 模块化.组件化.工程化的模式开发
```


### 技术选型

```javascript
单页应用必有路由
日期格式化的库:moment / date-fns
前后台交互: mock数据:mockjs
预编译器的特点:结构化编程
```

### 一些概念

```javascript
开发的第一步:拆分路由
  插槽 slot 通讯的是标签
  一级路由组件的区域从底部到最上面
  区分是不是父子路由
    主要看显示区域 是不是嵌套的展示区域
No.2接口就是API   
  语法
  前后台交互的接口
  接口文件
     描述项目中的文件
        url 方式 参数 响应 
  重要概念
     真实接口和接口文档描述的是不是一致
     测试一下  
       想一想是什么问题
          - 有可能接口文档写错了
          - 后台的接口改了
          - 极端代码改错了            

前后台分离
   一个应用分为前台和后台开发 
   数据在前端渲染
   后端只提供数据



```

### 准备

```javascript
npm i -g vue-cli  //全局安装
vue init webpack name

config
   index.js 里可以
      代理 端口号 启动browser
.babelrc.babel
   预设(也是个包) 
      多个插件的集合包
      为什么会有不同预设包产生
        规范的预设<--草案<--社区 
   插件 
     它不能做 插件能做某一个特定功能的事情
     插件光下载不配置是起不来效果的
 
eslintignore
   代码检查
   *.js
   *.vue
eslintrc


编码测试 
   在内存中打包
   启动服务器运行打包文件
   修改了某个模块代码能够自动打包并自动刷新浏览器
    开启 sockmap
打包发布

字体
   下载
   引入类名 iconfont(变化的) 

api
  组件
  路由



```



### 来吧 

```javascript
client
 api
 components
    FootGuide

 common (公共资源)
   stylus
     mixins.stylus
     (混合的意义:代码复用)
 filters (过滤器)
 mock
 pages (放路由组件)
 store
 router
    index.js

组件:功能界面的所有集合
.gitkeep 空文件夹被git管理
------------>----------->
 ↓ 

 main.js
引入第三方模块没提示就不要写了
new Vue ({
	el:'#app'
	components:{	
	/*局部注册 相当于标签名*/            /**/
	App
	},
	template:'<App/>' /*里面的是空的话可用自闭合标签*/
	})

 ↓

npm i  stylus stylus-loader --save-dev
```

### 目录设计 

```javascript
src
	|-- components------------非路由组件文件夹
		|-- FooterGuide---------------底部组件文件夹
			|-- FooterGuide.vue--------底部组件vue
      |-- pages-----------------路由组件文件夹
		|-- Msite---------------首页组件文件夹
			|-- Msite.vue--------首页组件vue
		|-- Search----------------搜索组件文件夹
			|-- Search.vue---------搜索组件vue
		|-- Order--------------订单组件文件夹
			|-- Order.vue-------订单组件vue
		|-- Profile--------------个人组件文件夹
			|-- Profile.vue-------个人组件vue
	|-- App.vue---------------应用根组件vue
	|-- main.js---------------应用入口js
```

### 路由相关

```javascript
npm i vue-router --save
 1个构造函数
 2个对象 $router $route(当前路由)
 3个组件标签
   router-link 
   router-vue
   keep-alive
通过路由器映射路由

 引入 2 vue相关
 引入 n 个 路由

 { //默认显示的路由
 	path:"/",
 	rediret

 }

 ↓
 在mian里注册router
 ↓
 <router-view/> //显示当前路由组件
    路由组件要注册成路由
    一般组件写成标签
    root标签就是vue实例 
  局部注册只能在当前组件中使用     

 ↓
 //省略url中 '#/''
 router index  ↓
 mode:'history' //在生产环境会有问题


```

### git管理项目

```javascript
1.创建本地仓库 
    创建.gitgnore这个文件
    写配置文件
       .idea
    三个区域
       工作区 暂存区(索引区) 版本区   
2.创建远程仓库
3.本地仓库-->远程仓库
4.推送
5.拉取
6.新同事来了-克隆

在webStorm配置git

Chrome插件 Octotree
```

### footeGuide

```javascript

动态class  
   什么时候用对象
   类名确定

:class="{on:false}"


数据代理
   vm    //???
:class={on:$route.path==='/miste'}
@click ="goTo(miste)"

声明式的路由跳转
   通过点击
编程式的路由跳转
   通过js

事件回调函数
methods:{
	goTo(path){
		//编程式路由导航
		this.$route.replace(path)
	}
}


```

### 静态路由导航	

```javascript
图片路径容易搞错




```


### slot

```javascript
Header
可能有 可能没有


<slot name="left">
数据来源
  自身的数据
  外部可变数据
  计算属性数据
props:{
title:String
}

 ↓
 main.js
定义成全局组件更好用

Vue.comp //????

```

### 

```javascript
元数据
meta加在route


在使用之前要测试接口

异步
  ajax
  vuex
  component
  发一个请求 再把数据拿回来 在页面中展现


ajax.js
能发送ajax 请求的函数
包装axios
返回值是promise对象


先写维度 再写经度

每个接口函数的返回值是promise

//协议名
域名
端口号

config/index
//代理表格
proxyTable:{}





```
### 

```javascript

```
