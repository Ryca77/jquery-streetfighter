$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playhadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
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
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		console.log('mouseup');
	});
	$(".x").keydown(function(event) {
		if (event.which == 88) {
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').show();
		}
	})
	.keyup(function(event) {
		if (event.which == 88) {
		console.log('keyup');
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
		}
	});
	$(".h").keydown(function(event) {
		if (event.which == 72) {
		$('.sf-logo').hide();
		$('.click').hide();
		$('.press').hide();
		$('.hit').hide();
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu').show();
		$('.hulk-ryu-still').show();
		}
	})
	$(".hulk-ryu").mouseenter(function() {
		$('.hulk-ryu-still').hide();
		$('.hulk-ryu-ready').show();
		$('.click').hide();
		$('.press').hide();
		$('.hit').hide();
	})
	.mouseleave(function() {
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-still').show();
	})
	.mousedown(function() {
		playhadouken();
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-throwing').show();
		$('.hulk-hadouken').finish().show().animate(
			{'left': '190px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '675px');
			}
		);
	})
	.mouseup(function() {
		$('.hulk-ryu-throwing').hide();
		$('.hulk-ryu-ready').show();
		console.log('mouseup');
	});
	$(".h").keydown(function(event) {
		if (event.which == 88) {
		$('.hulk-ryu-still').hide();
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-cool').show();
		$('.click').hide();
		$('.press').hide();
		$('.hit').hide();
		}
	})
	.keyup(function(event) {
		if (event.which == 88) {
		console.log('keyup');
		$('.hulk-ryu-cool').hide();
		$('.hulk-ryu-ready').show();
		}
	});
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