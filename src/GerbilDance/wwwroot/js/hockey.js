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

  //items.removeClass('active')


  //var items = $(".touch-circle");
  //items.click(function (item) {

  //  //If it has an active class, it is highlighted and it can move on to a new circle
  //  if ($(this).hasClass("active")) {
  //    SetNewTouchCircle($(this));
  //  }
  //});

  //function SetNewTouchCircle(OldCircle) {

  //  var itemIndex = Math.floor(Math.random() * items.length);

  //  //If it already has an active class, try again
  //  if ($(items[itemIndex]).hasClass("active")) {
  //    SetNewTouchCircle(OldCircle);
  //  }
  //  else {
  //    $(items[itemIndex]).addClass("active");
  //    //Remove old highlight
  //    $(OldCircle).removeClass("active");
  //  }

  //}
});