import leaflet from 'leaflet';

class ActivityDescription {
    constructor(){
        this.map = leaflet.map('mapid').setView([23.094, -82.329], 9.59);
        leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoibDRuZHkiLCJhIjoiY2p3czlqd3JxMDFsZzRhcGVta3V2ZTF5ZCJ9.LtTjS75OzU1QOxcyYgLXTA'
        }).addTo(this.map);
        // var polygon = leaflet.marker([
        //     [23.094, -82.329],
        // ]).addTo(this.map);

        this.triggerLink= document.querySelector('section.map a.me');
        console.log(this.triggerLink);
        this.triggerLink.addEventListener('click', this.fly.bind(this));
    }

    fly(e){
        e.preventDefault();
        this.map.flyTo([23.167, -81.196], 13.73);
    }

}

export default ActivityDescription;