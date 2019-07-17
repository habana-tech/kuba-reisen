import mapboxgl from 'mapbox-gl';

class BucketList{
    constructor(){
        mapboxgl.accessToken = 'pk.eyJ1IjoibDRuZHkiLCJhIjoiY2p3czlqd3JxMDFsZzRhcGVta3V2ZTF5ZCJ9.LtTjS75OzU1QOxcyYgLXTA';
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

    setActiveChapter(point, props) {

        if (point === this.activePoint)
            return;

        if (this.activeMarker !== null)
            this.activeMarker.remove();
        this.activeMarker = new mapboxgl.Marker()
            .setLngLat(props.center)
            .addTo(this.map);

        this.points[point].classList.add('active');
        this.points[this.activePoint].classList.remove('active');

        this.map.flyTo(props);

        this.activePoint = point;
    }

    isElementOnScreen(element) {
        let bounds = element.getBoundingClientRect();
        return bounds.top > 0  && bounds.top < window.innerHeight / 2;
    }
}

export default BucketList;
