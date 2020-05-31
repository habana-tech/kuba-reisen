import noUiSlider from 'nouislider';

class MakeSlider {
    constructor(prefix)
    {
        this.input = document.querySelector('#' + prefix);
        this.slider = document.querySelector('#' + prefix + '_container');
        this.span = document.querySelector('#' + prefix + '_value');
        this.labels = document.querySelector('#' + prefix + '_labels ul');

        if (this.input && this.slider && this.span && this.labels) {
            this.labelsLength = this.labels.childElementCount;

            this.create();
            this.events();
        } else {
            console.log('error creating Slider: #' + prefix + ' or a related element doesnt exist.');
        }

    }

    create()
    {
        noUiSlider.create(this.slider, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: this.labelsLength - 1
            }
        });
    }

    events()
    {
        this.slider.noUiSlider.on('update', this.updateSlider.bind(this))
    }

    updateSlider(values)
    {
        let selectedItem = Number.parseInt(values[0]);
        this.input.value = selectedItem;
        this.span.innerHTML = this.labels.children.item(selectedItem).innerHTML
    }
}

export default MakeSlider;
