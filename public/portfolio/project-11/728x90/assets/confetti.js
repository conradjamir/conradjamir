TweenMax.set(["#stage1, #stage2"], {
    perspective: 600
})
TweenMax.set(["#stage3"], {
    perspective: 400
})
TweenMax.set(".dot img", {
    xPercent: "-50%",
    yPercent: "-50%"
})

var banner = {
        w: 200,
        h: 90
    },
    stage1Time = 20,
    stage2Time = 23,
    stage3Time = 27;

function confetti(total, svg, width, height, id, time) {

    var container = document.getElementById(id);

    for (i = 0; i < total; i++) {
        var Div = document.createElement('div');
        TweenLite.set(Div, {
            attr: {
                class: svg
            },
            x: R(0, banner.w),
            y: R(-200, -150),
            z: R(-200, 200),
            width: width,
            height: height
        });
        container.appendChild(Div);
        animm(Div, time);
    }
    //fade confetti before falling ends
    TweenMax.to(["#stage1, #stage2"], 0.5, {
        autoAlpha: 0,
        delay: 3
    });
    TweenMax.to(["#stage3"], 0.5, {
        autoAlpha: 0,
        delay: 3.5
    });
}

function animm(elm, time) {
    var tl = new TimelineMax();

    tl.add("start")
        .to(elm, R(0.5, 15), {
            y: banner.h + 50,
            ease: Linear.easeNone,
            repeat: 2,
            delay: -15
        }, "start")
        .to(elm, R(4, 8), {
            x: '+=0',
            rotationZ: R(0, 180),
            repeat: 2,
            yoyo: true,
            ease: Sine.easeInOut
        }, "start")
        .to(elm, R(2, 8), {
            rotationX: R(0, 360),
            rotationY: R(0, 360),
            repeat: 1,
            yoyo: true,
            ease: Sine.easeInOut,
            delay: -5
        }, "start");

    tl.duration(time);

    return tl;
};

function R(min, max) {
    return min + Math.random() * (max - min)
};

function playConfetti() {
    confetti(60, 'dot1', '2px', '2px', "stage1", stage1Time);
    confetti(20, 'dot2', '5px', '5px', "stage1", stage1Time);
    confetti(3, 'dot3', '10px', '10px', "stage1", stage1Time);
    confetti(3, 'dot4', '5px', '5px', "stage1", stage1Time);
    confetti(2, 'dot3', '15px', '15px', "stage2", stage2Time);
    confetti(2, 'dot4', '20px', '20px', "stage2", stage2Time);
    confetti(3, 'dot3', '15px', '15px', "stage3", stage3Time);
    confetti(2, 'dot5', '25px', '25px', "stage3", stage3Time);
    confetti(1, 'dot6', '25px', '25px', "stage3", stage3Time);
};