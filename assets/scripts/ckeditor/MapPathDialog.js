import mapboxgl from 'mapbox-gl';

CKEDITOR.dialog.add( 'MapPathDialog', function( editor ) {
    return {
        title: 'MapPath Properties',
        minHeight: 20,
        contents: [
            {
                id: 'tab-MapPath',
                label: 'geoJSon',
                elements: [
                    {
                        type: 'textarea',
                        id: 'geojson',
                        label: 'geoJson content',
                        validate: CKEDITOR.dialog.validate.notEmpty( "geoJson cannot be empty." ),
                        // Called by the main setupContent method call on dialog initialization.
                        setup: function( element ) {

                        }
                    },
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

            // let dialog = this;
            //
            // let elm = editor.document.createElement('span');
            //
            // let name = "\"name\":";
            // if (dialog.getValueOf('tab-basic', 'name')==='')
            //     name+="\"\"";
            // else
            //     name+="\""+dialog.getValueOf('tab-basic', 'name')+"\"";
            //
            // let centerZoom = dialog.getValueOf('tab-basic', 'center_zoom').split(';');
            // let center = "\"center\":["+centerZoom[0]+']';
            // let zoom = "\"zoom\":"+centerZoom[1];
            //
            // let data_map = [center, zoom, name];
            // data_map = '{'+data_map.toString()+'}';
            //
            // elm.setAttribute('data-map', data_map);
            // elm.setAttribute( 'class','MapPath');
            // elm.setText( "[MM]");
            // editor.insertElement( elm );
        },
        // Invoked when the dialog is loaded.
        onShow: function() {
           //  this.move(this.getPosition().x, 0); // Top center
           //  // Get the selection from the editor.
           // let selection = editor.getSelection();
           //
           //  // Get the element at the start of the selection.
           // let element = selection.getStartElement();
           //
           //  // Get the <abbr> element closest to the selection, if it exists.
           //  // if ( element ){
           //  //     element = element.getAscendant( 'img', true )
           //  //
           //  // }
           //
           //  element = editor.restoreRealElement(element);
           //
           //  // Create a new <abbr> element if it does not exist.
           //  if ( !element || element.getName() != 'span' ) {
           //
           //      element = editor.document.createElement( 'span' );
           //      let center = "\"center\":[-79.756514, 22.028145]";
           //      let zoom = "\"zoom\":5";
           //
           //      let data_map = [center, zoom];
           //      data_map = '{'+data_map.toString()+'}';
           //
           //      element.setAttribute('data-map', data_map);
           //      // Flag the insertion mode for later use.
           //      this.insertMode = true;
           //  }
           //  else
           //      this.insertMode = false;
           //
           //  // Store the reference to the <abbr> element in an internal property, for later use.
           // this.element = element;

            // Invoke the setup methods of all dialog window elements, so they can load the element attributes.
            // this.setupContent(this.element['$']);
            this.setupContent(null);
        }
    };
});