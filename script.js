gsap.from('#page1 h1',{
    x:-100,
    opacity:0
})
gsap.from('#page1 button',{
    x:100,
    opacity:0
})

gsap.from('#page2-left',{
    x:-100,
    opacity:0,
    scrollTrigger:{
        trigger:'#page2',
        // scroller:'#page2',
        // markers:true,
        start:'top 120vh',
        end:'top 130vh'
    }
})

gsap.from('#page2-right',{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:'#page2',
        // scroller:'#page2',
        // markers:true,
        start:'top 120vh',
        end:'top 130vh'
    }
})

gsap.from('#page3 img',{
    scale:0,
    duration:1.2,
    scrollTrigger:{
        trigger:'#page3',
        // scroller:'#page2',
        // markers:true,
        start:'top 220vh',
        end:'top 230vh'
    }
})

