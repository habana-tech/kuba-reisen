import mapboxgl from 'mapbox-gl';

class SelectPointMap{
    constructor(selector){

        mapboxgl.accessToken = 'pk.eyJ1IjoibDRuZHkiLCJhIjoiY2p3czlqd3JxMDFsZzRhcGVta3V2ZTF5ZCJ9.LtTjS75OzU1QOxcyYgLXTA';
        this.map = new mapboxgl.Map({
            container: selector,
            style: 'mapbox://styles/mapbox/outdoors-v11/?optimize=true',
            center: [-79.756514, 22.028145],
            zoom: 5,
            minZoom:2,
            maxZoom:16,
            pitch: 0,
        });

        this.canvas = this.map.getCanvasContainer();
        this.coordinates = document.querySelector('tbody input[type="text"]');
        this.geojson = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-79.756514, 22.028145]
                }
            }]
        };

        this.mouseMoveHandler = ()=>{};
        this.touchMoveHandler = ()=>{};

        this.events();
    }

    events(){
        this.map.on('load', this.prepareAndMovePoint.bind(this));
    }

    onMove(e) {
        let coords = e.lngLat;

        // Set a UI indicator for dragging.
        this.canvas.style.setProperty('cursor', 'grabbing', 'important');

        // Update the Point feature in `geojson` coordinates
        // and call setData to the source layer `point` on it.
        this.geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
        this.map.getSource('point').setData(this.geojson);
    }

    onUp(e) {
        let coords = e.lngLat;

        // Print the coordinates of where the point had
        // finished being dragged to on the map.
        this.coordinates.value = coords.lng + ',' + coords.lat;

        this.canvas.style.setProperty('cursor', 'default', 'important');

        // Unbind mouse/touch events
        this.map.off('mousemove', this.mouseMoveHandler);
        this.map.off('touchmove', this.touchMoveHandler);
    }

    prepareAndMovePoint() {
        // Add a single point to the map
        this.map.addSource('point', {
            "type": "geojson",
            "data": this.geojson
        });

        this.map.addLayer({
            "id": "point",
            "type": "circle",
            "source": "point",
            "paint": {
                "circle-radius": 10,
                "circle-color": "#3887be"
            }
        });

        // When the cursor enters a feature in the point layer, prepare for dragging.
        this.map.on('mouseenter', 'point', () => {
            this.map.setPaintProperty('point', 'circle-color', '#d05b6f');
            this.canvas.style.setProperty('cursor', 'move', 'important');
        });

        this.map.on('mouseleave', 'point', () => {
            this.map.setPaintProperty('point', 'circle-color', '#3887be');
            this.canvas.style.setProperty('cursor', '', 'important');
        });

        this.map.on('mousedown', 'point', (e) => {
            // Prevent the default map drag behavior.
            e.preventDefault();

            this.mouseMoveHandler = this.onMove.bind(this);

            this.canvas.style.setProperty('cursor', 'grab', 'important');
            this.map.on('mousemove', this.mouseMoveHandler);
            this.map.once('mouseup', this.onUp.bind(this));
        });

        this.map.on('touchstart', 'point', (e) => {
            if (e.points.length !== 1) return;

            // Prevent the default map drag behavior.
            e.preventDefault();

            this.touchMoveHandler = this.onMove.bind(this);
            this.map.on('touchmove', this.touchMoveHandler);
            this.map.once('touchend', this.onUp.bind(this));
        });
    }
}

CKEDITOR.dialog.add( 'MapMarkerDialog', function( editor ) {
    return {
        title: 'MapMarker Properties',
        minHeight: 20,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'text',
                        id: 'center',
                        label: 'Point Coordinates',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Pointer coordinates cannot be empty." ),
                        // Called by the main setupContent method call on dialog initialization.
                        setup: function( element ) {
                            let container = document.querySelector('.cke_dialog_contents tbody');
                            let newMap = document.createElement('div');
                            newMap.setAttribute('id', 'selectMap');
                            newMap.setAttribute('style', 'height: 50vh; width:100%');
                            newMap.setAttribute('id', 'selectMap');
                            container.insertBefore(newMap, container.firstChild);
                            new SelectPointMap('selectMap');

                            // var prevValue = JSON.parse(element.getAttribute("data-map"));
                            // if (prevValue.center.isArray)
                            //     this.setValue(prevValue.center.join(', '));
                            // else this.setValue(prevValue.center);
                        }
                    },
                    {
                        type: 'text',
                        id: 'zoom',
                        label: 'Zoom Level (1-18)',
                        validate: CKEDITOR.dialog.validate.number("It should be a number" ),
                        setup: function( element ) {
                            // var prevValue = JSON.parse(element.getAttribute( "data-map" ));
                            // this.setValue(prevValue.zoom);
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

            let dialog = this;

            let elm = editor.document.createElement('span');

            let name = "\"name\":";
            if (dialog.getValueOf('tab-basic', 'name')==='')
                name+="\"\"";
            else
                name+=dialog.getValueOf('tab-basic', 'name');

            let bearing = "\"bearing\":";
            if (dialog.getValueOf('tab-basic', 'bearing')==='')
                bearing+=0;
            else
                bearing+=dialog.getValueOf('tab-basic', 'bearing');


            let center = "\"center\":["+dialog.getValueOf('tab-basic', 'center')+']';
            let zoom = "\"zoom\":"+dialog.getValueOf( 'tab-basic', 'zoom' );

            let data_map = [center, zoom, bearing, name];
            data_map = '{'+data_map.toString()+'}';

            elm.setAttribute('data-map', data_map);
            elm.setAttribute( 'class','MapMarker');
            elm.setText( "[MM]");
            editor.insertElement( elm );
        },
        // Invoked when the dialog is loaded.
        onShow: function() {

            // Get the selection from the editor.
         //   let selection = editor.getSelection();

            // Get the element at the start of the selection.
       //     let element = selection.getStartElement();

            // Get the <abbr> element closest to the selection, if it exists.
            // if ( element ){
            //     element = element.getAscendant( 'img', true )
            //
            // }

          //  element = editor.restoreRealElement(element);

            // // Create a new <abbr> element if it does not exist.
            // if ( !element || element.getName() != 'span' ) {
            //     element = editor.document.createElement( 'span' );
            //
            //     // Flag the insertion mode for later use.
            //     this.insertMode = true;
            // }
            // else
            //     this.insertMode = false;

            // Store the reference to the <abbr> element in an internal property, for later use.
        //    this.element = element;

            // Invoke the setup methods of all dialog window elements, so they can load the element attributes.
            // if ( !this.insertMode )
            //     this.setupContent( this.element['$']);
            this.setupContent( this.element);
        }
    };
});