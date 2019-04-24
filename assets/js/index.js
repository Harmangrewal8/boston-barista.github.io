

$(document).ready(function () {

  $(window).scroll(function () {
    solidnav();


  });
});

// checks if window is scrolled more than 500px, adds/removes solid class
function solidnav() {
  var vscroll = $(window).scrollTop();

  console.log(vscroll);

  if (vscroll > 535) {
    $('#topnav').addClass('solid');
    $('#topnav').removeClass('transparent');

    $('.nav-link').removeClass('link-trans');
    $('.nav-link').addClass('link-solid');

    $('#logo-text').removeClass('navbar-text');
    $('#logo-text').addClass('navbar-text-solid');


  } else {
    $('#topnav').removeClass('solid');
    $('#topnav').addClass('transparent');

    $('.nav-link').removeClass('link-solid');
    $('.nav-link').addClass('link-trans');

    $('#logo-text').removeClass('navbar-text-solid');
    $('#logo-text').addClass('navbar-text');
  }
}



