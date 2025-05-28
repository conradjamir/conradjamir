window.onload = function () {
  if (Enabler.isInitialized()) {
    startAd();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, startAd);
  }
}

function startAd() {

  //Define Variables
  let tlExpand = new TimelineMax(),
    container = document.getElementById("container"),
    player = document.getElementById("player"),
    expandBtn = document.getElementById("expandBtn"),
    closeBtn = document.getElementById("closeBtn"),
    clickTag = document.getElementById("click_tag"),
    clickTagURL = "https://gotmilk.com/",
    isExpanded = false,
    playBtn = document.getElementById("play");

    playBtn.style.display = "block";

  // Initialize Banner
  (function init() {
    
    // Set Expand direction
    Enabler.setExpandingPixelOffsets(300, 0, 600, 600);
    
    // Set Event Listeners
    addListeners();

    // Set Opening Elements starting positions
    openingStartingPositions();
    
    // Set Expanded Elements starting positions
    expandedStartingPositions();

    //run opening animation
    openingAnimation();

    //pause video
    player.pause();

  })();

  /*
  ** Set Starting Positions of Elements
  */
  
  function openingStartingPositions() {

    gsap.set([
      frame1CopyA,
      frame1CopyB,
      expanded,
      expandBtn,
      ctaLeftBurst,
      ctaRightBurst
      ], {
      autoAlpha: 0
    });

    gsap.set([
      frame1CopyA
      ], {
      y: "-=20"
    });

    openingBurstPosition();
  }

  function expandedStartingPositions() {
    // Transparent
    gsap.set([
      efCta,
      efCtaLeftBurst,
      efCtaRightBurst,
      efFrame1CopyA,
      efFrame1CopyB,
      efFrame2CopyA,
      efFrame2CopyB,
      efFrame3CopyA,
      efFrame3CopyB,
      efFrame3Legal
      ], {
      autoAlpha: 0
    });

    gsap.set([
      efFrame1CopyA,
      efFrame2CopyA,
      efFrame3CopyA
      ], {
      y: 0
    });

    gsap.set([
      player
    ], {
      x: 0
    });

    gsap.set([
      efFrame1CopyA,
      efFrame2CopyA,
      efFrame3CopyA
      ], {
      y: "-=20"
    });

    gsap.set([
      ctaLeftBurst,
      ctaRightBurst,
      efCtaLeftBurst,
      efCtaRightBurst
    ], {
      scale: 0.85
    });

    gsap.set([
      player
    ], {
      x: "+=85px"
    });

  }

  function openingBurstPosition() {
    gsap.set([
      ctaLeftBurst,
      ctaRightBurst
    ], {
      scale: 0.85
    });

  }
  
  // Opening Animation
  function openingAnimation() {
    
    // show container/stage
    container.style.display = "block";
    
    let tl = gsap.timeline({ paused: true });

    playBtn.addEventListener("click", function () {
      playBtn.style.display = "none";
      tl.play();
    });

    tl.add("start", "+=0.25")
      .to(frame1CopyA, 1, {
        y: "+=20",
        autoAlpha: 1,
        ease: Elastic.easeOut.config(1, 0.5)
      }, "start")
      .to(frame1CopyB, 0.3, {
        autoAlpha: 1
      }, "-=0.75")
      .to([expandBtn, ctaLeftBurst, ctaRightBurst], 0.3, {
        autoAlpha: 1,
        onComplete: pulse,
        onCompleteParams: [ctaLeftBurst, ctaRightBurst]
      }, "-=0.5");

    return tl;
  }

  // Expanded Animation
  function expandedAnimation() {

    tlExpand.to(efFrame1CopyA, 1, {
        y: "+=20",
        autoAlpha: 1,
        ease: Elastic.easeOut.config(1, 0.5)
      }, "+=0.25")
      .to(efFrame1CopyB, 0.3, {
        autoAlpha: 1
      }, "-=0.75")
      .add("frame2", "+=0.2")
      .to([efFrame1CopyA, efFrame1CopyB], 0.5, {
        autoAlpha: 0
      }, "frame2")
      .to(efFrame2CopyA, 1, {
        y: "+=20",
        autoAlpha: 1,
        ease: Elastic.easeOut.config(1, 0.5)
      }, "-=0.1")
      .to(efFrame2CopyB, 0.3, {
        autoAlpha: 1
      }, "-=0.75")
      .to([efFrame2CopyA, efFrame2CopyB], 0.5, {
        autoAlpha: 0
      }, "+=0.5")
      .add("endFrame", "+=1")
      .to(efFrame3CopyA, 1, {
        y: "+=20",
        autoAlpha: 1,
        ease: Elastic.easeOut.config(1, 0.5)
      }, "endFrame")
      .to([efFrame3CopyB, efFrame3Legal], 0.3, {
        autoAlpha: 1
      }, "-=0.75")
      .to([efCta, efCtaLeftBurst, efCtaRightBurst], 0.3, {
        autoAlpha: 1,
        onComplete: pulse,
        onCompleteParams: [efCtaLeftBurst, efCtaRightBurst]
      }, "-=0.5");

    return tlExpand;
  }

  // Google Expand Banner Handler Name
  function expandStartHandler() {

    //After 15 seconds auto collapse
    closeAfterSetTime(15000);
    
    // Make sure to reset video before playing
    resetVideo();
    
    // Plays Expanded Animation as Video Starts
    playVideo();
    
    Enabler.getExpandDirection();

    let tl = gsap.timeline();

    tl.add("expandVideo")
      .to([expanded, click_tag], 0.5, {
        width: 600
      }, "expandVideo")
      .to(player, 0.5, {
        x: "-=85"
      }, "expandVideo")
      .set(collapsed, {
        autoAlpha: 0
      }, "expandVideo")
      .set(expanded, {
        autoAlpha: 1
      }, "expandVideo");
    
      Enabler.finishExpand();

    return tl;

  }

  // Google Collapse Banner Handler Name
  function collapseStartHandler() {

    // Jumps to end of animation
    tlExpand.seek(tlExpand.duration());
    
    // Stop all animations
    // gsap.killAll();
    
    // Resets Video & Element Positions
    resetVideo();
    expandedStartingPositions();
    openingBurstPosition();
    
    // Re-start Pulse Animation
    pulse(ctaLeftBurst, ctaRightBurst);

    let tl = gsap.timeline();

    tl.add("collapse")

      .to(collapsed, 0, {
        autoAlpha: 1
      }, "collapse")
      .to([expanded, click_tag], 0, {
        width: 300
      }, "collapse")
      .to(expanded, 0, {
        autoAlpha: 0
      });
    
    Enabler.finishCollapse();

    return tl;

  }

  // Function to play Expanded Animation as Video Starts
  function playVideo() {

    var playPromise = player.play();

    if (playPromise !== undefined) {
      playPromise.then(function() {
          // Automatic playback started!
          // Show Expanded Animation
          expandedAnimation();
        })
        .catch(function() {
          // Auto-play was prevented
          // Show paused UI.
        });
    }

  }

  // Function to reset video
  function resetVideo() {
    player.pause();
    //Rewind to beginning
    player.currentTime = 0;
  }

  function videoEnded() {
    console.log("Video ended");
  }

   // Burst Animation
  function pulse(left, right) {
    let tl = gsap.timeline({
      yoyo: true,
      repeat: 6
    });

    tl.to([left, right], 0.5, {
      scale: 1.1
    });

  }

  function exitClickHandler() {
    if (isExpanded) {
      actionClickHandler();
    }

    Enabler.exitOverride("MooMoney", clickTagURL);
  }

  function expandFinishHandler() {
    // Convenience callback for setting
    // final state when expanded.
    isExpanded = true;
  }

  function collapseFinishHandler() {
    // Convenience callback for setting
    // final state when collapsed.
    stopTimer();
    isExpanded = false;
  }

  function actionClickHandler() {
    isExpanded ? Enabler.requestCollapse() : Enabler.requestExpand();
  }

  function closeAfterSetTime(sec) {
    timer = setTimeout(actionClickHandler, sec);
  }

  function stopTimer() {
    clearTimeout(timer);
    console.log("timer ended");
  }
  
  function addListeners() {

    Enabler.addEventListener(
      studio.events.StudioEvent.EXPAND_START,
      expandStartHandler);
    Enabler.addEventListener(
      studio.events.StudioEvent.EXPAND_FINISH,
      expandFinishHandler);
    Enabler.addEventListener(
      studio.events.StudioEvent.COLLAPSE_START,
      collapseStartHandler);
    Enabler.addEventListener(
      studio.events.StudioEvent.COLLAPSE_FINISH,
      collapseFinishHandler);

    // Detect when video ends
    player.addEventListener('ended', videoEnded, false);
    
    expandBtn.addEventListener('click', actionClickHandler, false);

    closeBtn.addEventListener('click', actionClickHandler, false);

    clickTag.addEventListener('click', exitClickHandler, false);
  }

}
