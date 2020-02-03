$(document).ready(function () {

    $('.field-collection-action a').on('click', function(e) {
        e.preventDefault();
            console.log('addinng');
            $('.selectpicker').selectpicker()
    });

});

$(document).on('easyadmin.collection.item-added',
    function() {
    console.log('added');
    $('.selectpicker').selectpicker();
    });
