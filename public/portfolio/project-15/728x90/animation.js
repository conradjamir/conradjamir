/* 
Author: Conrad Jamir - Front End Software Engineer
Date Modified: April 15, 2016
*/
let playBtn = document.getElementById("play");
let restartBtn = document.getElementById("restart");

window.onload = function () {

    playBtn.style.display = "block";

    var tl = new TimelineMax({paused: true}),
        kite_div = ".kite_div",
        rocket = ".rocket",
        cloud_1 = ".cloud_1",
        cloud_2 = ".cloud_2",
        cloud_3 = ".cloud_3",
        cloud = ".cloud",
        logo = ".logo",
        logo_2 = ".logo_2",
        kids = ".kids",
        zone = ".zone",
        kids_2 = ".kids_2",
        zone_2 = ".zone_2",
        ellos = ".ellos_txt",
        ven = ".ven",
        group_3 = ".g3",
        tv_group = ".tv_g",
        cambiate = ".cambiate_txt",
        offer = ".offer_txt",
        descubre = ".descubre_txt",
        robot = ".robot",
        start = "Start",
        offer_start = "offer_start",
        exit_1 = "Exit_1";

    tl.from(cloud_1, .5, {
            x: "-300",
            opacity: 0,
            ease: Back.easeOut.config(.75),
            webkitFilter: "blur(2px)",
            filter: "blur(2px)"
        }, start)
        .from(cloud_2, .5, {
            x: "-300",
            opacity: 0,
            ease: Back.easeOut.config(.75),
            delay: .1,
            webkitFilter: "blur(2px)",
            filter: "blur(2px)"
        }, start)
        .from(kite_div, .75, {
            x: 750
        }, start)
        .from(logo, .75, {
            transformOrigin: "left bottom",
            scale: 0,
            ease: Elastic.easeOut,
            force3D: true
        }, start)
        .staggerFrom(kids, 1, {
            transformOrigin: "left bottom",
            scale: 0,
            delay: 0.1,
            ease: Elastic.easeOut,
            force3D: true
        }, 0.1, start)
        .staggerFrom(zone, .3, {
            y: 90,
            delay: 0.2,
            ease: Back.easeOut,
            force3D: true
        }, 0.1, start)
        .add(exit_1, "+=1")
        .to(cloud, .5, {
            x: -300,
            webkitFilter: "blur(2px)",
            filter: "blur(2px)",
            ease: Back.easeOut,
        }, exit_1)
        .to(kite_div, .5, {
            x: 300
        }, exit_1)
        .to([logo, kids, zone], .5, {
            y: -100,
            webkitFilter: "blur(2px)",
            filter: "blur(2px)",
            ease: Quart.easeOut,
        }, exit_1)
        //
        // group 2
        //
        .from(logo_2, .2, {
            right: -100,
            ease: Elastic.easeOut
        }, "-=.25")
        .from(ellos, .2, {
            y: 200
        }, "-=.25")
        //
        // group 3
        //
        .to(ellos, .1, {
            width: 155,
            x: -97,
            y: 3
        })
        .staggerFrom(group_3, .5, {
            x: 750,
            delay: 0.2,
            ease: Back.easeOut.config(.5),
            force3D: true
        }, 0.1, "-=.4")
        .to(rocket, 1.5, {
            width: 41,
            x: 650,
            y: -400,
            ease: Linear.easeNone
        }, "-=.6")
        .staggerTo([ellos, group_3], .5, {
            x: -800,
            delay: 1,
            ease: Back.easeOut.config(1),
            force3D: true
        }, 0.1)
        //
        // group 4
        //
        .from(cloud_3, .2, {
            x: "-300",
            opacity: 0,
            ease: Back.easeOut.config(.75),
            webkitFilter: "blur(2px)",
            filter: "blur(2px)"
        }, "start_g4")
        .staggerFrom([".wind", ".balloon"], .5, {
            x: -200
        }, "start_g4")
        .from(tv_group, 1, {
            scale: 0,
            ease: Elastic.easeOut
        }, "start_g4")
        .from(".control_txt", .5, {
            y: 250,
            ease: Elastic.easeOut.config(.3, .3)
        }, "-=1")
        .to([".wind", ".balloon"], 3, {
            x: 450,
            y: -150,
            delay: 1,
            ease: SlowMo.ease.config(0.5, 0.2, false)
        }, "exit_2")
        .to(cloud_3, .5, {
            x: "100",
            opacity: 0,
            delay: 1,
            ease: Back.easeOut.config(.75),
            webkitFilter: "blur(2px)",
            filter: "blur(2px)"
        }, "exit_2")
        .to(".control_txt", 1, {
            y: -300,
            delay: 1,
            ease: Back.easeOut
        }, "exit_2")
        //
        // group 5
        //
        .from(".tv_2", .1, {
            opacity: 0,
            delay: 1
        }, "exit_2")
        .from(ven, .5, {
            y: 100,
            delay: 1,
            ease: Back.easeOut
        }, "exit_2")
        .to([tv_group, ven], .1, {
            x: -50
        }, "-=3")
        .to([tv_group, ven], .5, {
            x: -750,
            ease: Back.easeOut
        }, "-=1.5")
        //
        // offer
        //
        .add(offer_start, "-=1")
        .from(cambiate, .75, {
            x: -300,
            ease: Elastic.easeOut
        }, offer_start)
        .from(".kite_div_2", .5, {
            y: 95
        })
        .staggerFrom(kids_2, 1, {
            transformOrigin: "left bottom",
            scale: 0,
            delay: 0.1,
            ease: Elastic.easeOut,
            force3D: true
        }, 0.1, offer_start)
        .staggerFrom(zone_2, .3, {
            y: 90,
            delay: 0.2,
            ease: Back.easeOut,
            force3D: true
        }, 0.1, offer_start)
        .from(offer, .5, {
            y: 300
        }, offer_start, "+=.5")
        .from(descubre, .5, {
            y: -250
        }, offer_start, "+=.5")
        .from([".cta"], .3, {
            opacity: 0
        }, "-=.5")
        .to(
            restartBtn,
            0.5,
        {
            display: "block",
        }, "+=2")
        .from(robot, 2, {
            y: 50,
            yoyo: true,
            repeat: -1,
            repeatDelay: 2,
            ease: SlowMo.ease.config(0.3, 1, false)
        }, "-=2")
        // display:none; prevent image load til ready
    document.getElementById("gg").style.display = "block";

    wiggle(".kite_wiggle");

    playBtn.addEventListener("click", function () {
        playBtn.style.display = "none";
        tl.play();
    });

    restartBtn.addEventListener("click", function () {
        restartBtn.style.display = "none";
        
        tl.restart();
    });

}

function wiggle(selector) {
    $(selector).each(function () {
        wiggleProp(this, 'scale', 0.93, 1);
        wiggleProp(this, 'rotation', -5, 5);
        wiggleProp(this, 'x', -3, 3);
        wiggleProp(this, 'y', -3, 3);
    })
}

function wiggleProp(element, prop, min, max) {
    var duration = Math.random() * (.6 - .3) + .3;

    var tweenProps = {
        ease: Power1.easeInOut,
        onComplete: wiggleProp,
        onCompleteParams: [element, prop, min, max]
    };
    tweenProps[prop] = Math.random() * (max - min) + min;

    TweenMax.to(element, duration, tweenProps);
}
