/* 
Author: Conrad Jamir - Front End Software Engineer
Date Modified: November 02, 2018
*/
window.onload = function () {

   let playBtn = document.getElementById("play");
   let restartBtn = document.getElementById("restart");

   //Define Variables
   let tlMain = new TimelineMax({paused: true}),
      banner = {
         width: 300,
         height: 250
      },
      offPushLeft = "-=" + banner.width,
      offPushRight = "+=" + banner.width,
      offPushTop = "-=" + banner.height,
      offPushBottom = "+=" + banner.height,
      frame2Reveal = ".frame2Reveal",
      boltOn = document.getElementById("endFrameBoltOn"),
      boltOn2 = document.getElementById("endFrameBoltOn2"),
      lockUp = document.getElementById("endFrameLockupImage"),
      dynamicLockUpImg = lockUp ? lockUp.getElementsByTagName('img')[0] : null,
      lockUpSrc = dynamicLockUpImg ? dynamicLockUpImg.src : '',
      boltOnVisible = false,
      boltOn2Visible = false,
      boltOnAndLockup = false;

   //Conditions
   if (boltOn.innerHTML !== '' || null) {
      boltOnVisible = true;
   }
   if (boltOn2.innerHTML !== '' || null) {
      boltOn2Visible = true;
   }
   if (boltOnVisible && lockUpSrc.includes(".png")) {
      boltOnAndLockup = true;
   }

   (function init() {

      //set starting positions

      //devices
      TweenMax.set(frame1Phone, {
         x: "-=103",
         y: "-=49"
      });
      TweenMax.set(frame2PhoneContent, {
         x: "-=103",
         y: "+=49"
      });
      TweenMax.set([frame1Tablet, frame2TabletContent], {
         x: "-=221",
         y: "+=99"
      });
      TweenMax.set(frame1Laptop, {
         x: "-=184",
         y: "+=83"
      });
      TweenMax.set(frame2LaptopContent, {
         x: "-=184",
         y: "-=69"
      });
      TweenMax.set([frame1Tv, frame2TvContent], {
         x: "+=174",
         y: "+=74"
      });

      //off to the left
      TweenMax.set([
         frame3CopyAHolder,
         frame3Image,
         frame4CopyAHolder,
         frame4Image,
         bfRibbon
      ], {
         x: offPushLeft
      });

      //off to the right
      TweenMax.set([
         endFrameLockupImage,
         endFrameBoltOnHolder,
         endFrameBoltOn2Holder,
         phone
      ], {
         x: offPushRight
      });

      //off to the bottom
      TweenMax.set([
         bottomOfferPriceHolder
      ], {
         y: offPushBottom
      });

      //off to the top
      TweenMax.set([
         frame1and2CopyA
      ], {
         y: offPushTop
      });

      // Transparent
      TweenMax.set([
         frame2Reveal,
         ctaBtn,
         endFrameHeaderHolder,
         endFrameBoltOn2Holder
      ], {
         autoAlpha: 0
      });

      //Custom
      TweenMax.set([legalCopyHolder], {
         y: "+=50"
      });

      TweenMax.set([divider], {
         autoAlpha: 0,
         scaleY: 0
      });

      TweenMax.set([offerPriceHolder], {
         width: 150, //center text on half of banner width
         x: offPushLeft,
         y: "+=84" //position down from vertical center
      });

      //run main animation
      playBtn.style.display = "block";
      animation();
      ctaAutoSize();
   })();

   function frame1() {
      let tl = new TimelineMax();

      tl.to(frame1and2CopyA, 0.5, {
            y: offPushBottom
         })
         .add("devices")
         .to([frame1Phone], 0.5, {
            x: "+=103",
            y: "+=49",
            ease: Power4.easeOut
         }, "devices")
         .to([frame1Tablet], 0.5, {
            x: "+=221",
            y: "-=99",
            ease: Power4.easeOut
         }, "devices")
         .to([frame1Tv], 0.5, {
            x: "-=174",
            y: "-=74",
            ease: Power4.easeOut
         }, "devices+=0.1")

         .to([frame1Laptop], 0.5, {
            x: "+=184",
            y: "-=83",
            ease: Power4.easeOut
         }, "devices+=0.2")

      return tl;
   }

   function frame2() {
      let tl = new TimelineMax();

      tl.add("content")
         .staggerTo(frame2Reveal, 0.75, {
            autoAlpha: 1
         }, 0.1, "content")
         .to([frame2PhoneContent], 0.5, {
            x: "+=103",
            y: "-=49",
            ease: Power4.easeOut
         }, "content")
         .to([frame2TabletContent], 0.5, {
            x: "+=221",
            y: "-=99",
            ease: Power4.easeOut
         }, "content")
         .to([frame2LaptopContent], 0.5, {
            x: "+=184",
            y: "+=69",
            ease: Power4.easeOut
         }, "content")
         .to([frame2TvContent], 0.5, {
            x: "-=174",
            y: "-=74",
            ease: Power4.easeOut
         }, "content");

      return tl;
   }

   function frame3() {
      let tl = new TimelineMax();

      tl.add("exit")
         .to(frame1and2CopyA, 0.5, {
            y: offPushTop,
            ease: Power4.easeIn
         }, "exit")
         .to([frame1Laptop, frame2LaptopContent], 0.5, {
            x: "-=184",
            y: "+=83",
            ease: Power4.easeIn
         }, "exit")
         .to([frame1Tv, frame2TvContent], 0.5, {
            x: "+=174",
            y: "+=74",
            ease: Power4.easeIn
         }, "exit")
         .to([frame1Phone, frame2PhoneContent], 0.5, {
            x: "-=103",
            y: "-=49",
            ease: Power4.easeIn
         }, "exit+=0.1")
         .to([frame1Tablet, frame2TabletContent], 0.5, {
            x: "-=221",
            y: "+=99",
            ease: Power4.easeIn
         }, "exit+=0.2")
         .add("frame3")
         .staggerTo([frame3CopyAHolder, frame3Image], 0.5, {
            x: offPushRight,
            ease: Power4.easeOut
         }, 0.1, "frame3")
         .to(bottomOfferPriceHolder, 0.5, {
            y: offPushTop,
            ease: Power4.easeOut
         }, "frame3");

      return tl;
   }

   function frame4() {
      let tl = new TimelineMax();
      tl.add("frame4")
         .staggerTo([frame3CopyAHolder, frame3Image], 0.5, {
            x: offPushRight,
            ease: Power4.easeIn
         }, 0.1, "frame4")
         .staggerTo([frame4CopyAHolder, frame4Image], 0.5, {
            x: offPushRight,
            ease: Power4.easeOut,
            onComplete: playConfetti
         }, 0.1)

      return tl;
   }

   function endFrame() {
      let tl = new TimelineMax();

      tl.add("endFrame")
         .staggerTo([frame4CopyAHolder, frame4Image], 0.5, {
            x: offPushRight,
            ease: Power4.easeIn
         }, 0.1, "endFrame")
         .to(bottomOfferPriceHolder, 0.5, {
            y: offPushBottom,
            ease: Power4.easeIn
         }, "endFrame")
         .to(bfRibbon, 0.5, {
            x: offPushRight,
            ease: Power4.easeOut
         })
         .to(endFrameHeaderHolder, 0.5, {
            autoAlpha: 1
         })
         .add("offerLockup", "-=0.3")
         .to(divider, 0.3, {
            autoAlpha: 1,
            scaleY: 1,
            ease: Power4.easeOut
         }, "offerLockup")
         .to(offerPriceHolder, 0.5, {
            x: offPushRight,
            ease: Power4.easeOut
         }, "offerLockup")
         .add(lockUpAndOrBoltOn(), "offerLockup")
         .to(ctaBtn, 0.5, {
            autoAlpha: 1
         })
         .to(legalCopyHolder, 0.5, {
            y: "-=50",
            ease: Power4.easeOut
         }, "legalPhone")
         .to(phone, 0.5, {
            x: offPushLeft,
            ease: Power4.easeOut
         }, "legalPhone")
         .to(ctaBtn, .5, {backgroundPosition:'100px 0'})
         .to(
            restartBtn,
            0.5,
         {
            display: "block",
         }, "+=1.25");

      return tl;
   }

   // Conditional Animation if Using LockUp Image or Bolt-On
   function lockUpAndOrBoltOn() {
      let tl = new TimelineMax();

      if (boltOnVisible && boltOn2Visible == false && boltOnAndLockup == false) {

         console.log('BoltOn Only');

         TweenMax.set(endFrameLockupImage, {
            autoAlpha: 0
         });
         tl.to(endFrameBoltOnHolder, 0.3, {
            x: offPushLeft,
            ease: Power1.easeOut
         }, "offerLockup")

      } else if (boltOnVisible && boltOnAndLockup) {

         console.log('BoltOn and LockUp');

         TweenMax.set(endFrameBoltOnHolder, {
            x: "-=300",
            autoAlpha: 0
         });
         tl.to(endFrameLockupImage, 0.3, {
               x: offPushLeft,
               ease: Power1.easeOut
            }, "offerLockup")
            .to(endFrameLockupImage, 0.3, {
               autoAlpha: 0
            }, "+=1.5")
            .to(endFrameBoltOnHolder, 0.3, {
               autoAlpha: 1
            })

      } else if (boltOnVisible && boltOn2Visible) {

         console.log('BoltOn and BoltOn2');

         TweenMax.set(endFrameBoltOn2Holder, {
            x: "-=300",
            autoAlpha: 0
         });
         tl.to(endFrameBoltOnHolder, 0.3, {
               x: offPushLeft,
               ease: Power4.easeOut
            }, "offerLockup")
            .to(endFrameBoltOnHolder, 0.5, {
               autoAlpha: 0,
            }, "+=2")
            .to(endFrameBoltOn2Holder, 0.5, {
               autoAlpha: 1
            })

      } else {

         console.log('LockUp Only');

         tl.to(endFrameLockupImage, 0.3, {
            x: offPushLeft,
            ease: Power1.easeOut
         }, "offerLockup")
      }

      return tl;
   }

   // Autosize CTA Button
   function ctaAutoSize() {
      let cta = document.getElementById('ctaBtn'),
         ctaText = document.getElementById('ctaText'),
         ctaWidth = ctaText.offsetWidth + 37 + "px";

      TweenMax.set(cta, {
         maxWidth: ctaWidth
      });
   }
   
   // Main Animation
   function animation() {

      document.getElementById("container").style.display = "block";

      tlMain
         .add(frame1(), "+=0.25")
         .add(frame2(), "+=0.75")
         .add(frame3(), "+=1.5")
         .add(frame4(), "+=2.5")
         .add(endFrame(), "+=2.5");

      console.log(tlMain.duration());

      playBtn.addEventListener("click", function () {
                playBtn.style.display = "none";
				tlMain.play();
			});

      restartBtn.addEventListener("click", function () {
         restartBtn.style.display = "none";
            
         window.location.reload();
      });
   }
}
