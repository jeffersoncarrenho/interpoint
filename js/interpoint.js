

$(window).scroll(function () {
  if($(this).scrollTop() > 600){
    if(!$('.navbar').hasClass('navbar-fixed-top')){
        $('.navbar').stop().addClass('navbar-fixed-top').css('top', '-50px').animate({'top': '0px'}, 1500);
        $(".navbar").removeClass("navbar-interp");
        $(".navbar").removeClass("navbar1");
        $(".navbar-nav").removeClass("navbar-center");
        $(".navbar-header").removeClass("navbar-header1");
        $(".top-menu").addClass("hidden");
      }
    }
    else{
        $('.navbar').removeClass('navbar-fixed-top');
        $('.navbar').removeClass('navbar-fixed-top');
        $(".navbar").addClass("navbar-interp");
        $(".navbar").addClass("navbar1");
        $(".navbar-nav").addClass("navbar-center");
        $(".navbar-header").addClass("navbar-header1");
        $(".top-menu").removeClass("hidden");
      }
});

$(document).ready(function(){
    if($(document).scrollTop()>600){
      $(".navbar").addClass("navbar-fixed-top");
      $(".navbar").removeClass("navbar-interp");
      $(".navbar").removeClass("navbar1");
      $(".navbar-header").removeClass("navbar-header1");
      $(".navbar-nav").removeClass("navbar-center");
      $(".top-menu").addClass("hidden");
    }else{
      $(".navbar").addClass("navbar-interp");
      $(".navbar").addClass("navbar1");
      $(".navbar-header").addClass("navbar-header1");
      $(".navbar-nav").addClass("navbar-center");
      $(".top-menu").removeClass("hidden");
    }
});

var coracao = false;

$('#coracao').on('click', function(){
  if (!coracao) {
    $(this).addClass('fa-heart');
    $(this).removeClass('fa-heart-o');
    coracao = true;
  }else{
    $(this).removeClass('fa-heart');
    $(this).addClass('fa-heart-o');
    coracao = false;
  }
});


/**
 * @function isMobile
 * detecta se o useragent e um dispositivo mobile
 */
function isMobile(){
	var userAgent = navigator.userAgent.toLowerCase();
	if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 )
		return true;
}

if (isMobile()) {
  $('span.fone-desk').addClass('hidden');
  $('span.fone-mobile').removeClass('hidden');
}else{
  $('span.fone-mobile').addClass('hidden');
  $('span.fone-desk').removeClass('hidden');
}
