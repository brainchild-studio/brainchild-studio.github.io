let btnClick = document.getElementById('btnClick');

let menuClicked = false;

window.addEventListener('load', () => {
	TweenMax.staggerFrom('.top_wave_container svg', 0.5, { scaleY: 0, opacity: 0, x: -150 }, 0.15);
	TweenMax.staggerFrom('.bottom_wave_container svg', 0.5, { scaleY: 0, opacity: 0, x: 150 }, 0.15);
});


// var menuTimeline = new TimelineMax();
// btnClick.addEventListener('click', () => {

// 	menuTimeline.timeScale(1);
// 	if (!menuClicked) {
// 		menuTimeline.add(TweenMax.to('.top_wave_container .wave svg', 0.8, { scale: 2.5,ease: Back.easeOut.config(1.8)}));
// 		menuClicked = !menuClicked;
// 		menuTimeline.play();
// 	}
// 	else {
// 		menuTimeline.reverse();
// 		menuClicked = !menuClicked;
// 	}
// });