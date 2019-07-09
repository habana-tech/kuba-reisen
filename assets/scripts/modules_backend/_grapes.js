import grapesjs from "grapesjs";
import tUIImageEditor from 'grapesjs-tui-image-editor';
//var tui = require('tui-image-editor');

/*
grapesjs.plugins.add('no-devices-selector', function(editor, options) {
  // remove the devices switcher
  editor.getConfig().showDevices = false;
  
/*  // remove the view code button
  var codeButton = editor.Panels.getButton("options", "export-template");
	codeButton.collection.remove(codeButton);

})

*/

var Assetsimages = null;
var am;



/*
var Assetsimages = function() {
            console.log('geting json1')
            fetch(app_js_routing__list_images)
            .then(res => res.json())
            .then((out) => {
                console.log('geting json')
              return out;
            })
            .catch(err => { return ['no-image']});
        };

*/
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
        storeComponents: false,  // Enable/Disable storing of components in JSON format
        storeStyles: false,      // Enable/Disable storing of rules in JSON format
        storeHtml: true,        // Enable/Disable storing of components as HTML string
        storeCss: false,         // Enable/Disable storing of rules as CSS string
    },
    panels: { defaults: [] },
    plugins: [tUIImageEditor],
    pluginsOpts: {
    [tUIImageEditor]: {
        upload: true,
        icons: {
      'menu.normalIcon.path': '/static/svg/icon-d.svg',
      'menu.activeIcon.path': '/static/svg/icon-b.svg',
      'menu.disabledIcon.path': '/static/svg/icon-a.svg',
      'menu.hoverIcon.path': '/static/svg/icon-c.svg',
      'submenu.normalIcon.path': '/static/svg/icon-d.svg',
      'submenu.activeIcon.path': '/static/svg/icon-c.svg',
        },
         script: [
            '/static/scripts/vendors/fabric.min.js',
            '/static/scripts/vendors/tui-code-snippet.min.js',
            '/static/scripts/vendors/tui-color-picker.min.js',
            '/static/scripts/vendors/tui-image-editor.min.js'
          ],

        // In case the script is loaded this style will be loaded too
        style: [


        ],

        height: '90vh' //, width: '90vw' /* options */
    }
    },
    canvas: {
      //  scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'],
        styles: [app_js_routing__styles_css]
    },
     assetManager: {
        assets: Assetsimages,
        autoAdd: 1,
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

// The upload is started
editor.on('asset:upload:start', () => {
    console.log("start upload")
    startAssetsAnimation();
});

// The upload is ended (completed or not)
editor.on('asset:upload:end', () => {
    console.log("end upload")
    stopAssetsAnimation();
    //endAnimation();
});

// Error handling
editor.on('asset:upload:error', (err) => {
    console.log("error on upload")
    //notifyError(err);
    stopAssetsAnimation();
    alert(err.error)
});

// Do something on response
editor.on('asset:upload:response', (response) => {
    console.log("done")
    stopAssetsAnimation();
});

editor.on('modal:open', function (editor) {

    let container = document.querySelector('form.gjs-am-add-asset');
    let btn = document.querySelector('form.gjs-am-add-asset #ckf-popup');
    if(!btn)
    {
        btn = document.createElement('button');
        btn.classList.add('gjs-btn-prim');
        btn.id = 'ckf-popup';
        btn.innerHTML = 'Explore';
        container.appendChild(btn);
    }
    
    btn.addEventListener('click',  function() {
        CKFinder.popup( {
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function( finder ) {
                finder.on( 'files:choose', function( evt ) {
                    var file = evt.data.files.first();
                    var output = document.querySelector( 'div.gjs-field.gjs-am-add-field input' );
                    output.value = file.getUrl();
                } );

                finder.on( 'file:choose:resizedImage', function( evt ) {
                    var output = document.querySelector( 'div.gjs-field.gjs-am-add-field input' );
                    output.value = evt.data.resizedUrl;
                } );
            }
        } );
    });

    
    console.log("modal open");
    }
);

editor.on('load', function()  {
    am = this.attributes.AssetManager;

    let resp = fetch(app_js_routing__list_images)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        am.add(data);
    });



});
/***Add media****/
/*
var am = editor.AssetManager;
var resp = fetch(app_js_routing__list_images)
    .then(function(response){
        var images = response.json();
        am.add(images);
    })
    .then(function(data){
        console.log(data);
    })
*/

function startAssetsAnimation()
{
    var uploader_container = null;
    var editor_container = null;
    let htmlCode =  '<div class="uploading-animation-container">\n' +
        '  <div class="box1"></div>\n' +
        '  <div class="box2"></div>\n' +
        '  <div class="box3"></div>\n' +
        '</div>';
    if(uploader_container = document.querySelector('.gjs-am-file-uploader > form > #gjs-am-title'))
    {
        uploader_container.dataset['initial'] = uploader_container.innerHTML;

        uploader_container.classList.add('uploading');
        uploader_container.innerHTML = htmlCode;
        return;
    }
    if(editor_container = document.querySelector('.tui-image-editor-main-container'))
    {
        var elem = document.createElement('div');
        elem.innerHTML = htmlCode;
        editor_container.appendChild(elem);
        editor_container.classList.add('uploading');
        return;
    }
}


function stopAssetsAnimation()
{
    var uploader_container = null;

    if(uploader_container = document.querySelector('.gjs-am-file-uploader > form > #gjs-am-title'))
    {
        uploader_container.classList.remove('uploading');
        uploader_container.innerHTML = uploader_container.dataset['initial'];
        return;
    }
    if(uploader_container = document.querySelector('.tui-image-editor-main-container'))
    {
        uploader_container.classList.remove('uploading');
        return;
    }


}
