const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "http://localhost:3000/"
      },
      optimization: {
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({
            // For production this entry point can be loaded dynamically (not hard coded)
            remotes: {
                'vdmfe': "vdmfe@http://localhost:4000/remoteEntry.js",
                'pmmfe': "pmmfe@http://localhost:5000/remoteEntry.js"
            },
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        })
      ],
    };
