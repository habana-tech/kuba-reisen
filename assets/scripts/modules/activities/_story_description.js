import mapboxgl from 'mapbox-gl';

class StoryDescription{

    constructor()
    {

        mapboxgl.accessToken = 'pk.eyJ1IjoiY2FydG1hbnVzZXIiLCJhIjoiY2p5aHVyNHB2MDNudzNnbnJiaGVtcWJ2OCJ9.2UPDKnSZRNwNR1ITlZQEAA';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [ -81.11051559448242,22.50890956520524],
            zoom: 6
        });
        this.map.scrollZoom.disable();
        this.map.addControl(new mapboxgl.NavigationControl());

        this.marker = new mapboxgl.Marker();
        this.pos = 0;

        this.storiesSelectors = document.querySelectorAll('.activities__stories__items li');
        this.story = document.querySelector('.activities__stories__story');
        this.paths = this.story.querySelectorAll('span[data-path-map]');

        this.markers = this.story.querySelectorAll('span[data-map]');

        this.geojsons = [];
        this.layers = [];
        this.maxViewCoords = [];
        this.previousTime = 0;
        this.events();
    }

    events()
    {
        this.map.on('load',this.readPaths.bind(this));

        this.storiesSelectors.forEach((storySelector) => {
            storySelector.addEventListener('click', this.changeActiveStory.bind(this));
        });



            window.onscroll = () => this.iterateOverMarksAndPaths();

    }

    iterateOverMarksAndPaths()
    {
        this.paths.forEach((path, index) => {
            if (this.isElementOnScreen(path)) {
                console.log(path)
                // let bound = path.getBoundingClientRect();
                this.setActivePath(index);
            }
        });

        //TODO: ugly solution
        this.markers.forEach((marker) => {
            if (this.isElementOnScreen(marker)) {
                console.log(marker)
                let bound = marker.getBoundingClientRect();
                // console.log(bound);
                // console.log(bound.top > 0  && bound.top < window.innerHeight / 2);
                let props = marker.getAttribute('data-map');
                props = JSON.parse(props);

                this.map.flyTo({center: props.center, zoom: props.zoom});
            }
        });
    }


    readPaths()
    {
        if (this.paths.length === 0) {
            return;
        }

        this.paths.forEach((path, index) => {

            let props = path.getAttribute('data-path-map');
            props = JSON.parse(props);
            this.geojsons.push(props.geojson);

            let coordinates = [];
            props.geojson.features.forEach((feature) => {
                if (feature.geometry.type === 'LineString') {
                    feature.geometry.coordinates.forEach((coordinate) => {
                        coordinates.push(coordinate);
                    })
                }
            });

            let lats = [];
            let logs = [];

            coordinates.forEach((coordinate) => {
                lats.push(coordinate[0]);
                logs.push(coordinate[1]);
            });

            lats.sort((a,b) => { return a <= b ? -1 : 1 });
            logs.sort((a,b) => { return a <= b ? -1 : 1 });

            let maxCoords = [[lats[0],logs[0]],
                [lats[lats.length - 1], logs[logs.length - 1] ]];
            this.maxViewCoords.push(maxCoords);

            this.layers.push({
                'id': 'layer-path_' + index,
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
                    'line-color': '#62ab03',
                    'line-width': 4,
                    'line-opacity': .85
                }
            });
        });

    }

    animateMarker(timestamp)
    {

        if (this.previousTime + 41 < timestamp) {
            this.previousTime = timestamp;

            this.marker.setLngLat(this.geojson.features[0].geometry.coordinates[this.pos]);

            this.marker.addTo(this.map);

            this.pos += 1;

            if (this.pos === this.geojson.features[0].geometry.coordinates.length) {
                this.pos = 0;
            }
        }

        requestAnimationFrame(this.animateMarker.bind(this));
    }

    changeActiveStory(e)
    {
        let storySelector = e.target;

        console.log('Story changed')
        let storyId = storySelector.getAttribute('data-story');
        let associateStory = document.querySelector(storyId);
        this.paths = associateStory.querySelectorAll('span[data-path-map]');
        this.markers = associateStory.querySelectorAll('span[data-map]');
        this.removeLayers([...Array(12).keys()]);
        this.readPaths();
        // this.events();
    }

    removeLayers(indexs)
    {
        indexs.forEach((index) => {
            let previousLayerId = 'layer-path_' + index;
            let previousMapLayer = this.map.getLayer(previousLayerId);
            let previousMapSource = this.map.getSource(previousLayerId);
            if (typeof previousMapLayer !== 'undefined') {
                this.map.removeLayer(previousLayerId);
            }
            if (typeof previousMapSource !== 'undefined') {
                this.map.removeSource(previousLayerId);
            }
        });
    }

    setActivePath(index)
    {

        this.removeLayers([index - 1, index + 1]);

        let currentLayerId = 'layer-path_' + index;
        let currentMapLayer = this.map.getLayer(currentLayerId);

        if (typeof currentMapLayer === 'undefined') {
            this.map.addLayer(this.layers[index]);
            this.map.fitBounds(this.maxViewCoords[index], {padding: 20});
        }

    }

    isElementOnScreen(element)
    {
        console.log('current marker: ', element)
        while (element.parentNode.classList.contains('activities__stories__story__item__content') === false) {
            element = element.parentNode;
        }
        console.log('parent node of current marker', element)
        let bounds = element.getBoundingClientRect();
        return bounds.top > 0  && bounds.top < window.innerHeight / 2;
    }
}

export default StoryDescription;
