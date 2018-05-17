$(function() {
	
	$( ".showcase" ).each(function( index ) {
		$url=$(this).attr("src");
		$(this).after('<a href='+$url+' target="_blank" class="expand"><img src="../img/expand.png" /></a>');
	});
	
	$width=( $("#content").width() )/2 -25;
	$( ".expand" ).css( "left", $width+"px" );
	
	$(window).resize(function () {
		$width=( $("#content").width() )/2 -25;
		$( ".expand" ).css( "left", $width+"px" );
	}).resize();
	
});


//slider
jQuery(document).ready(function ($) {

	var timerChange = setInterval(moveRight, 4000);
    
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
		clearInterval(timerChange);
    });

    $('a.control_next').click(function () {
        moveRight();
		clearInterval(timerChange);
    });

});    

//another slider
jQuery(document).ready(function ($) {

	var timerChange2 = setInterval(moveRight2, 4000);
    
	var slideCount2 = $('#slider2 ul li').length;
	var slideWidth2 = $('#slider2 ul li').width();
	var slideHeight2 = $('#slider2 ul li').height();
	var sliderUlWidth2 = slideCount2 * slideWidth2;
	
	$('#slider2').css({ width: slideWidth2, height: slideHeight2 });
	
	$('#slider2 ul').css({ width: sliderUlWidth2, marginLeft: - slideWidth2 });
	
    $('#slider2 ul li:last-child').prependTo('#slider2 ul');

    function moveLeft2() {
        $('#slider2 ul').animate({
            left: + slideWidth2
        }, 200, function () {
            $('#slider2 ul li:last-child').prependTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    function moveRight2() {
        $('#slider2 ul').animate({
            left: - slideWidth2
        }, 200, function () {
            $('#slider2 ul li:first-child').appendTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    $('a.control_prev2').click(function () {
        moveLeft2();
		clearInterval(timerChange2);
    });

    $('a.control_next2').click(function () {
        moveRight2();
		clearInterval(timerChange2);
    });

});    