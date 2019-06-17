CKEDITOR.dialog.add( 'MapMarkerDialog', function( editor ) {
    return {
        title: 'MapMarker Properties',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'text',
                        id: 'center',
                        label: 'Map Center Coordinates',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Name field cannot be empty." )
                    },
                    {
                        type: 'text',
                        id: 'zoom',
                        label: 'Zoom Level (1-18)',
                        validate: CKEDITOR.dialog.validate.number("It should be a number" )
                    },
                    {
                        type: 'text',
                        id: 'bearing',
                        label: 'Perspective Angle',
                        validate: CKEDITOR.dialog.validate.number("It should be a number" )
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;


            var elm = editor.document.createElement( 'span' );
            elm.setAttribute( 'data-map_center',dialog.getValueOf( 'tab-basic', 'center' ) );
            elm.setAttribute( 'data-map_zoom',dialog.getValueOf( 'tab-basic', 'zoom' ) );
            elm.setAttribute( 'data-map_bearing',dialog.getValueOf( 'tab-basic', 'bearing' ) );
            elm.setText( "[MAP_MARKER]" );

            editor.insertElement( elm );
        }
    };;
});