import mapboxgl from 'mapbox-gl';

class ActivityMap {
    constructor(){
        mapboxgl.accessToken = 'pk.eyJ1IjoibDRuZHkiLCJhIjoiY2p3czlqd3JxMDFsZzRhcGVta3V2ZTF5ZCJ9.LtTjS75OzU1QOxcyYgLXTA';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            zoom: 9,
            center: [-82.329, 23.094],
        });

        new mapboxgl.Marker()
            .setLngLat([-82.329, 23.094])
            .addTo(this.map);

        this.map.scrollZoom.disable();
    }
}

export default ActivityMap;