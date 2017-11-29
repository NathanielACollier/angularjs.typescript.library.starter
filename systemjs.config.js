/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 * Original from: https://github.com/angular/quickstart/blob/master/src/systemjs.config.js
 */
(function (global) {

    // custom loader to cache bust
    // see: https://github.com/systemjs/systemjs/issues/1616
    System.registry.set("ecark-cache-buster-loader",
        System.newModule({
            locate: function(load){
                var buildText = Date.now().toString(36);
                return load.address + "?build=" + buildText;
            }
        }));

    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            testApp: 'dist/testWeb', // app is within dist folder when it gets compiled
            "EcarkUtility": 'lib/EcarkUtility.js', // library with angular module is here
            'angular':        'npm:angular/angular.js',
            'angular-route':  'npm:angular-route/angular-route.js',
            "tslib":"npm:tslib/tslib.js"
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            testApp: {
                main: './testAngularApp'
              },
            app: {
                main: './app'
            }
        }, meta: {
            "angular":{
                "format": "global",
                "exports": "angular"
            },
            "dist/*":{
                loader: "ecark-cache-buster-loader"
            }
        }
    });
})(this);