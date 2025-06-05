/* 
Author: Conrad Jamir - Front End Software Engineer
Date Modified: April 15, 2016
*/
let playBtn = document.getElementById("play");
let restartBtn = document.getElementById("restart");

window.onload = function () {

    playBtn.style.display = "block";
    
    let tl = new TimelineMax({paused: true}),
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
        .from(kite_div, .5, {
            x: 200
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
            x: 300,
            delay: 0.2,
            ease: Back.easeOut,
            force3D: true
        }, 0.1, start)
        .staggerTo([cloud, kite_div], .75, {
            x: 350,
            webkitFilter: "blur(2px)",
            filter: "blur(2px)",
            ease: Back.easeOut,
            delay: 1.5
        }, 0.1, exit_1)
        .to([logo, kids, zone], .75, {
            x: -350,
            webkitFilter: "blur(2px)",
            filter: "blur(2px)",
            ease: Quart.easeOut,
            delay: 1.5
        }, exit_1)
        //
        // group 2
        //
        .from(logo_2, .2, {
            y: -40,
            ease: Elastic.easeOut
        }, "-=.25")
        .from(ellos, .2, {
            left: -300
        }, "-=.25")
        //
        // group 3
        //
        .to(ellos, .1, {
            width: 102,
            x: 18,
            y: -44
        })
        .staggerFrom(group_3, .5, {
            x: -300,
            ease: Back.easeOut,
            force3D: true
        }, 0.1)
        .to(rocket, 1.25, {
            width: 27,
            x: -170,
            y: -850,
            ease: Linear.easeNone
        }, "-=.5")
        .staggerTo([ellos, group_3], .5, {
            x: -300,
            delay: 1,
            ease: Back.easeOut,
            force3D: true
        }, 0.1)
        //
        // group 4
        //
        .add("group_4_start", "-=.5")
        .to([".wind", ".balloon"], 5.5, {
            x: 350,
        })
        .from(cloud_3, 1, {
            x: "-300",
            opacity: 0,
            ease: Back.easeOut.config(.25),
            webkitFilter: "blur(2px)",
            filter: "blur(2px)"
        }, "-=5.5")
        .from(tv_group, 1, {
            scale: 0,
            ease: Elastic.easeOut
        }, "-=5.5")
        .from(".control_txt", 1, {
            x: -300,
            ease: Elastic.easeOut
        }, "-=5.5")
        .to(".control_txt", .5, {
            x: -300,
            delay: 1,
            ease: Back.easeOut
        }, "-=4.5")
        .to(cloud_3, 1.5, {
            x: "300",
            opacity: 0,
            ease: Back.easeOut.config(.5),
            webkitFilter: "blur(2px)",
            filter: "blur(2px)"
        }, "-=4")
        .from(".tv_2", .2, {
            opacity: 0
        }, "-=4")
        .from(ven, .5, {
            x: 200,
            ease: Back.easeOut
        }, "-=3.5")
        .to([tv_group, ven], 1, {
            x: -350,
            ease: Back.easeOut
        }, "-=2")
        //
        // offer
        //
        .add(offer_start, "-=1.75")
        .from(cambiate, .75, {
            x: -300,
            ease: Elastic.easeOut
        }, offer_start)
        .staggerFrom(kids_2, 1.5, {
            transformOrigin: "left bottom",
            scale: 0,
            delay: 0.1,
            ease: Elastic.easeOut,
            force3D: true
        }, 0.1, offer_start)
        .staggerFrom(zone_2, .5, {
            x: 300,
            delay: 0.2,
            ease: Back.easeOut,
            force3D: true
        }, 0.1, offer_start)
        .from(".kite_div_2", .5, {
            x: 200
        }, offer_start)
        .from(offer, .5, {
            x: -300
        }, offer_start, "+=.5")
        .from(descubre, .5, {
            x: 300
        }, offer_start, "+=.5")
        .from(".cta", .3, {
            opacity: 0
        }, offer_start)
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
    let duration = Math.random() * (.6 - .3) + .3;

    let tweenProps = {
        ease: Power1.easeInOut,
        onComplete: wiggleProp,
        onCompleteParams: [element, prop, min, max]
    };
    tweenProps[prop] = Math.random() * (max - min) + min;

    TweenMax.to(element, duration, tweenProps);
}
