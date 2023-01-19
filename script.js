$(document).ready(() => {
  "use strict";
  $("ul.nav > li").click((e) => {
    e.preventDefault();
    $("ul.nav > li").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(() => {
  "use strict";
  /* cannot change .click(function () { }) to .click(() => { }) 
  because this in function and arrow function doesn't same, 
  in function () this refers to the element that the event is bound to 
  but in ()=> this refers to the context of the surrounding scope, which may not be the same as the element that the event is bound to*/
  $("#view-more-btn").click(function () {
    $(".news-items.more-items").toggleClass("hide");
    $(this).text() == "VIEW ALL"
      ? $(this).text("VIEW LESS")
      : $(this).text("VIEW ALL");
  });
});
