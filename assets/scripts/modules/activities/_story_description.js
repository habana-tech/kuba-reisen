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

        this.paths = document.querySelectorAll('.activities__stories__story span[data-path-map]');
        this.geojsons = [];
        this.layers = [];
        this.maxViewCoords = [];
        this.previousTime = 0;
        this.events();
    }

    events(){
        this.map.on('load',this.readPaths.bind(this));

        window.onscroll = () => {
            this.paths.forEach((path, index)=>{
                if (this.isElementOnScreen(path)) {
                    this.setActivePath(index);
                }
            })
        };
    }

    readPaths(){
        if (this.paths.length === 0)
            return;

        this.paths.forEach((path, index)=>{

            let props = path.getAttribute('data-path-map');
            props = JSON.parse(props);
            this.geojsons.push(props.geojson);

            let coordinates = [];
            props.geojson.features.forEach((feature)=>{
                if (feature.geometry.type==='LineString'){
                    feature.geometry.coordinates.forEach((coordinate)=>{
                        coordinates.push(coordinate);
                    })
                }
            })

            let lats = [];
            let logs = [];

            coordinates.forEach((coordinate)=> {
                lats.push(coordinate[0]);
                logs.push(coordinate[1]);
            });

            lats.sort((a,b) => { return a <= b ? -1 : 1 } );
            logs.sort((a,b) => { return a <= b ? -1 : 1 } );

            let maxCoords = [[lats[0],logs[0]],
                [lats[lats.length-1], logs[logs.length-1] ]];
            this.maxViewCoords.push(maxCoords);

            this.layers.push({
                'id': 'layer-path_'+index,
                'type': 'line',
                'source': {
                    'type': 'geojson',
                    'data': props.geojson
                },
                'layout': {
                    'line-cap': 'round',
                    'line-join': 'round'
                },
                'paint': {
                    'line-color': '#14a1e6',
                    'line-width': 4,
                    'line-opacity': .95
                }
            });
        });

    }

    animateMarker(timestamp) {

        if (this.previousTime + 41 < timestamp){
            this.previousTime = timestamp;

            this.marker.setLngLat(this.geojson.features[0].geometry.coordinates[this.pos]);

            this.marker.addTo(this.map);

            this.pos += 1;

            if (this.pos === this.geojson.features[0].geometry.coordinates.length)
                this.pos = 0;
        }

        requestAnimationFrame(this.animateMarker.bind(this));
    }

    setActivePath(index){

        let previousLayersId = ['layer-path_'+(index-1), 'layer-path_'+(index+1)];
        previousLayersId.forEach((previousLayerId)=>{
            let previousMapLayer = this.map.getLayer(previousLayerId);
            let previousMapSource = this.map.getSource(previousLayerId);
            if(typeof previousMapLayer !== 'undefined')
                this.map.removeLayer(previousLayerId);
            if(typeof previousMapSource !== 'undefined')
                this.map.removeSource(previousLayerId);
        });

        let currentLayerId = 'layer-path_'+index;
        let currentMapLayer = this.map.getLayer(currentLayerId);

        if(typeof currentMapLayer === 'undefined') {
            this.map.addLayer(this.layers[index]);
            this.map.fitBounds(this.maxViewCoords[index], {padding: 20});
        }

        // this.map.addLayer({
        //     'id': 'layer-path',
        //     'type': 'line',
        //     'source': {
        //         'type': 'geojson',
        //         'data': this.geojson
        //     },
        //     'layout': {
        //         'line-cap': 'round',
        //         'line-join': 'round'
        //     },
        //     'paint': {
        //         'line-color': '#ed6498',
        //         'line-width': 5,
        //         'line-opacity': .8
        //     }
        // });
        // this.map.fitBounds(maxCoordsPath, {padding: 100});
        // requestAnimationFrame(this.animateMarker.bind(this));
    }

    isElementOnScreen(element) {
        let bounds = element.getBoundingClientRect();
        return bounds.top > 0  && bounds.top < window.innerHeight / 2;
    }
}

export default StoryDescription;
