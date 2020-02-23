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
                        type: 'text',
                        id: 'name',
                        label: 'Name of this Path',
                        setup: function( element ) {
                            let prevValue = '';
                            try {
                                prevValue = JSON.parse(element.getAttribute('data-path-map'));
                            } catch (e) {}

                            this.setValue(prevValue.name);
                        }
                    },
                    {
                        type: 'textarea',
                        id: 'geojson',
                        label: 'GeoJson Content',
                        validate: CKEDITOR.dialog.validate.notEmpty('geoJson cannot be empty'),
                        // Called by the main setupContent method call on dialog initialization.
                        setup: function( element ) {
                            let prevValue = '';
                            try {
                                prevValue = JSON.parse(element.getAttribute('data-path-map'));
                                prevValue = JSON.stringify(prevValue.geojson, undefined, 4);
                            }catch (e) {}

                            this.setValue(prevValue);
                        }
                    },
                ]
            }
        ],
        onChange: function(){
            console.log('i change the content');
        },
        onOk: function() {
            // Create a new <span> element.

            let dialog = this;
            let elm = editor.document.createElement('span');

            let name = "\"name\":";
            if (dialog.getValueOf('tab-MapPath', 'name')==='')
                name += "\"\"";
            else
                name += "\""+dialog.getValueOf('tab-MapPath', 'name')+"\"";

            let pathGeoJson = "\"geojson\":";
            if (dialog.getValueOf('tab-MapPath', 'geojson')==='')
                pathGeoJson += "\"empty\"";
            else
                pathGeoJson += dialog.getValueOf('tab-MapPath', 'geojson');


            let data_path_map = [name, pathGeoJson];
            data_path_map = '{'+data_path_map.toString()+'}';

            elm.setAttribute('data-path-map', data_path_map);
            console.info("test ", data_path_map);
            elm.setAttribute( 'class','MapPath');
            elm.setText( "[MP]");
            editor.insertElement( elm );
        },
        // Invoked when the dialog is loaded.
        onShow: function() {
           //  this.move(this.getPosition().x, 0); // Top center
            // Get the selection from the editor.
           let selection = editor.getSelection();
           //
            // Get the element at the start of the selection.
           let element = selection.getStartElement();
            element = editor.restoreRealElement(element);

            // Create a new <span> element if it does not exist.
            if ( !element || element.getName() != 'span' ) {

                element = editor.document.createElement( 'span' );
                let name = "\"name\":";
                let pathGeoJson = "\"geojson\":";

                let data_path_map = [name, pathGeoJson];
                data_path_map = '{'+data_path_map.toString()+'}';

                element.setAttribute('data-path-map', data_path_map);
                // Flag the insertion mode for later use.
                this.insertMode = true;
            }
            else
                this.insertMode = false;

            // Store the reference to the <span> element in an internal property, for later use.
            this.element = element;

            //Invoke the setup methods of all dialog window elements, so they can load the element attributes.
            this.setupContent(this.element['$']);
        }
    };
});