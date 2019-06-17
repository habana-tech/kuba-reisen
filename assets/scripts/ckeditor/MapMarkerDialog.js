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
                        label: 'Map Center Coordinates <br/><small>example: -83.5334399, 22.8793054</small>',
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

            let center = "\"center\":["+dialog.getValueOf('tab-basic', 'center')+']';
            let zoom = "\"zoom\":"+dialog.getValueOf( 'tab-basic', 'zoom' );
            let bearing = "\"bearing\":"+dialog.getValueOf('tab-basic', 'bearing');
            let data_map = [center, zoom, bearing];
            data_map = '{'+data_map.toString()+'}';

            elm.setAttribute('data-map', data_map);
            elm.setAttribute( 'class','MapMarker');
            elm.setText( "[MAP_MARKER]");
            console.log(elm);
            editor.insertElement( elm );
        }
    };
});