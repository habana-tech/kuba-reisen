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
        editor.addCommand( 'MapMarker', new CKEDITOR.dialogCommand( 'MapMarkerDialog' ) );
        editor.ui.addButton( 'MapMarker', {
            label: 'Insert MapMarker',
            command: 'MapMarker',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add( 'MapMarkerDialog', this.path + 'MapMarkerDialog.js' );
    }
});