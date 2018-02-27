var path = require('path')//vue内置模块.因为有些配置必须是绝对路径，导入该模块进行处理
var HtmlWebpackPlugin = require('html-webpack-plugin')//webpack中所有的插件都得导入才能使用

module.exports = {//导出webpack工具运行时所需的配置对象

    entry: './src/main.js',    // 入口文件配置

    // 输出文件配置
    output: {
        // 输出的路径，webpack2起就规定必须是绝对路径
        path: path.join(__dirname, 'dist'),
        // 静态资源在服务器上运行时的访问路径，可以直接http://localhost:8080/dist/bundle.js访问到服务器中的bundle.js文件
        // publicPath: '/dist',
        filename: 'bundle.js'  // 输出文件名字
    },

    module: {//解析文件种类
        rules: [
            // 配置的是用来解析.css文件的loader(style-loader和css-loader)
            {
                // 1.0 用正则匹配当前访问的文件的后缀名是  .css
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //webpack底层调用这些包的顺序是从右到左
            },
            {
                test: /\.less$/,//解析less
                // use: ['style-loader', 'css-loader','less-loader']//和下面的方式两种都可以
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(png|jpg|gif|eot|svg|ttf|woff)/,//解析图片字体用的，以后可能需要修改该配置，用来支持更多文件类型
                use: [{
                    loader: 'url-loader',
                    options: {
                        // limit参数表示，如果图片大于50b的时候，就是路径形式，如果小于50b，就把图片变成base64格式
                        limit: 50000
                    }
                }]
            },
            {
                test: /\.js$/,
                // Webpack2建议尽量避免exclude，更倾向于使用include
                // exclude: /(node_modules)/, // node_modules下面的.js文件会被排除
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader'
                    // options里面的东西可以放到.babelrc文件中去
                    // options: {
                    //     presets: ['env']
                    // }
                }
            },
            {
                test: /\.vue$/,//配置解析vue
                loader: 'vue-loader'
            },
            {
                test:/\.js$/,//解析es6等新语法
                exclude:/node_modules/,
                loader:'babel-loader'
            }

        ]
    },
    plugins: [//解析html
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            // title: '购物商城'
        })
    ]
}