$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$('.ryu-still').add('.hulk-ryu-still').hide();
		$('.ryu-ready').add('.hulk-ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').add('.hulk-ryu-ready').hide();
		$('.ryu-still').add('.hulk-ryu-still').show();
	})
	.mousedown(function() {
		playhadouken();
		$('.ryu-ready').add('.hulk-ryu-ready').hide();
		$('.ryu-throwing').add('.hulk-ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').add('.hulk-ryu-throwing').hide();
		$('.ryu-ready').add('.hulk-ryu-ready').show();
		console.log('mouseup');
	});
	$(".x").keydown(function(event) {
		if (event.which == 88) {
		$('.ryu-still').add('.hulk-ryu-still').hide();
		$('.ryu-ready').add('.hulk-ryu-ready').hide();
		$('.ryu-cool').add('.hulk-ryu-cool').show();
		}
	})
	.keyup(function(event) {
		if (event.which == 88) {
		console.log('keyup');
		$('.ryu-cool').add('.hulk-ryu-cool').hide();
		$('.ryu-ready').add('.hulk-ryu-ready').show();
		}
	});
	/*$(".h").keydown(function(event) {
		if (event.which == 72) {
		$('.click').hide();
		$('.press').hide();
		$('.hit').hide();
		$('.hulk-ryu-still').show();
		}
	});*/
});



$.fx.speeds.slow = 1500;
$(function() {
	$('.sf-logo').fadeIn('slow');
	$('.sf-logo').fadeOut('slow');
	$('.click, .press, .hit').delay(3000).fadeIn('slow');
});


function playhadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}