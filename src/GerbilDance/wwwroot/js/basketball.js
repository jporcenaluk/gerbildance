$(function () {
    //Get all the touchable items
    var items = $(".touch-circle");

    items.each(function (item, i) {

        $(this).click(function () {

            items.removeClass('active');

            // pick a new one
            var index = i;

            do {
                index = Math.floor(Math.random() * items.length);
            }
            while (index == i);

            $(items[index]).addClass("active");
        })
    })

});