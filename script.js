var tl=gsap.timeline();

tl.from("#nav , #navList",{
    y:-100,
    opacity:0,
    duration:1,
    stagger:.7
})
tl.from(".bannerimg",{
    scale:1,
    opacity:0,
    duration:1,
    stagger:.3
})
tl.from(" #discount, #main-text h1,#main-text p,#main-text ",{
    x:500,
    opacity:0,
    duration:1,
    stagger:.3
})
tl.from("#features",{
    x:-500,
    opacity:0,
    duration:1,
    stagger:.3
})



gsap.from(".grid",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:.3,
    scrollTrigger : {
        trigger:".grid",
        scroller:"body",
        start:"top 70%",
        end:"bottom 20%"

    }
})
gsap.from("#menu-btn",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:.3,
    scrollTrigger : {
        trigger:"#menu-btn",
        scroller:"body",
        start:"top 70%",

    }
})





gsap.from("#footer-section",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:.3,
    scrollTrigger : {
        trigger:"#footer-section",
        scroller:"body",
        start:"top 80%"
    }
})
