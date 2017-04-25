/**
 * Super Paper Mario 8-bit animation, wahoo.
 *
 * PRESS SPACE TO JUMP WHEN MARIO HAS FINISHED DRAWING; 
 * TOO LAZY TO ADD ON-SCREEN INSTRUCTIONS LOL.
 *
 * Below are a series of initial calles to animejs to animate the lines.
 * The durations and delays were calculated based on judgement. Once the final
 * line animates (the left leg), Mario is filled in with colour. When the
 * colour finishes fading an event gets attached to allow Mario to jump.
 */

const mario = document.getElementById('js-mario');

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
	targets: '.mario .state--idle .outline__leg-right',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 200,
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
	targets: '.mario .state--idle .outline',
	opacity: 0,
	easing: 'linear',
	duration: 1000,
	delay: 7500
});

anime({
	targets: '.mario .state--idle .fill',
	opacity: 1,
	easing: 'linear',
	duration: 1000,
	delay: 7500,
	complete: (anim) => {
		addJumpEventListeners();
	}
});

function addJumpEventListeners() {
	window.addEventListener('keydown', testSpaceBarPress, false);
	window.addEventListener('touchstart', jump, false);
}

function removeJumpEventListeners() {
	window.removeEventListener('keydown', testSpaceBarPress);
	window.removeEventListener('touchstart', jump);
}

function testSpaceBarPress(event) {
	if (event.code === 'Space') {
		jump();
	}
}

function jump() {
	mario.classList.remove('is-idle');
	mario.classList.add('is-jumping');
	removeJumpEventListeners();

	anime({
		targets: '.mario',
		translateY: [
			{
				value: -225,
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
			addJumpEventListeners();
		}
	});
}
