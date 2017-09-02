
//	$(document).ready(function(){
//		$('.main__link').click(function(){
//			var menu = $('.subMenu');
//			$(this).toggleClass('active');
//			if (menu.is(':visible')){
//				menu.slideUp();
//			} else {
//				menu.slideDown();
//			};
//		});
//	});
	$(".main__link").click(function() {
  $(".subMenu").toggleClass("open_menu");
});

$(document).mouseup(function(e) {
  var $target = $(e.target);
  if ($target.closest(".subMenu").length == 0 && $target.closest(".main__link").length == 0) {
    $(".main__link").removeClass("open_menu");
  }
});