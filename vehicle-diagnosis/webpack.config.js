const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "http://localhost:4000/" 
      },
      optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({
            name: "vdmfe",
            library: { type: "var", name: "vdmfe" },
            filename: "remoteEntry.js",
            exposes: {
                './Module': './src/app/vehicle-diagnosis/vehicle-diagnosis.module.ts',
            },        
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        })
      ],
    };
