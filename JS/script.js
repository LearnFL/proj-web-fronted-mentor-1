// Drop-Down Menu
$(document).ready(function(){
  $(".jq-drop").hover(function(){
    var hovered = $(".jq-drop").is(":hover");
    var hov = $(".dropdown-company").is(":hover");
    if (hovered) {
      $(".dropdown-company").show("fast");
      $('.jq-drop > img').attr("src", "./images/icon-arrow-up.svg");
    }
    if (hovered && hov) {
      $(".dropdown-company").show("fast");
      $('.jq-drop > img').attr("src", "./images/icon-arrow-up.svg");
    }else {
      $(".dropdown-company").hide("fast");
      $('.jq-drop > img').attr("src", "./images/icon-arrow-down.svg");
    }
  });
});

// Arrow Icons
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

// Show Menu
$(document).ready(function(){
  $('.close-icon').hide('fast');
  if ($('nav').css("visibility") == 'hidden') {
    $('.menu-bar').click(function(){
      $('.menu-bar').hide("fast");
      $('nav').css("visibility", "visible");
      $('.close-icon').show("fast");
    });
  }
});

// Hide Menu
$(document).ready(function(){
  if ($('.menu-bar:hidden') && ($('.close-icon:visible'))) {
    $('.close-icon').click(function(){
      $('.close-icon').hide("fast");
      $('.menu-bar').show("fast");
      $('nav').css("visibility", "hidden");
    });
  }
});
