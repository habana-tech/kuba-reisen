import mapboxgl from 'mapbox-gl';

class ActivityMap {
    constructor(){
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2FydG1hbnVzZXIiLCJhIjoiY2p5aHVyNHB2MDNudzNnbnJiaGVtcWJ2OCJ9.2UPDKnSZRNwNR1ITlZQEAA';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            zoom: 13,
            center: [-81.1739857, 23.191922],
        });

        this.map.scrollZoom.disable();

        this.points = document.querySelectorAll('.description-itinerary__content span[data-map]');
        this.paths = document.querySelectorAll('.description-itinerary__content span[data-path-map]');

        this.setMarkersAndZoom();
        this.events();
    }

    events(){
        this.map.on('load', this.setPathAndZoom.bind(this));
    }

    setMarkersAndZoom(){

        if (this.points.length === 0)
            return;

        let lats = [];
        let logs = [];

        this.points.forEach((point)=>{
            let props = point.getAttribute('data-map');
            console.log(props);
            props = JSON.parse(props);
            console.log(props);

            lats.push(props.center[0]);
            logs.push(props.center[1]);

            if(props.name===''){
                new mapboxgl.Marker()
                    .setLngLat(props.center)
                    .addTo(this.map);
            }
            else {
                new mapboxgl.Popup({closeOnClick: false})
                    .setLngLat(props.center)
                    .setHTML('<h3>'+props.name+'</h3>')
                    .addTo(this.map);
            }


        });

        lats.sort((a,b) => { return a <= b ? -1 : 1 } );
        logs.sort((a,b) => { return a <= b ? -1 : 1 } );

        let maxCoords = [[lats[0],logs[0]],
            [lats[lats.length-1], logs[logs.length-1] ]];

        this.map.fitBounds(maxCoords, {padding: 100});
    }

    setPathAndZoom(){
        if (this.paths.length === 0)
            return;

        this.paths.forEach((path)=>{
            let props = path.getAttribute('data-path-map');
            props = JSON.parse(props);
            let geojson = props.geojson;
            console.log(geojson);

            let coordinates = geojson.features[0].geometry.coordinates;
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
                    'data': geojson
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
    }

}

export default ActivityMap;

