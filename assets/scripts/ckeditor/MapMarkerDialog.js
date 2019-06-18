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
                        validate: CKEDITOR.dialog.validate.notEmpty( "Name field cannot be empty." ),
                        // Called by the main setupContent method call on dialog initialization.
                        // setup: function( element ) {
                        //     //console.log("setup centeer");
                        //     //console.log( element.getAttribute("data-map"));
                        //     // this.setValue( element.getAttribute("data-map") );
                        //     // console.log(element.getAttribute( "data-map" ));
                        //     var prevValue = JSON.parse(element.getAttribute( "data-map" ));
                        //
                        //     this.setValue(prevValue.center);
                        // },
                        //
                        // // Called by the main commitContent method call on dialog confirmation.
                        // commit: function( element ) {
                        //     var prevValue = JSON.parse(element.getAttribute( "data-map" ));
                        //     prevValue.center = this.getValue();
                        //     element.setAttribute( "data-map", JSON.stringify(prevValue) );
                        //     console.log( element.getAttribute("data-map"));
                        // }
                    },
                    {
                        type: 'text',
                        id: 'name',
                        label: 'Marker Label<br/><small>Optional. It will be shown in tooltips over the map.</small>'
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
            //
            // // Create a new <abbr> element.
            // var elm = this.element;
            //
            // // Invoke the commit methods of all dialog window elements, so the <abbr> element gets modified.
            // this.commitContent( elm );
            //
            // // Finally, if in insert mode, insert the element into the editor at the caret position.
            // if ( this.insertMode )
            //     editor.insertElement( elm );

            var dialog = this;

            var elm = editor.document.createElement( 'span' );


            let name = '"name":"'+dialog.getValueOf('tab-basic', 'name')+'"';
            let center = "\"center\":["+dialog.getValueOf('tab-basic', 'center')+']';
            let zoom = "\"zoom\":"+dialog.getValueOf( 'tab-basic', 'zoom' );
            let bearing = "\"bearing\":"+dialog.getValueOf('tab-basic', 'bearing');
            let data_map = [center, zoom, bearing, name];
            data_map = '{'+data_map.toString()+'}';

            elm.setAttribute('data-map', data_map);
            elm.setAttribute( 'class','MapMarker');
            elm.setText( "[MAP_MARKER]");
            console.log(elm);
            editor.insertElement( elm );
        },
        // // Invoked when the dialog is loaded.
        // onShow: function() {
        //
        //     // Get the selection from the editor.
        //     var selection = editor.getSelection();
        //
        //     // Get the element at the start of the selection.
        //     var element = selection.getStartElement();
        //
        //     // Get the <abbr> element closest to the selection, if it exists.
        //     if ( element ){
        //         element = element.getAscendant( 'img', true )
        //
        //     }
        //
        //     console.log(element);
        //
        //     element = editor.restoreRealElement(element);
        //     console.log('restoring')
        //     console.log(element)
        //
        //     // Create a new <abbr> element if it does not exist.
        //     if ( !element || element.getName() != 'span' ) {
        //         element = editor.document.createElement( 'span' );
        //
        //         // Flag the insertion mode for later use.
        //         this.insertMode = true;
        //     }
        //     else
        //         this.insertMode = false;
        //
        //     // Store the reference to the <abbr> element in an internal property, for later use.
        //     this.element = element;
        //
        //     console.log("insert mode" + this.insertMode);
        //     console.log(element);
        //     // Invoke the setup methods of all dialog window elements, so they can load the element attributes.
        //     if ( !this.insertMode )
        //         this.setupContent( this.element['$']);
        // }
    };
});