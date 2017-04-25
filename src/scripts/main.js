const mario = document.getElementById('js-mario');
let isJumping = false;

anime({
	targets: '.mario .state--idle .outline__nose',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 2000
});

anime({
	targets: '.mario .state--idle .outline__hat',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 2500,
	delay: 2000
});

anime({
	targets: '.mario .state--idle .outline__jaw',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 2000,
	delay: 2000
});

anime({
	targets: '.mario .state--idle .outline__arm-left',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 2000,
	delay: 2000
});

anime({
	targets: '.mario .state--idle .outline__arm-right',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 2000,
	delay: 2000
});

anime({
	targets: '.mario .state--idle .outline__overalls',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 2000,
	delay: 4000
});

anime({
	targets: '.mario .state--idle .outline__feet',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 3000,
	delay: 4000
});

anime({
	targets: '.mario .state--idle .outline__leg-left',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 200,
	delay: 6750
});

anime({
	targets: '.mario .state--idle .outline__leg-right',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 200,
	delay: 4000
});

anime({
	targets: '.mario .state--idle .outline',
	opacity: 0,
	easing: 'linear',
	duration: 1000,
	delay: 8000
});

anime({
	targets: '.mario .state--idle .fill',
	opacity: 1,
	easing: 'linear',
	duration: 1000,
	delay: 8000,
	complete: (anim) => {
		attachKeyboardEvent();
	}
});

function attachKeyboardEvent() {
	window.addEventListener('keydown', testSpaceBarPress, false);
}

function testSpaceBarPress(event) {
	if (event.code === 'Space') {
		animateJump();
	}
}

function animateJump() {
	mario.classList.remove('is-idle');
	mario.classList.add('is-jumping');
	window.removeEventListener('keydown', testSpaceBarPress);

	anime({
		targets: '.mario',
		translateY: [
			{
				value: -300,
				duration: 200,
				easing: 'easeOutQuad',
			},{
				value: 0,
				duration: 200,
				easing: 'easeInQuad'
			},
		],
		complete: (anim) => {
			mario.classList.remove('is-jumping');
			mario.classList.add('is-idle');
			attachKeyboardEvent();
		}
	});
}
