anim_7438();

function anim_7438() {
  let id = "anim_7438";

  let scriptAnimArr = [
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/MotionPathPlugin.min.js",
  ];

  function gsapAnim() {
    gsap.registerPlugin(MotionPathPlugin);
    MotionPathPlugin.convertToPath("polyline");
    gsap.set(id, { opacity: 1 });

    gsap.set(
      "#radianceBtn1, #radianceBtn2, #radianceBtn3, #radianceBtn4, #radianceBtn5",
      { opacity: 0.5 }
    );
    gsap.set("#lampBtn1 > *, #lampOBtn3 > *, #lampOBtn4 > *", {
      opacity: 0.1,
      scale: 3,
      transformOrigin: "center",
    });
    gsap.set("#lampOBtn5 > *", { opacity: 0.1 });
    gsap.set("#lampBtn2 > *", { scale: 2, transformOrigin: "center" });
    gsap.set("#lampBtn5 > *", { opacity: 0 });
    gsap.set("#lamp1Btn3 > *, #lamp2Btn3 > *, #lamp3Btn3 > *", {
      scale: 1.5,
      transformOrigin: "center",
    });
    gsap.set("#gL2, #gL3, #gL4, #gL5", { opacity: 0 });
    gsap.set("#lightBtn2, #lightBtn3, #lightBtn4, #lightBtn5", { opacity: 0 });
    gsap.set("#lampO1Btn4 > *", {
      opacity: 0.3,
      scale: 2,
      transformOrigin: "center",
    });

    const diamond = [
      "#diamondBtn1",
      "#diamondBtn2",
      "#diamondBtn3",
      "#diamondBtn4",
      "#diamondBtn5",
    ];

    diamond.forEach((btn) => {
      gsap.to(`${btn} > *`, {
        y: -20,
        scale: 1.1,
        delay: -3,
        duration: 1,
        transformOrigin: "center",
        ease: "sine.inOut",
        stagger: { each: 0.25, repeat: -1, yoyo: true },
      });
    });
    gsap
      .timeline({
        repeat: -1,
        yoyo: true,
        defaults: { ease: "sine.inOut", duration: 1 },
      })
      .to("#handR", { rotation: 10, transformOrigin: "center" })
      .to("#leg", { rotation: -10, transformOrigin: "center" }, "<");
    gsap
      .timeline({
        repeat: -1,
        yoyo: true,
        defaults: { ease: "sine.inOut", duration: 1 },
      })
      .to("#handL", { rotation: -20, transformOrigin: "center" })
      .to(
        "#pig",
        { y: -10, scaleY: 1.05, scaleX: 0.95, transformOrigin: "center" },
        "<"
      )
      .to("#leg", { rotation: -10, transformOrigin: "center" }, "<")
      .to("#leg2", { rotation: -10, transformOrigin: "center" }, "<");

    gsap
      .timeline({
        repeat: -1,
        defaults: { ease: "sine.inOut", duration: 0.25 },
      })
      .to("#eye1, #eye2", {
        scaleY: 0.1,
        transformOrigin: "center",
        repeat: 1,
        yoyo: true,
      })
      .to("#face", { y: 2, repeat: 1, yoyo: true }, "<")
      .to(
        "#ear",
        { scaleY: 1.05, transformOrigin: "50% 100%", repeat: 1, yoyo: true },
        "<"
      )

      .to("#eye1, #eye2", {
        delay: 0.5,
        scaleY: 0.1,
        transformOrigin: "center",
        repeat: 3,
        yoyo: true,
      })
      .to("#face", { y: 2, repeat: 3, yoyo: true }, "<")
      .to(
        "#ear",
        { scaleY: 1.05, transformOrigin: "50% 100%", repeat: 3, yoyo: true },
        "<"
      )

      .to("#eye1, #eye2", {
        delay: 0.5,
        scaleY: 0.1,
        transformOrigin: "center",
        repeat: 1,
        yoyo: true,
      })
      .to("#face", { y: 2, repeat: 1, yoyo: true }, "<")
      .to(
        "#ear",
        { scaleY: 1.05, transformOrigin: "50% 100%", repeat: 1, yoyo: true },
        "<"
      );

    ////1
    const anim1 = gsap
      .timeline({ paused: false })
      .to("#radianceBtn1", {
        opacity: 1,
        ease: "sine.inOut",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      })
      .to(
        "#lampBtn1 > *",
        {
          opacity: 0.4,
          scale: 1,
          transformOrigin: "center",
          delay: -50,
          ease: "sine.inOut",
          duration: 0.75,
          stagger: { each: 0.35, repeat: -1, yoyo: true },
        },
        "<"
      )
      .to(
        "#grWBtn1 > *",
        {
          opacity: 0.1,
          ease: "sine.inOut",
          duration: 0.75,
          stagger: { each: 0.35, repeat: -1, yoyo: true },
        },
        "<"
      );

    const anim1L = gsap.timeline({ paused: false });

    for (let i = 1; i <= 12; i++) {
      anim1L.to(
        `#b1R${i}`,
        {
          repeat: -1,
          duration: 6,
          ease: "none",
          motionPath: {
            path: "#pL1",
            align: "#pL1",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },
        },
        ">-5.3"
      );
    }

    const btn1 = document.querySelector("#btn1");
    btn1.addEventListener("click", function () {
      gsap.set("#gL2, #gL3, #gL4, #gL5", { opacity: 0 });
      gsap.set("#gL1", { opacity: 1 });
      gsap.set("#lightBtn2, #lightBtn3, #lightBtn4, #lightBtn5", {
        opacity: 0,
      });
      gsap.to("#lightBtn1", {
        opacity: 0.5,
        ease: "sine.inOut",
        duration: 0.2,
      });
    });
    ///2
    const anim2 = gsap
      .timeline({ paused: false })
      .to("#radianceBtn2", {
        opacity: 0.3,
        ease: "sine.inOut",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      })
      .to(
        "#lampBtn2 > *",
        {
          opacity: 0.1,
          scale: 1,
          transformOrigin: "center",
          delay: -50,
          ease: "sine.inOut",
          duration: 1.5,
          stagger: { each: 0.35, from: "random", repeat: -1, yoyo: true },
        },
        "<"
      )
      .to(
        "#grWBtn2 > *",
        {
          opacity: 0.4,
          ease: "sine.inOut",
          duration: 0.75,
          stagger: { each: 0.35, repeat: -1, yoyo: true },
        },
        "<"
      );

    const btn2 = document.querySelector("#btn2");
    btn2.addEventListener("click", function () {
      gsap.set("#gL1, #gL3, #gL4, #gL5", { opacity: 0 });
      gsap.set("#gL2", { opacity: 1 });
      gsap.set("#lightBtn1, #lightBtn3, #lightBtn4, #lightBtn5", {
        opacity: 0,
      });
      gsap.to("#lightBtn2", {
        opacity: 0.5,
        ease: "sine.inOut",
        duration: 0.2,
      });
    });
    // ///3
    const anim3 = gsap
      .timeline({ paused: false })
      .to("#radianceBtn3", {
        opacity: 0.3,
        ease: "sine.inOut",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      })
      .to(
        "#lampOBtn3 > *",
        {
          opacity: 0.4,
          scale: 1,
          transformOrigin: "center",
          delay: -50,
          ease: "sine.inOut",
          duration: 0.75,
          stagger: { each: 0.35, repeat: -1, yoyo: true },
        },
        "<"
      )
      .to(
        "#grWBtn3 > *",
        {
          opacity: 0.4,
          ease: "sine.inOut",
          duration: 0.75,
          stagger: { each: 0.35, repeat: -1, yoyo: true },
        },
        "<"
      );

    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to("#lamp1Btn3 > *", {
        fill: "#ff3364",
        scale: 1,
        transformOrigin: "center",
        ease: "sine.inOut",
        duration: 0.25,
        stagger: { each: 0.1, from: "center" },
      })
      .to(
        "#lamp1Btn3 > *",
        {
          fill: "#ffffff",
          scale: 1.5,
          transformOrigin: "center",
          ease: "sine.inOut",
          duration: 0.25,
          stagger: { each: 0.1, from: "center" },
        },
        ">-1.5"
      );

    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to("#lamp2Btn3 > *", {
        fill: "#ff3364",
        scale: 1,
        transformOrigin: "center",
        ease: "sine.inOut",
        duration: 0.25,
        stagger: { each: 0.1, from: "center" },
      })
      .to(
        "#lamp2Btn3 > *",
        {
          fill: "#ffffff",
          scale: 1.5,
          transformOrigin: "center",
          ease: "sine.inOut",
          duration: 0.25,
          stagger: { each: 0.1, from: "center" },
        },
        ">-1.5"
      );

    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to("#lamp3Btn3 > *", {
        fill: "#ff3364",
        scale: 1,
        transformOrigin: "center",
        ease: "sine.inOut",
        duration: 0.25,
        stagger: { each: 0.1, from: "center" },
      })
      .to(
        "#lamp3Btn3 > *",
        {
          fill: "#ffffff",
          scale: 1.5,
          transformOrigin: "center",
          ease: "sine.inOut",
          duration: 0.25,
          stagger: { each: 0.1, from: "center" },
        },
        ">-1.5"
      );
    const btn3 = document.querySelector("#btn3");
    btn3.addEventListener("click", function () {
      gsap.set("#gL1, #gL2, #gL4, #gL5", { opacity: 0 });
      gsap.set("#gL3", { opacity: 1 });
      gsap.set("#lightBtn1, #lightBtn2, #lightBtn4, #lightBtn5", {
        opacity: 0,
      });
      gsap.to("#lightBtn3", {
        opacity: 0.5,
        ease: "sine.inOut",
        duration: 0.2,
      });
    });
    ///4
    const anim4 = gsap
      .timeline({ paused: false })
      .to("#radianceBtn4", {
        opacity: 0.3,
        ease: "sine.inOut",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      })
      .to(
        "#grWBtn4 > *",
        {
          opacity: 0.4,
          ease: "sine.inOut",
          duration: 0.75,
          stagger: { each: 0.35, repeat: -1, yoyo: true },
        },
        "<"
      );

    gsap
      .timeline({ repeat: -1, repeatDelay: 1 })
      .to("#lampBtn4 > *", { opacity: 0, ease: "sine.inOut", duration: 0.75 })
      .to(
        "#lampOBtn4 > *",
        {
          opacity: 0.4,
          scale: 1,
          transformOrigin: "center",
          ease: "sine.inOut",
          duration: 0.75,
        },
        "<"
      )

      .to("#lampBtn4 > *", {
        delay: 1.5,
        opacity: 1,
        ease: "sine.inOut",
        duration: 0.75,
      })
      .to(
        "#lampOBtn4 > *",
        {
          opacity: 0.1,
          scale: 3,
          transformOrigin: "center",
          ease: "sine.inOut",
          duration: 0.75,
        },
        "<"
      );

    const btn4 = document.querySelector("#btn4");
    btn4.addEventListener("click", function () {
      gsap.set("#gL1, #gL2, #gL3, #gL5", { opacity: 0 });
      gsap.set("#gL4", { opacity: 1 });
      gsap.set("#lightBtn1, #lightBtn2, #lightBtn3, #lightBtn5", {
        opacity: 0,
      });
      gsap.to("#lightBtn4", {
        opacity: 0.5,
        ease: "sine.inOut",
        duration: 0.2,
      });
    });
    ///5
    const anim5 = gsap
      .timeline({ paused: false })
      .to("#radianceBtn5", {
        opacity: 0.3,
        ease: "sine.inOut",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      })
      .to(
        "#grWBtn5 > *",
        {
          opacity: 0.4,
          ease: "sine.inOut",
          duration: 0.75,
          stagger: { each: 0.35, repeat: -1, yoyo: true },
        },
        "<"
      );
    const anim5L = gsap
      .timeline({ repeat: -1 })
      .to("#lampBtn5 > *", {
        opacity: 1,
        ease: "none",
        duration: 0.1,
        stagger: { each: 0.05 },
      })
      .to(
        "#lampOBtn5 > *",
        {
          scale: 3,
          transformOrigin: "center",
          ease: "none",
          duration: 0.1,
          stagger: { each: 0.05 },
        },
        "<"
      )

      .to(
        "#lampBtn5 > *",
        { opacity: 0, ease: "none", duration: 0.2, stagger: { each: 0.04 } },
        ">-1.5"
      )
      .to(
        "#lampOBtn5 > *",
        {
          scale: 1,
          transformOrigin: "center",
          ease: "none",
          duration: 0.2,
          stagger: { each: 0.04 },
        },
        "<"
      );

    const btn5 = document.querySelector("#btn5");
    btn5.addEventListener("click", function () {
      anim5L.restart();
      gsap.set("#gL1, #gL2, #gL3, #gL4", { opacity: 0 });
      gsap.set("#gL5", { opacity: 1 });
      gsap.set("#lightBtn1, #lightBtn2, #lightBtn3, #lightBtn4", {
        opacity: 0,
      });
      gsap.to("#lightBtn5", {
        opacity: 0.5,
        ease: "sine.inOut",
        duration: 0.2,
      });
    });
  }

  let contents = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1276.35" height="1008.71" viewBox="0 0 1276.35 1008.71">
        <defs>
          <linearGradient id="linear-gradient" x1="346.34" y1="675.29" x2="346.63" y2="564.86" gradientTransform="matrix(-1, 0, 0, 1, 1458.63, 0)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#33e3ff"/>
            <stop offset="1" stop-color="#f7a9dd"/>
          </linearGradient>
          <linearGradient id="linear-gradient-2" x1="-309.44" y1="2192.37" x2="-312.01" y2="2167.59" gradientTransform="matrix(-0.77, -0.63, -0.63, 0.77, 2273.88, -1278.43)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#33e3ff"/>
            <stop offset="1" stop-color="#40dffd"/>
          </linearGradient>
          <linearGradient id="linear-gradient-3" x1="316.24" y1="106.45" x2="314.36" y2="88.33" gradientTransform="matrix(-0.98, 0.2, 0.2, 0.98, 1410.78, 448.44)" xlink:href="#linear-gradient-2"/>
          <linearGradient id="linear-gradient-4" x1="985.39" y1="567.76" x2="985.39" y2="778.16" gradientTransform="matrix(-1, 0, 0, 1, 1458.63, 0)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#1395c9"/>
            <stop offset="1" stop-color="#014385"/>
          </linearGradient>
          <linearGradient id="linear-gradient-5" x1="985.39" y1="592.72" x2="985.39" y2="759.27" gradientTransform="matrix(-1, 0, 0, 1, 1458.63, 0)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#0165a8"/>
            <stop offset="1" stop-color="#0b76b3"/>
          </linearGradient>
          <linearGradient id="linear-gradient-6" x1="1416.13" y1="788.56" x2="1420.42" y2="732" gradientTransform="matrix(-1, 0, 0, 1, 1934.43, 0)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#ff95c3"/>
            <stop offset="1" stop-color="#eebff9"/>
          </linearGradient>
          <linearGradient id="linear-gradient-7" x1="378.44" y1="727.87" x2="378.64" y2="626.44" xlink:href="#linear-gradient"/>
          <linearGradient id="linear-gradient-8" x1="-4454.97" y1="-1105.49" x2="-4457.54" y2="-1130.27" gradientTransform="matrix(0.7, -0.63, 0.57, 0.77, 4847.13, -1278.43)" xlink:href="#linear-gradient-2"/>
          <linearGradient id="linear-gradient-9" x1="-4864.04" y1="1213.72" x2="-4865.92" y2="1195.6" gradientTransform="matrix(0.88, 0.2, -0.18, 0.98, 5624.87, 448.44)" xlink:href="#linear-gradient-2"/>
          <linearGradient id="linear-gradient-10" x1="170.37" y1="1594.34" x2="189.01" y2="1594.34" gradientTransform="matrix(-0.93, -0.36, -0.36, 0.93, 1811.61, -735.15)" xlink:href="#linear-gradient-2"/>
          <linearGradient id="linear-gradient-11" x1="804.05" y1="810.76" x2="804.38" y2="659.4" xlink:href="#linear-gradient"/>
          <linearGradient id="linear-gradient-12" x1="-5173.02" y1="1393.17" x2="-5175.6" y2="1368.38" gradientTransform="matrix(0.89, 0.3, -0.39, 0.88, 5813.5, 1029.57)" xlink:href="#linear-gradient-2"/>
          <linearGradient id="linear-gradient-13" x1="-5117.09" y1="-354.41" x2="-5118.97" y2="-372.53" gradientTransform="matrix(0.82, -0.37, 0.45, 0.89, 5009.87, -874.79)" xlink:href="#linear-gradient-2"/>
          <linearGradient id="linear-gradient-14" x1="-2509.6" y1="3416.18" x2="-2490.96" y2="3416.18" gradientTransform="matrix(0.18, -0.98, -0.98, -0.18, 4518.82, -1140.86)" xlink:href="#linear-gradient-2"/>
          <linearGradient id="linear-gradient-15" x1="1154.75" y1="688.93" x2="1144.42" y2="589.48" xlink:href="#linear-gradient"/>
          <linearGradient id="linear-gradient-16" x1="-5648.47" y1="185.37" x2="-5651.04" y2="160.58" gradientTransform="matrix(0.94, 0, -0.1, 0.96, 5629.29, 463.44)" xlink:href="#linear-gradient-2"/>
          <linearGradient id="linear-gradient-17" x1="-4625.06" y1="2955.46" x2="-4626.94" y2="2937.33" gradientTransform="matrix(0.52, 0.74, -0.79, 0.6, 5040, 2263.35)" xlink:href="#linear-gradient-2"/>
          <linearGradient id="linear-gradient-18" x1="958.58" y1="1813.68" x2="977.23" y2="1813.68" gradientTransform="matrix(-0.93, -0.36, -0.36, 0.93, 1811.61, -735.15)" xlink:href="#linear-gradient-2"/>
          <clipPath id="clip-path">
            <path d="M802.5,525c-.52-2,1-4.19,3.49-4.88s4.86.37,5.38,2.38-1,4.18-3.48,4.88S803,527,802.5,525Zm19.67,10.6c2.45-.7,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S819.72,536.31,822.17,535.62Zm14.29,8.22c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S834,544.53,836.46,543.84Zm14.29,8.22c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S848.3,552.75,850.75,552.06ZM865,560.28c2.45-.69,4-2.88,3.49-4.88s-2.94-3.07-5.38-2.38-4,2.88-3.49,4.88S862.59,561,865,560.28Zm14.29,8.22c2.45-.69,4-2.88,3.49-4.88s-2.94-3.07-5.39-2.38-4,2.88-3.48,4.88S876.88,569.19,879.33,568.5Zm14.29,8.22c2.45-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S891.17,577.41,893.62,576.72Zm14.28,8.22c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S905.46,585.63,907.9,584.94Zm14.29,8.22c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S919.74,593.85,922.19,593.16Zm14.14-9.44c2.45-.7,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S933.89,584.41,936.33,583.72Zm10-14.22c2.45-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S943.91,570.19,946.36,569.5Zm10-14.22c2.45-.7,4-2.88,3.49-4.88s-2.94-3.07-5.39-2.38-4,2.88-3.48,4.88S953.93,556,956.38,555.28Zm10-14.23c2.45-.69,4-2.87,3.49-4.87s-2.94-3.07-5.38-2.38-4,2.88-3.49,4.88S964,541.75,966.4,541.05Zm10-14.22c2.45-.69,4-2.87,3.49-4.87s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S974,527.53,976.42,526.83Zm10-14.22c2.45-.69,4-2.87,3.49-4.87s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S984,513.31,986.44,512.61Zm10-14.22c2.45-.69,4-2.87,3.49-4.87s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S994,499.09,996.46,498.39Zm10-14.22c2.45-.69,4-2.87,3.48-4.87s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S1004,484.87,1006.49,484.17Zm64,13.48c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.88S1068,498.34,1070.47,497.65Zm-16-3.37c2.45-.69,4-2.87,3.49-4.88s-2.93-3.06-5.38-2.37-4,2.87-3.49,4.88S1052,495,1054.47,494.28Zm-16-3.37c2.45-.69,4-2.87,3.49-4.88s-2.94-3.06-5.39-2.37-4,2.87-3.48,4.88S1036,491.6,1038.48,490.91Zm-16-3.37c2.45-.69,4-2.87,3.49-4.88s-2.93-3.06-5.38-2.37-4,2.88-3.49,4.88S1020,488.23,1022.48,487.54ZM793.6,519.18c2.45-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.48,4.88S791.15,519.87,793.6,519.18ZM779.31,511c2.45-.7,4-2.88,3.49-4.88s-2.94-3.07-5.39-2.38-4,2.88-3.48,4.88S776.86,511.65,779.31,511ZM765,502.74c2.45-.7,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S762.57,503.43,765,502.74Zm-16.43-4.26c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.88S746.15,499.17,748.59,498.48Zm-17.26,9.93c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S728.89,509.1,731.33,508.41Zm-17.25,9.92c2.44-.69,4-2.87,3.48-4.88s-2.93-3.06-5.38-2.37-4,2.88-3.49,4.88S711.63,519,714.08,518.33Zm-17.26,9.93c2.44-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.87S694.37,529,696.82,528.26Zm-17.26,9.93c2.44-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S677.11,538.88,679.56,538.19Zm-17.26,9.92c2.44-.69,4-2.87,3.48-4.88s-2.93-3.06-5.38-2.37-4,2.87-3.49,4.88S659.85,548.8,662.3,548.11ZM645,558c2.44-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.87S642.59,558.73,645,558ZM627.78,568c2.44-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S625.33,568.66,627.78,568Zm-17.26,9.92c2.44-.69,4-2.87,3.48-4.88s-2.93-3.06-5.38-2.37-4,2.87-3.49,4.88S608.07,578.58,610.52,577.89Zm-17.26,9.93c2.44-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S590.81,588.51,593.26,587.82ZM576,597.75c2.44-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S573.55,598.44,576,597.75Zm-14.47,2.89c2.45-.69,4-2.88,3.49-4.88s-2.94-3.07-5.39-2.38-4,2.88-3.48,4.88S559.08,601.33,561.53,600.64Zm-10.72-12.55c2.45-.69,4-2.87,3.49-4.87s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S548.36,588.79,550.81,588.09ZM540.1,575.55c2.44-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.88S537.65,576.24,540.1,575.55ZM529.38,563c2.45-.7,4-2.88,3.49-4.88s-2.94-3.07-5.38-2.38-4,2.88-3.49,4.88S526.93,563.7,529.38,563Zm-10.72-12.55c2.45-.69,4-2.87,3.49-4.88s-2.93-3.06-5.38-2.37-4,2.87-3.49,4.88S516.21,551.15,518.66,550.46ZM508,537.92c2.45-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.48,4.88S505.5,538.61,508,537.92Zm-64.3-75.27c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.88S441.2,463.34,443.65,462.65Zm10.72,12.55c2.45-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.48,4.88S451.92,475.89,454.37,475.2Zm10.71,12.54c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.87S462.63,488.43,465.08,487.74Zm10.72,12.54c2.45-.69,4-2.87,3.49-4.88s-2.94-3.06-5.38-2.37-4,2.88-3.49,4.88S473.35,501,475.8,500.28Zm10.72,12.55c2.44-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S484.07,513.52,486.52,512.83Zm10.71,12.54c2.45-.69,4-2.87,3.49-4.88s-2.93-3.06-5.38-2.37-4,2.87-3.49,4.88S494.78,526.06,497.23,525.37Zm-182.35-89.6c2.45-.69,4-2.87,3.49-4.87s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S312.44,436.47,314.88,435.77Zm17.89.3c2.45-.69,4-2.87,3.49-4.88s-2.93-3.06-5.38-2.37-4,2.87-3.49,4.88S330.32,436.76,332.77,436.07Zm17.89.3c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.88S348.21,437.06,350.66,436.37Zm17.89.3c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S366.1,437.36,368.55,436.67Zm17.89.3c2.45-.7,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S384,437.66,386.44,437Zm17.89.29c2.45-.69,4-2.87,3.49-4.88s-2.94-3.06-5.38-2.37-4,2.88-3.49,4.88S401.88,438,404.33,437.26Zm17.89.3c2.45-.69,4-2.87,3.49-4.88s-2.94-3.06-5.39-2.37-4,2.87-3.48,4.88S419.77,438.25,422.22,437.56Zm10.72,12.55c2.44-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S430.49,450.8,432.94,450.11Z" fill="none"/>
          </clipPath>
          <linearGradient id="Градієнт_без_назви_33" data-name="Градієнт без назви 33" x1="633.48" y1="673.65" x2="701.65" y2="633.05" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="0.05" stop-color="#f9fcff"/>
            <stop offset="0.13" stop-color="#e8f4ff"/>
            <stop offset="0.21" stop-color="#cce7ff"/>
            <stop offset="0.3" stop-color="#a6d4ff"/>
            <stop offset="0.4" stop-color="#74bdff"/>
            <stop offset="0.5" stop-color="#38a0ff"/>
            <stop offset="0.51" stop-color="#339eff"/>
            <stop offset="0.6" stop-color="#6b81d5"/>
            <stop offset="0.69" stop-color="#9f65ad"/>
            <stop offset="0.78" stop-color="#c94f8d"/>
            <stop offset="0.86" stop-color="#e64077"/>
            <stop offset="0.93" stop-color="#f93669"/>
            <stop offset="0.97" stop-color="#ff3364"/>
          </linearGradient>
          <linearGradient id="Градієнт_без_назви_33-2" x1="327.24" y1="549.74" x2="396.94" y2="590.34" xlink:href="#Градієнт_без_назви_33"/>
          <linearGradient id="Градієнт_без_назви_33-3" x1="979.72" y1="674.32" x2="1048.79" y2="634.45" xlink:href="#Градієнт_без_назви_33"/>
          <linearGradient id="Градієнт_без_назви_64" data-name="Градієнт без назви 64" x1="633.78" y1="673.09" x2="701.95" y2="632.49" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#af33ff"/>
            <stop offset="0.06" stop-color="#b53af1"/>
            <stop offset="0.51" stop-color="#dc6a8c"/>
            <stop offset="0.83" stop-color="#f5884c"/>
            <stop offset="0.97" stop-color="#ff9433"/>
          </linearGradient>
          <linearGradient id="Градієнт_без_назви_64-2" x1="327.54" y1="549.18" x2="397.24" y2="589.78" xlink:href="#Градієнт_без_назви_64"/>
          <linearGradient id="Градієнт_без_назви_64-3" x1="980.02" y1="673.76" x2="1049.08" y2="633.89" xlink:href="#Градієнт_без_назви_64"/>
          <linearGradient id="Градієнт_без_назви_114" data-name="Градієнт без назви 114" x1="633.06" y1="673.29" x2="701.23" y2="632.69" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="0.01" stop-color="#fff1f4"/>
            <stop offset="0.1" stop-color="#ff8ca7"/>
            <stop offset="0.16" stop-color="#ff4c77"/>
            <stop offset="0.19" stop-color="#ff3364"/>
            <stop offset="0.38" stop-color="#fff"/>
            <stop offset="0.6" stop-color="#ff3364"/>
            <stop offset="0.82" stop-color="#fff"/>
            <stop offset="1" stop-color="#ff3364"/>
          </linearGradient>
          <linearGradient id="Градієнт_без_назви_114-2" x1="326.82" y1="549.38" x2="396.52" y2="589.98" xlink:href="#Градієнт_без_назви_114"/>
          <linearGradient id="Градієнт_без_назви_114-3" x1="979.3" y1="673.96" x2="1048.36" y2="634.09" xlink:href="#Градієнт_без_назви_114"/>
          <linearGradient id="Градієнт_без_назви_161" data-name="Градієнт без назви 161" x1="632.24" y1="673.48" x2="700.41" y2="632.89" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="0.02" stop-color="#fff1f4"/>
            <stop offset="0.15" stop-color="#ff8ca7"/>
            <stop offset="0.25" stop-color="#ff4c77"/>
            <stop offset="0.29" stop-color="#ff3364"/>
            <stop offset="0.68" stop-color="#33ff7c"/>
            <stop offset="1" stop-color="#fff"/>
          </linearGradient>
          <linearGradient id="Градієнт_без_назви_161-2" x1="326" y1="549.58" x2="395.71" y2="590.17" xlink:href="#Градієнт_без_назви_161"/>
          <linearGradient id="Градієнт_без_назви_161-3" x1="978.49" y1="674.15" x2="1047.55" y2="634.28" xlink:href="#Градієнт_без_назви_161"/>
          <linearGradient id="Градієнт_без_назви_166" data-name="Градієнт без назви 166" x1="632.95" y1="673.64" x2="701.12" y2="633.04" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="0.23" stop-color="#fff" stop-opacity="0.75"/>
            <stop offset="0.61" stop-color="#fff" stop-opacity="0.35"/>
            <stop offset="0.88" stop-color="#fff" stop-opacity="0.1"/>
            <stop offset="1" stop-color="#fff" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="Градієнт_без_назви_166-2" x1="326.71" y1="549.73" x2="396.41" y2="590.33" xlink:href="#Градієнт_без_назви_166"/>
          <linearGradient id="Градієнт_без_назви_166-3" x1="979.19" y1="674.31" x2="1048.26" y2="634.44" xlink:href="#Градієнт_без_назви_166"/>
          <linearGradient id="Градієнт_без_назви_10" data-name="Градієнт без назви 10" x1="101.79" y1="64.09" x2="143.22" y2="93.08" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="0.5" stop-color="#339eff"/>
            <stop offset="0.73" stop-color="#9c67af"/>
            <stop offset="0.95" stop-color="#ff3364"/>
          </linearGradient>
          <linearGradient id="Градієнт_без_назви_4" data-name="Градієнт без назви 4" x1="180.14" y1="66.03" x2="217.42" y2="91.99" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#af33ff"/>
            <stop offset="0.06" stop-color="#b53af1"/>
            <stop offset="0.53" stop-color="#dc6a8c"/>
            <stop offset="0.85" stop-color="#f5884c"/>
            <stop offset="1" stop-color="#ff9433"/>
          </linearGradient>
          <linearGradient id="Градієнт_без_назви_31" data-name="Градієнт без назви 31" x1="122.67" y1="124.83" x2="122.67" y2="166.18" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="0.54" stop-color="#ff3b6a"/>
            <stop offset="1" stop-color="#fff"/>
          </linearGradient>
          <linearGradient id="Градієнт_без_назви_44" data-name="Градієнт без назви 44" x1="181.44" y1="132.29" x2="216.1" y2="161.57" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="0.28" stop-color="#ff3364"/>
            <stop offset="0.74" stop-color="#33ff7c"/>
            <stop offset="0.87" stop-color="#9cffc0"/>
            <stop offset="1" stop-color="#fff"/>
          </linearGradient>
          <linearGradient id="Градієнт_без_назви_52" data-name="Градієнт без назви 52" x1="144.63" y1="200.03" x2="190.16" y2="231.9" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff" stop-opacity="0"/>
            <stop offset="0.95" stop-color="#fff"/>
          </linearGradient>
          <linearGradient id="Градієнт_без_назви_52-2" x1="153.27" y1="213.21" x2="173.25" y2="213.21" xlink:href="#Градієнт_без_назви_52"/>
          <linearGradient id="Градієнт_без_назви_52-3" x1="155.61" y1="202.39" x2="160.71" y2="202.39" xlink:href="#Градієнт_без_назви_52"/>
          <linearGradient id="Градієнт_без_назви_52-4" x1="150.42" y1="205.2" x2="153.8" y2="205.2" xlink:href="#Градієнт_без_назви_52"/>
          <linearGradient id="Градієнт_без_назви_52-5" x1="168.25" y1="204.58" x2="171.63" y2="204.58" xlink:href="#Градієнт_без_назви_52"/>
          <linearGradient id="Градієнт_без_назви_52-6" x1="149.88" y1="213.01" x2="159.47" y2="213.01" xlink:href="#Градієнт_без_назви_52"/>
          <linearGradient id="Градієнт_без_назви_52-7" x1="156.47" y1="197" x2="158.36" y2="197" xlink:href="#Градієнт_без_назви_52"/>
          <linearGradient id="Градієнт_без_назви_52-8" x1="147.01" y1="213.21" x2="148.91" y2="213.21" xlink:href="#Градієнт_без_назви_52"/>
        </defs>
        <g style="isolation: isolate">
          <g id="bigpigLights">
            <g>
              <g>
                <path d="M1202.6,685.27,728.76,958.84a16.3,16.3,0,0,1-16.32,0L524.11,849.28,321.53,731.47l-117-68.05a16.27,16.27,0,0,1,0-28.16L678.42,361.68a16.3,16.3,0,0,1,16.32,0L936.09,502.08l90.63,52.71L1202.65,657.1A16.28,16.28,0,0,1,1202.6,685.27Z" fill="#1195cb"/>
                <g>
                  <path d="M1069,594.27c7.48-12.91,22.15-19.51,35.85-16.44,11.38,2.55,20.57,11.42,24.07,23a14.16,14.16,0,0,1,20.93,16.88,13.41,13.41,0,0,1,10.19,2.06c4.53,3.32,6.34,9.83,4.21,16,2,1.29,8.92,6.17,10.74,14.89,2.17,10.41-3.87,22.06-15.27,28.08A103.08,103.08,0,0,1,1065,691.14Q1067.05,642.71,1069,594.27Z" fill="#001f3f"/>
                  <path d="M1061.05,588.4c7.48-12.92,22.15-19.51,35.85-16.44,11.38,2.55,20.57,11.42,24.07,23a14.16,14.16,0,0,1,20.93,16.88,13.43,13.43,0,0,1,10.19,2c4.53,3.33,6.34,9.84,4.21,16,2,1.29,8.93,6.17,10.74,14.89,2.17,10.41-3.87,22.06-15.27,28.08a103.08,103.08,0,0,1-94.72,12.38Q1059.06,636.84,1061.05,588.4Z" fill="url(#linear-gradient)"/>
                  <g>
                    <path d="M1125.25,617.91c.74,0,11.59-.18,16.93-8.92a18.6,18.6,0,0,0,2.51-11.47,21.42,21.42,0,0,0-11.13,4.34C1126.11,607.63,1125.36,616.41,1125.25,617.91Z" fill="url(#linear-gradient-2)"/>
                    <path d="M1121.75,617.36c.34-.42,5.28-6.63,2.82-13.7a13.66,13.66,0,0,0-5.31-6.75,15.82,15.82,0,0,0-2.72,8.31A16.66,16.66,0,0,0,1121.75,617.36Z" fill="url(#linear-gradient-3)"/>
                  </g>
                </g>
                <g>
                  <path d="M899.72,363.93V591.07a26.66,26.66,0,0,1-4.78,3.54L565.25,786.22l-.13.08V558.4l1.06-.61Z" fill="#067cba"/>
                  <path d="M308.2,623.43a27.18,27.18,0,0,0,13.7,23.72L565.25,786.4v-.18l.59-146.15.34-82.28.3-75L370.85,370.88l-45.5,19.73-16.24,7.05V400l-.36,90.54Z" fill="#00468f"/>
                </g>
                <g>
                  <path d="M427.93,569.46l11.74-8.16a9.51,9.51,0,0,1,1.58-1.1l.09-.06v0a8.89,8.89,0,0,1,8.64.1l73.59,41.67A22,22,0,0,1,534.69,621V760.48a8.89,8.89,0,0,1-4.57,7.81h0l-13,9-6.4-14.91-69.66-39.45a9,9,0,0,1-4.56-7.82V589.54Z" fill="#001f3f"/>
                  <path d="M435.3,735.31,508.89,777a9,9,0,0,0,13.42-7.82V629.7a21.94,21.94,0,0,0-11.13-19.09L437.6,568.94a9,9,0,0,0-13.43,7.83V716.22A21.93,21.93,0,0,0,435.3,735.31Z" fill="url(#linear-gradient-4)"/>
                  <path d="M444.51,726.09l56.95,32.25a7.11,7.11,0,0,0,10.62-6.19V643.25A19.92,19.92,0,0,0,502,625.91l-57-32.25a7.11,7.11,0,0,0-10.62,6.19v108.9A19.92,19.92,0,0,0,444.51,726.09Z" fill="url(#linear-gradient-5)"/>
                  <ellipse cx="494.31" cy="688.18" rx="5.32" ry="9.05" transform="translate(-274.54 332.09) rotate(-29.46)" fill="#001f3f"/>
                </g>
                <g>
                  <g>
                    <path d="M625.89,577.86l61.9-35.41a4.61,4.61,0,0,1,5.53.7l9.82,7.16-8.43,14.12v49a10.39,10.39,0,0,1-5.23,9l-44.57,25.49-10.73,18-11.11-8a4.57,4.57,0,0,1-2.41-4.05V586.88A10.38,10.38,0,0,1,625.89,577.86Z" fill="#0a87c1"/>
                    <path d="M631.62,594.85v66.91a4.63,4.63,0,0,0,6.93,4L676.62,644l23.83-13.64a7.86,7.86,0,0,0,1-.68,10.38,10.38,0,0,0,4.21-8.34V554.43a4.63,4.63,0,0,0-6.92-4l-52.7,30.15-9.2,5.27a7.57,7.57,0,0,0-.67.42,10.44,10.44,0,0,0-4.57,8.6Z" fill="#001f3f"/>
                    <g>
                      <path d="M635.71,596.78v20.77l40,22.94,21.19-12.13a7.94,7.94,0,0,0,.91-.6L636.67,592.7A9.14,9.14,0,0,0,635.71,596.78Z" fill="#05446b"/>
                      <path d="M639.78,589.13l61,35a9,9,0,0,0,.8-3.75v-5.87l-53-30.4-8.19,4.68C640.17,588.87,640,589,639.78,589.13Z" fill="#05446b"/>
                    </g>
                  </g>
                  <g>
                    <path d="M412.4,498.45,350.49,463a4.6,4.6,0,0,0-5.52.7l-9.82,7.16L343.57,485v49a10.41,10.41,0,0,0,5.23,9l44.57,25.5,10.74,18,11.11-8a4.57,4.57,0,0,0,2.41-4.05V507.47A10.4,10.4,0,0,0,412.4,498.45Z" fill="#015199"/>
                    <path d="M406.67,515.44v66.91a4.63,4.63,0,0,1-6.93,4l-38.07-21.78L337.84,551a7.86,7.86,0,0,1-1-.68,10.38,10.38,0,0,1-4.21-8.34V475a4.63,4.63,0,0,1,6.92-4l52.7,30.15,9.2,5.27a7.57,7.57,0,0,1,.67.42,10.44,10.44,0,0,1,4.57,8.6Z" fill="#001f3f"/>
                    <g>
                      <path d="M402.57,517.37v20.77l-40,22.94L341.36,549a7.16,7.16,0,0,1-.91-.6l61.16-35.06A9.14,9.14,0,0,1,402.57,517.37Z" fill="#05446b"/>
                      <path d="M398.51,509.72l-61,35a9.14,9.14,0,0,1-.8-3.75v-5.87l53-30.4,8.18,4.69A6,6,0,0,1,398.51,509.72Z" fill="#05446b"/>
                    </g>
                  </g>
                </g>
                <path d="M899.72,363.93V481.18L615.57,645.23a40.85,40.85,0,0,1-41-.06l-8.77-5.1-.72-.42L308.74,490.54,309.1,400l16.25-9.39,45.5-19.73L566.48,482.81l-.3,75Z" fill="#1195cb" style="mix-blend-mode: multiply"/>
                <g>
                  <polygon points="1074.64 476.28 1074.64 691.98 926.53 777.49 926.53 545.93 999.15 455.07 1074.64 476.28" fill="#067cba"/>
                  <polygon points="926.53 545.93 926.53 777.49 752.82 677.2 752.82 452.01 926.53 545.93" fill="#00468f"/>
                </g>
                <g>
                  <path d="M968.59,581.27l61.91-35.41a4.6,4.6,0,0,1,5.52.7l9.82,7.16-8.42,14.12v48.95a10.4,10.4,0,0,1-5.23,9l-44.57,25.5-10.74,18-11.11-8a4.57,4.57,0,0,1-2.41-4V590.29A10.41,10.41,0,0,1,968.59,581.27Z" fill="#0a87c1"/>
                  <path d="M974.32,598.26v66.91a4.63,4.63,0,0,0,6.93,4l38.07-21.78,23.83-13.64a7.86,7.86,0,0,0,1-.68,10.38,10.38,0,0,0,4.21-8.34V557.84a4.63,4.63,0,0,0-6.92-4L988.76,584l-9.2,5.27a7.57,7.57,0,0,0-.67.42,10.44,10.44,0,0,0-4.57,8.6Z" fill="#001f3f"/>
                  <g>
                    <path d="M978.42,600.19V621l40,22.93,21.19-12.13a6.22,6.22,0,0,0,.91-.6l-61.16-35.06A9,9,0,0,0,978.42,600.19Z" fill="#05446b"/>
                    <path d="M982.48,592.54l61,35a9,9,0,0,0,.81-3.75v-5.87l-53-30.4-8.18,4.69A6,6,0,0,0,982.48,592.54Z" fill="#05446b"/>
                  </g>
                </g>
                <g id="pig">
                  <g id="handL">
                    <path d="M550.05,751.2a58,58,0,0,0,22.5-26.35,18,18,0,0,1,.9,6.28,17.82,17.82,0,0,1-.9,5,11.63,11.63,0,0,1,8.07-2.87,67.73,67.73,0,0,1-26.81,33.89,10,10,0,0,1-6.38-6.41A9.57,9.57,0,0,1,550.05,751.2Z" fill="#ba6290"/>
                    <circle cx="552.55" cy="758.01" r="41.36" fill="none"/>
                  </g>
                  <g id="leg2">
                    <path d="M514.25,827.71a14.1,14.1,0,0,0,8.68-3,12.64,12.64,0,0,0,2-2.05,29.78,29.78,0,0,0,1.5,10.14,63.28,63.28,0,0,0,7.09-18.87,61.49,61.49,0,0,0,1-6.79,62.87,62.87,0,0,0-.17-13.27,6.95,6.95,0,0,0-12.8,1,40.35,40.35,0,0,1,.67,12.86c0,.21,0,.42-.07.63A41,41,0,0,1,514.25,827.71Z" fill="#ff96c5"/>
                    <path d="M521.53,794.85a40.35,40.35,0,0,1,.67,12.86,20.89,20.89,0,0,1,12.3-.57,62.87,62.87,0,0,0-.17-13.27,6.95,6.95,0,0,0-12.8,1Z" fill="#ba6290"/>
                    <circle cx="528.04" cy="794.77" r="42.89" fill="none"/>
                  </g>
                  <g id="leg">
                    <path d="M491.21,816.12a26,26,0,0,1-4.25,2.11c1.54.34,12.83,2.58,22.64-4.69a25.39,25.39,0,0,0,4.85-4.72,26,26,0,0,0,5.21-12,8,8,0,0,0-7.11-6,8.12,8.12,0,0,0-8.08,4.52,17.57,17.57,0,0,1-6.1,10c-.12.09-.23.19-.35.27a19.87,19.87,0,0,1-13.87,3.78,11.93,11.93,0,0,0,5.32,3.13,12.57,12.57,0,0,0,6,.19A25,25,0,0,1,491.21,816.12Z" fill="#ff96c5"/>
                    <path d="M498,805.7a38.14,38.14,0,0,1,8.13.61,38.67,38.67,0,0,1,8.3,2.51,26,26,0,0,0,5.21-12,8,8,0,0,0-7.11-6,8.12,8.12,0,0,0-8.08,4.52,17.57,17.57,0,0,1-6.1,10C498.25,805.52,498.14,805.62,498,805.7Z" fill="#ba6290"/>
                    <circle cx="513.1" cy="794.39" r="38.3" fill="none"/>
                  </g>
                  <path d="M512.79,801.3l11.41-1.61c19-2.7,33.59-20.36,32.54-39.46h0c-1.06-19.1-17.34-32.4-36.36-29.71L509,732.14c-19,2.69-33.59,20.36-32.54,39.46h0C477.49,790.7,493.77,804,512.79,801.3Z" fill="url(#linear-gradient-6)"/>
                  <g id="face">
                    <g>
                      <ellipse id="eye2" cx="540.53" cy="764.6" rx="5.81" ry="2.57" transform="translate(-196.09 186.52) rotate(-16.62)" fill="#271a21"/>
                      <ellipse id="eye1" cx="512.2" cy="772.24" rx="5.81" ry="2.57" transform="translate(-199.46 178.74) rotate(-16.62)" fill="#271a21"/>
                    </g>
                    <g id="nose">
                      <ellipse cx="530.54" cy="782.74" rx="10.2" ry="9.61" fill="#ba6290"/>
                      <path d="M524.68,768.84c4-2.12,8.64-1.65,11.4.86h0a7.9,7.9,0,0,1,.83.9l3.83,4.19-2.37,1.85a10.74,10.74,0,0,1-5.75,7.42,11.49,11.49,0,0,1-5.48,1.32l-2.31,1.8-3.35-3.78a7.34,7.34,0,0,1-1.5-1.69h0c-.11-.18-.23-.36-.33-.56C517.45,777,519.7,771.43,524.68,768.84Z" fill="#efbef7"/>
                      <ellipse cx="532.56" cy="780.76" rx="10.16" ry="8.59" transform="translate(-300.77 334.93) rotate(-27.56)" fill="#ffa0d0"/>
                      <ellipse cx="536.08" cy="780.18" rx="1.75" ry="2.56" fill="#ba6290"/>
                      <ellipse cx="530.12" cy="782.43" rx="1.75" ry="2.56" fill="#ba6290"/>
                    </g>
                  </g>
                  <g id="ear">
                    <g>
                      <ellipse cx="495.98" cy="744.36" rx="13.01" ry="8.3" transform="translate(-334.09 411.11) rotate(-34.45)" fill="#ba6290"/>
                      <ellipse cx="495.7" cy="740.71" rx="13.01" ry="8.3" transform="matrix(0.82, -0.57, 0.57, 0.82, -332.07, 410.31)" fill="#ff96c4"/>
                    </g>
                    <g>
                      <ellipse cx="535.8" cy="737.27" rx="8.3" ry="13.01" transform="translate(-350.34 950.39) rotate(-67.52)" fill="#ba6290"/>
                      <ellipse cx="535.22" cy="734.4" rx="8.3" ry="13.01" transform="translate(-348.04 948.08) rotate(-67.52)" fill="#ff96c4"/>
                    </g>
                  </g>
                  <g id="handR">
                    <path d="M479.14,769.09c-8.61,1.45-19,12.42-15.87,21.49s18,11.84,26.59,6.72a16.83,16.83,0,0,0,6.12-6.57,7,7,0,0,1-3.55-.58,6.7,6.7,0,0,1-1.38-.85l.63-1.89c.51-1.54,1-3.07,1.46-4.58q-9.63,2.64-10.4,1-.57-1.18,3.65-4.63c1.64-3.41,1.6-6.88-.18-8.8C484.15,768.24,480.49,768.86,479.14,769.09Z" fill="#ba6290"/>
                    <path d="M480.15,765.91c-12,1.78-19.14,12.12-17.59,20.1,1.92,9.93,17,14.92,25.64,10.7a13.63,13.63,0,0,0,5-4.24,18.76,18.76,0,0,1-3.76-1.06,19.41,19.41,0,0,1-1.92-.88,12.14,12.14,0,0,0,1.53-1.62,12,12,0,0,0,2-4c-2.28.87-6.13,2-9.79,1.37-1.71-.29-2.45-.82-2.82-1.46a3.49,3.49,0,0,1,.14-3c1-2,4.18-2.86,7.9-2.26,2.65-4.56,2.91-9.34.55-11.75C484.56,765.28,480.63,765.84,480.15,765.91Z" fill="#ff96c5"/>
                    <circle cx="484" cy="773.2" r="30.89" fill="none"/>
                  </g>
                </g>
                <polygon points="1074.64 476.28 1074.64 580.93 926.53 666.44 926.45 666.48 752.82 566.24 752.82 452.01 926.53 545.93 999.15 455.07 1074.64 476.28" fill="#1195cb" style="mix-blend-mode: multiply"/>
              </g>
              <path d="M712.52,641.17l.05.08-.5.29a6.31,6.31,0,0,1-1.1.62l-67.44,38.09a6.07,6.07,0,0,1-4.85.19c-4.78-1.66-8.66-7.94-8.66-14a9.25,9.25,0,0,1,2.47-6.83s0,0,0,0l2.35-1.34L701,620.74h0a5.89,5.89,0,0,1,5.44-.56c4.79,1.67,8.66,7.95,8.66,14C715.12,637.29,714.13,639.73,712.52,641.17Z" fill="#1195cb"/>
              <path d="M408.38,588.27c0,6.08-3.87,12.36-8.66,14a6.07,6.07,0,0,1-4.85-.19L327.43,564a5.89,5.89,0,0,1-1.09-.62l-.51-.29.05-.08a9.16,9.16,0,0,1-2.6-6.95c0-6.08,3.88-12.36,8.66-14a5.91,5.91,0,0,1,5.45.56h0l66.08,37.47,2.44,1.38A9.22,9.22,0,0,1,408.38,588.27Z" fill="#1195cb"/>
              <path d="M1055.23,644.58l0,.08-.51.29a5.66,5.66,0,0,1-1.1.62l-67.43,38.09a6.07,6.07,0,0,1-4.85.2c-4.79-1.67-8.67-8-8.67-14a9.25,9.25,0,0,1,2.47-6.83h0l2.42-1.37,66.1-37.47h0a5.94,5.94,0,0,1,5.45-.56c4.78,1.67,8.66,7.95,8.66,14A9.16,9.16,0,0,1,1055.23,644.58Z" fill="#1195cb"/>
              <g>
                <g>
                  <g>
                    <path d="M423.74,419.27a2.85,2.85,0,0,0,.81-.32c118.25-69.61,218.33-137,336.58-206.6a3,3,0,0,0-2.18-5.43c-30.82,7.24-103.35-9.42-134.16-2.18a2.85,2.85,0,0,0-.81.32L316.1,397.24l-.75-3.81-24.52,8.12v12.64l.08,0a2.91,2.91,0,0,0,3.58,2.24Z" fill="#0b719e"/>
                    <path d="M424.48,407.1a2.74,2.74,0,0,0,.82-.32c122.66-72.21,209.23-127,331.9-199.24a.63.63,0,0,0-.46-1.15c-34.1,8-92.21-13.9-126.31-5.88a38.47,38.47,0,0,0-10.49,4.15L292.3,399.4a3,3,0,0,0,2.17,5.44Z" fill="#001f3f"/>
                  </g>
                  <g>
                    <path d="M424.51,407.51l7,5L763.88,222.14A8.08,8.08,0,0,1,774.15,224L896.33,362.29l7.81.87v10.9a8.18,8.18,0,0,1,0,1.4v0h0a8,8,0,0,1-4,6.24L566.25,575A8.06,8.06,0,0,1,556,573.15L421.91,416.33a3.39,3.39,0,0,1-.32-3.38Z" fill="#0b719e"/>
                    <path d="M567.34,559.24,900.82,366.67a8.06,8.06,0,0,0,2.2-12.1L773,207.77a10.88,10.88,0,0,0-13.85-2.52L427.77,396.63a8.06,8.06,0,0,0-2.2,12.1l131.5,148.65A8.06,8.06,0,0,0,567.34,559.24Z" fill="#043c61"/>
                    <g>
                      <path d="M561.43,530.64c1.7.53,18.37,5.35,34-4.88a38,38,0,0,0,16.48-24.27c1.93.47,22,4.93,38.57-7.94a41,41,0,0,0,14.74-22.85c12.59,4.64,27,2.42,36.86-5.76a33.26,33.26,0,0,0,11.77-22.33c1.07.36,20.06,6.5,36.41-5.32A37,37,0,0,0,765.08,413c2.4.52,21.26,4.24,37.8-7.84a43.37,43.37,0,0,0,16.2-23.34c2.3.53,18.27,3.93,33.45-6a40.76,40.76,0,0,0,17.05-23.18l-25.3-29.15-308.15,178Z" fill="#17538b"/>
                      <path d="M548.4,515.57c1.7.52,18.37,5.35,34-4.89a38,38,0,0,0,16.48-24.26c1.93.46,22,4.92,38.56-7.94a41,41,0,0,0,14.75-22.86c12.59,4.64,27,2.43,36.86-5.76a33.26,33.26,0,0,0,11.77-22.33c1.07.37,20.06,6.51,36.41-5.32a37,37,0,0,0,14.83-24.27c2.4.51,21.26,4.23,37.8-7.85a43.33,43.33,0,0,0,16.2-23.34c2.29.53,18.27,3.94,33.45-6a40.77,40.77,0,0,0,17-23.19l-25.31-29.15-308.14,178Z" fill="#096595"/>
                      <path d="M535.37,500.49c1.7.52,18.36,5.35,34-4.88a38.13,38.13,0,0,0,16.48-24.27c1.93.46,22,4.93,38.56-7.94a41,41,0,0,0,14.75-22.86c12.59,4.65,27,2.43,36.86-5.76a33.25,33.25,0,0,0,11.77-22.32c1.07.36,20.06,6.5,36.41-5.32A37,37,0,0,0,739,382.86c2.4.51,21.26,4.23,37.8-7.85A43.33,43.33,0,0,0,793,351.67c2.29.53,18.27,3.94,33.45-6a40.79,40.79,0,0,0,17-23.18l-25.31-29.16-308.15,178Z" fill="#0070a3"/>
                      <path d="M522.34,485.41c1.7.53,18.36,5.35,34-4.88a38.11,38.11,0,0,0,16.48-24.27c1.93.47,22,4.93,38.56-7.94a41,41,0,0,0,14.75-22.85c12.59,4.64,27,2.42,36.86-5.76a33.26,33.26,0,0,0,11.77-22.33c1.07.36,20,6.5,36.41-5.32A37,37,0,0,0,726,367.78c2.4.52,21.26,4.24,37.8-7.84A43.27,43.27,0,0,0,780,336.6c2.3.53,18.28,3.93,33.46-6a40.76,40.76,0,0,0,17-23.18q-12.66-14.58-25.31-29.15L497,456.26Z" fill="#077ebb"/>
                      <path d="M509.31,470.34c1.69.52,18.36,5.35,34-4.89a38,38,0,0,0,16.47-24.26c1.94.46,22,4.92,38.57-7.94a41,41,0,0,0,14.75-22.86c12.59,4.64,27,2.43,36.86-5.76a33.26,33.26,0,0,0,11.77-22.33c1.06.37,20,6.51,36.41-5.32A37,37,0,0,0,713,352.71c2.4.51,21.26,4.23,37.8-7.85A43.23,43.23,0,0,0,767,321.52c2.3.53,18.28,3.94,33.46-6a40.82,40.82,0,0,0,17.05-23.19L792.15,263.2,484,441.18Z" fill="#0c8cc5"/>
                      <path d="M496.27,455.26c1.7.52,18.37,5.35,34-4.88a38.05,38.05,0,0,0,16.47-24.27c1.94.46,22,4.93,38.57-7.94a41,41,0,0,0,14.75-22.86c12.59,4.65,27,2.43,36.86-5.76a33.25,33.25,0,0,0,11.77-22.32c1.06.36,20,6.5,36.41-5.32a37,37,0,0,0,14.83-24.28c2.39.52,21.25,4.24,37.8-7.85a43.26,43.26,0,0,0,16.19-23.33c2.3.52,18.28,3.93,33.46-6a40.75,40.75,0,0,0,17-23.18l-25.3-29.16L471,426.11Z" fill="#1195cb"/>
                      <path d="M483.24,440.18c1.7.53,18.37,5.35,34-4.88A38,38,0,0,0,533.71,411c1.94.47,22,4.93,38.57-7.93A41,41,0,0,0,587,380.24c12.59,4.64,27,2.42,36.86-5.76a33.26,33.26,0,0,0,11.77-22.33c1.06.36,20.05,6.5,36.41-5.32a37,37,0,0,0,14.83-24.27c2.39.51,21.25,4.23,37.79-7.85a43.25,43.25,0,0,0,16.2-23.34c2.3.53,18.28,3.93,33.46-6a40.69,40.69,0,0,0,17-23.18q-12.64-14.58-25.3-29.15L457.94,411Z" fill="#22a5da"/>
                      <path d="M470.21,425.11c1.7.52,18.37,5.35,34-4.88A38,38,0,0,0,520.68,396c1.94.46,22,4.93,38.57-7.94A41,41,0,0,0,574,365.16c12.59,4.64,27,2.43,36.86-5.76a33.26,33.26,0,0,0,11.77-22.33c1.06.37,20,6.51,36.41-5.32a37,37,0,0,0,14.83-24.27c2.39.51,21.25,4.23,37.79-7.85a43.21,43.21,0,0,0,16.2-23.34c2.3.53,18.28,3.94,33.46-6a40.73,40.73,0,0,0,17-23.19c-8.43-9.71-16.86-19.43-21.17-23.25L449,401.86Z" fill="#33e3ff"/>
                    </g>
                  </g>
                </g>
                <g>
                  <path d="M1086.21,481.23a3,3,0,0,1-3.8,2.89l-83.32-22.93h0l.06-12.08-178.45-91L907.44,382h0l178.76,91.21Z" fill="#0b719e"/>
                  <path d="M999.15,461.11l-.06.08L924.87,569.47a4,4,0,0,1-5.3,1.21L744,469.33v-12L820.36,358l.34.09L999.48,449.3Z" fill="#0b719e"/>
                  <polygon points="1086.21 473.17 999.48 449.3 999.47 449.29 999.15 449.11 820.7 346.08 907.44 369.96 907.45 369.96 1086.21 473.17" fill="#043c61"/>
                  <path d="M997.16,440.47a5.89,5.89,0,0,1,1.93,8.72h0L924.87,557.47a4,4,0,0,1-5.3,1.21L744,457.33,820.36,346h0a6.78,6.78,0,0,1,9-2.06Z" fill="#001f3f"/>
                </g>
                <g>
                  <path d="M1132.44,694.34a234.55,234.55,0,0,1-78.08,43.48c-7.71,1.95-15.56-1.39-19-7.75-4.24-7.82.49-16,.71-16.31-4.32-10.62-.47-21.55,7-25.35,6.93-3.49,14.61.28,15.64.8a14.74,14.74,0,1,1,25.52-14.73c1.22-1.69,9.07-12.14,22.43-13,10.61-.65,24,4.83,27.48,16.19C1136.43,685.09,1133.62,691.86,1132.44,694.34Z" fill="#001f3f"/>
                  <path d="M1128.27,687.94a234.08,234.08,0,0,1-78.08,43.48c-7.71,2-15.56-1.38-19-7.74-4.25-7.83.49-16,.7-16.32-4.31-10.61-.47-21.55,7-25.34,6.93-3.5,14.6.28,15.63.8a14.74,14.74,0,1,1,25.52-14.73c1.23-1.69,9.07-12.14,22.44-13,10.61-.64,24,4.83,27.47,16.2C1132.26,678.7,1129.45,685.47,1128.27,687.94Z" fill="url(#linear-gradient-7)"/>
                  <g>
                    <path d="M1109.15,683.52c-.67,0-10.44-.18-15.26-8.92a20.34,20.34,0,0,1-2.25-11.47,18.22,18.22,0,0,1,10,4.34C1108.37,673.24,1109.05,682,1109.15,683.52Z" fill="url(#linear-gradient-8)"/>
                    <path d="M1112.31,683c-.31-.42-4.76-6.63-2.55-13.7a13.43,13.43,0,0,1,4.79-6.75,16.9,16.9,0,0,1,2.45,8.31A17.44,17.44,0,0,1,1112.31,683Z" fill="url(#linear-gradient-9)"/>
                    <path d="M1075.78,694.15c-.52,0-8.13-.6-12.15-6.83a13.39,13.39,0,0,1-2.1-8,16.83,16.83,0,0,1,7.94,3.44A17.44,17.44,0,0,1,1075.78,694.15Z" fill="url(#linear-gradient-10)"/>
                  </g>
                </g>
                <g>
                  <path d="M623.05,800.54a311.35,311.35,0,0,0,70.78-34.14,323.82,323.82,0,0,0,31.89-23.56c11.9-11.08,14-28.77,6.76-39.44-5.07-7.48-14.37-10.95-23.85-9.51-.43-.8-5.92-10.61-17-11.16-10.84-.55-17.44,8.26-18,9.07-.36-1.89-1.82-8.46-7.15-12-6.72-4.46-17-2.33-24.14,6.09-9.28-4.75-19.63-1.66-24.12,5.85-4.38,7.33-1.47,16-1.1,17.06a15.59,15.59,0,0,0-16.35,7.95c-3.68,6.73-1.27,13.8-1,14.69a16,16,0,0,0-19.67,8.59A18.36,18.36,0,0,0,582.27,758c-1.19,2.16-8.17,15.29-3.68,27.59C583.82,799.92,602.94,808.47,623.05,800.54Z" fill="#001f3f"/>
                  <path d="M622.34,792a293.16,293.16,0,0,0,67.14-33.09A309.58,309.58,0,0,0,719.73,736C731,725.28,733,708.13,726.14,697.8c-4.82-7.26-13.63-10.62-22.63-9.22-.41-.78-5.61-10.29-16.11-10.83-10.28-.53-16.55,8-17.1,8.79-.34-1.83-1.72-8.19-6.77-11.61-6.38-4.31-16.12-2.25-22.9,5.91-8.81-4.6-18.63-1.62-22.88,5.67-4.16,7.1-1.39,15.54-1,16.54a14.68,14.68,0,0,0-15.5,7.7c-3.49,6.53-1.21,13.38-.9,14.24a15,15,0,0,0-18.67,8.33,18.16,18.16,0,0,0,2,17.39c-1.12,2.09-7.74,14.82-3.49,26.74C585.13,791.35,603.26,799.64,622.34,792Z" fill="url(#linear-gradient-11)"/>
                  <g>
                    <path d="M638.94,726.37c-.33-.58-5-9.17.23-17.67a20.38,20.38,0,0,1,8.87-7.62A18.28,18.28,0,0,1,649.21,712C647.5,720.63,640.2,725.55,638.94,726.37Z" fill="url(#linear-gradient-12)"/>
                    <path d="M632.93,720.55c-.5-.15-7.79-2.44-10.27-9.43a13.49,13.49,0,0,1-.22-8.27,16.92,16.92,0,0,1,6.95,5.17A17.49,17.49,0,0,1,632.93,720.55Z" fill="url(#linear-gradient-13)"/>
                    <path d="M703,713c-.06-.52-.93-8.1,4.44-13.21a13.35,13.35,0,0,1,7.46-3.57,16.91,16.91,0,0,1-1.89,8.45A17.47,17.47,0,0,1,703,713Z" fill="url(#linear-gradient-14)"/>
                  </g>
                </g>
                <g>
                  <path d="M359.82,716a301.64,301.64,0,0,1-71.76-30.25,305.3,305.3,0,0,1-42.32-29.82c-11.61-5-17.69-16.91-15.1-26.72,2.8-10.6,14.47-13.89,15.16-14.07-.08-.91-.93-11.81,7-17.93,7.35-5.66,19.1-4.82,27.52,2.83.49-.66,3.4-4.52,7.9-4.57,5.2,0,10.68,5,11.64,12.36,3.77-5.54,9.78-8.92,15.83-8.3,8.88.9,17.07,10.38,16.64,22.2,1-.12,8.33-.87,13.8,4.41,5.17,5,6.54,13.29,3.1,20.34a20.28,20.28,0,0,1,17.11-3.56,21.63,21.63,0,0,1,12.7,9.67c8.36,4.51,13.4,13.36,12.74,22.27-.86,11.57-10.88,17-11.66,17.42.59.9,5.11,8,2.54,15C379.94,714.63,370.17,719.12,359.82,716Z" fill="#001f3f"/>
                  <path d="M357.39,706.6a301.56,301.56,0,0,1-71.76-30.25,305.16,305.16,0,0,1-42.31-29.81c-11.62-5-17.7-16.92-15.1-26.72,2.8-10.61,14.47-13.89,15.16-14.08-.09-.91-.93-11.81,7-17.93,7.35-5.66,19.11-4.82,27.53,2.84.48-.66,3.39-4.53,7.89-4.57,5.2-.06,10.68,5,11.65,12.35,3.76-5.53,9.78-8.92,15.82-8.3,8.89.91,17.08,10.38,16.65,22.2,1-.12,8.33-.86,13.8,4.42,5.16,5,6.54,13.29,3.1,20.34a20.2,20.2,0,0,1,17.11-3.56,21.56,21.56,0,0,1,12.69,9.66c8.37,4.51,13.41,13.37,12.74,22.28-.86,11.57-10.88,17-11.65,17.41.59.9,5.11,8,2.54,15C377.52,705.27,367.75,709.77,357.39,706.6Z" fill="url(#linear-gradient-15)"/>
                  <g>
                    <path d="M290.59,623.88c-.49-.45-7.59-7.17-5.26-16.87a20.51,20.51,0,0,1,6.07-10,18.31,18.31,0,0,1,4.48,10C297,615.77,291.54,622.71,290.59,623.88Z" fill="url(#linear-gradient-16)"/>
                    <path d="M293.3,625.6c.05-.51.95-8.1,7.35-11.84a13.47,13.47,0,0,1,8.09-1.75A17,17,0,0,1,305,619.8,17.43,17.43,0,0,1,293.3,625.6Z" fill="url(#linear-gradient-17)"/>
                    <path d="M261.53,614.22c-.52,0-8.14-.59-12.15-6.83a13.38,13.38,0,0,1-2.1-8,17.06,17.06,0,0,1,7.94,3.45A17.44,17.44,0,0,1,261.53,614.22Z" fill="url(#linear-gradient-18)"/>
                  </g>
                </g>
              </g>
              <g id="gL1">
                <g id="diamondBtn1">
                  <path d="M1000.93,285.26l-9.15,21.55q4.82,10.06,9.62,20.14,4.74-10.08,9.47-20.14Z" fill="#339eff"/>
                  <path d="M1051.37,362.44l-6,14q3.13,6.56,6.26,13.11,3.09-6.56,6.16-13.11Z" fill="#ff3364"/>
                  <path d="M1001.16,364.75l-3.68,8.69,3.87,8.11c1.28-2.7,2.55-5.41,3.82-8.11Z" fill="#fff"/>
                </g>
                <path d="M802.5,525c-.52-2,1-4.19,3.49-4.88s4.86.37,5.38,2.38-1,4.18-3.48,4.88S803,527,802.5,525Zm19.67,10.6c2.45-.7,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S819.72,536.31,822.17,535.62Zm14.29,8.22c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S834,544.53,836.46,543.84Zm14.29,8.22c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S848.3,552.75,850.75,552.06ZM865,560.28c2.45-.69,4-2.88,3.49-4.88s-2.94-3.07-5.38-2.38-4,2.88-3.49,4.88S862.59,561,865,560.28Zm14.29,8.22c2.45-.69,4-2.88,3.49-4.88s-2.94-3.07-5.39-2.38-4,2.88-3.48,4.88S876.88,569.19,879.33,568.5Zm14.29,8.22c2.45-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S891.17,577.41,893.62,576.72Zm14.28,8.22c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S905.46,585.63,907.9,584.94Zm14.29,8.22c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S919.74,593.85,922.19,593.16Zm14.14-9.44c2.45-.7,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S933.89,584.41,936.33,583.72Zm10-14.22c2.45-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S943.91,570.19,946.36,569.5Zm10-14.22c2.45-.7,4-2.88,3.49-4.88s-2.94-3.07-5.39-2.38-4,2.88-3.48,4.88S953.93,556,956.38,555.28Zm10-14.23c2.45-.69,4-2.87,3.49-4.87s-2.94-3.07-5.38-2.38-4,2.88-3.49,4.88S964,541.75,966.4,541.05Zm10-14.22c2.45-.69,4-2.87,3.49-4.87s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S974,527.53,976.42,526.83Zm10-14.22c2.45-.69,4-2.87,3.49-4.87s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S984,513.31,986.44,512.61Zm10-14.22c2.45-.69,4-2.87,3.49-4.87s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S994,499.09,996.46,498.39Zm10-14.22c2.45-.69,4-2.87,3.48-4.87s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S1004,484.87,1006.49,484.17Zm64,13.48c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.88S1068,498.34,1070.47,497.65Zm-16-3.37c2.45-.69,4-2.87,3.49-4.88s-2.93-3.06-5.38-2.37-4,2.87-3.49,4.88S1052,495,1054.47,494.28Zm-16-3.37c2.45-.69,4-2.87,3.49-4.88s-2.94-3.06-5.39-2.37-4,2.87-3.48,4.88S1036,491.6,1038.48,490.91Zm-16-3.37c2.45-.69,4-2.87,3.49-4.88s-2.93-3.06-5.38-2.37-4,2.88-3.49,4.88S1020,488.23,1022.48,487.54ZM793.6,519.18c2.45-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.48,4.88S791.15,519.87,793.6,519.18ZM779.31,511c2.45-.7,4-2.88,3.49-4.88s-2.94-3.07-5.39-2.38-4,2.88-3.48,4.88S776.86,511.65,779.31,511ZM765,502.74c2.45-.7,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S762.57,503.43,765,502.74Zm-16.43-4.26c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.88S746.15,499.17,748.59,498.48Zm-17.26,9.93c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S728.89,509.1,731.33,508.41Zm-17.25,9.92c2.44-.69,4-2.87,3.48-4.88s-2.93-3.06-5.38-2.37-4,2.88-3.49,4.88S711.63,519,714.08,518.33Zm-17.26,9.93c2.44-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.87S694.37,529,696.82,528.26Zm-17.26,9.93c2.44-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S677.11,538.88,679.56,538.19Zm-17.26,9.92c2.44-.69,4-2.87,3.48-4.88s-2.93-3.06-5.38-2.37-4,2.87-3.49,4.88S659.85,548.8,662.3,548.11ZM645,558c2.44-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.87S642.59,558.73,645,558ZM627.78,568c2.44-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S625.33,568.66,627.78,568Zm-17.26,9.92c2.44-.69,4-2.87,3.48-4.88s-2.93-3.06-5.38-2.37-4,2.87-3.49,4.88S608.07,578.58,610.52,577.89Zm-17.26,9.93c2.44-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S590.81,588.51,593.26,587.82ZM576,597.75c2.44-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S573.55,598.44,576,597.75Zm-14.47,2.89c2.45-.69,4-2.88,3.49-4.88s-2.94-3.07-5.39-2.38-4,2.88-3.48,4.88S559.08,601.33,561.53,600.64Zm-10.72-12.55c2.45-.69,4-2.87,3.49-4.87s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S548.36,588.79,550.81,588.09ZM540.1,575.55c2.44-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.88S537.65,576.24,540.1,575.55ZM529.38,563c2.45-.7,4-2.88,3.49-4.88s-2.94-3.07-5.38-2.38-4,2.88-3.49,4.88S526.93,563.7,529.38,563Zm-10.72-12.55c2.45-.69,4-2.87,3.49-4.88s-2.93-3.06-5.38-2.37-4,2.87-3.49,4.88S516.21,551.15,518.66,550.46ZM508,537.92c2.45-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.48,4.88S505.5,538.61,508,537.92Zm-64.3-75.27c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.88S441.2,463.34,443.65,462.65Zm10.72,12.55c2.45-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.48,4.88S451.92,475.89,454.37,475.2Zm10.71,12.54c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.87S462.63,488.43,465.08,487.74Zm10.72,12.54c2.45-.69,4-2.87,3.49-4.88s-2.94-3.06-5.38-2.37-4,2.88-3.49,4.88S473.35,501,475.8,500.28Zm10.72,12.55c2.44-.69,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S484.07,513.52,486.52,512.83Zm10.71,12.54c2.45-.69,4-2.87,3.49-4.88s-2.93-3.06-5.38-2.37-4,2.87-3.49,4.88S494.78,526.06,497.23,525.37Zm-182.35-89.6c2.45-.69,4-2.87,3.49-4.87s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S312.44,436.47,314.88,435.77Zm17.89.3c2.45-.69,4-2.87,3.49-4.88s-2.93-3.06-5.38-2.37-4,2.87-3.49,4.88S330.32,436.76,332.77,436.07Zm17.89.3c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.37-4,2.87-3.49,4.88S348.21,437.06,350.66,436.37Zm17.89.3c2.45-.69,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S366.1,437.36,368.55,436.67Zm17.89.3c2.45-.7,4-2.88,3.49-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S384,437.66,386.44,437Zm17.89.29c2.45-.69,4-2.87,3.49-4.88s-2.94-3.06-5.38-2.37-4,2.88-3.49,4.88S401.88,438,404.33,437.26Zm17.89.3c2.45-.69,4-2.87,3.49-4.88s-2.94-3.06-5.39-2.37-4,2.87-3.48,4.88S419.77,438.25,422.22,437.56Zm10.72,12.55c2.44-.7,4-2.88,3.48-4.88s-2.93-3.07-5.38-2.38-4,2.88-3.49,4.88S430.49,450.8,432.94,450.11Z" fill="#096595"/>
                <g clip-path="url(#clip-path)">
                  <g>
                    <g id="b1R1">
                      <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                      <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                      <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      <g>
                        <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                        <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                        <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      </g>
                    </g>
                    <g id="b1R2">
                      <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                      <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                      <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      <g>
                        <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                        <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                        <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      </g>
                    </g>
                    <g id="b1R3">
                      <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                      <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                      <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      <g>
                        <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                        <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                        <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      </g>
                    </g>
                    <g id="b1R4">
                      <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                      <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                      <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      <g>
                        <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                        <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                        <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      </g>
                    </g>
                    <g id="b1R5">
                      <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                      <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                      <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      <g>
                        <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                        <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                        <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      </g>
                    </g>
                    <g id="b1R6">
                      <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                      <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                      <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      <g>
                        <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                        <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                        <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      </g>
                    </g>
                    <g id="b1R7">
                      <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                      <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                      <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      <g>
                        <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                        <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                        <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      </g>
                    </g>
                    <g id="b1R8">
                      <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                      <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                      <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      <g>
                        <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                        <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                        <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                      </g>
                    </g>
                    <g id="b1R9">
                      <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                      <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                      <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                    </g>
                    <g id="b1R10">
                      <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                      <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                      <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                    </g>
                    <g id="b1R11">
                      <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                      <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                      <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                    </g>
                    <g id="b1R12">
                      <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff"/>
                      <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff"/>
                      <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364"/>
                    </g>
                  </g>
                </g>
                <g id="lampBtn1">
                  <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="matrix(0.95, -0.31, 0.31, 0.95, -124.07, 245.31)" fill="#fff"/>
                  <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff"/>
                </g>
                <g id="radianceBtn1">
                  <image width="892" height="312" transform="translate(243.59 381.88)" xlink:href="img/radiance1.png"/>
                </g>
                <g id="grWBtn1">
                  <path d="M712.53,641.14l.05.08-.5.29a6.31,6.31,0,0,1-1.1.62l-67.44,38.09a6.07,6.07,0,0,1-4.85.19c-4.78-1.66-8.66-7.94-8.66-14a9.25,9.25,0,0,1,2.47-6.83s0,0,0,0l2.35-1.34L701,620.71h0a5.89,5.89,0,0,1,5.44-.56c4.79,1.67,8.66,8,8.66,14C715.13,637.26,714.14,639.7,712.53,641.14Z" opacity="0.75" fill="url(#Градієнт_без_назви_33)" style="mix-blend-mode: hard-light"/>
                  <path d="M408.39,588.24c0,6.08-3.87,12.36-8.66,14a6.07,6.07,0,0,1-4.85-.19L327.44,564a5.89,5.89,0,0,1-1.09-.62l-.51-.29.05-.08a9.16,9.16,0,0,1-2.6-7c0-6.08,3.88-12.36,8.66-14a5.91,5.91,0,0,1,5.45.56h0L403.48,580l2.44,1.38A9.22,9.22,0,0,1,408.39,588.24Z" opacity="0.75" fill="url(#Градієнт_без_назви_33-2)" style="mix-blend-mode: hard-light"/>
                  <path d="M1055.24,644.55l0,.08-.51.29a5.66,5.66,0,0,1-1.1.62l-67.43,38.09a6.07,6.07,0,0,1-4.85.2c-4.79-1.67-8.67-8-8.67-14A9.25,9.25,0,0,1,975.2,663h0l2.42-1.37,66.1-37.47h0a5.94,5.94,0,0,1,5.45-.56c4.78,1.67,8.66,7.95,8.66,14A9.16,9.16,0,0,1,1055.24,644.55Z" opacity="0.75" fill="url(#Градієнт_без_назви_33-3)" style="mix-blend-mode: hard-light"/>
                </g>
              </g>
              <g id="gL2">
                <g>
                  <g>
                    <ellipse cx="313.94" cy="432.15" rx="4.61" ry="3.75" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="331.83" cy="432.45" rx="4.61" ry="3.75" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="349.72" cy="432.74" rx="4.61" ry="3.75" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="367.6" cy="433.04" rx="4.61" ry="3.75" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="385.49" cy="433.34" rx="4.61" ry="3.75" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="403.38" cy="433.64" rx="4.61" ry="3.75" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="421.27" cy="433.93" rx="4.61" ry="3.75" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="431.99" cy="446.48" rx="4.61" ry="3.75" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="442.7" cy="459.02" rx="4.61" ry="3.75" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#096595"/>
                  </g>
                  <g>
                    <ellipse cx="453.42" cy="471.57" rx="4.61" ry="3.75" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="464.14" cy="484.11" rx="4.61" ry="3.75" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="474.85" cy="496.66" rx="4.61" ry="3.75" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="485.57" cy="509.2" rx="4.61" ry="3.75" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="496.28" cy="521.75" rx="4.61" ry="3.75" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="507" cy="534.29" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -140.19, 182.63)" fill="#096595"/>
                    <ellipse cx="517.72" cy="546.83" rx="4.61" ry="3.75" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="528.43" cy="559.38" rx="4.61" ry="3.75" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="539.15" cy="571.92" rx="4.61" ry="3.75" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#096595"/>
                  </g>
                  <g>
                    <ellipse cx="560.58" cy="597.01" rx="4.61" ry="3.75" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="575.05" cy="594.12" rx="4.61" ry="3.75" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="592.31" cy="584.19" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -151.43, 211.41)" fill="#096595"/>
                    <ellipse cx="609.57" cy="574.27" rx="4.61" ry="3.75" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="626.83" cy="564.34" rx="4.61" ry="3.75" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="644.09" cy="554.41" rx="4.61" ry="3.75" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="661.35" cy="544.49" rx="4.61" ry="3.75" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="678.61" cy="534.56" rx="4.61" ry="3.75" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="695.87" cy="524.63" rx="4.61" ry="3.75" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="549.86" cy="584.47" rx="4.61" ry="3.75" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#096595"/>
                  </g>
                  <g>
                    <ellipse cx="713.13" cy="514.71" rx="4.61" ry="3.75" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="730.39" cy="504.78" rx="4.61" ry="3.75" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="747.65" cy="494.85" rx="4.61" ry="3.75" transform="translate(-116.26 255) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="764.07" cy="499.11" rx="4.61" ry="3.75" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="778.36" cy="507.33" rx="4.61" ry="3.75" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#096595"/>
                    <ellipse cx="792.65" cy="515.55" rx="4.61" ry="3.75" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#096595"/>
                  </g>
                  <ellipse cx="806.94" cy="523.77" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -122.29, 274.72)" fill="#096595"/>
                  <ellipse cx="821.23" cy="531.99" rx="4.61" ry="3.75" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="835.52" cy="540.21" rx="4.61" ry="3.75" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="849.8" cy="548.43" rx="4.61" ry="3.75" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="864.09" cy="556.65" rx="4.61" ry="3.75" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="878.38" cy="564.87" rx="4.61" ry="3.75" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="892.67" cy="573.09" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -133.33, 303.6)" fill="#096595"/>
                  <ellipse cx="906.96" cy="581.31" rx="4.61" ry="3.75" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="921.25" cy="589.53" rx="4.61" ry="3.75" transform="translate(-137 313.22) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="935.39" cy="580.09" rx="4.61" ry="3.75" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="945.41" cy="565.87" rx="4.61" ry="3.75" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="955.43" cy="551.65" rx="4.61" ry="3.75" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="965.45" cy="537.43" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -118.76, 324.33)" fill="#096595"/>
                  <ellipse cx="975.47" cy="523.21" rx="4.61" ry="3.75" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="985.5" cy="508.99" rx="4.61" ry="3.75" transform="translate(-109 329.12) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="995.52" cy="494.77" rx="4.61" ry="3.75" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1005.54" cy="480.55" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -99.24, 333.92)" fill="#096595"/>
                  <ellipse cx="1069.52" cy="494.02" rx="4.61" ry="3.75" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1053.53" cy="490.65" rx="4.61" ry="3.75" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1037.53" cy="487.29" rx="4.61" ry="3.75" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1021.54" cy="483.92" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -99.5, 339.03)" fill="#096595"/>
                </g>
                <g id="lampBtn2">
                  <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="matrix(0.95, -0.31, 0.31, 0.95, -124.07, 245.31)" fill="#af33ff"/>
                  <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#ff9433"/>
                  <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#af33ff"/>
                  <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#af33ff"/>
                </g>
                <g id="radianceBtn2">
                  <image width="847" height="296" transform="translate(242.43 381.73) scale(1.05 1)" xlink:href="img/radiance2.png"/>
                </g>
                <g id="diamondBtn2">
                  <path d="M1000.93,285.26l-9.15,21.55q4.82,10.06,9.62,20.14,4.74-10.08,9.47-20.14Z" fill="#af33ff"/>
                  <path d="M1051.37,362.44l-6,14q3.13,6.56,6.26,13.11,3.09-6.56,6.16-13.11Z" fill="#af33ff"/>
                  <path d="M1001.16,364.75l-3.68,8.69,3.87,8.11c1.28-2.7,2.55-5.41,3.82-8.11Z" fill="#ff9433"/>
                </g>
                <g id="grWBtn2">
                  <path d="M712.83,640.58l0,.08-.5.29a6.31,6.31,0,0,1-1.1.62l-67.44,38.09a6.07,6.07,0,0,1-4.85.19c-4.78-1.66-8.66-7.94-8.66-14A9.25,9.25,0,0,1,632.8,659s0,0,0,0l2.35-1.34,66.13-37.48h0a5.89,5.89,0,0,1,5.44-.56c4.79,1.67,8.66,7.95,8.66,14C715.43,636.7,714.44,639.14,712.83,640.58Z" opacity="0.75" fill="url(#Градієнт_без_назви_64)" style="mix-blend-mode: hard-light"/>
                  <path d="M408.69,587.68c0,6.08-3.87,12.36-8.66,14a6.07,6.07,0,0,1-4.85-.19l-67.44-38.09a5.89,5.89,0,0,1-1.09-.62l-.51-.29.05-.08a9.16,9.16,0,0,1-2.6-6.95c0-6.08,3.88-12.36,8.66-14a5.91,5.91,0,0,1,5.45.56h0l66.08,37.47,2.44,1.38A9.22,9.22,0,0,1,408.69,587.68Z" opacity="0.75" fill="url(#Градієнт_без_назви_64-2)" style="mix-blend-mode: hard-light"/>
                  <path d="M1055.54,644l0,.08-.51.29a5.66,5.66,0,0,1-1.1.62l-67.43,38.09a6.07,6.07,0,0,1-4.85.2c-4.79-1.67-8.67-7.95-8.67-14a9.25,9.25,0,0,1,2.47-6.83h0l2.42-1.37,66.1-37.47h0a5.94,5.94,0,0,1,5.45-.56c4.78,1.67,8.66,8,8.66,14A9.16,9.16,0,0,1,1055.54,644Z" opacity="0.75" fill="url(#Градієнт_без_назви_64-3)" style="mix-blend-mode: hard-light"/>
                </g>
              </g>
              <g id="gL3">
                <g>
                  <ellipse cx="945.41" cy="565.87" rx="4.61" ry="3.75" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="955.43" cy="551.65" rx="4.61" ry="3.75" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="965.45" cy="537.43" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -118.76, 324.33)" fill="#096595"/>
                  <ellipse cx="975.47" cy="523.21" rx="4.61" ry="3.75" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="985.5" cy="508.99" rx="4.61" ry="3.75" transform="translate(-109 329.12) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="995.52" cy="494.77" rx="4.61" ry="3.75" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1005.54" cy="480.55" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -99.24, 333.92)" fill="#096595"/>
                  <ellipse cx="1069.52" cy="494.02" rx="4.61" ry="3.75" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1053.53" cy="490.65" rx="4.61" ry="3.75" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1037.53" cy="487.29" rx="4.61" ry="3.75" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1021.54" cy="483.92" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -99.5, 339.03)" fill="#096595"/>
                  <ellipse cx="935.39" cy="580.09" rx="4.61" ry="3.75" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="921.25" cy="589.53" rx="4.61" ry="3.75" transform="translate(-137 313.22) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="906.96" cy="581.31" rx="4.61" ry="3.75" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="892.67" cy="573.09" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -133.33, 303.6)" fill="#096595"/>
                  <ellipse cx="878.38" cy="564.87" rx="4.61" ry="3.75" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="864.09" cy="556.65" rx="4.61" ry="3.75" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="849.8" cy="548.43" rx="4.61" ry="3.75" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="835.52" cy="540.21" rx="4.61" ry="3.75" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="821.23" cy="531.99" rx="4.61" ry="3.75" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="806.94" cy="523.77" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -122.29, 274.72)" fill="#096595"/>
                  <ellipse cx="792.65" cy="515.55" rx="4.61" ry="3.75" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="778.36" cy="507.33" rx="4.61" ry="3.75" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="764.07" cy="499.11" rx="4.61" ry="3.75" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="747.65" cy="494.85" rx="4.61" ry="3.75" transform="translate(-116.26 255) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="730.39" cy="504.78" rx="4.61" ry="3.75" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="713.13" cy="514.71" rx="4.61" ry="3.75" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="695.87" cy="524.63" rx="4.61" ry="3.75" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="678.61" cy="534.56" rx="4.61" ry="3.75" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="661.35" cy="544.49" rx="4.61" ry="3.75" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="644.09" cy="554.41" rx="4.61" ry="3.75" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="626.83" cy="564.34" rx="4.61" ry="3.75" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="609.57" cy="574.27" rx="4.61" ry="3.75" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="592.31" cy="584.19" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -151.43, 211.41)" fill="#096595"/>
                  <ellipse cx="575.05" cy="594.12" rx="4.61" ry="3.75" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="560.58" cy="597.01" rx="4.61" ry="3.75" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="549.86" cy="584.47" rx="4.61" ry="3.75" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="539.15" cy="571.92" rx="4.61" ry="3.75" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="528.43" cy="559.38" rx="4.61" ry="3.75" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="517.72" cy="546.83" rx="4.61" ry="3.75" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="507" cy="534.29" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -140.19, 182.63)" fill="#096595"/>
                  <ellipse cx="496.28" cy="521.75" rx="4.61" ry="3.75" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="485.57" cy="509.2" rx="4.61" ry="3.75" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="474.85" cy="496.66" rx="4.61" ry="3.75" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="464.14" cy="484.11" rx="4.61" ry="3.75" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="453.42" cy="471.57" rx="4.61" ry="3.75" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="442.7" cy="459.02" rx="4.61" ry="3.75" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="431.99" cy="446.48" rx="4.61" ry="3.75" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="421.27" cy="433.93" rx="4.61" ry="3.75" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="403.38" cy="433.64" rx="4.61" ry="3.75" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="385.49" cy="433.34" rx="4.61" ry="3.75" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="367.6" cy="433.04" rx="4.61" ry="3.75" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="349.72" cy="432.74" rx="4.61" ry="3.75" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="331.83" cy="432.45" rx="4.61" ry="3.75" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="313.94" cy="432.15" rx="4.61" ry="3.75" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#096595"/>
                </g>
                <g id="lampOBtn3">
                  <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="matrix(0.95, -0.31, 0.31, 0.95, -124.07, 245.31)" fill="#fff"/>
                  <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#fff"/>
                </g>
                <g>
                  <g id="lamp1Btn3">
                    <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#fff"/>
                  </g>
                  <g id="lamp2Btn3">
                    <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="matrix(0.95, -0.31, 0.31, 0.95, -124.07, 245.31)" fill="#fff"/>
                    <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#fff"/>
                  </g>
                  <g id="lamp3Btn3">
                    <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff"/>
                    <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#fff"/>
                  </g>
                </g>
                <g id="radianceBtn3">
                  <image width="847" height="296" transform="translate(250.67 376.26) scale(1.04 1)" xlink:href="img/radiance3.png"/>
                </g>
                <g id="diamondBtn3">
                  <path d="M1000.93,285.26l-9.15,21.55q4.82,10.06,9.62,20.14,4.74-10.08,9.47-20.14Z" fill="#ff3364"/>
                  <path d="M1051.37,362.44l-6,14q3.13,6.56,6.26,13.11,3.09-6.56,6.16-13.11Z" fill="#ff3364"/>
                  <path d="M1001.16,364.75l-3.68,8.69,3.87,8.11c1.28-2.7,2.55-5.41,3.82-8.11Z" fill="#fff"/>
                </g>
                <g id="grWBtn3">
                  <path d="M712.11,640.78l0,.08-.5.29a6.31,6.31,0,0,1-1.1.62l-67.44,38.09a6.07,6.07,0,0,1-4.85.19c-4.78-1.66-8.66-7.94-8.66-14a9.25,9.25,0,0,1,2.47-6.83s0,0,0,0l2.35-1.34,66.13-37.48h0a5.89,5.89,0,0,1,5.44-.56c4.79,1.67,8.66,8,8.66,14C714.71,636.9,713.72,639.34,712.11,640.78Z" opacity="0.75" fill="url(#Градієнт_без_назви_114)" style="mix-blend-mode: hard-light"/>
                  <path d="M408,587.88c0,6.08-3.87,12.36-8.66,14a6.07,6.07,0,0,1-4.85-.19L327,563.62a5.89,5.89,0,0,1-1.09-.62l-.51-.29.05-.08a9.16,9.16,0,0,1-2.6-7c0-6.08,3.88-12.36,8.66-14a5.91,5.91,0,0,1,5.45.56h0l66.08,37.47,2.44,1.38A9.22,9.22,0,0,1,408,587.88Z" opacity="0.75" fill="url(#Градієнт_без_назви_114-2)" style="mix-blend-mode: hard-light"/>
                  <path d="M1054.82,644.19l0,.08-.51.29a5.66,5.66,0,0,1-1.1.62l-67.43,38.09a6.07,6.07,0,0,1-4.85.2c-4.79-1.67-8.67-8-8.67-14a9.25,9.25,0,0,1,2.47-6.83h0l2.42-1.37,66.1-37.47h0a5.94,5.94,0,0,1,5.45-.56c4.78,1.67,8.66,7.95,8.66,14A9.16,9.16,0,0,1,1054.82,644.19Z" opacity="0.75" fill="url(#Градієнт_без_назви_114-3)" style="mix-blend-mode: hard-light"/>
                </g>
              </g>
              <g id="gL4">
                <g>
                  <ellipse cx="1069.52" cy="494.02" rx="4.61" ry="3.75" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1053.53" cy="490.65" rx="4.61" ry="3.75" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1037.53" cy="487.29" rx="4.61" ry="3.75" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1021.54" cy="483.92" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -99.5, 339.03)" fill="#096595"/>
                  <ellipse cx="1005.54" cy="480.55" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -99.24, 333.92)" fill="#096595"/>
                  <ellipse cx="995.52" cy="494.77" rx="4.61" ry="3.75" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="985.5" cy="508.99" rx="4.61" ry="3.75" transform="translate(-109 329.12) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="975.47" cy="523.21" rx="4.61" ry="3.75" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="965.45" cy="537.43" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -118.76, 324.33)" fill="#096595"/>
                  <ellipse cx="955.43" cy="551.65" rx="4.61" ry="3.75" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="945.41" cy="565.87" rx="4.61" ry="3.75" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="935.39" cy="580.09" rx="4.61" ry="3.75" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="921.25" cy="589.53" rx="4.61" ry="3.75" transform="translate(-137 313.22) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="906.96" cy="581.31" rx="4.61" ry="3.75" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="892.67" cy="573.09" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -133.33, 303.6)" fill="#096595"/>
                  <ellipse cx="878.38" cy="564.87" rx="4.61" ry="3.75" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="864.09" cy="556.65" rx="4.61" ry="3.75" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="849.8" cy="548.43" rx="4.61" ry="3.75" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="835.52" cy="540.21" rx="4.61" ry="3.75" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="821.23" cy="531.99" rx="4.61" ry="3.75" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="806.94" cy="523.77" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -122.29, 274.72)" fill="#096595"/>
                  <ellipse cx="792.65" cy="515.55" rx="4.61" ry="3.75" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="778.36" cy="507.33" rx="4.61" ry="3.75" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="764.07" cy="499.11" rx="4.61" ry="3.75" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="747.65" cy="494.85" rx="4.61" ry="3.75" transform="translate(-116.26 255) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="730.39" cy="504.78" rx="4.61" ry="3.75" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="713.13" cy="514.71" rx="4.61" ry="3.75" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="695.87" cy="524.63" rx="4.61" ry="3.75" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="678.61" cy="534.56" rx="4.61" ry="3.75" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="661.35" cy="544.49" rx="4.61" ry="3.75" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="644.09" cy="554.41" rx="4.61" ry="3.75" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="626.83" cy="564.34" rx="4.61" ry="3.75" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="609.57" cy="574.27" rx="4.61" ry="3.75" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="592.31" cy="584.19" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -151.43, 211.41)" fill="#096595"/>
                  <ellipse cx="575.05" cy="594.12" rx="4.61" ry="3.75" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="560.58" cy="597.01" rx="4.61" ry="3.75" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="549.86" cy="584.47" rx="4.61" ry="3.75" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="539.15" cy="571.92" rx="4.61" ry="3.75" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="528.43" cy="559.38" rx="4.61" ry="3.75" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="517.72" cy="546.83" rx="4.61" ry="3.75" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="507" cy="534.29" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -140.19, 182.63)" fill="#096595"/>
                  <ellipse cx="496.28" cy="521.75" rx="4.61" ry="3.75" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="485.57" cy="509.2" rx="4.61" ry="3.75" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="474.85" cy="496.66" rx="4.61" ry="3.75" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="464.14" cy="484.11" rx="4.61" ry="3.75" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="453.42" cy="471.57" rx="4.61" ry="3.75" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="442.7" cy="459.02" rx="4.61" ry="3.75" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="431.99" cy="446.48" rx="4.61" ry="3.75" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="421.27" cy="433.93" rx="4.61" ry="3.75" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="403.38" cy="433.64" rx="4.61" ry="3.75" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="385.49" cy="433.34" rx="4.61" ry="3.75" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="367.6" cy="433.04" rx="4.61" ry="3.75" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="349.72" cy="432.74" rx="4.61" ry="3.75" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="331.83" cy="432.45" rx="4.61" ry="3.75" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="313.94" cy="432.15" rx="4.61" ry="3.75" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#096595"/>
                </g>
                <g id="lampOBtn4">
                  <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#fff"/>
                </g>
                <g id="lampBtn4">
                  <g>
                    <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <g>
                    <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <g>
                    <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <g>
                    <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <g>
                    <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <g>
                    <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <g>
                    <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <g>
                    <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <g>
                    <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <g>
                    <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <g>
                    <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <g>
                    <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <g>
                    <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#ff3364"/>
                    <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#33ff7c"/>
                  </g>
                  <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#ff3364"/>
                </g>
                <g id="lampO1Btn4">
                  <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="matrix(0.95, -0.31, 0.31, 0.95, -124.07, 245.31)" fill="#fff"/>
                  <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff"/>
                </g>
                <g>
                  <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="matrix(0.95, -0.31, 0.31, 0.95, -124.07, 245.31)" fill="#fff"/>
                  <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff"/>
                </g>
                <g id="radianceBtn4">
                  <image width="847" height="296" transform="translate(246.11 371.79) scale(1.06 1)" xlink:href="img/radiance4.png"/>
                </g>
                <g id="diamondBtn4">
                  <path d="M1000.93,285.26l-9.15,21.55q4.82,10.06,9.62,20.14,4.74-10.08,9.47-20.14Z" fill="#ff3364"/>
                  <path d="M1051.37,362.44l-6,14q3.13,6.56,6.26,13.11,3.09-6.56,6.16-13.11Z" fill="#33ff7c"/>
                  <path d="M1001.16,364.75l-3.68,8.69,3.87,8.11c1.28-2.7,2.55-5.41,3.82-8.11Z" fill="#fff"/>
                </g>
                <g id="grWBtn4">
                  <path d="M711.3,641l.05.08-.5.29a6.31,6.31,0,0,1-1.1.62l-67.44,38.09a6.07,6.07,0,0,1-4.85.19c-4.78-1.66-8.66-7.94-8.66-14a9.25,9.25,0,0,1,2.47-6.83s0,0,0,0l2.35-1.34,66.13-37.48h0a5.89,5.89,0,0,1,5.44-.56c4.79,1.67,8.66,8,8.66,14C713.9,637.09,712.91,639.53,711.3,641Z" opacity="0.75" fill="url(#Градієнт_без_назви_161)" style="mix-blend-mode: hard-light"/>
                  <path d="M407.16,588.07c0,6.08-3.87,12.36-8.66,14a6.07,6.07,0,0,1-4.85-.19l-67.44-38.09a5.89,5.89,0,0,1-1.09-.62l-.51-.29.05-.08a9.16,9.16,0,0,1-2.6-7c0-6.08,3.88-12.36,8.66-14a5.91,5.91,0,0,1,5.45.56h0l66.08,37.47,2.44,1.38A9.22,9.22,0,0,1,407.16,588.07Z" opacity="0.75" fill="url(#Градієнт_без_назви_161-2)" style="mix-blend-mode: hard-light"/>
                  <path d="M1054,644.38l0,.08-.51.29a5.66,5.66,0,0,1-1.1.62L985,683.46a6.07,6.07,0,0,1-4.85.2c-4.79-1.67-8.67-7.95-8.67-14A9.25,9.25,0,0,1,974,662.8h0l2.42-1.37L1042.5,624h0a5.94,5.94,0,0,1,5.45-.56c4.78,1.67,8.66,8,8.66,14A9.16,9.16,0,0,1,1054,644.38Z" opacity="0.75" fill="url(#Градієнт_без_назви_161-3)" style="mix-blend-mode: hard-light"/>
                </g>
              </g>
              <g id="gL5">
                <g>
                  <ellipse cx="1037.53" cy="487.29" rx="4.61" ry="3.75" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1021.54" cy="483.92" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -99.5, 339.03)" fill="#096595"/>
                  <ellipse cx="1053.53" cy="490.65" rx="4.61" ry="3.75" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1069.52" cy="494.02" rx="4.61" ry="3.75" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="1005.54" cy="480.55" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -99.24, 333.92)" fill="#096595"/>
                  <ellipse cx="995.52" cy="494.77" rx="4.61" ry="3.75" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="985.5" cy="508.99" rx="4.61" ry="3.75" transform="translate(-109 329.12) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="975.47" cy="523.21" rx="4.61" ry="3.75" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="965.45" cy="537.43" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -118.76, 324.33)" fill="#096595"/>
                  <ellipse cx="955.43" cy="551.65" rx="4.61" ry="3.75" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="945.41" cy="565.87" rx="4.61" ry="3.75" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="935.39" cy="580.09" rx="4.61" ry="3.75" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="921.25" cy="589.53" rx="4.61" ry="3.75" transform="translate(-137 313.22) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="906.96" cy="581.31" rx="4.61" ry="3.75" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="892.67" cy="573.09" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -133.33, 303.6)" fill="#096595"/>
                  <ellipse cx="878.38" cy="564.87" rx="4.61" ry="3.75" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="864.09" cy="556.65" rx="4.61" ry="3.75" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="849.8" cy="548.43" rx="4.61" ry="3.75" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="835.52" cy="540.21" rx="4.61" ry="3.75" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="821.23" cy="531.99" rx="4.61" ry="3.75" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="806.94" cy="523.77" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -122.29, 274.72)" fill="#096595"/>
                  <ellipse cx="792.65" cy="515.55" rx="4.61" ry="3.75" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="778.36" cy="507.33" rx="4.61" ry="3.75" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="764.07" cy="499.11" rx="4.61" ry="3.75" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="747.65" cy="494.85" rx="4.61" ry="3.75" transform="translate(-116.26 255) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="730.39" cy="504.78" rx="4.61" ry="3.75" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="713.13" cy="514.71" rx="4.61" ry="3.75" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="695.87" cy="524.63" rx="4.61" ry="3.75" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="678.61" cy="534.56" rx="4.61" ry="3.75" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="661.35" cy="544.49" rx="4.61" ry="3.75" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="644.09" cy="554.41" rx="4.61" ry="3.75" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="626.83" cy="564.34" rx="4.61" ry="3.75" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="609.57" cy="574.27" rx="4.61" ry="3.75" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="592.31" cy="584.19" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -151.43, 211.41)" fill="#096595"/>
                  <ellipse cx="575.05" cy="594.12" rx="4.61" ry="3.75" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="560.58" cy="597.01" rx="4.61" ry="3.75" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="549.86" cy="584.47" rx="4.61" ry="3.75" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="539.15" cy="571.92" rx="4.61" ry="3.75" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="528.43" cy="559.38" rx="4.61" ry="3.75" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="517.72" cy="546.83" rx="4.61" ry="3.75" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="507" cy="534.29" rx="4.61" ry="3.75" transform="matrix(0.95, -0.31, 0.31, 0.95, -140.19, 182.63)" fill="#096595"/>
                  <ellipse cx="496.28" cy="521.75" rx="4.61" ry="3.75" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="485.57" cy="509.2" rx="4.61" ry="3.75" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="474.85" cy="496.66" rx="4.61" ry="3.75" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="464.14" cy="484.11" rx="4.61" ry="3.75" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="453.42" cy="471.57" rx="4.61" ry="3.75" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="442.7" cy="459.02" rx="4.61" ry="3.75" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="431.99" cy="446.48" rx="4.61" ry="3.75" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="421.27" cy="433.93" rx="4.61" ry="3.75" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="403.38" cy="433.64" rx="4.61" ry="3.75" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="385.49" cy="433.34" rx="4.61" ry="3.75" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="367.6" cy="433.04" rx="4.61" ry="3.75" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="349.72" cy="432.74" rx="4.61" ry="3.75" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="331.83" cy="432.45" rx="4.61" ry="3.75" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#096595"/>
                  <ellipse cx="313.94" cy="432.15" rx="4.61" ry="3.75" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#096595"/>
                </g>
                <g id="lampOBtn5">
                  <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="matrix(0.95, -0.31, 0.31, 0.95, -124.07, 245.31)" fill="#fff"/>
                  <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#fff"/>
                </g>
                <g id="lampBtn5">
                  <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="matrix(0.95, -0.31, 0.31, 0.95, -124.07, 245.31)" fill="#fff"/>
                  <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff"/>
                  <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#fff"/>
                </g>
                <g id="radianceBtn5">
                  <image width="847" height="296" transform="translate(238.71 376.47) scale(1.07 1)" xlink:href="img/radiance5.png"/>
                </g>
                <g id="diamondBtn5">
                  <path d="M1000.93,285.26l-9.15,21.55q4.82,10.06,9.62,20.14,4.74-10.08,9.47-20.14Z" fill="#fff"/>
                  <path d="M1051.37,362.44l-6,14q3.13,6.56,6.26,13.11,3.09-6.56,6.16-13.11Z" fill="#fff"/>
                  <path d="M1001.16,364.75l-3.68,8.69,3.87,8.11c1.28-2.7,2.55-5.41,3.82-8.11Z" fill="#fff"/>
                </g>
                <g id="grWBtn5">
                  <path d="M712,641.13l0,.08-.5.29a6.31,6.31,0,0,1-1.1.62L643,680.21a6.07,6.07,0,0,1-4.85.19c-4.78-1.66-8.66-7.94-8.66-14a9.25,9.25,0,0,1,2.47-6.83s0,0,0,0l2.35-1.34,66.13-37.48h0a5.89,5.89,0,0,1,5.44-.56c4.79,1.67,8.66,8,8.66,14C714.6,637.25,713.61,639.69,712,641.13Z" opacity="0.75" fill="url(#Градієнт_без_назви_166)" style="mix-blend-mode: hard-light"/>
                  <path d="M407.86,588.23c0,6.08-3.87,12.36-8.66,14a6.07,6.07,0,0,1-4.85-.19L326.91,564a5.89,5.89,0,0,1-1.09-.62l-.51-.29.05-.08a9.16,9.16,0,0,1-2.6-7c0-6.08,3.88-12.36,8.66-14a5.91,5.91,0,0,1,5.45.56h0L403,580l2.44,1.38A9.22,9.22,0,0,1,407.86,588.23Z" opacity="0.75" fill="url(#Градієнт_без_назви_166-2)" style="mix-blend-mode: hard-light"/>
                  <path d="M1054.71,644.54l0,.08-.51.29a5.66,5.66,0,0,1-1.1.62l-67.43,38.09a6.07,6.07,0,0,1-4.85.2c-4.79-1.67-8.67-8-8.67-14a9.25,9.25,0,0,1,2.47-6.83h0l2.42-1.37,66.1-37.47h0a5.94,5.94,0,0,1,5.45-.56c4.78,1.67,8.66,8,8.66,14A9.16,9.16,0,0,1,1054.71,644.54Z" opacity="0.75" fill="url(#Градієнт_без_назви_166-3)" style="mix-blend-mode: hard-light"/>
                </g>
              </g>
            </g>
            <g id="control">
              <g>
                <rect x="41.53" y="3.25" width="237.96" height="396.82" rx="54" fill="#075990"/>
                <rect x="49.2" y="10.83" width="222.61" height="381.66" rx="50" fill="#001f3f"/>
              </g>
              <g>
                <g>
                  <circle cx="161.93" cy="310.3" r="36.41" fill="#33e3ff"/>
                  <path d="M191.65,310.3a29.72,29.72,0,1,1-29.72-29.73A29.72,29.72,0,0,1,191.65,310.3Z" fill="#fff" opacity="0.5"/>
                </g>
                <g id="btnAll">
                  <g id="btn1">
                    <circle id="lightBtn1" cx="122.67" cy="78.7" r="28.27" fill="#fff" opacity="0.35"/>
                    <circle cx="122.67" cy="78.7" r="22.09" fill="url(#Градієнт_без_назви_10)"/>
                    <circle cx="122.67" cy="78.7" r="18.66" fill="#17538b"/>
                    <g>
                      <path d="M113.83,76.36V74.64h-2.94v-.56l2.82-4h.92V74h.89v.67h-.89v1.72Zm0-2.39V71.86q0-.49,0-1h0c-.2.37-.35.64-.53.93L111.75,74v0Z" fill="#fff"/>
                      <path d="M117.48,70.3v1.36h1.22v.65h-1.22v2.54c0,.58.16.91.64.91a1.93,1.93,0,0,0,.5-.06l0,.64a2,2,0,0,1-.75.12,1.18,1.18,0,0,1-.93-.36,1.75,1.75,0,0,1-.33-1.22V72.31h-.73v-.65h.73V70.53Z" fill="#fff"/>
                      <path d="M119.67,69.46h.86V72.4h0a1.58,1.58,0,0,1,.62-.61,1.8,1.8,0,0,1,.87-.24c.64,0,1.65.39,1.65,2v2.8h-.86v-2.7c0-.76-.28-1.4-1.09-1.4a1.24,1.24,0,0,0-1.15.86,1.18,1.18,0,0,0,0,.4v2.84h-.86Z" fill="#fff"/>
                      <path d="M131.4,74a2.3,2.3,0,0,1-2.35,2.5,2.24,2.24,0,0,1-2.26-2.42,2.3,2.3,0,0,1,2.34-2.5A2.23,2.23,0,0,1,131.4,74Zm-3.74,0c0,1,.59,1.81,1.43,1.81s1.43-.77,1.43-1.83c0-.8-.4-1.81-1.41-1.81S127.66,73.12,127.66,74Z" fill="#ff3364"/>
                      <path d="M132.57,76.36v-4h-.67v-.65h.67v-.23a2.21,2.21,0,0,1,.54-1.64,1.65,1.65,0,0,1,1.15-.44,2,2,0,0,1,.73.14l-.12.66a1.21,1.21,0,0,0-.54-.11c-.73,0-.92.64-.92,1.36v.26h1.14v.65h-1.14v4Z" fill="#ff3364"/>
                      <path d="M114.89,79H116v5.85c0,2.32-1.15,3-2.65,3a3.87,3.87,0,0,1-1.21-.2l.17-.92a2.76,2.76,0,0,0,1,.16c1,0,1.61-.45,1.61-2.16Z" fill="#ff3364"/>
                      <path d="M123.11,86q0,1,.06,1.71h-1l-.06-1h0A2.37,2.37,0,0,1,120,87.86c-1,0-2.17-.54-2.17-2.75V81.44H119v3.48c0,1.19.37,2,1.4,2a1.67,1.67,0,0,0,1.51-1,1.81,1.81,0,0,0,.1-.58V81.44h1.14Z" fill="#ff3364"/>
                      <path d="M125,78.51h1.14v9.21H125Z" fill="#ff3364"/>
                      <path d="M128.49,81.44l1.38,3.71c.14.42.29.91.4,1.29h0c.12-.38.25-.86.41-1.31l1.24-3.69h1.21l-1.72,4.48c-.81,2.15-1.37,3.25-2.15,3.93a3.09,3.09,0,0,1-1.4.74l-.29-1a2.83,2.83,0,0,0,1-.56,3.43,3.43,0,0,0,1-1.27.69.69,0,0,0,.09-.27.94.94,0,0,0-.07-.3l-2.33-5.79Z" fill="#ff3364"/>
                    </g>
                    <circle cx="122.67" cy="78.7" r="28.27" fill="#fff" opacity="0"/>
                  </g>
                  <g id="btn2">
                    <circle id="lightBtn2" cx="198.34" cy="78.7" r="28.27" fill="#fff" opacity="0.35"/>
                    <circle cx="198.34" cy="78.7" r="22.09" fill="url(#Градієнт_без_назви_4)"/>
                    <circle cx="198.34" cy="78.7" r="18.66" fill="#17538b"/>
                    <g>
                      <path d="M210.27,80.2c0,4.06-2.53,7.35-5.64,7.35a4.36,4.36,0,0,1-1.44-.25,3.21,3.21,0,0,1-1.22.25,3.26,3.26,0,0,1-2-.66,2.36,2.36,0,0,1-1.58.66,2.4,2.4,0,0,1-1.73-.84,3.48,3.48,0,0,1-2.21.84,3.25,3.25,0,0,1-.92-.13,4.05,4.05,0,0,1-1.06.13c-3.11,0-5.64-3.29-5.64-7.35s2.53-7.35,5.64-7.35a4.05,4.05,0,0,1,1.06.13,3.25,3.25,0,0,1,.92-.13,3.45,3.45,0,0,1,2.19.83h0a2.4,2.4,0,0,1,1.73-.84,2.36,2.36,0,0,1,1.58.66,3.74,3.74,0,0,1,.42-.27,3.23,3.23,0,0,1,1.54-.39,3.4,3.4,0,0,1,1.22.24,4.63,4.63,0,0,1,1.44-.24C207.74,72.85,210.27,76.14,210.27,80.2Z" fill="#ff9433"/>
                      <path d="M200.43,73.24a3.74,3.74,0,0,0-.42.27,2.36,2.36,0,0,0-1.58-.66,2.4,2.4,0,0,0-1.73.84h0a5.29,5.29,0,0,0-.87-4.72l1.29-1.44A8,8,0,0,1,200.43,73.24Z" fill="#001f3f"/>
                      <polygon points="196.31 78.66 194.06 75.65 191.69 78.01 196.31 78.66" fill="#001f3f"/>
                      <polygon points="200.53 78.66 202.78 75.65 205.15 78.01 200.53 78.66" fill="#001f3f"/>
                      <path d="M197.29,80.47l.86-1.81.32.48.27-.48.81,1.81C199.56,81.09,197.29,81.09,197.29,80.47Z" fill="#001f3f"/>
                      <path d="M205.15,79.8c0,3.41-2.82,5.29-5.93,5.64v-.87h-1.6v.92c-3.34-.17-6.5-2.08-6.5-5.69a6.56,6.56,0,0,0,4,2v1.6h1.59V82A18.9,18.9,0,0,0,200,82v1.38h1.6V81.75C203.33,81.39,204.69,80.73,205.15,79.8Z" fill="#001f3f"/>
                    </g>
                    <circle cx="198.34" cy="78.7" r="28.27" fill="#fff" opacity="0"/>
                  </g>
                  <g id="btn3">
                    <circle id="lightBtn3" cx="122.67" cy="146.57" r="28.27" fill="#fff" opacity="0.35"/>
                    <circle cx="122.67" cy="146.57" r="22.09" fill="url(#Градієнт_без_назви_31)"/>
                    <circle cx="122.67" cy="146.57" r="18.66" fill="#17538b"/>
                    <g>
                      <path d="M122.13,160.12a2,2,0,0,1-1.47-2.47L125,140.53a1.83,1.83,0,1,0-3.46-.88l-.71,2.77a2,2,0,1,1-3.93-1l.71-2.78A5.86,5.86,0,1,1,129,141.53l-4.37,17.12A2,2,0,0,1,122.13,160.12Z" fill="#fff"/>
                      <path d="M125.85,153.74l-1,3.83a20.86,20.86,0,0,1-4.26.81,2.25,2.25,0,0,1,0-.73l.67-2.61A16.25,16.25,0,0,0,125.85,153.74Z" fill="#ff3364"/>
                      <path d="M127.46,147.42l-1,3.83a19.7,19.7,0,0,1-4.39.81l.85-3.34A16.25,16.25,0,0,0,127.46,147.42Z" fill="#ff3364"/>
                      <path d="M129,141.54l-.92,3.6a20.44,20.44,0,0,1-4.39.82l.85-3.35a15.25,15.25,0,0,0,4.5-1.3A.85.85,0,0,1,129,141.54Z" fill="#ff3364"/>
                      <path d="M129,138.45a18.59,18.59,0,0,1-4,2.1v0a2.18,2.18,0,0,0-.85-2.46h0c0-.21-.06-.42-.11-.63a14.89,14.89,0,0,0,3.43-1.87A6,6,0,0,1,129,138.45Z" fill="#ff3364"/>
                      <path d="M124.17,138.07a1.27,1.27,0,0,0-.32-.13,1.51,1.51,0,0,0-1.15.17,2.42,2.42,0,0,0-1.13,1.54l-.07.27a4.35,4.35,0,0,0-.41-.34,15.42,15.42,0,0,0-1-4.56,5.87,5.87,0,0,1,3-1.17,18,18,0,0,1,1,3.59C124.11,137.65,124.14,137.86,124.17,138.07Z" fill="#ff3364"/>
                      <path d="M121.5,139.92l-.63,2.5a1.9,1.9,0,0,1-.52.89,14,14,0,0,0-3.24-2.57l.53-2.09a8.54,8.54,0,0,1,.38-1.11,17.42,17.42,0,0,1,3.07,2A4.35,4.35,0,0,1,121.5,139.92Z" fill="#ff3364"/>
                    </g>
                    <circle cx="122.67" cy="146.57" r="28.27" fill="#fff" opacity="0"/>
                  </g>
                  <g id="btn4">
                    <circle id="lightBtn4" cx="198.34" cy="146.57" r="28.27" fill="#fff" opacity="0.35"/>
                    <circle cx="198.34" cy="146.57" r="22.23" fill="url(#Градієнт_без_назви_44)"/>
                    <circle cx="198.34" cy="146.57" r="18.66" fill="#17538b"/>
                    <g>
                      <polygon points="208.64 155.59 200.37 155.59 200.37 159.66 196.29 159.66 196.29 155.59 188.04 155.59 192.09 148.45 190.78 148.45 194.61 140.94 193.57 140.94 193.57 140.63 198.34 131.77 203.09 140.63 203.09 140.94 202.07 140.94 205.9 148.45 204.57 148.45 208.64 155.59" fill="#33ff7c"/>
                      <circle cx="198.44" cy="148.65" r="0.91" fill="#ff3364"/>
                      <circle cx="195.9" cy="143.38" r="0.91" fill="#fff"/>
                      <circle cx="199.35" cy="137.14" r="0.91" fill="#ff3364"/>
                      <circle cx="203.7" cy="153.08" r="0.91" fill="#ff3364"/>
                      <circle cx="192.87" cy="152.6" r="0.91" fill="#fff"/>
                      <circle cx="203.46" cy="146.97" r="0.91" fill="#fff"/>
                    </g>
                    <circle cx="198.34" cy="146.57" r="28.27" fill="#fff" opacity="0"/>
                  </g>
                  <g id="btn5">
                    <circle id="lightBtn5" cx="161.93" cy="212.14" r="28.27" fill="#fff" opacity="0.35"/>
                    <circle cx="161.93" cy="212.14" r="22.09" fill="#17538b"/>
                    <circle cx="161.93" cy="212.14" r="22.09" fill="url(#Градієнт_без_назви_52)"/>
                    <circle cx="161.93" cy="212.14" r="18.66" fill="#17538b"/>
                    <g>
                      <path d="M172.35,219.66a10.71,10.71,0,0,1,.9,2.5c0,.45-.48.82-.62,1.19s-.06,1-.41,1.27-.9-.06-1.34-.07-.92.34-1.33.15a10.3,10.3,0,0,1-2-1.74,55.91,55.91,0,0,0-3.45-5.38c-1.17-1.56-2.86-3.07-4.16-4.85s-2.23-3.86-3.32-5.47c-2-3-3.69-5.29-3.28-5.57s2.46,1.77,5.09,4.23c1.45,1.35,3.39,2.61,5,4.21s2.84,3.54,4.22,5C169.9,217.52,172,219.14,172.35,219.66Z" fill="url(#Градієнт_без_назви_52-2)"/>
                      <ellipse cx="169.94" cy="221.31" rx="1.9" ry="2.68" transform="translate(-95.41 135.03) rotate(-34.47)" fill="#fff"/>
                      <path d="M160.51,205.19a.21.21,0,0,1-.15-.07l-4.7-5.18a.19.19,0,0,1,0-.28.19.19,0,0,1,.28,0l4.7,5.18a.19.19,0,0,1,0,.28A.18.18,0,0,1,160.51,205.19Z" fill="url(#Градієнт_без_назви_52-3)"/>
                      <path d="M153.6,207a.17.17,0,0,1-.15-.07l-3-3.28a.2.2,0,1,1,.3-.27l3,3.28a.22.22,0,0,1,0,.29A.24.24,0,0,1,153.6,207Z" fill="url(#Градієнт_без_назви_52-4)"/>
                      <path d="M171.43,206.42a.19.19,0,0,1-.15-.07l-3-3.28a.22.22,0,0,1,0-.29.21.21,0,0,1,.29,0l3,3.28a.21.21,0,0,1,0,.29A.24.24,0,0,1,171.43,206.42Z" fill="url(#Градієнт_без_назви_52-5)"/>
                      <path d="M159.27,218.69a.19.19,0,0,1-.15-.07l-9.19-11a.22.22,0,0,1,0-.29.21.21,0,0,1,.29,0l9.19,11a.21.21,0,0,1,0,.29A.2.2,0,0,1,159.27,218.69Z" fill="url(#Градієнт_без_назви_52-6)"/>
                      <path d="M158.16,198A.2.2,0,0,1,158,198l-1.49-1.64a.21.21,0,0,1,0-.29.19.19,0,0,1,.28,0l1.49,1.64a.21.21,0,0,1,0,.29A.19.19,0,0,1,158.16,198Z" fill="url(#Градієнт_без_назви_52-7)"/>
                      <path d="M148.7,214.23a.19.19,0,0,1-.15-.07l-1.49-1.64a.2.2,0,0,1,0-.28.19.19,0,0,1,.28,0l1.49,1.64a.21.21,0,0,1,0,.29A.24.24,0,0,1,148.7,214.23Z" fill="url(#Градієнт_без_назви_52-8)"/>
                    </g>
                    <circle cx="161.93" cy="212.14" r="28.27" fill="#fff" opacity="0"/>
                  </g>
                </g>
              </g>
            </g>
            <polyline id="pL1" points="305.91 432.19 421.95 434.01 560.34 597.54 753.42 491.45 921.74 590.45 1005.54 480.55 1089.1 498.22" fill="none"/>
          </g>
        </g>
      </svg>
        `;
  let animWrapper = document.getElementById(id);
  id = "#" + id + " ";

  function importSVG() {
    animWrapper.innerHTML = contents;
    // document.querySelector(".animation_wrapper svg").style.width = "100%";
    // document.querySelector(".animation_wrapper svg").style.height = "100%";

    window.addEventListener("load", gsapAnim);
  }

  function addScripts() {
    let finalAddList = [];

    let scriptList;
    if (
      document.body != null &&
      document.getElementsByClassName("containerScriptList").length == 0
    ) {
      scriptList = document.createElement("div");
      scriptList.classList.add("containerScriptList");
      document.body.appendChild(scriptList);
      finalAddList = scriptAnimArr;
    } else {
      scriptList = document.getElementsByClassName("containerScriptList")[0];
      let existArr = [];
      let existScriptsLinks = document
        .getElementsByClassName("containerScriptList")[0]
        .getElementsByTagName("script");
      for (let i = 0; i < existScriptsLinks.length; i++) {
        existArr.push(existScriptsLinks[i].src);
      }
      scriptAnimArr.forEach((elem) => {
        if (existArr.indexOf(elem) == -1) {
          finalAddList.push(elem);
        }
      });
    }
    finalAddList.forEach((elem) => {
      let tempScript = document.createElement("script");
      tempScript.src = elem;
      scriptList.appendChild(tempScript);
    });
  }

  addScripts();
  importSVG();
}
