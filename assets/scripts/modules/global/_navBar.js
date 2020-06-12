import {easeElasticOut, easeElasticIn, easeBounceOut} from "d3-ease";
import Segment from "segment-js";
import Headroom from 'headroom.js'

class NavBar{

    constructor()
    {
        this.header = document.querySelector('header');
        this.navegationMenu = document.querySelector('.header__nav');

        this.pathA = document.querySelector('#burger_pathA');
        this.pathB = document.querySelector('#burger_pathB');
        this.pathC = document.querySelector('#burger_pathC');
        this.wrapper = document.querySelector('#menu-icon-wrapper');
        this.button = document.querySelector('#menu-icon-trigger');
        this.main = document.querySelector('main');

        this.beginAC = 80;
        this.endAC = 320;
        this.beginB = 80;
        this.endB = 320;
        this.isOpen = false;

        this.segmentA = new Segment(this.pathA, this.beginAC, this.endAC);
        this.segmentB = new Segment(this.pathB, this.beginB, this.endB);
        this.segmentC = new Segment(this.pathC, this.beginAC, this.endAC);

        this.events();
        this.headroomInit();
        this.showMenuTrigger();
    }

    headroomInit()
    {
        Headroom.options.onUnpin = this.hideMenuUnPin.bind(this);

        Headroom.options.tolerance = {
            up: 10,
            down: 8
        };

        let headroom = new Headroom(this.header);
        headroom.init();
    }

    events()
    {
        this.button.addEventListener('click', this.showOrHideMenu.bind(this));

        this.main.addEventListener('click', () => {
            if (this.isOpen) {
                this.hideMenu();
            }
        });
    }

    showOrHideMenu()
    {
        if (this.isOpen) {
            this.hideMenu();
        } else {
            this.showMenu();
        }
    }

    showMenu()
    {
        if (this.header.classList.contains('headroom--top')) {
            this.header.classList.add('header--pinned');
        }

        this.inAC(this.segmentA, this);
        this.inB(this.segmentB, this);
        this.inAC(this.segmentC, this);

        /*****Active menu container **/
        this.navegationMenu.classList.add('swing-in-top-bck');
        this.navegationMenu.classList.remove('swing-out-top-bck');

        this.isOpen = true;
    }

    hideMenuUnPin()
    {
        if (this.isOpen) {
            this.outAC(this.segmentA, this);
            this.outB(this.segmentB, this);
            this.outAC(this.segmentC, this);

            this.navegationMenu.classList.remove('swing-in-top-bck');
            this.navegationMenu.classList.add('swing-out-top-bck');

            this.isOpen = false;
        }

    }

    hideMenu()
    {
        if (this.header.classList.contains('headroom--top')) {
            this.header.classList.remove('header--pinned');
        }

        if (this.isOpen) {
            this.outAC(this.segmentA, this);
            this.outB(this.segmentB, this);
            this.outAC(this.segmentC, this);

            this.navegationMenu.classList.remove('swing-in-top-bck');
            this.navegationMenu.classList.add('swing-out-top-bck');

            this.isOpen = false;
        }
    }

    showMenuTrigger()
    {
        this.wrapper.classList.remove('hidden');
    }


    inAC(s, that)
    {
        s.draw('80% - 240', '80%', 0.3, {
            delay: 0.1,
            callback: function () {
                that.inAC2(s);
            }
        });
    }

    inAC2(s)
    {
        s.draw('100% - 545', '100% - 305', 0.6, {
            easing: easeElasticOut
        });
    }

    inB(s, that)
    {
        s.draw(this.beginB - 60, this.endB + 60, 0.1, {
            callback: function () {
                that.inB2(s);
            }
        });
    }

    inB2(s)
    {
        s.draw(this.beginB + 120, this.endB - 120, 0.3, {
            easing: easeBounceOut
        });
    }

    /* Out animations (to burger icon) */

    outAC(s, that)
    {
        s.draw('90% - 240', '90%', 0.1, {
            easing: easeElasticIn,
            callback: function () {
                that.outAC2(s, that);
            }
        });
    }

    outAC2(s, that)
    {
        s.draw('20% - 240', '20%', 0.3, {
            callback: function () {
                that.outAC3(s);
            }
        });
    }

    outAC3(s)
    {
        s.draw(this.beginAC, this.endAC, 0.7, {
            easing: easeElasticOut
        });
    }

    outB(s)
    {
        s.draw(this.beginB, this.endB, 0.7, {
            delay: 0.1,
            easing: easeElasticOut
        });
    }

}

export default NavBar;

