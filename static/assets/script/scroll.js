Scroll();
function Scroll(){
    ScrollReveal().reveal(".header-1",{
        //移动距离
        distance:'100px',
        // //持续时间
        duration:1000,
        // //动画效果
        easing:'ease-out',
        // //动画间隔
        interval:100,
        // //透明度
        opacity:0,
        origin:'top',
    });

ScrollReveal().reveal(".Sec-1",{
    //移动距离
    distance:'100px',
    // //持续时间
    duration:1000,
    // //动画效果
    easing:'ease-out',
    // //动画间隔
    interval:100,
    // //透明度
    opacity:0,

    origin:'bottom',
    // //旋转角度
    // rotate:{
    //     x:0,
    //     y:0,
    //     z:180
        
    // },
    reset:true,
    afterReveal:function(){
        ScrollReveal().clean('.Sec-1');
    }
});
ScrollReveal().reveal(".right-scroll",{
 
    distance:'100px',
    duration:1000,
    easing:'ease-out',
    interval:100,
    opacity:0,
    origin:'bottom',

});
ScrollReveal().reveal(".play",{
 
    distance:'100px',
    duration:1000,
    easing:'ease-out',
    interval:100,
    opacity:0,
    origin:'top',

});

ScrollReveal().reveal(".t-header",{
    distance:'100px',
    duration:1000,
    easing:'ease-out',
    interval:100,
    opacity:0,
    origin:'top',
})
ScrollReveal().reveal(".t-col",{
    distance:'100px',
    duration:1000,
    easing:'ease-out',
    interval:100,
    opacity:0,
    origin:'bottom',
})

ScrollReveal().reveal(".a-header",{
    distance:'100px',
    duration:1000,
    easing:'ease-out',
    interval:100,
    opacity:0,
    origin:'top',
})
ScrollReveal().reveal(".a-section",{
    distance:'100px',
    duration:1000,
    easing:'ease-out',
    interval:100,
    opacity:0,
    origin:'bottom',
})

}

/* nav */
// window.onscroll = function(){
//     const nScroll = document.querySelector('.mark');
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     if(scrollTop == 0){
//         nScroll.style.opacity = '0';
//     }else{
//         nScroll.style.opacity = '1';
//     }
// }