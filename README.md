# react-router 和 react-router-dom区别
react-router-dom提供了dom事件操作路由，开发中用这一个就可以了，不用都用
安装在生产环境，yarn add react-router-dom，移除yarn remove
https://reactrouter.com/web/guides/quick-start

hash 模式发布项目的时候后台不需要做路由重指向

# node-sass
yarn add sass-loader node-sass -D
新版本安装后改后缀名为.scss 在引入就可以了，不需要去改webpack配置文件
sass 全局变量
scss中所有文件都可以使用的变量和方法，无需单独引用
sass-resources-loader
normalize.scss
重置浏览器默认样式