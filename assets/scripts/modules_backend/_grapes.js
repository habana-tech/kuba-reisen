import grapesjs from "grapesjs"

var images = [];
/*
grapesjs.plugins.add('no-devices-selector', function(editor, options) {
  // remove the devices switcher
  editor.getConfig().showDevices = false;
  
/*  // remove the view code button
  var codeButton = editor.Panels.getButton("options", "export-template");
	codeButton.collection.remove(codeButton);

})

*/
console.log("ptm");
var editor = grapesjs.init({
    showOffsets: 1,
    noticeOnUnload: 0,
    container: '#sections_container',
    height: '100%',
   // params: { _grape_token: app_js_param__csrf_token},
    fromElement: true,
    showDevices: false,
    storageManager: {
        id: 'grapes_page_content-',             // Prefix identifier that will be used inside storing and loading
        type: 'remote',        // Type of the storage
        autosave: true,         // Store data automatically
        urlStore: app_js_routing__grape_endpoint,
        urlLoad: app_js_routing__grape_endpoint,
            params: {
                _grapejs_editor_token: app_js_param__csrf_token,
                _page_id: app_js_param__page_id
            },
        //   autoload: true,         // Autoload stored data on init
        stepsBeforeSave: 3,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
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
    canvas: {
      //  scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'],
        styles: [app_js_routing__styles_css]
    }
});
/*
const RemoteStorage = editor.StorageManager.get('remote');
RemoteStorage.set('params', {_grape_token: app_js_param__csrf_token})
editor.store();
*/
editor.Panels.addButton
('options',
    [{
        id: 'save-db',
        className: 'fa fa-floppy-o',
        command: 'save-db',
        attributes: {title: 'Save DB'}
    }]
);

// Add the command
editor.Commands.add
('save-db', {
    run: function(editor, sender)
    {
        sender && sender.set('active'); // turn off the button
        editor.store();
    }
});
/*
editor.on('storage:load', function(e) { console.log('Loaded ', e);});
editor.on('storage:store', function(e) { console.log('Stored ', e);});
*/