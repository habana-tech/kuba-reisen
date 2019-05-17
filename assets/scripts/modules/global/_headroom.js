import Headroom from './../../vendors/headroom.min'

class HeaderHeadroom{

    constructor(){
        this.header = document.querySelector('header');
        this.headroomInit();
    }

    headroomInit()
    {
        Headroom.options.tolerance = {
            up: 10,
            down: 8
        };

        let headroom = new Headroom(this.header);
        headroom.init();
    }
}

export default HeaderHeadroom;