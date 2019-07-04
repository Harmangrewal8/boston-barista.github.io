$(window).scroll(function(){
    parallax();

})

function parallax(){
    var vscroll = $(window).scrollTop();
  

    $(".parallax").css("background-position", "center "+(vscroll*0.25)+"px")
    if($(window).width()>= 600){
        $(".aboutText").css("top", -52+(vscroll*0.3)+"px")
    }
    
   
}