module.exports = {
    pwa: {
        name: "frozensea-recipe",
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "src/registerServiceWorker.js"
        }
    }
}