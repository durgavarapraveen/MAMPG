gsap.registerPlugin(ScrollTrigger);



function Updateanimation() {
    gsap.to('.approval-name-1', {
        x: (window.innerWidth < 600 ? " -120%" : "-170%"),
        duration: 1,
        scrollTrigger: {
            trigger: ".approval-name-2",
            start: "top 90%",
            end: "bottom 20%",
            marker: true,
            toggleActions: "restart reverse restart reverse",
        }
    });
    
    gsap.to('.approval-name-3', {
        x: (window.innerWidth < 600 ? " 120%" : "170%"),
        duration: 1,
        scrollTrigger: {
            trigger: ".approval-name-2",
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
            
        }
    });
}

window.addEventListener('resize', Updateanimation)

gsap.ticker.add(Updateanimation)


const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".flip-card-1",
        start: "top 90%",
        end: "bottom 10%",
        // markers: true,
        toggleActions: "restart reverse restart reverse"
    }
});

// Add the first animation to move the image horizontally
// timeline.to('.gsap-img-1', {
//     x: "125%",
//     duration: 0.4,
//     ease: 'power2.out'
// });


// Add the second animation to make the image disappear
// timeline.to('.gsap-img-1', {
//     scale: 0,
//     duration: 0.2,
//     ease: 'power2.out'
// });

timeline.to('.flip-card-1', {
    opacity: 1,
    duration: 0.2,
});

const timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".flip-card-2",
        start: "top 90%",
        end: "bottom 10%",
        // markers: true,
        toggleActions: "restart reverse restart reverse"
    }
});

// timeline2.to('.gsap-img-2', {
//     x: "-125%",
//     duration: 0.4,
//     ease: 'power2.out'
// });


// Add the second animation to make the image disappear
// timeline2.to('.gsap-img-2', {
//     scale: 0,
//     duration: 0.2,
//     ease: 'power2.out'
// });

timeline2.to(".flip-card-2", {
    opacity: 1,
    duration: 0.2,
});


