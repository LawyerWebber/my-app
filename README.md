# react-router 和 react-router-dom区别
react-router-dom提供了dom事件操作路由，开发中用这一个就可以了，不用都用
安装在生产环境，yarn add react-router-dom，移除yarn remove
https://reactrouter.com/web/guides/quick-start

hash 模式发布项目的时候后台不需要做路由重指向

# node-sass
yarn add sass-loader node-sass -D
新版本安装后改后缀名为.scss 在引入就可以了，不需要去改webpack配置文件
sass 全局变量 sass-resources-loader
scss中所有文件都可以使用的变量和方法，无需单独引用
修改webpack.config.js配置文件，搜这个关键字exclude: sassModuleRegex,
getStyleLoaders().concat({
    loader: 'sass-resources-loader',
    options: {
        resources: [
        // 这里按照你的文件路径填写
        path.resolve(__dirname, './../src/styles/main.scss')
        ]
    }
})
normalize.scss
重置浏览器默认样式
页面中引入@import 别的scss文件后，不加;会报奇怪的错误

# antd 按需加载
安装 yarn add antd
安装 babel-plugin-import -D 
修改配置文件 require.resolve('babel-loader'),
plugins: [
    [
    require.resolve('babel-plugin-named-asset-import'),
    {
        loaderMap: {
        svg: {
            ReactComponent:
            '@svgr/webpack?-svgo,+titleProp,+ref![path]',
        },
        },
    },
    ],
    [ "import", {libraryName: "antd", style: 'css'}  ],
    isEnvDevelopment &&
    shouldUseReactRefresh &&
    require.resolve('react-refresh/babel'),
]
[ "import", {libraryName: "antd", style: 'css'}  ],

# 函数式组件传值
## useContext 父子组件间传值
## useReducer 组件间数据共享，类似于redux
https://www.yuque.com/senkita/reviews/gbipsa#g8Sfu


# 配置环境
http://www.html.cn/create-react-app/docs/adding-custom-environment-variables/
开发，测试，生产（数据真实不能删除）
create-react-app 创建的项目内置环境变量 NODE_ENV，可通过process.NODE_ENV读取当前的环境变量
不同命令对应不同
start，development
test,test
build,production
实际项目开发中上线后也要区分多种环境
build:pro
build:dev
build:test
项目文件夹中新建 .env.dev 等三个文件REACT_APP_ 前缀不能修改，后面可以自己命名