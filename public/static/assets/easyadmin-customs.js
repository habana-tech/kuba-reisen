let modifiedWhiteList = $.fn.selectpicker.Constructor.DEFAULTS.whiteList;
modifiedWhiteList.img.push('data-src');

$('.selectpicker').selectpicker({
    whiteList: modifiedWhiteList
});

function insertFragment(beforeElement)
{
    let currentFragment = beforeElement.target.parentNode;
    let fragmentCollection = currentFragment.parentNode;

    let numItems = fragmentCollection.childElementCount;
    let newItem = fragmentCollection.attributes.getNamedItem('data-prototype')
        .value.replace(/__name__/g,  numItems);

    // Increment the counter and store it in the collection
    let count = document.createAttribute("data-count");
    count.value = ++numItems;
    fragmentCollection.attributes.setNamedItem(count);

   // let newFragment = currentFragment.cloneNode(true);

    let newItemContainer = document.createElement('div');
    newItemContainer.innerHTML = newItem;

    let newFragment = newItemContainer.children[0];
    console.log(newFragment);
    currentFragment.before(newFragment);

    $(fragmentCollection).trigger('easyadmin.collection.item-added');
    //animate the new fragment on show
    newFragment.classList.add('scale-in-center');


    let currentFragmentScripts = newFragment.querySelectorAll('script');
    currentFragmentScripts.forEach(function (script) {
        if(script.src != null) {
            eval(script.innerText);
        }

    });

    let fragments = fragmentCollection.querySelectorAll('.field-collection-item-row');

    fragments.forEach( function(element, index){
        let orderInput = element.querySelector('input[data-role=fragmentOrder');
        orderInput.value = index;
        console.log(orderInput);
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
