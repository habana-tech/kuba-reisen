import grapesjs from "grapesjs"

var images = [];

var editor = grapesjs.init({
    showOffsets: 1,
    noticeOnUnload: 0,
    container: '#sections_container',
    height: '100%',
    fromElement: true,
    storageManager: {
        id: 'gjosue-',             // Prefix identifier that will be used inside storing and loading
        type: 'remote',        // Type of the storage
        autosave: true,         // Store data automatically
        urlStore: 'http://kuba.test/endpoint',
        urlLoad: 'http://kuba.test/endpoint',
        //    params: { _some_token: '....' },
        //   autoload: true,         // Autoload stored data on init
        stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
        //      storeComponents: true,  // Enable/Disable storing of components in JSON format
        storeStyles: false,      // Enable/Disable storing of rules in JSON format
        storeHtml: false,        // Enable/Disable storing of components as HTML string
        storeCss: false,         // Enable/Disable storing of rules as CSS string
    },
    styleManager : {
        sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
        },{
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
        },{
            name: 'Typography',
            open: false,
            buildProps: ['font-size', 'font-weight', 'color', 'text-shadow'],
        }
        ],
    },
});