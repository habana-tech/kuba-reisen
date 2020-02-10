import mapboxgl from 'mapbox-gl';
import { getBoundingBox } from '../global/_utils';

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
            props = JSON.parse(props);

            lats.push(props.center[0]);
            logs.push(props.center[1]);

            if(props.name === ''){
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

        let maxCoords = getBoundingBox(lats, logs);

        this.map.fitBounds(maxCoords, {padding: 100});
    }

    setPathAndZoom(){
        if (this.paths.length === 0)
            return;

        this.paths.forEach((path)=>{
            let props = path.getAttribute('data-path-map');
            props = JSON.parse(props);
            let geojson = props.geojson;

            let coordinates = geojson.features[0].geometry.coordinates;

            let lats = [];
            let logs = [];

            coordinates.forEach((coordinate)=> {
                lats.push(coordinate[0]);
                logs.push(coordinate[1]);
            });

            let maxCoordsPath = getBoundingBox(lats, logs);


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

            this.map.fitBounds(maxCoordsPath, { padding: 50 });

        });
    }

}

class ActivityMapAnimate{

    constructor(){
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2FydG1hbnVzZXIiLCJhIjoiY2p5aHVyNHB2MDNudzNnbnJiaGVtcWJ2OCJ9.2UPDKnSZRNwNR1ITlZQEAA';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [ -81.11051559448242, 22.50890956520524],
            zoom: 5
        });

        this.geojson = {
            type: 'LineString',
            coordinates: [
                        [
                            -84.825439453125,
                            21.861498734372567
                        ],
                        [
                            -84.649658203125,
                            21.963424936844223
                        ],
                        [
                            -84.26513671875,
                            21.9328547363353
                        ],
                        [
                            -84.13330078125,
                            22.11617714721062
                        ],
                        [
                            -84.078369140625,
                            22.329752304376473
                        ],
                        [
                            -83.8916015625,
                            22.49225722008518
                        ],
                        [
                            -83.748779296875,
                            22.6038688428957
                        ],
                        [
                            -83.551025390625,
                            22.735656852206496
                        ],
                        [
                            -83.353271484375,
                            22.836945920943855
                        ],
                        [
                            -83.199462890625,
                            22.907803451058392
                        ],
                        [
                            -83.08959960937499,
                            22.948276856880895
                        ],
                        [
                            -82.9248046875,
                            22.958393318086348
                        ],
                        [
                            -82.705078125,
                            22.998851594142913
                        ],
                        [
                            -82.44140625,
                            23.039297747769726
                        ],
                        [
                            -82.298583984375,
                            23.120153621695614
                        ],
                        [
                            -82.12280273437499,
                            23.140359987886118
                        ],
                        [
                            -81.990966796875,
                            23.140359987886118
                        ],
                        [
                            -81.88110351562499,
                            23.120153621695614
                        ],
                        [
                            -81.7822265625,
                            23.02918734674459
                        ],
                        [
                            -81.73828125,
                            22.948276856880895
                        ],
                        [
                            -81.67236328125,
                            22.857194700969636
                        ],
                        [
                            -81.6064453125,
                            22.735656852206496
                        ],
                        [
                            -81.58447265624999,
                            22.553147478403194
                        ],
                        [
                            -81.573486328125,
                            22.411028521558706
                        ],
                        [
                            -81.4306640625,
                            22.30942584120019
                        ],
                        [
                            -81.309814453125,
                            22.28909641872304
                        ],
                        [
                            -81.0791015625,
                            22.350075806124867
                        ],
                        [
                            -80.947265625,
                            22.350075806124867
                        ],
                        [
                            -80.870361328125,
                            22.339914425562032
                        ],
                        [
                            -80.8154296875,
                            22.31958944283391
                        ],
                        [
                            -80.70556640625,
                            22.28909641872304
                        ],
                        [
                            -80.595703125,
                            22.25859674097572
                        ],
                        [
                            -80.48583984375,
                            22.19757745335104
                        ],
                        [
                            -80.2880859375,
                            22.09581971780769
                        ],
                        [
                            -80.22216796875,
                            22.075459351546858
                        ],
                        [
                            -80.1123046875,
                            22.04491330024569
                        ],
                        [
                            -79.95849609375,
                            22.085639901650328
                        ],
                        [
                            -79.7607421875,
                            22.268764039073968
                        ],
                        [
                            -79.530029296875,
                            22.411028521558706
                        ],
                        [
                            -79.376220703125,
                            22.421184710331858
                        ],
                        [
                            -79.12353515625,
                            22.329752304376473
                        ],
                        [
                            -78.94775390625,
                            22.370396344320053
                        ],
                        [
                            -78.75,
                            22.49225722008518
                        ],
                        [
                            -78.651123046875,
                            22.553147478403194
                        ],
                        [
                            -78.55224609374999,
                            22.51255695405145
                        ],
                        [
                            -78.3984375,
                            22.50240745949775
                        ],
                        [
                            -78.25561523437499,
                            22.43134015636061
                        ],
                        [
                            -78.145751953125,
                            22.36023644579937
                        ],
                        [
                            -78.02490234375,
                            22.27893059841188
                        ],
                        [
                            -77.882080078125,
                            22.156883186860703
                        ],
                        [
                            -77.80517578125,
                            22.06527806776582
                        ],
                        [
                            -77.607421875,
                            21.90227796666864
                        ],
                        [
                            -77.49755859375,
                            21.841104749065032
                        ],
                        [
                            -77.376708984375,
                            21.739091217718574
                        ],
                        [
                            -77.255859375,
                            21.647217065387817
                        ],
                        [
                            -77.10205078124999,
                            21.565502029745332
                        ],
                        [
                            -77.01416015625,
                            21.422389905231366
                        ],
                        [
                            -76.9482421875,
                            21.289374355860424
                        ],
                        [
                            -76.80541992187499,
                            21.22794190505815
                        ],
                        [
                            -76.70654296875,
                            20.899871347076424
                        ],
                        [
                            -76.673583984375,
                            20.622502259344817
                        ],
                        [
                            -76.541748046875,
                            20.49906428341304
                        ],
                        [
                            -76.4208984375,
                            20.354927584117682
                        ],
                        [
                            -76.190185546875,
                            20.29311344754411
                        ],
                        [
                            -75.9814453125,
                            20.2209657795223
                        ],
                        [
                            -75.860595703125,
                            20.117839630491634
                        ],
                        [
                            -75.6298828125,
                            20.066251024326302
                        ],
                        [
                            -75.3662109375,
                            20.066251024326302
                        ],
                        [
                            -75.05859375,
                            20.117839630491634
                        ],
                        [
                            -74.81689453125,
                            20.179723502765153
                        ],
                        [
                            -74.46533203125,
                            20.24158281954221
                        ],
                        [
                            -74.20166015624999,
                            20.262197124246534
                        ]
                    ]
        };

        this.marker = new mapboxgl.Marker()
            .setLngLat([ -81.11051559448242, 22.50890956520524]);
        this.step = 0;

        this.events();
    }

    events(){
        this.map.on('load', this.init.bind(this));
    }

    init(){
        // this.marker.addTo(this.map);
        // this.geoJson(this.geojson).addTo(this.map);
        this.tick();
        // while (this.step < this.geojson.coordinates.length)
        //     setTimeout(this.tick, 100);
    }

    tick() {

        this.marker.setLngLat(this.geojson.coordinates[this.step])
            .addTo(this.map);

        this.step++;
        setTimeout(this.tick.bind(this), 1000);
    }

}

export {ActivityMapAnimate, ActivityMap};

