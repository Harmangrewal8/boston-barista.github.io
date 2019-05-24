$(window).scroll(function(){
    parallax();

})

function parallax(){
    var vscroll = $(window).scrollTop();
  

    $(".parallax").css("background-position", "center "+(vscroll*0.25)+"px")
    $("#aboutText").css("top", -55+(vscroll*0.2)+"px")
   
}