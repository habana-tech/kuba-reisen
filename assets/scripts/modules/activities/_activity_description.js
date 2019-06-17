import mapboxgl from 'mapbox-gl';

class ActivityDescription{

    constructor(){
        mapboxgl.accessToken = 'pk.eyJ1IjoibDRuZHkiLCJhIjoiY2p3czlqd3JxMDFsZzRhcGVta3V2ZTF5ZCJ9.LtTjS75OzU1QOxcyYgLXTA';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [-0.15591514, 51.51830379],
            zoom: 15.5,
            bearing: 27,
            pitch: 45
        });
        this.map.scrollZoom.disable();

        this.chapters = {
            'baker': {
                bearing: 27,
                center: [-0.15591514, 51.51830379],
                zoom: 15.5,
                pitch: 20
            },
            'aldgate': {
                duration: 6000,
                center: [-0.07571203, 51.51424049],
                bearing: 150,
                zoom: 15,
                pitch: 0
            },
            'london-bridge': {
                bearing: 90,
                center: [-0.08533793, 51.50438536],
                zoom: 13,
                speed: 0.6,
                pitch: 40
            },
            'woolwich': {
                bearing: 90,
                center: [0.05991101, 51.48752939],
                zoom: 12.3
            },
            'gloucester': {
                bearing: 45,
                center: [-0.18335806, 51.49439521],
                zoom: 15.3,
                pitch: 20,
                speed: 0.5
            },
            'caulfield-gardens': {
                bearing: 180,
                center: [-0.19684993, 51.5033856],
                zoom: 12.3
            },
            'telegraph': {
                bearing: 90,
                center: [-0.10669358, 51.51433123],
                zoom: 17.3,
                pitch: 40
            },
            'charing-cross': {
                bearing: 90,
                center: [-0.12416858, 51.50779757],
                zoom: 14.3,
                pitch: 20
            }
        };

        this.activeChapterName = 'baker';

        this.events();
    }

    events(){
        // On every scroll event, check which element is on screen
        window.onscroll = () => {
            let chapterNames = Object.keys(this.chapters);
            for (let i = 0; i < chapterNames.length; i++) {
                let chapterName = chapterNames[i];
                if (this.isElementOnScreen(chapterName)) {
                    this.setActiveChapter(chapterName);
                    break;
                }
            }
        };
    }

    setActiveChapter(chapterName) {
        if (chapterName === this.activeChapterName) return;

        this.map.flyTo(this.chapters[chapterName]);

        document.querySelector('#'+chapterName).classList.add('active');
        document.querySelector('#'+this.activeChapterName).classList.remove('active');

        this.activeChapterName = chapterName;
    }

    isElementOnScreen(id) {
        let element = document.querySelector('#'+id);
        let bounds = element.getBoundingClientRect();
        // return bounds.top - 300 < window.innerHeight && bounds.bottom > 0;
        return bounds.bottom - window.innerHeight / 2   > 0;
    }
}

export default ActivityDescription;
