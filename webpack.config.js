// Config for app1 only
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

app1_src_dir = "./app1/src/app1/";
app1_dist_dir = "app1/static/app1/";
module.exports = {
    entry: {
        app: app1_src_dir + "app/js/index.js",
        page1: app1_src_dir + "page1/js/index.js",
        page2: app1_src_dir + "page2/js/index.js",
    },

    output: {
        filename: "[name]/main.js",
        path: path.resolve(__dirname, app1_dist_dir),
    },

    plugins:[new MiniCssExtractPlugin({
        filename: "[name]/style.css"
    })],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};
