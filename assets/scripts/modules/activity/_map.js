import mapboxgl from 'mapbox-gl';

class ActivityMap {
    constructor(){
        mapboxgl.accessToken = 'pk.eyJ1IjoibDRuZHkiLCJhIjoiY2p3czlqd3JxMDFsZzRhcGVta3V2ZTF5ZCJ9.LtTjS75OzU1QOxcyYgLXTA';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            zoom: 13,
            center: [-81.1739857, 23.191922],
        });

        this.map.scrollZoom.disable();

        this.points = document.querySelectorAll('.description-itinerary__content span[data-map]');

        this.setMarkersAndZoom();
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

            new mapboxgl.Marker()
                .setLngLat(props.center)
                .addTo(this.map);
        });

        lats.sort((a,b) => { return a <= b ? -1 : 1 } );
        logs.sort((a,b) => { return a <= b ? -1 : 1 } );

        let maxCoords = [[lats[0],logs[0]],
            [lats[lats.length-1], logs[logs.length-1] ]];

        this.map.fitBounds(maxCoords);
    }

}

export default ActivityMap;

