let modifiedWhiteList = $.fn.selectpicker.Constructor.DEFAULTS.whiteList;
modifiedWhiteList.img.push('data-src');

$('.selectpicker').selectpicker({
    whiteList: modifiedWhiteList
});


$(document).on('easyadmin.collection.item-added',
    function() {

        $('.selectpicker').selectpicker({
            whiteList: modifiedWhiteList
        });
    }
);
