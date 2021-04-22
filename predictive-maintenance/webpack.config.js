const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "http://localhost:5000/",
        uniqueName: "predictive-maintenance"
      },
      optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({          
            name: "pmmfe",
            library: { type: "var", name: "pmmfe" },
            filename: "remoteEntry.js",
            exposes: {
                './Module': './src/app/predictive-maintenance/predictive-maintenance.module.ts',
            },        
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        })
      ]
    };
