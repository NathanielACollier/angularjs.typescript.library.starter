const path = require('path');
const webpack = require('webpack');

const moduleName = "TestStarterLib";

var LIB_DIR = path.resolve(path.join(__dirname, "lib" ));
var BUILD_DIR = path.resolve(path.join(__dirname, `dist/${moduleName}`));

// paypal has a reusable library starter here: https://github.com/krakenjs/grumbler/blob/master/webpack.config.js
//  - I made some changes based on it...

module.exports = {
    entry: './app/app.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: "app/tsconfig.json"
                },
                exclude: [/node_modules/]
            }
        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
    output: {
        filename: `${moduleName}.js`,
        path: LIB_DIR,
        libraryTarget: 'umd'
    },
    plugins:[
        new DtsBundlePlugin()
    ],
    externals: ["angular", "tslib"]
};


// from: https://medium.com/@vladimirtolstikov/how-to-merge-d-ts-typings-with-dts-bundle-and-webpack-e8903d699576
function DtsBundlePlugin(){}
DtsBundlePlugin.prototype.apply = function(compiler){
    compiler.plugin('done', function(){
        var dts = require('dts-bundle');

        dts.bundle({
            name: moduleName,
            //main: path.join(BUILD_DIR, "/**/*.d.ts"),
            main: `dist/${moduleName}/**/*.d.ts`,
            out: path.join(LIB_DIR, `${moduleName}.d.ts`),
            removeSource: false, // if we change a file then dts-bundle needs the old copies of all the others since we are in watch mode (So don't remove them)
            outputAsModuleFolder: true
        });
    }); // end of compiler.plugin done event
}

