var path = require('path');

module.exports = {
    entry: {
        app: "./assets/scripts/app.js",
        app_backend: "./assets/scripts/app_backend.js",
        admin: "./assets/scripts/admin.js",
        index: "./assets/scripts/index.js",
        destination: "./assets/scripts/destination.js",
        faq: "./assets/scripts/faq.js",
        contact: "./assets/scripts/contact.js",
        activities: "./assets/scripts/activities.js",
        activity: "./assets/scripts/activity.js",
        bucket_list: "./assets/scripts/bucket_list.js",
        MapMarker: "./assets/scripts/ckeditor/MapMarker.js",
        MapMarkerDialog: "./assets/scripts/ckeditor/MapMarkerDialog.js",
        MapPath: "./assets/scripts/ckeditor/MapPath.js",
        MapPathDialog: "./assets/scripts/ckeditor/MapPathDialog.js",

    },
    output: {
        path: path.resolve(__dirname, "./public/static/scripts/"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development',
    // mode: 'production',
};
