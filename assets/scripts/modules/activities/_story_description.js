import mapboxgl from 'mapbox-gl';

class StoryDescription{

    constructor(){
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2FydG1hbnVzZXIiLCJhIjoiY2p5aHVyNHB2MDNudzNnbnJiaGVtcWJ2OCJ9.2UPDKnSZRNwNR1ITlZQEAA';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [ -81.11051559448242,22.50890956520524],
            zoom: 6
        });
        this.map.scrollZoom.disable();

        this.marker = new mapboxgl.Marker();
        this.pos = 0;

        this.geojson = null;
        this.paths = document.querySelectorAll('.activities__stories__story span[data-path-map]');
        this.previousTime = 0;
        this.events();
    }

    events(){
        this.map.on('load',this.readPaths.bind(this));
    }

    readPaths(){
        if (this.paths.length === 0)
            return;

        this.paths.forEach((path)=>{
            let props = path.getAttribute('data-path-map');
            props = JSON.parse(props);
            this.geojson = props.geojson;
            console.debug(this.geojson);

            let coordinates = this.geojson.features[0].geometry.coordinates;
            console.log(coordinates);

            let lats = [];
            let logs = [];

            coordinates.forEach((coordinate)=> {
                lats.push(coordinate[0]);
                logs.push(coordinate[1]);
            });

            lats.sort((a,b) => { return a <= b ? -1 : 1 } );
            logs.sort((a,b) => { return a <= b ? -1 : 1 } );

            let maxCoordsPath = [[lats[0],logs[0]],
                [lats[lats.length-1], logs[logs.length-1] ]];


            this.map.addLayer({
                'id': 'layer-path',
                'type': 'line',
                'source': {
                    'type': 'geojson',
                    'data': this.geojson
                },
                'layout': {
                    'line-cap': 'round',
                    'line-join': 'round'
                },
                'paint': {
                    'line-color': '#ed6498',
                    'line-width': 5,
                    'line-opacity': .8
                }
            });

            this.map.fitBounds(maxCoordsPath, {padding: 100});

        });

        requestAnimationFrame(this.animateMarker.bind(this));
    }

    animateMarker(timestamp) {

        if (this.previousTime + 1000 > timestamp)
            this.previousTime = timestamp;

        // Update the data to a new position based on the animation timestamp. The
        // divisor in the expression `timestamp / 1000` controls the animation speed.
        this.marker.setLngLat(this.geojson.features[0].geometry.coordinates[this.pos]);

        // Ensure it's added to the map. This is safe to call if it's already added.
        this.marker.addTo(this.map);

        this.pos += 1;

        if (this.pos === this.geojson.features[0].geometry.coordinates.length)
            this.pos = 0;

        // Request the next frame of the animation.
        requestAnimationFrame(this.animateMarker.bind(this));
    }

}

export default StoryDescription;
