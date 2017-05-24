$(document).ready(function(){
  
  $("a.about-tabs").click(function(){
    event.preventDefault();
    var id = $(this).html();

    var paragraphsArr = $("#about div");
    var tabTitles = $("a.about-tabs");

    for (var i = 0; i < paragraphsArr.length; i++) {
      if($(paragraphsArr[i]).attr("id") === id){
        $(paragraphsArr[i]).show();
        $(tabTitles[i]).css("color", "white");
      } else {
        $(paragraphsArr[i]).hide();
        $(tabTitles[i]).css("color", "black");
      }
    }
  })

});