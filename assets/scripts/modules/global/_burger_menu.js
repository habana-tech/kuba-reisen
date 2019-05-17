import {easeElasticOut, easeElasticIn, easeBounceOut} from "d3-ease";
import Segment from "segment-js";

class Menu {
    constructor(){
        this.pathA = document.querySelector('#burger_pathA');
        this.pathB = document.querySelector('#burger_pathB');
        this.pathC = document.querySelector('#burger_pathC');
        this.wrapper = document.querySelector('#menu-icon-wrapper');
        this.trigger = document.querySelector('#menu-icon-trigger');
        this.toCloseIcon = true;
        this.dummy = document.querySelector('.navigation_menu');

        this.beginAC = 80;
        this.endAC = 320;
        this.beginB = 80;
        this.endB = 320;

        this.segmentA = new Segment(this.pathA, this.beginAC, this.endAC);
        this.segmentB = new Segment(this.pathB, this.beginB, this.endB);
        this.segmentC = new Segment(this.pathC, this.beginAC, this.endAC);

        this.events();
        this.wrapper.style.visibility = 'visible';
    }


    events(){
        this.trigger.addEventListener('click', this.click.bind(this));
    }

    click(){
        this.modifyScale(this.wrapper);

        if (this.toCloseIcon) {
            this.inAC(this.segmentA, this);
            this.inB(this.segmentB, this);
            this.inAC(this.segmentC, this);

            /*****Active menu container **/
            this.dummy.classList.toggle('navigation_menu--active');
            this.dummy.classList.toggle('swing-in-right-bck');
            this.dummy.classList.toggle('swing-in-right-bck-reverse');
        } else {
            this.outAC(this.segmentA, this);
            this.outB(this.segmentB, this);
            this.outAC(this.segmentC, this);

            this.dummy.classList.toggle('navigation_menu--active');
            this.dummy.classList.toggle('swing-in-right-bck');
            this.dummy.classList.toggle('swing-in-right-bck-reverse');
        }
        this.toCloseIcon = !this.toCloseIcon;
    }

    inAC(s, that) {
        s.draw('80% - 240', '80%', 0.3, {
            delay: 0.1,
            callback: function() {
                that.inAC2(s);
            }
        });
    }

    inAC2(s) {
        s.draw('100% - 545', '100% - 305', 0.6, {
            easing: easeElasticOut
        });
    }

    inB(s, that) {
        s.draw(this.beginB - 60, this.endB + 60, 0.1, {
            callback: function() {
                that.inB2(s);
            }
        });
    }

    inB2(s) {
        s.draw(this.beginB + 120, this.endB - 120, 0.3, {
            easing: easeBounceOut
        });
    }

    /* Out animations (to burger icon) */

    outAC(s, that) {
        s.draw('90% - 240', '90%', 0.1, {
            easing: easeElasticIn,
            callback: function() {
                that.outAC2(s, that);
            }
        });
    }

    outAC2(s, that) {
        s.draw('20% - 240', '20%', 0.3, {
            callback: function() {
                that.outAC3(s);
            }
        });
    }

    outAC3(s) {
        s.draw(this.beginAC, this.endAC, 0.7, {
            easing: easeElasticOut
        });
    }

    outB(s) {
        s.draw(this.beginB, this.endB, 0.7, {
            delay: 0.1,
            easing: easeElasticOut
        });
    }

    /* Scale function */

    modifyScale(m) {
        m.classList.toggle('scaled');
    }

}

export default Menu;
