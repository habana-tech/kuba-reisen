import mapboxgl from 'mapbox-gl';

class ActivityMap {
    constructor(){
        mapboxgl.accessToken = 'pk.eyJ1IjoibDRuZHkiLCJhIjoiY2p3czlqd3JxMDFsZzRhcGVta3V2ZTF5ZCJ9.LtTjS75OzU1QOxcyYgLXTA';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            zoom: 11,
            center: [-81.1739857, 23.191922],
        });

        new mapboxgl.Marker()
            .setLngLat([-81.1739857, 23.191922])
            .addTo(this.map);

        this.map.scrollZoom.disable();
    }
}

export default ActivityMap;