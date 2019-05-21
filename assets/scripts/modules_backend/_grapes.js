import grapesjs from "grapesjs";
import tUIImageEditor from 'grapesjs-tui-image-editor';
//var tui = require('tui-image-editor');

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
    container: '#grapes-editable',
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
        stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
        //      storeComponents: true,  // Enable/Disable storing of components in JSON format
        storeStyles: false,      // Enable/Disable storing of rules in JSON format
        storeHtml: false,        // Enable/Disable storing of components as HTML string
        storeCss: false,         // Enable/Disable storing of rules as CSS string
    },
    panels: { defaults: [] },
    plugins: [tUIImageEditor],
    pluginsOpts: {
    [tUIImageEditor]: {
        upload: true,
        icons: {
      'menu.normalIcon.path': `../static/svg/icon-d.svg`,
      'menu.activeIcon.path': `../static/svg/icon-b.svg`,
      'menu.disabledIcon.path': `../static/svg/icon-a.svg`,
      'menu.hoverIcon.path': `../static/svg/icon-c.svg`,
      'submenu.normalIcon.path': `../static/svg/icon-d.svg`,
      'submenu.activeIcon.path': `../static/svg/icon-c.svg`,
        },
         script: [
            'static/scripts/vendors/fabric.min.js',
            'static/scripts/vendors/tui-code-snippet.min.js',
            'static/scripts/vendors/tui-color-picker.min.js',
            'static/scripts/vendors/tui-image-editor.min.js'
          ],

        // In case the script is loaded this style will be loaded too
        style: [


        ],

        height: '90vh', width: '90vw' /* options */
    }
    },
    canvas: {
      //  scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'],
        styles: [app_js_routing__styles_css]
    },
     assetManager: {
    // Upload endpoint, set `false` to disable upload, default `false`
    upload: app_js_routing__grape_endpoint_upload,
    params: {
                _grapejs_editor_token: app_js_param__csrf_token,
                _page_id: app_js_param__page_id
            },

    
  }
});
/*
const RemoteStorage = editor.StorageManager.get('remote');
RemoteStorage.set('params', {_grape_token: app_js_param__csrf_token})
editor.store();
*/
/*
editor.Panels.addButton
('options',
    [{
        id: 'save-db',
        className: 'fa fa-floppy-o',
        command: 'save-db',
        attributes: {title: 'Save DB'}
    }]
);

 */

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
