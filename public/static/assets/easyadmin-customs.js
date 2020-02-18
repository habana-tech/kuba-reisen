let modifiedWhiteList = $.fn.selectpicker.Constructor.DEFAULTS.whiteList;
modifiedWhiteList.img.push('data-src');

$('.selectpicker').selectpicker({
    whiteList: modifiedWhiteList
});

function insertFragment(beforeElement)
{
    let currentFragment = beforeElement.target.parentNode;
    let fragmentCollection = currentFragment.parentNode;
    let newFragment = currentFragment.cloneNode(true);
    currentFragment.before(newFragment);
    console.log(newFragment);
    let newFragmentInputs = newFragment.querySelectorAll('input', 'textarea');
    newFragmentInputs.forEach(function (item) {
        console.log(item);
        item.value = null;
    });

    let fragments = fragmentCollection.querySelectorAll('div.form-group.field-activity_description_fragment .field-collection-item-row');

    fragments.forEach( function(element, index){
        element.innerHTML = element.innerHTML
            .replace(/descriptionFragments_[0-9]+/g, 'descriptionFragments_'+index)
            .replace(/descriptionFragments\[[0-9]+/g, 'descriptionFragments['+index)
            .replace(/descriptionFragments]\[[0-9]+/g, 'descriptionFragments]['+index)

});



}

function addFragmentBtnToRows()
{
    let rows = document.querySelectorAll('.form-widget > .field-collection-item-row');
    let fragments = [];
    rows.forEach(function (item) {
        fragments.push(item.parentNode.parentNode);
    });

    let addBtn = document.createElement("a");
    addBtn.classList.add('btn', 'btn-default', 'btn-sm', 'add_element_btn');
    addBtn.innerText = '➕ Add element here';

    fragments.forEach(
        function (item, index) {
            if(item.querySelector('.add_element_btn') === null)
            {
                let btnNode = addBtn.cloneNode(true);
                item.appendChild(btnNode);
                btnNode.addEventListener('click', insertFragment);
            }
            item.setAttribute('tabindex','0');

        }
    );
}

$(document).on('easyadmin.collection.item-added',
    function(e) {

        //init the combobox for selecting image from gallery
        $('.selectpicker').selectpicker({
            whiteList: modifiedWhiteList
        });

        //add a btn for adding a fragment in existent ones
        addFragmentBtnToRows();

    }
);

$(document).ready(function () {
    addFragmentBtnToRows();
});


/*
function onclick(event) {
  $(function() {
    event.preventDefault();

    var collection = $('#activity_descriptionFragments');
    // Use a counter to avoid having the same index more than once
    var numItems = collection.data('count') || collection.children('div.form-group').length;

    collection.prev('.collection-empty').remove();

    var newItem = collection.attr('data-prototype')
      .replace(/\>__name__label__\</g, '>' + numItems + '<')
      .replace(/_descriptionFragments___name__/g, '_descriptionFragments_' + numItems)
      .replace(/descriptionFragments\]\[__name__\]/g, 'descriptionFragments][' + numItems + ']');

    // Increment the counter and store it in the collection
    collection.data('count', ++numItems);

    collection.append(newItem).trigger('easyadmin.collection.item-added');
  });;
  return false;
 */
