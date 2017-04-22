const timeline = anime.timeline();

timeline.add({
  targets: '#outline__nose',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
  duration: 2000
})
.add({
	targets: '#outline__hat',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
	offset: 400
})
.add({
	targets: '#outline__jaw',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
	offset: 400
})
.add({
	targets: '#outline__arm-right',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
	offset: 0
})
.add({
	targets: '#outline__arm-left',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
	offset: 0
})
.add({
	targets: '#outline__overalls',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
	offset: 400
})
.add({
	targets: '#outline__leg-right',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
	offset: 400
})
.add({
	targets: '#outline__feet',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
	offset: 400
})
.add({
	targets: '#outline__leg-left',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
	offset: 400
})
