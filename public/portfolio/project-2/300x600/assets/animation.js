/* 
Author: Conrad Jamir - Front End Software Engineer
Date Modified: April 15, 2020
*/
let playBtn = document.getElementById("play");
let restartBtn = document.getElementById("restart");

if (Enabler.isInitialized()) {
	init();
} else {
	Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
}

// Runs when Enabler is ready.
function init() {
	if (Enabler.isPageLoaded()) {
		politeInit();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
	}
}

// Runs when the page is completely loaded.
function politeInit() {
	// Add your code to hide any loading image or animation and load creative
	// assets or begin creative animation.
	// multiple elements
	let images = document.querySelectorAll(".img");

	imagesLoaded(
		images,
		{
			background: true,
		},
		function () {
			console.log("images are loaded");

			// display:none; prevent image load til ready
			playBtn.style.display = "block";
			document.getElementById("animation").style.display = "block";
			document.getElementById("loader").style.display = "none";

			gsap.set([txt1, txt2, txt3, cloud], {
				autoAlpha: 0,
			});
			gsap.set([logo, cta], {
				y: "+=5",
				autoAlpha: 0,
			});
			gsap.set(moon, {
				opacity: 0,
				scale: 2,
				transformOrigin: "center, center",
				y: "+=100",
			});
			gsap.set([milk], {
				y: "+=320",
				autoAlpha: 0,
				scale: 1.1,
			});
			gsap.set([books], {
				y: "+=550",
			});

			let tl = gsap.timeline({ paused: true });

			tl.add("start1")
				.add([moonAnimation, cloudAnimation], "start1")
				.to(
					txt1,
					0.5,
					{
						autoAlpha: 1,
						ease: Expo.easeOut,
					},
					"start1"
				)
				.to(
					logo,
					0.5,
					{
						autoAlpha: 1,
						y: "-=5",
					},
					"start1"
				)
				.add("start2", "+=2")
				.to(
					txt1,
					0.5,
					{
						autoAlpha: 0,
					},
					"start2"
				)
				.add("start3")
				.to(
					txt2,
					0.5,
					{
						autoAlpha: 1,
					},
					"start3"
				)
				.add(milkAnimation, "start3")
				.add("start4", "+=2")
				.to(
					txt2,
					0.5,
					{
						autoAlpha: 0,
					},
					"start4"
				)
				.to(
					txt3,
					0.5,
					{
						autoAlpha: 1,
					},
					"start4"
				)
				.add("start5", "+=1.5")
				.to(
					txt3,
					0.5,
					{
						autoAlpha: 0,
					},
					"start5"
				)
				.to(
					books,
					1,
					{
						y: "-=550",
					},
					"start5+=0.3"
				)
				.to(
					cta,
					2,
					{
						autoAlpha: 1,
						y: "-=5",
					},
					"-=0.25"
				)
                .to(
                    restartBtn,
                    0.5,
                    {
                        display: "block"
                    }, "+=1.25");

			function milkAnimation() {
				let tl = gsap.timeline();

				tl.to(
					milk,
					5,
					{
						y: "-=80",
						autoAlpha: 1,
					},
					"-=0.25"
				).to(
					milk,
					2,
					{
						scale: 1,
						y: "0",
					},
					"-=0.25"
				);

				return tl;
			}

			function showCloud() {
				gsap.set(cloud, { autoAlpha: 1 });
			}

			function cloudAnimation() {
				let tl = gsap.timeline();

				gsap.set(bg, {
                    y: "0",
                });

				tl.to(bg, 5, {
					y: "-=123",
				}).to(
					bg,
					5,
					{
						y: "-=25",
						onComplete: showCloud,
					},
					"-=0.5"
				);

				return tl;
			}

			function moonAnimation() {
				let tl = gsap.timeline();

                gsap.set(moon, {
                    opacity: 0,
                    scale: 2,
					rotation: 0,
                    transformOrigin: "center, center",
					x: 0,
                    y: 100,
                });

				tl.to(moon, 3, {
					opacity: 1,
					scale: 1,
					y: "+=20",
				})
					.to(
						moon,
						3.5,
						{
							scale: 0.7,
							x: "+=75",
							y: "-=70",
						},
						"-=0.5"
					)
					.to(
						moon,
						3,
						{
							scale: 0.45,
							x: "-=75",
							y: "-=80",
						},
						"-=0.5"
					)
					.to(
						moon,
						3.5,
						{
							scale: 0.38,
							x: "+=108",
							y: "+=190",
							rotation: -30,
						},
						"-=0.5"
					);

				return tl;
			}

			playBtn.addEventListener("click", function () {
				playBtn.style.display = "none";
				tl.play();
			});

			restartBtn.addEventListener("click", function () {
				restartBtn.style.display = "none";
				gsap.set([txt1, txt2, txt3, cloud], {
					autoAlpha: 0,
				});
				gsap.set([milk], {
					y: "320",
					autoAlpha: 0,
					scale: 1.1,
				});
				gsap.set([books], {
					y: "550",
				});
				tl.restart();
			});
		}
	);
}
