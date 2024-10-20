

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  lerp:0.02
});

// Sync GSAP's ScrollTrigger with Locomotive Scroll
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






document.querySelector(".footer").addEventListener("click", () => {

  locoScroll.scrollTo('.page-1')

})

document.querySelector("#aboutlink").addEventListener("click", () => {

  locoScroll.scrollTo('.scrollanimation h1')

})


document.querySelector("#projectlink").addEventListener("click", () => {

  locoScroll.scrollTo('.onscrollprojects')

})


document.querySelector("#faqlink").addEventListener("click", () => {

  locoScroll.scrollTo('.freqhid')

})

document.querySelector("#contactlink").addEventListener("click", () => {

  locoScroll.scrollTo('.innerdiv')

})





let tl = gsap.timeline(10);






gsap.registerPlugin(ScrollTrigger);

// gsap.to(".horz", {
//   xPercent: -100 * (document.querySelectorAll('.scrollableimages div').length - 1), // Move the container left
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".page-6",
//     // markers: true,
//     // start: "30% 0%",
//     pin: true, // Pin the container in place
//     scrub: 1, // Smooth scrolling
//     end: () => "+=" + document.querySelector(".scrollableimages").offsetWidth, // End scrolling after full width
//     anticipatePin: 1, // Improve pin behavior
   
//   }
// });

gsap.to(".scrollanimation", {

  transform: "translateX(-60%)",
  scrollTrigger: {
    trigger: ".scrollanimation h1",
    scroller: ".main",
    // markers: true,
    start: "0% 100%",
    end: "80% 30%",
    scrub: 5,
    // pin:true,
    duration: 4,
    smooth: 4,
  }


})

// gsap.to(".onscrollprojects", {

//   transform: "translateX(-60%)",
//   scrollTrigger: {
//     trigger: ".scrollanimationproject",
//     scroller: ".main",
//     // markers: true,
//     start: "0% 100%",
//     end: "3000vw 30%",
//     scrub: 5,
//     pin:true,
//     duration: 6,
//     smooth: 4,
//   }
//   })






let progress = 0;
let interval;

function increaseProgress() {
  if (progress < 90) {
    progress += 1;  // Normal speed until 90%
  } else if (progress >= 90 && progress < 100) {
    progress += 0.5;  // Slow down after 90%
  }

  // Update the percentage text
  document.querySelector(".loading").textContent = Math.floor(progress) + '%';

  // Stop the interval when it reaches 100%
  if (progress >= 100) {
    clearInterval(interval);
  }
}

// Set interval for smooth animation
interval = setInterval(increaseProgress, 50);




gsap.to('.line', {


  width: '60vw',
duration:8,






})


document.querySelector('.navbar i').addEventListener('click', function() {
  const mobileMenu = document.querySelector('.menubar');
  mobileMenu.classList.toggle('active');
});







tl.to(".loading-page", {
  y: "-100%", // Move it completely off-screen
  duration: 1,
  opacity: 0,
  delay: 1,
  onComplete: () => {
    // Optionally, hide it from the DOM or make it invisible
    document.querySelector(".loading-page").style.display = "none";
  }
}, 1);

var cursor = document.querySelector("#cursor")
var main = document.querySelector("body")
main.addEventListener("mousemove", function (dets) {

  gsap.to(cursor, {

    x: dets.x - 6 ,
    y: dets.y - 6 ,
    duration: 0.9,
    ease: "back.out",
})

})







const elements = document.querySelectorAll('.otheritems h5'); // Saare h5 elements select karo

elements.forEach((element) => { // Har h5 element ke liye event listener lagao
  element.addEventListener('mouseenter', () => {
    window.addEventListener('mousemove', moveElement);
  });

  element.addEventListener('mouseleave', () => {
    window.removeEventListener('mousemove', moveElement);
    element.style.transform = 'translate(0px, 0px)'; // Return to original position
  });

  function moveElement(e) {
    const rect = element.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
});



const elements2 = document.querySelectorAll('.icons img'); // Saare h5 elements select karo

elements2.forEach((element) => { // Har h5 element ke liye event listener lagao
  element.addEventListener('mouseenter', () => {
    window.addEventListener('mousemove', moveElement);
  });

  element.addEventListener('mouseleave', () => {
    window.removeEventListener('mousemove', moveElement);
    element.style.transform = 'translate(0px, 0px)'; // Return to original position
  });

  function moveElement(e) {
    const rect = element.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
});

const elements3 = document.querySelectorAll('.button button'); // Saare h5 elements select karo

elements3.forEach((element) => { // Har h5 element ke liye event listener lagao
  element.addEventListener('mouseenter', () => {
    window.addEventListener('mousemove', moveElement);
  });

  element.addEventListener('mouseleave', () => {
    window.removeEventListener('mousemove', moveElement);
    element.style.transform = 'translate(0px, 0px)'; // Return to original position
  });

  function moveElement(e) {
    const rect = element.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
});







document.addEventListener('mousemove', (event) => {
  const eyes = document.querySelectorAll('.eye');
  eyes.forEach(eye => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);

    const pupil = eye.querySelector('.pupil');
    const maxPupilMovement = 15; // Limit how much the pupil can move

    const pupilX = maxPupilMovement * Math.cos(angle);
    const pupilY = maxPupilMovement * Math.sin(angle);

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});


document.addEventListener('mousemove', (event) => {
  const eyes = document.querySelectorAll('.eye2');
  eyes.forEach(eye => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);

    const pupil = eye.querySelector('.pupil2');
    const maxPupilMovement = 15; // Limit how much the pupil can move

    const pupilX = maxPupilMovement * Math.cos(angle);
    const pupilY = maxPupilMovement * Math.sin(angle);

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});


document.addEventListener('mousemove', (event) => {
  const eyes = document.querySelectorAll('.eye3');
  eyes.forEach(eye => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);

    const pupil = eye.querySelector('.pupil3');
    const maxPupilMovement = 15; // Limit how much the pupil can move

    const pupilX = maxPupilMovement * Math.cos(angle);
    const pupilY = maxPupilMovement * Math.sin(angle);

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});


let wrong = false;

let wrongforrotate = false;

let opawrong = false;


let questions1 = document.querySelector(".span1");
let questions2 = document.querySelector(".span2");
let questions3 = document.querySelector(".span3");
let questions4 = document.querySelector(".span4");
let questions5 = document.querySelector(".span5");
let questions6 = document.querySelector(".span6");
let questions7 = document.querySelector(".span7");
let questions8 = document.querySelector(".span8");



let para1 = document.querySelector(".span1 p");
let para2 = document.querySelector(".span2 p");
let para3 = document.querySelector(".span3 p");
let para4 = document.querySelector(".span4 p");
let para5 = document.querySelector(".span5 p");
let para6 = document.querySelector(".span6 p");
let para7 = document.querySelector(".span7 p");
let para8 = document.querySelector(".span8 p");
// let para8 = document.querySelector(".span1 p");



questions1.addEventListener('click', function () {


  if (wrong) {
    gsap.to(questions1, { height: '5vh', duration: 0.1 });
  }

  else {

    gsap.to(questions1, {
      height: '200px',

      duration: 0.1



    });

  }
  wrong = !wrong;


})



questions1.addEventListener('click', function () {



  if (opawrong) {
    gsap.to(para1, {

      opacity: 0,
      duration: 0.1

    })
  } else {
    gsap.to(para1, {

      opacity: 1,
      duration: 0.1



    })
  }
  opawrong = !opawrong;



})



questions1.addEventListener('click', function () {


  if (wrongforrotate) {
    gsap.to('.span1 i', {

      transform: `rotate(0deg)`,
      duration: 1,


    })
  } else {

    gsap.to('.span1 i', {

      transform: `rotate(90deg)`,
      duration: 1,



    })

  }

  wrongforrotate = !wrongforrotate;



})






questions2.addEventListener('click', function () {


  if (wrong) {
    gsap.to(questions2, { height: '5vh', duration: 0.1 });
  }

  else {

    gsap.to(questions2, {
      height: '200px',

      duration: 0.1



    });

  }
  wrong = !wrong;


})



questions2.addEventListener('click', function () {



  if (opawrong) {
    gsap.to(para2, {

      opacity: 0,
      duration: 0.1

    })
  } else {
    gsap.to(para2, {

      opacity: 1,
      duration: 0.1



    })
  }
  opawrong = !opawrong;



})



questions2.addEventListener('click', function () {


  if (wrongforrotate) {
    gsap.to('.span2 i', {

      transform: `rotate(0deg)`,
      duration: 1,


    })
  } else {

    gsap.to('.span2 i', {

      transform: `rotate(90deg)`,
      duration: 1,



    })

  }

  wrongforrotate = !wrongforrotate;



})



questions3.addEventListener('click', function () {


  if (wrong) {
    gsap.to(questions3, { height: '5vh', duration: 0.1 });
  }

  else {

    gsap.to(questions3, {
      height: '200px',

      duration: 0.1



    });

  }
  wrong = !wrong;


})



questions3.addEventListener('click', function () {



  if (opawrong) {
    gsap.to(para3, {

      opacity: 0,
      duration: 0.1

    })
  } else {
    gsap.to(para3, {

      opacity: 1,
      duration: 0.1



    })
  }
  opawrong = !opawrong;



})



questions3.addEventListener('click', function () {


  if (wrongforrotate) {
    gsap.to('.span3 i', {

      transform: `rotate(0deg)`,
      duration: 1,


    })
  } else {

    gsap.to('.span3 i', {

      transform: `rotate(90deg)`,
      duration: 1,



    })

  }

  wrongforrotate = !wrongforrotate;



})




questions4.addEventListener('click', function () {


  if (wrong) {
    gsap.to(questions4, { height: '5vh', duration: 0.1 });
  }

  else {

    gsap.to(questions4, {
      height: '200px',

      duration: 0.1



    });

  }
  wrong = !wrong;


})



questions4.addEventListener('click', function () {



  if (opawrong) {
    gsap.to(para4, {

      opacity: 0,
      duration: 0.1

    })
  } else {
    gsap.to(para4, {

      opacity: 1,
      duration: 0.1



    })
  }
  opawrong = !opawrong;



})



questions4.addEventListener('click', function () {


  if (wrongforrotate) {
    gsap.to('.span4 i', {

      transform: `rotate(0deg)`,
      duration: 1,


    })
  } else {

    gsap.to('.span4 i', {

      transform: `rotate(90deg)`,
      duration: 1,



    })

  }

  wrongforrotate = !wrongforrotate;



})


questions5.addEventListener('click', function () {


  if (wrong) {
    gsap.to(questions5, { height: '5vh', duration: 0.1 });
  }

  else {

    gsap.to(questions5, {
      height: '200px',

      duration: 0.1



    });

  }
  wrong = !wrong;


})



questions5.addEventListener('click', function () {



  if (opawrong) {
    gsap.to(para5, {

      opacity: 0,
      duration: 0.1

    })
  } else {
    gsap.to(para5, {

      opacity: 1,
      duration: 0.1



    })
  }
  opawrong = !opawrong;



})



questions5.addEventListener('click', function () {


  if (wrongforrotate) {
    gsap.to('.span5 i', {

      transform: `rotate(0deg)`,
      duration: 1,


    })
  } else {

    gsap.to('.span5 i', {

      transform: `rotate(90deg)`,
      duration: 1,



    })

  }

  wrongforrotate = !wrongforrotate;



})





questions6.addEventListener('click', function () {


  if (wrong) {
    gsap.to(questions6, { height: '5vh', duration: 0.1 });
  }

  else {

    gsap.to(questions6, {
      height: '200px',

      duration: 0.1



    });

  }
  wrong = !wrong;


})



questions6.addEventListener('click', function () {



  if (opawrong) {
    gsap.to(para6, {

      opacity: 0,
      duration: 0.1

    })
  } else {
    gsap.to(para6, {

      opacity: 1,
      duration: 0.1



    })
  }
  opawrong = !opawrong;



})



questions5.addEventListener('click', function () {


  if (wrongforrotate) {
    gsap.to('.span6 i', {

      transform: `rotate(0deg)`,
      duration: 1,


    })
  } else {

    gsap.to('.span6 i', {

      transform: `rotate(90deg)`,
      duration: 1,



    })

  }

  wrongforrotate = !wrongforrotate;



})





questions7.addEventListener('click', function () {


  if (wrong) {
    gsap.to(questions7, { height: '5vh', duration: 0.1 });
  }

  else {

    gsap.to(questions7, {
      height: '200px',

      duration: 0.1



    });

  }
  wrong = !wrong;


})



questions7.addEventListener('click', function () {



  if (opawrong) {
    gsap.to(para7, {

      opacity: 0,
      duration: 0.1

    })
  } else {
    gsap.to(para7, {

      opacity: 1,
      duration: 0.1



    })
  }
  opawrong = !opawrong;



})



questions7.addEventListener('click', function () {


  if (wrongforrotate) {
    gsap.to('.span7 i', {

      transform: `rotate(0deg)`,
      duration: 1,


    })
  } else {

    gsap.to('.span7 i', {

      transform: `rotate(90deg)`,
      duration: 1,



    })

  }

  wrongforrotate = !wrongforrotate;



})





questions8.addEventListener('click', function () {


  if (wrong) {
    gsap.to(questions8, { height: '5vh', duration: 0.1 });
  }

  else {

    gsap.to(questions8, {
      height: '200px',

      duration: 0.1



    });

  }
  wrong = !wrong;


})



questions8.addEventListener('click', function () {



  if (opawrong) {
    gsap.to(para8, {

      opacity: 0,
      duration: 0.1

    })
  } else {
    gsap.to(para8, {

      opacity: 1,
      duration: 0.1



    })
  }
  opawrong = !opawrong;



})



questions8.addEventListener('click', function () {


  if (wrongforrotate) {
    gsap.to('.span8 i', {

      transform: `rotate(0deg)`,
      duration: 1,


    })
  } else {

    gsap.to('.span8 i', {

      transform: `rotate(90deg)`,
      duration: 1,



    })

  }

  wrongforrotate = !wrongforrotate;



})







gsap.to(".scrollcontact", {

  transform: "translateX(-60%)",
  scrollTrigger: {
    trigger: ".scrollcontact h1",
    scroller: ".main",
    // markers: true,
    start: "bottom 120%",
    end: "top 0%",
    scrub: 5,
    // pin:true,
    duration: 6,
    smooth: 4,
  }


})



// gsap.to(".scrollanimationproject", {

//   transform: "translateX(-60%)",
//   scrollTrigger: {
//     trigger: ".scrollanimationproject h1",
//     scroller: ".main",
//     // markers: true,
//     start: "600% 100%",
//     end: "900% 0%",
//     scrub: 5,
//     // pin:true,
//     duration: 6,
//     smooth: 4,
//   }


// })



let firstpageanm = document.querySelector('.firsth1 h1')
let secondh1 = document.querySelector('.secondh1 h1')
let thirdh1 = document.querySelector('.thirdh1 h1')





tl.to(firstpageanm, {

  transform: 'translateY(0%)',
  duration: 1,

})


tl.to(secondh1, {

  transform: 'translateY(0%)',
  duration: 1,

})


tl.to(thirdh1, {

  transform: 'translateY(0%)',
  duration: 1,

})



tl.to(".iconsimgbtn", {

  opacity: 1,
  duration: 1,
  // delay:2,




},)




tl.to(".navbar", {

  width: "100%",
  opacity: 1,
  duration: 2,
  zIndex:0,
  ease: "power2.out",
  delay: 4,
  // position: fixed,



}, 2)


tl.to(".logoname h5", {

  // width:"100%",
  opacity: 1,
  duration: 1.7,
  ease: "power2.out",
  delay: 4,
  // position: fixed,



}, 2)


tl.to(".otheritems h5", {

  // width:"100%",
  opacity: 1,
  duration: 1.7,
  ease: "power2.out",
  delay: 4,
  // position: fixed,



}, 2)


// gsap.to(".profileh", {

//   transform: 'translateY(0%)',
// duration:2



//   })


gsap.to(".profileh", {

  transform: 'translateY(0%)',
  opacity: 1,
  scrollTrigger: {
    trigger: ".page-2",
    scroller: ".main",
    // markers: true,
    start: "50% 80%",
    end: "65% 40%",
    scrub: 0.5,
    // pin: true,
    duration: 0.5,
    // smooth: 4,
  }


})


gsap.to(".leftfonts", {


  opacity: 1,
  scrollTrigger: {
    trigger: ".page-2",
    scroller: ".main",
    // markers: true,
    start: "50% 80%",
    end: "60% 40%",
    scrub: 0.5,
    // pin: true,
    duration: 1,
    // smooth: 4,
  }


})

gsap.to(".fontsarea", {


  opacity: 1,
  scrollTrigger: {
    trigger: ".page-2",
    scroller: ".main",
    // markers: true,
    start: "50% 80%",
    end: "60% 40%",
    scrub: 0.5,
    // pin: true,
    duration: 1,
    // smooth: 4,
  }


})

gsap.to(".menimg div", {
  

  transform:'scaleX(100%)',
  scrollTrigger: {
    trigger: ".menimg",
    scroller: ".main",
    // markers: true,
    start: "0% 90%",
   
    end: "20% 30%",
    scrub: 2,
    // pin: true,
    duration: 2,
    smooth: 6,
  }









})

gsap.to(".cylindericalimg img", {
opacity:1,
// transform: 'scaleX(1)',
  scrollTrigger: {
    trigger: ".menimg",
    scroller: ".main",
    // markers: true,
    start: "19% 20%",
    // endTrigger: "#pin-windmill-wrap",
    end: "120% 0%",
    scrub:1,
    pin: true,
    duration: 2,
    smooth: 6,
  }


})




// gsap.to(".scrollanimation", {

//   transform: "translateX(-60%)",
//   scrollTrigger: {
//     trigger: ".scrollanimation h1",
//     scroller: "body",
//     // markers: true,
//     start: "bottom 120%",
//     end: "top 0%",
//     scrub: 5,
//     // pin:true,
//     duration: 6,
//     smooth: 4,
//   }


// })



gsap.to(".pehla h1", {

  transform: 'translateY(0%) scaleY(1)',
  // opacity:1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "20% 100%",
    end: "22% 50%",
    scrub: 3,
    // pin: true,
    duration: 1,
    // smooth: 4,
  }


})

gsap.to(".duja h1", {

  transform: 'translateY(0%) scaleY(1)',
  // opacity:1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "15% 100%",
  end: "22% 50%",
    scrub: 3,
    // pin: true,
    duration: 1,
    // smooth: 4,
  }


},)


gsap.to(".skillhidden h3", {

  transform: 'translateY(0%)',
  // opacity:1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "30% 85%",
    end: "32% 60%",
    scrub: 2,
    // pin: true,
    duration: 0.5,
    // smooth: 4,
  }


},)

gsap.to(".skills-div p", {

  opacity: 1,
  // opacity:1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "30% 85%",
    end: "32% 50%",
    scrub: 5,
    // pin: true,
    duration: 0.5,
    // smooth: 4,
  }


},)



gsap.to(".skillhidden2 h3", {

  transform: 'translateY(0%)',
  // opacity:1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "65% 85%",
    end: "69% 50%",
    scrub: 2,
    // pin: true,
    duration: 0.5,
    // smooth: 4,
  }


},)


gsap.to(" .para", {

  // transform: 'translateY(0%)',
  opacity: 1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "65% 85%",
    end: "69% 50%",
    scrub: 2,
    // pin: true,
    // duration: 0.5,
    // smooth: 4,
  }


},)



gsap.to(".skillsdet h3", {

  transform: 'translateX(0vw)',
  stagger: 1,
  duration: 9,
  // opacity:1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "25% 70%",
    end: "50% 40%",
    scrub: 2,
    // pin: true,
    duration: 0.5,
    // smooth: 4,
  }


},)


gsap.to(".skillsdet2 h3", {

  transform: 'translateX(0vw)',
  stagger: 1,
  duration: 9,
  // opacity:1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "60% 85%",
    end: "90% 20%",
    scrub: 2,
    // pin: true,
    duration: 0.5,
    // smooth: 4,
  }


},)


gsap.to(".freqhid h1", {

  transform: 'translateY(0%) scaleY(1)',
  // lineHeight: '9vw',
  // opacity:1,
  scrollTrigger: {
    trigger: ".page-7",
    scroller: ".main",
    // markers: true,
    start: "25% 100%",
    end: "27% 40%",
    scrub: 1,
    // pin: true,
    duration: 0.5,
    // smooth: 4,
  }


},)


gsap.to(".askhid h1", {

  transform: 'translateY(0%) scaleY(1)',
  // lineHeight: '9vw',
  // opacity:1,
  scrollTrigger: {
    trigger: ".page-7",
    scroller: ".main",
    // markers: true,
    start: "25% 100%",
    end: "27% 40%",
    scrub: 1,
    // pin: true,
    duration: 0.5,
    // smooth: 4,
  }


},)

gsap.to(".queshid h1", {

  transform: 'translateY(0%) scaleY(1)',
  // lineHeight: '9vw',
  // opacity:1,
  scrollTrigger: {
    trigger: ".page-7",
    scroller: ".main",
    // markers: true,
    start: "27% 100%",
    end: "29% 40%",
    scrub: 2,
    // pin: true,
    duration: 0.5,
    // smooth: 4,
  }


},)




// gsap.to(".questions span", {

//   // transform: 'translateY(0%)',
//   width: '63vw',
//   stagger: 1,
//   fontSize: '1vw',
//   opacity: 1,
//   // duration:6,
//   // lineHeight: '9vw',
//   // opacity:1,
//   scrollTrigger: {
//     trigger: ".page-7",
//     scroller: ".main",
//     markers: true,
//     start: "40% 90%",
//     end: "40% 70%",
//     scrub: 6,
//     // pin: true,
//     duration: 0.5,
//     // smooth: 4,
//   }


// },)

// // gsap.to(".questions span", {

// //   // transform: 'translateY(0%)',
// //   // width: '63vw',
// //   stagger: 1,
// // // duration:6,
// //   // lineHeight: '9vw',


// //   scrollTrigger: {
// //     trigger: ".page-7",
// //     scroller: "body",
// //     markers: true,
// //     start: "40% 50%",
// //     end: "50% 30%",
// //     scrub: 6,
// //     // pin: true,
// //     duration: 0.5,
// //     // smooth: 4,
// //   }


// },)

if (window.innerWidth > 600) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".questions span", {
    width: '63vw',
    stagger: 1,
    fontSize: '1vw',
    opacity: 1,
    scrollTrigger: {
      trigger: ".page-7",
      scroller: ".main",
      // markers: true,
      start: "40% 90%",
      end: "40% 70%",
      scrub: 6,
      duration: 0.5,
    }
  });
}

gsap.to(".scrollcontact", {

  transform: "translateX(-60%)",
  scrollTrigger: {
    trigger: ".scrollcontact h1",
    scroller: ".main",
    // markers: true,
    start: "50% 90%",
    end: "90% 0%",
    scrub: 9,
    // pin:true,
    duration: 6,
    smooth: 4,
  }


})

gsap.to(".scrollanimationproject", {

  transform: "translateX(-60%)",
  scrollTrigger: {
    trigger: ".scrollanimationproject h1",
    scroller: ".main",
    // markers: true,
    start: "50% 90%",
    end: "110% 30%",
    scrub: 9,
    // pin:true,
    duration: 6,
    smooth: 4,
  }


})

let button = document.querySelector('.footbutton')

let images = document.querySelectorAll('.down')



button.addEventListener('mouseenter', function () {


  gsap.to(images, {

    transform: 'translateY(0vw)',
    duration: 0.5,
    opacity: 1,




  })




})

button.addEventListener('mouseleave', function () {


  gsap.to(images, {

    transform: 'translateY(12vw)',
    duration: 0.5,
    opacity: 0,




  })

})


let circleanm = document.querySelector('.circleeyedv1')


let circleanm2 = document.querySelector('.circleeyedv2')

let circleanm3 = document.querySelector('.circleeyedv3')


let movingeye = document.querySelector('.eyes3')


button.addEventListener('mouseenter', function () {


  gsap.to(circleanm, {

    top: '3.5vw',
    opacity: 1,
    // delay:0.1,
    // duration:0.2
  })



})

button.addEventListener('mouseleave', function () {


  gsap.to(circleanm, {


    opacity: 0,
    top: '19vw',

  })



})


button.addEventListener('mouseenter', function () {


  gsap.to(circleanm2, {

    // top: '3.5vw',
    opacity: 1,
    // delay:0.1,
    // duration:0.2
  })



})

button.addEventListener('mouseleave', function () {


  gsap.to(circleanm2, {


    opacity: 0,
    // top: '19vw',

  })



})


button.addEventListener('mouseenter', function () {


  gsap.to(circleanm3, {

    top: '3.5vw',
    opacity: 1,
    // delay:0.1,
    // duration:0.2
  })



})

button.addEventListener('mouseleave', function () {


  gsap.to(circleanm3, {


    opacity: 0,
    top: '19vw',

  })



})



button.addEventListener('mouseenter', function () {


  gsap.to(movingeye, {

    // top: '3.5vw',
    opacity: 0,
    // delay:0.1,
    // duration:0.2
  })



})

button.addEventListener('mouseleave', function () {


  gsap.to(movingeye, {


    opacity: 1,
    // top: '19vw',

  })



})



let backtotop = document.querySelector('.footer')

let backToTopH1 = document.querySelector('.footer h2')



backtotop.addEventListener('mouseenter', function () {

  gsap.to(backToTopH1, {

    x:-1500,
    duration: 7,
    // backgroundColor: '#3F3B37'




  } 
)






})
backtotop.addEventListener('mouseenter', function () {

  gsap.to(backToTopH1, {

    // transform:'translateX(-100%)',
    // duration:10,
    backgroundColor: '#3F3B37',
    color: '#C1C0B6',




  })






})


backtotop.addEventListener('mouseleave', function () {

  gsap.to(backToTopH1, {

    // transform:'translateX(-100%)',
    // duration:10,
    backgroundColor: '#C1C0B6',
    color: '#3F3B37',




  },)






})


backtotop.addEventListener('mouseleave', function () {

  gsap.to(backToTopH1, {

    x:0,
    duration:7,






  })






})


// backtotop.addEventListener('mouseleave', function () {

//   gsap.to(backToTopH1, {

//     transform: 'stop',
//     duration: 20000,
//     // backgroundColor: '#3F3B37'





//   })






// })



gsap.to(".yellow1 h3", {


  color: '#D6AE5D',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "30% 20%",
    end: "30% 8%",
    scrub: 0.01,
   
  }


})


gsap.to(".white1 h3", {


  color: '#DEDDCF',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "32% 20%",
    end: "32% 8%",
    scrub: 0.01,
   
  }


})

gsap.to(".yellow2 h3", {


  color: '#D6AE5D',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "38% 23%",
    end: "38% 9%",
    scrub: 0.01,
   
  }


})


gsap.to(".white2 h3", {


  color: '#DEDDCF',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "38.5% 20%",
    end: "38.5% 8%",
    scrub: 0.01,
   
  }


})


gsap.to(".yellow3 h3", {


  color: '#D6AE5D',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "43.8% 23%",
    end: "43.8% 9%",
    scrub: 0.01,
   
  }


})


gsap.to(".white3 h3", {


  color: '#DEDDCF',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "47% 23%",
    end: "47% 9%",
    scrub: 0.01,
   
  }


})

gsap.to(".yellow4 h3", {


  color: '#D6AE5D',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "50% 25%",
    end: "50% 9%",
    scrub: 0.01,
   
  }


})


gsap.to(".white4 h3", {


  color: '#DEDDCF',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "51% 25%",
    end: "51% 9%",
    scrub: 0.01,
   
  }


})


gsap.to(".yellow5 h3", {


  color: '#D6AE5D',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "56% 25%",
    end: "56% 9%",
    scrub: 0.01,
   
  }


})



gsap.to(".white5 h3", {


  color: '#DEDDCF',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "59% 25%",
    end: "59% 9%",
    scrub: 0.01,
   
  }


})



gsap.to(".yellow6 h3", {


  color: '#D6AE5D',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "62% 25%",
    end: "62% 9%",
    scrub: 0.001,
   
  }


})


gsap.to(".white6 h3", {


  color: '#DEDDCF',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "66% 25%",
    end: "66% 9%",
    scrub: 0.001,
   
  }


})


gsap.to(".yellow7 h3", {


  color: '#D6AE5D',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "70% 25%",
    end: "70% 9%",
    scrub: 0.001,
   
  }


})



gsap.to(".white7 h3", {


  color: '#DEDDCF',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "73% 25%",
    end: "73% 9%",
    scrub: 0.001,
   
  }


})


gsap.to(".yellow8 h3", {


  color: '#D6AE5D',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "77% 25%",
    end: "77% 9%",
    scrub: 0.001,
   
  }


})


gsap.to(".white8 h3", {


  color: '#DEDDCF',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "80% 25%",
    end: "80% 9%",
    scrub: 0.001,
   
  }


})

gsap.to(".yellow9 h3", {


  color: '#D6AE5D',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "84% 25%",
    end: "84% 9%",
    scrub: 0.001,
   
  }


})


gsap.to(".white9 h3", {


  color: '#DEDDCF',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "87% 25%",
    end: "87% 9%",
    scrub: 0.001,
   
  }


})


gsap.to(".yellow10 h3", {


  color: '#D6AE5D',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "91% 25%",
    end: "91% 9%",
    scrub: 0.001,
   
  }


})



gsap.to(".white10 h3", {


  color: '#DEDDCF',
  duration:0.1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "94% 25%",
    end: "94% 9%",
    scrub: 0.001,
   
  }


})
















// Refresh ScrollTrigger after everything is set up
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();



let formPage = document.querySelector('.onbutton-click')

let formCross = document.querySelector('.firstpg i')


let letsWork = document.querySelector('.button button')


let lastbutton = document.querySelector('.footbutton')


letsWork.addEventListener('click', function () {
  
  gsap.to(formPage, {
  
display: 'block',
height: '90vh',
    width: '82vw',
   
      // duration: 2,
      // z: 300,            // Move the element toward the user along the Z-axis
      ease: "power1.out"
   

  })
  

  gsap.to('.main', {
  
backgroundColor:'rgba(0, 0, 0, 0.504)'


  })
  

  gsap.to('.navbar', {
  
backgroundColor:'rgba(0, 0, 0, 0.01)'


})



})




formCross.addEventListener('click', function () {
  
  gsap.to(formPage, {
  
display: 'none',
duration:0,
height: '0vh',
    width: '0vw',

})

gsap.to('.main', {
  
  backgroundColor:'rgba(0, 0, 0, 0)'
  
  
  })
  
  gsap.to('.navbar', {
  

    backgroundColor:'rgba(0, 0, 0, 0)'
    
    
    })

})




let elems = document.querySelectorAll(".elem")
let pageaccess = document.querySelector(".page5-2")

elems.forEach(function (ele) {
  
  ele.addEventListener("mouseenter", function () {
 var bgimg = ele.getAttribute("data-img")
pageaccess.style.backgroundImage = `url(${bgimg})`
  

})



})





function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}  IST `;
  document.querySelector('.clock').textContent = timeString;
}

setInterval(updateTime, 1000); // Update the time every second
updateTime(); // Call the function once to avoid delay





lastbutton.addEventListener('click', function () {
  
  gsap.to(formPage, {
  
display: 'block',
height: '90vh',
    width: '82vw',
   
      // duration: 2,
      // z: 300,            // Move the element toward the user along the Z-axis
      ease: "power1.out"
   

  })
  

  gsap.to('.main', {
  
backgroundColor:'rgba(0, 0, 0, 0.504)'


  })
  

  gsap.to('.footer', {
  

backgroundColor:'rgba(0, 0, 0, 0.504)'


})



})




formCross.addEventListener('click', function () {
  
  gsap.to(formPage, {
  
display: 'none',
duration:0,
height: '0vh',
    width: '0vw',

})

gsap.to('.main', {
  
  backgroundColor:'rgba(0, 0, 0, 0)'
  
  
  })
  
  gsap.to('.footer', {
  

    backgroundColor:'rgba(0, 0, 0, 0)'
    
    
    })

})





lastbutton.addEventListener('click', function () {
  

  gsap.to('.div-1', {
  

backgroundColor:'rgba(0, 0, 0, 0.01)'


})



})




formCross.addEventListener('click', function () {
  



  gsap.to('.div-1', {
  

    backgroundColor:'#C1C0B6'
    
    
    })

})




lastbutton.addEventListener('click', function () {
  

  gsap.to('.div-2', {
  

backgroundColor:'rgba(0, 0, 0, 0.01)'


})



})




formCross.addEventListener('click', function () {
  



  gsap.to('.div-2', {
  

    backgroundColor:'#C1C0B6'
    
    
    })

})




lastbutton.addEventListener('click', function () {
  

  gsap.to('.div-3', {
  

backgroundColor:'rgba(0, 0, 0, 0.01)'


})



})




formCross.addEventListener('click', function () {
  



  gsap.to('.div-3', {
  

    backgroundColor:'#C1C0B6'
    
    
    })

})




lastbutton.addEventListener('click', function () {
  

  gsap.to('.div-4', {
  

backgroundColor:'rgba(0, 0, 0, 0.01)'


})



})




formCross.addEventListener('click', function () {
  



  gsap.to('.div-4', {
  

    backgroundColor:'#C1C0B6'
    
    
    })

})



lastbutton.addEventListener('click', function () {
  

  gsap.to('.footer h2', {
  

backgroundColor:'rgba(0, 0, 0, 0.0001)'


})



})




formCross.addEventListener('click', function () {
  



  gsap.to('.footer h2', {
  

    backgroundColor:'#C1C0B6'
    
    
    })

})