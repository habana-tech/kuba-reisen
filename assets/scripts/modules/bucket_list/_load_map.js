import mapboxgl from 'mapbox-gl';

class BucketList{
    constructor(){
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2FydG1hbnVzZXIiLCJhIjoiY2p5aHVyNHB2MDNudzNnbnJiaGVtcWJ2OCJ9.2UPDKnSZRNwNR1ITlZQEAA';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11/?optimize=true',
            center: [-79.756514, 22.028145],
            zoom: 5,
            minZoom:4,
            maxZoom:16,
            pitch: 0,
        });

        this.map.scrollZoom.disable();
        this.points = document.querySelectorAll('.bucket-list__items__features h3');
        this.pointsData = document.querySelectorAll('.bucket-list__items__features span.MapMarker');

        this.activeMarker = null;
        this.activeCircle = null;
        this.activePoint = 0;
        this.events();

    }


    events(){
        this.points[0].classList.add('active');

        // On every scroll event, check which element is on screen
        window.onscroll = () => {

            for(let i = 0; i < this.points.length; i++){

                let element = this.points[i];
                if (this.isElementOnScreen(element)) {
                    let props = this.pointsData[i].getAttribute('data-map');
                    props = JSON.parse(props);
                    this.setActiveChapter(i, props);
                    break;
                }
            }

        };


    }

    addCircle(center, id){

            let geojson = {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": center
                    },
                    "properties": {
                        "modelId": 1,
                    },
                }]
            };

            this.map.addLayer({
                "id": "circles"+id,
                "source": {
                    'type': 'geojson',
                    'data': geojson
                },
                "type": "circle",
                "paint": {
                    "circle-radius": 40,
                    "circle-color": "#007cbf",
                    "circle-opacity": 0.45,
                    "circle-stroke-width": 0,
                },
            });
    }

    setActiveChapter(point, props) {
        if (point === this.activePoint)
            return;

        // if (this.activeMarker !== null)
        //     this.activeMarker.remove();

        if (this.activeCircle !== null)
            this.map.removeLayer(this.activeCircle);

        // this.activeMarker = new mapboxgl.Marker()
        //     .setLngLat(props.center)
        //     .addTo(this.map);

        this.addCircle(props.center, props.center.toString());


        this.points[point].classList.add('active');
        this.points[this.activePoint].classList.remove('active');
        this.map.flyTo(props);

        this.activePoint = point;
        this.activeCircle =  "circles"+props.center.toString();
    }

    isElementOnScreen(element) {
        let bounds = element.getBoundingClientRect();
        return bounds.top > 0  && bounds.top < window.innerHeight / 2;
    }
}

export default BucketList;
