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
};

// Runs when the page is completely loaded.
function politeInit() {
    // Add your code to hide any loading image or animation and load creative
    // assets or begin creative animation.
    // multiple elements
    let images = document.querySelectorAll('.img');

    imagesLoaded(images, {
        background: true
    }, function () {

        console.log('images are loaded');

        // display:none; prevent image load til ready
        playBtn.style.display = "block";
        document.getElementById("animation").style.display = "block";
        document.getElementById("loader").style.display = "none";

        gsap.set([
            txt1,
            txt2,
            txt3,
            cloud
        ], {
            autoAlpha: 0
        });
        gsap.set([
            logo,
            cta
        ], {
            y: "+=5",
            autoAlpha: 0
        });
        gsap.set(moon, {
            opacity: 0,
            scale: 1.75,
            transformOrigin: "center center",
            x: "+=214",
            y: "-=80"
        });
        gsap.set([
            milk
        ], {
            x: "+=40",
            y: "+=80",
            autoAlpha: 0,
            scale: 1.33
        });
        gsap.set([
            books
        ], {
            y: "+=200"
        });


        let tl = gsap.timeline({ paused: true });


        tl.add("start1")
            .add([moonAnimation, cloudAnimation], "start1")
            .to(txt1, 0.5, {
                autoAlpha: 1,
                ease: Expo.easeOut
            }, "start1")
            .to(logo, 0.5, {
                autoAlpha: 1,
                y: "-=5"
            }, "start1")
            .add("start2", "+=2")
            .to(txt1, 0.5, {
                autoAlpha: 0
            }, "start2")
            .add("start3")
            .to(txt2, 0.5, {
                autoAlpha: 1
            }, "start3")
            .add(milkAnimation, "start3")
            .add("start4", "+=2")
            .to(txt2, 0.5, {
                autoAlpha: 0
            }, "start4")
            .to(txt3, 0.5, {
                autoAlpha: 1
            }, "start4")
            .add("start5", "+=1.5")
            .to(txt3, 0.5, {
                autoAlpha: 0
            }, "start5")
            .to(books, 1, {
                y: "-=200"
            }, "start5")
            .to(cta, 2, {
                autoAlpha: 1,
                y: "-=5"
            }, "-=0.25")
            .to(
                restartBtn,
                0.5,
                {
                    display: "block",
            }, "+=1.25");

            function milkAnimation() {
                let tl = gsap.timeline();

                gsap.set([
                    milk
                ], {
                    x: "40",
                    y: "80",
                    autoAlpha: 0,
                    scale: 1.33
                });

                tl.to(milk, 4, {
                        y: "-=60",
                        autoAlpha: 1
                    }, "-=0.25")
                    .to(milk, 1, {
                        scale: 1,
                        x: 0,
                        y: 0
                    }, "+=1")


                return tl;
            }

            function showCloud() {
                gsap.set(cloud, { autoAlpha: 0.6 });
            }

            function cloudAnimation() {
                let tl = gsap.timeline();

                gsap.set(bg, {
                    y: "0",
                });

                tl.to(bg, 9.75, {
                    y: "-=90",
                    onComplete: showCloud
                })

                return tl;
            }

            function moonAnimation() {
                let tl = gsap.timeline();

                gsap.set(moon, {
                    opacity: 0,
                    scale: 1.75,
                    transformOrigin: "center center",
                    x: "214",
                    y: "-80"
                });

                tl.to(moon, 3, {
                    opacity: 1,
                    scale: 0.6,
                    x: "+=0",
                    y: "-=20"
                })
                .to(moon, 3.5, {
                    scale: 0.6,
                    x: "+=95",
                    y: "-=40"
                }, "-=0.5")
                .to(moon, 3.25, {
                    scale: 0.5,
                    x: "+=95",
                    y: "+=15"
                }, "-=0.5")
                .to(moon, 3, {
                    scale: 0.33,
                    x: "+=35",
                    y: "+=48",
                    rotation: -30
                }, "-=0.75")

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
                    y: "250",
                    autoAlpha: 0,
                    scale: 1.33,
                });
                gsap.set([books], {
                    y: "200",
                });
				tl.restart();
			});

    });
};