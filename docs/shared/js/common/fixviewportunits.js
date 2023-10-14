/*
* Copyright (c) 2023 Lars Norberg. All rights reserved.
*/

window.addEventListener("load", () => {

	// Fix viewport units on mobile
	// Source: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
	const fixViewPortUnits = () => {
		let vh = window.innerHeight * 0.01;
		let vw = window.innerWidth * 0.01;
		let vmin = Math.min(vh,vw);
		let vmax = Math.max(vh,vw);
		document.documentElement.style.setProperty("--vh", vh+"px");
		document.documentElement.style.setProperty("--vw", vw+"px");
		document.documentElement.style.setProperty("--vmin", vmin+"px");
		document.documentElement.style.setProperty("--vmax", vmax+"px");
	}

	// Call on window resize
	// *should throttle this for windows with many graphical updates!
	// *limit updates to a fraction of a second, and rerun once each time
	//  to check for changes since the last update.
	window.addEventListener("resize", () => { fixViewPortUnits(); });

	// Call on page load or refresh
	fixViewPortUnits();
});
