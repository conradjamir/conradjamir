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
        cloud_4 = ".cloud_4",
        cloud_5 = ".cloud_5",
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
            y: 200
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
        .staggerTo([cloud, kite_div], .5, {
            x: 350,
            webkitFilter: "blur(2px)",
            filter: "blur(2px)",
            ease: Back.easeOut,
            delay: 1.5
        }, 0.1, exit_1)
        .to([logo, kids, zone], .5, {
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
            right: -100,
            ease: Elastic.easeOut
        }, "-=.25")
        .from(ellos, .2, {
            left: -300
        }, "-=.25")
        .to(ellos, .1, {
            width: 158,
            x: 3,
            y: -18
        })
        .staggerFrom(group_3, .5, {
            x: -300,
            delay: 0.2,
            ease: Back.easeOut,
            force3D: true
        }, 0.1)
        .to(rocket, 1, {
            width: 25,
            x: -90,
            y: -450,
            ease: Linear.easeNone
        })
        .staggerTo([ellos, group_3], .5, {
            x: -300,
            delay: 1,
            ease: Back.easeOut,
            force3D: true
        }, 0.1)
        //
        // group 3
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
        .from(".control_txt", 1, {
            x: -300,
            ease: Elastic.easeOut
        }, "-=1")
        .to([".wind", ".balloon"], 1, {
            x: 250,
            y: -150,
            delay: 1,
            ease: SlowMo.ease.config(0.5, 0.5, false)
        }, "exit_2")
        .to(cloud_3, .5, {
            x: "300",
            opacity: 0,
            delay: 1,
            ease: Back.easeOut.config(.75),
            webkitFilter: "blur(2px)",
            filter: "blur(2px)"
        }, "exit_2")
        .to(".control_txt", 1, {
            x: -300,
            delay: 1,
            ease: Back.easeOut
        }, "exit_2")
        .from(cloud_4, .2, {
            x: "-300",
            opacity: 0,
            ease: Back.easeOut.config(.75),
            webkitFilter: "blur(2px)",
            filter: "blur(2px)"
        })
        .from(cloud_5, .3, {
            x: "300",
            opacity: 0,
            ease: Back.easeOut.config(.75),
            webkitFilter: "blur(2px)",
            filter: "blur(2px)"
        })
        .add("tv_scale", "-=1.5")
        .to(tv_group, 1, {
            scale: 1.15,
            x: -50,
            y: 2,
            ease: Elastic.easeOut
        }, "tv_scale")
        .to(".tv_shdw", .1, {
            y: 12,
        }, "tv_scale")
        .from(".tv_2", .1, {
            opacity: 0
        }, "tv_scale")
        .from(ven, .5, {
            y: 100,
            ease: Back.easeOut
        }, "tv_scale")
        .add("exit_3", "+=1")
        .to([cloud_4, cloud_5], .5, {
            x: "-300",
            opacity: 0,
            ease: Back.easeOut.config(.75),
            webkitFilter: "blur(2px)",
            filter: "blur(2px)"
        }, "exit_3")
        .to([tv_group, ven], .5, {
            x: -350,
            ease: Back.easeOut
        }, "exit_3")
        //
        // offer
        //
        .from(cambiate, .75, {
            x: -300,
            ease: Elastic.easeOut
        }, offer_start)
        .staggerFrom(kids_2, 1, {
            transformOrigin: "left bottom",
            scale: 0,
            delay: 0.1,
            ease: Elastic.easeOut,
            force3D: true
        }, 0.1, offer_start)
        .staggerFrom(zone_2, .3, {
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
