var Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/static/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build/')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */


    .addEntry('app', './assets/scripts/app.js')
    .addStyleEntry('loading', './assets/styles/loading.scss')
    .addStyleEntry('login', './assets/styles/modules/_login.scss')
    .addEntry('index', './assets/scripts/index.js')
    .addEntry('destination', './assets/scripts/destination.js')
    .addEntry('faq', './assets/scripts/faq.js')
    .addEntry('contact', './assets/scripts/contact.js')
    .addEntry('activities', './assets/scripts/activities.js')
    .addEntry('activity', './assets/scripts/activity.js')
    .addEntry('bucket_list', './assets/scripts/bucket_list.js')
    .addEntry('about_us', './assets/scripts/about_us.js')
    .addEntry('travel_info', './assets/scripts/travel_info.js')
    .addEntry('good_to_know', './assets/scripts/good_to_know.js')
    .addEntry('tours', './assets/scripts/tours.js')
    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })

    // enables Sass/SCSS support
    .enableSassLoader((options) => {}, {
        resolveUrlLoaderOptions: {
            removeCR: true
        }
    })

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // Enable Vue loader
    //.enableVueLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/admin.js')
;

const firstConfig = Encore.getWebpackConfig();
firstConfig.name = 'firstConfig';

// reset Encore to build the second config
Encore.reset();


Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/static/ckeditor_plugins/')
    // public path used by the web server to access the output path
    .setPublicPath('/static/ckeditor_plugins')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */


    .addEntry('MapPathDialog', './assets/scripts/ckeditor/MapPathDialog.js')
    .addEntry('MapMarkerDialog', './assets/scripts/ckeditor/MapMarkerDialog.js')
    .addEntry('MapMarker', './assets/scripts/ckeditor/MapMarker.js')
    .addEntry('MapPath', './assets/scripts/ckeditor/MapPath.js')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    // .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    // .enableSingleRuntimeChunk()
    .disableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })

    // enables Sass/SCSS support
    .enableSassLoader((options) => {}, {
        resolveUrlLoaderOptions: {
            removeCR: true
        }
    })

// uncomment if you use TypeScript
//.enableTypeScriptLoader()

// Enable Vue loader
//.enableVueLoader()

// uncomment to get integrity="..." attributes on your script & link tags
// requires WebpackEncoreBundle 1.4 or higher
//.enableIntegrityHashes(Encore.isProduction())

// uncomment if you're having problems with a jQuery plugin
//.autoProvidejQuery()

// uncomment if you use API Platform Admin (composer req api-admin)
//.enableReactPreset()
//.addEntry('admin', './assets/js/admin.js')
;


// build the second configuration
const secondConfig = Encore.getWebpackConfig();

// Set a unique name for the config (needed later!)
secondConfig.name = 'secondConfig';

// export the final configuration as an array of multiple configurations
module.exports = [firstConfig, secondConfig];
