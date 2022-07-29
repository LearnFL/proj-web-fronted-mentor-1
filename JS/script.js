$(document).ready(function(){
  $(".jq-drop").hover(function(){
    var hovered = $(".jq-drop").is(":hover");
    if (hovered) {
      $(".dropdown-company").show("fast");
      $('.jq-drop > img').attr("src", "./images/icon-arrow-up.svg");
    }else {
      $(".dropdown-company").hide("fast");
      $('.jq-drop > img').attr("src", "./images/icon-arrow-down.svg");
    }
  });
});

$(document).ready(function() {
  $('.menu-features').hover(function() {
    var hovered = $('.menu-features').is(":hover");
    if (hovered) {
      $('.menu-features > a > img').attr("src", "./images/icon-arrow-up.svg");
    } else {
      $('.menu-features > a > img').attr("src", "./images/icon-arrow-down.svg");
    }
  });
});
