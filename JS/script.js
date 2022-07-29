
// Drop-Down Menu
// Uncomment to use JavaScript for dropdown-company
// $(document).ready(function(){
//   $(".jq-drop").hover(function(){
//     var hovered = $(".jq-drop").is(":hover");
//     var hov = $(".dropdown-company").is(":hover");
//     if (hovered || hov) {
//       $(".dropdown-company").show("fast");
//       // $(".dropdown-company").addClass("show");
//       $('.jq-drop > img').attr("src", "./images/icon-arrow-up.svg");
//     }
//     else{
//       $(".dropdown-company").hide("fast");
//       // $(".dropdown-company").removeClass("show");
//       $('.jq-drop > img').attr("src", "./images/icon-arrow-down.svg");
//     }
//   });
// });

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

// 'click touchstart'
// Show Mobile Menu
$(document).ready(function(){
  $('.close-icon').hide('fast');
  if ($('.menu-bar:visible') && ($('.close-icon:hidden'))) {
    $('.menu-bar').click(function(){
      $('nav').css("visibility", "visible");
      $('.menu-bar').hide("fast");
      $('.close-icon').show("fast");
    });
  }
});

// Hide Mobile Menu
$(document).ready(function(){
  if ($('.menu-bar:hidden') && ($('.close-icon:visible'))) {
    $('.close-icon').click(function(){
      $('.close-icon').hide("fast");
      $('.menu-bar').show("fast");
      $('nav').css("visibility", "hidden");
    });
  }
});
