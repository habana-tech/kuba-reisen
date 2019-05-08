//contact_planing_selfCharacter
import noUiSlider from 'noUiSlider';

//todo: refract to classs

var selfCharacterSlider = document.getElementById('contact_planing_selfCharacter_container');
var selfCharacterInput = document.getElementById('contact_planing_selfCharacter');
var selfCharacterSliderSpan = document.getElementById('contact_planing_selfCharacter_value');
var selfCharacterSliderLabels = document.getElementById('contact_planing_selfCharacter_labels');

var selfCharacterSliderLabelsLenght = selfCharacterSliderLabels.childElementCount;
noUiSlider.create(selfCharacterSlider, {
    start: 0,
    step: 1,
    range: {
        min: 0,
        max: selfCharacterSliderLabelsLenght-1
    }
});

selfCharacterSlider.noUiSlider.on('update', function (values, handle) {
    //console.log(values[0]);
    let selectedItem = Number.parseInt(values[0]);
    selfCharacterInput.value = selectedItem;
    selfCharacterSliderSpan.innerHTML = selfCharacterSliderLabels.children.item(selectedItem).innerHTML
});


//contact_planing_selfLuxury
var selfLuxurySlider = document.getElementById('contact_planing_selfLuxury_container');
var selfLuxuryInput = document.getElementById('contact_planing_selfLuxury');
var selfLuxurySliderSpan = document.getElementById('contact_planing_selfLuxury_value');
var selfLuxurySliderLabels = document.getElementById('contact_planing_selfLuxury_labels');

var selfLuxurySliderLabelsLenght = selfLuxurySliderLabels.childElementCount;
noUiSlider.create(selfLuxurySlider, {
    start: 0,
    step: 1,
    range: {
        min: 0,
        max: selfLuxurySliderLabelsLenght-1
    }
});

selfLuxurySlider.noUiSlider.on('update', function (values, handle) {
    //console.log(values[0]);
    let selectedItem = Number.parseInt(values[0]);
    selfLuxuryInput.value = selectedItem;
    selfLuxurySliderSpan.innerHTML = selfLuxurySliderLabels.children.item(selectedItem).innerHTML
});


//contact_planing_selfConsider
var selfConsiderSlider = document.getElementById('contact_planing_selfConsider_container');
var selfConsiderInput = document.getElementById('contact_planing_selfConsider');
var selfConsiderSliderSpan = document.getElementById('contact_planing_selfConsider_value');
var selfConsiderSliderLabels = document.getElementById('contact_planing_selfConsider_labels');

var selfConsiderSliderLabelsLenght = selfConsiderSliderLabels.childElementCount;
noUiSlider.create(selfConsiderSlider, {
    start: 0,
    step: 1,
    range: {
        min: 0,
        max: selfConsiderSliderLabelsLenght-1
    }
});

selfConsiderSlider.noUiSlider.on('update', function (values, handle) {
    //console.log(values[0]);
    let selectedItem = Number.parseInt(values[0]);
    selfConsiderInput.value = selectedItem;
    selfConsiderSliderSpan.innerHTML = selfConsiderSliderLabels.children.item(selectedItem).innerHTML
});
