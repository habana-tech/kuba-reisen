// CKEDITOR.plugins.add( 'MapMarker', {
//     icons: 'MapMarker',
//     init: function( editor ) {
//         editor.addCommand( 'insertMapMarker', {
//             exec: function( editor ) {
//                 var now = new Date();
//                 // Insert the timestamp into the document.
//                 editor.insertHtml( 'The <span>current</span> marker <i data-coordenates="xxx,yyy">DATA</i>and time is: <em>' + now.toString() + '</em>' );
//             }
//         });
//         editor.ui.addButton( 'MapMarker', {
//             label: 'Map Marker',
//             command: 'insertMapMarker',
//             toolbar: 'insert'
//         });
//     }
// });

CKEDITOR.plugins.add( 'MapMarker', {
    icons: 'MapMarker',
    init: function( editor ) {
        editor.addCommand( 'MapMarker', new CKEDITOR.dialogCommand( 'MapMarkerDialog', {
            allowedContent: 'span[!data-map,!class]'
        } ) );
        editor.ui.addButton( 'MapMarker', {
            label: 'Insert MapMarker',
            command: 'MapMarker',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add( 'MapMarkerDialog', this.path + 'MapMarkerDialog.js' );
        CKEDITOR.addCss('.MapMarker{background: #f2f8ff; border: 2px dashed #888; display: block; width:100px; height: 25px;}');

    },

    afterInit: function( editor ) {
        var dataProcessor = editor.dataProcessor;
        var dataFilter = dataProcessor && dataProcessor.dataFilter;

        dataFilter.addRules({
            elements: {
                'span': function(element) {
                    console.log(element);
                    if (element.attributes.class == 'MapMarker') {
                        var fakeElement = editor.createFakeParserElement(element, 'MapMarker', 'div', false);
                        return fakeElement;
                    }
                }
            }
        })

    }
});