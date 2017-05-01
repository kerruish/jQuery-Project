console.log("Loaded: scroll");
$(function() {

    var scrollMagicController = new ScrollMagic.Controller();

    // var pinNavScence = new ScrollMagic.Scene({
    //         triggerElement: '#nav',
    //         triggerHook: 0,
    //         duration: '30%'
    //     })
    //     .setPin('#nav', {
    //         pushFollowers: true
    //     })
    //     .addTo(scrollMagicController);


    var pinIntroScence = new ScrollMagic.Scene({
            triggerElement: '#intro',
            triggerHook: 0,
            duration: '30%'
        })
        .setPin('#intro', {
            pushFollowers: false
        })
        .addTo(scrollMagicController);



    //  loop trhough each .category element
    $('.category').each(function() {
        //  build scene
        var sceneComputerDailyUse = new ScrollMagic.Scene({
                triggerElement: this,
                duration: '90%',
                triggerHook: 0.5
            })
            .setClassToggle(this, 'fade-in')
            // .addIndicators({
            //     name: 'fade scene',
            //     colorTrigger: 'black',
            //     indent: 200,
            //     colorStart: 'rgb(228, 32, 185)',
            //     colorEnd: 'rgb(65, 228, 32)'
            // })
            .addTo(scrollMagicController);
    });



    //  loop trhough each .graph element
    $('.graph').each(function() {
        //  build scene
        var sceneComputerDailyUse = new ScrollMagic.Scene({
                triggerElement: this,
                duration: '90%',
                triggerHook: 0.9
            })
            .setClassToggle(this, 'fade-in')
            // .addIndicators({
            //     name: 'fade scene',
            //     colorTrigger: 'black',
            //     indent: 200,
            //     colorStart: 'rgb(228, 32, 185)',
            //     colorEnd: 'rgb(65, 228, 32)'
            // })
            .addTo(scrollMagicController);
    });
});
