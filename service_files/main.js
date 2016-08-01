/*! 2016-08-01 | o-bank | Pc | Copyright (c) 2016 Wunderman. | Nick */
'use strict';
var Occ;
window.spriteAnimateTimer = [];
var deadline = deadline || '2016/12/01'
window.deadline = deadline;

$(function() {
    logoAnimatedAdd();
    PaceDoneControl();
        
    windowOnScrollControl();
    // Nav
    navAnchorClick();
    navClose();
    navSearchPanelToggle();
    asideSearchPanelToggle();
    mobileSearchPanelToggle();

    // Home
    homeKVSlickSlider();
    homePhoneSlickSlider();
    homeCountDown();


    // w3
    w3AccordionControl();
    // js Class test
    // Occ = new OCircleControl({ timer: 5000 });
    // Occ.testOption();
});

function logoAnimatedRemove() {
    $('.nav-wrapper .logo img').removeClass('zooomIn animated');
}

function logoAnimatedAdd() {
    $('.nav-wrapper .logo img').addClass('zooomIn animated');
}

function navSearchPanelToggle() {
    $('nav .search-toggle').click(function(){
        var $panel = $(this).parent();
        var $bar = $(this).parent().next();
        if($panel.hasClass('active')) {
            $panel.removeClass('active');
            $bar.removeClass('active');
        }
        else {
            $panel.addClass('active');   
            $bar.addClass('active');
        }
    });
}
function asideSearchPanelToggle() {
    $('aside .search-panel button').click(function(){
        if($('aside .search-bar').is(':visible')) {
            $('aside .search-bar').hide();
        }
        else {
            $('aside .search-bar').show();
        }
    });
}
function mobileSearchPanelToggle() {
    
}

function mobileMenuShow() {
    $('.nav-wrapper .navicon .icons-nav-menu').hide();
    $('.nav-wrapper .navicon .icons-nav-close').css('display', 'block');
    $('html').css('overflow', 'hidden');
    $('aside').stop().slideDown();
}
function mobileMenuHide() {
    $('.nav-wrapper .navicon .icons-nav-menu').css('display', 'block');
    $('.nav-wrapper .navicon .icons-nav-close').hide();
    $('html').css('overflow', '');
    $('aside').stop().slideUp();
}

function w3AccordionControl() {
    $('.w3-accordionBtn').click(function(){
        var $this = $(this);
        var $accordionContent = $this.next();
        if($this.hasClass('active')) {
            $this.removeClass('active');
            $accordionContent.stop().slideUp();
        }
        else {
            $this.addClass('active');
            $accordionContent.stop().slideDown();
        }
    });
}

function PaceDoneControl() {
    Pace.on('done',function(){
        logoAnimatedRemove();
        $('.page__home .animate-sprite-wrap').viewportChecker({
            // repeat: true,
            // offset: '20%',
            callbackFunction: function(elem, action){
                if(action === 'add') {
                    // console.log($(elem)[0]); 
                    // console.log(action);
                    // var $sprite = $(elem).find('.animate-sprite');
                    setTimeout(function(){
                        var timer = setInterval(function(){
                            var id = $(elem).data('animateid');
                            var currentid = parseInt($(elem).data('currentid'), 10);
                            var until = $(elem).data('until');
                            currentid++;
                            // console.log(currentid);
                            $(elem).data('currentid', currentid);
                            $('.animate-sprite.animate-'+id+'-sprite').attr('class', 'animate-sprite animate-'+id+'-sprite animate-'+id+'-'+currentid);
                            if(currentid==until) {
                                clearInterval(timer);
                            }
                        }, 80);
                    }, 400);    
                }
                

                // console.log(action);
                // console.log(elem);
            }, 
        });

        $('.page__home .w3-btn.o-btn.icons-og_crc_l').viewportChecker({
            classToAdd: 'bounceIn animated',
        });
        $('.page__home .savetime .feature, .page__home .convenient .feature').viewportChecker({
            // repeat: true,
            // offset: '20%',
            classToAdd: 'fadeInLeft animated',
            // classToRemove: 'bounceIn animated'
            // callbackFunction: function (elem ,action){
            //     console.log(action);
            //     if(action==='add') {
            //         $(elem).removeClass('slideOutUp').animateCss('slideInLeft');
            //     }
            //     else if(action=='remove') {
            //         $(elem).animateCss('slideOutUp');
            //     }
            // }
        });
        $('.page__home .savetime .feature-gallery, .page__home .income .feature-gallery, .page__home .convenient .feature-gallery').viewportChecker({
            classToAdd: 'fadeInUp animated',
        });
        $('.page__home .income .feature, .page__home .member .feature').viewportChecker({
            classToAdd: 'fadeInRight animated'
        });
        $('.page__home .service .feature').viewportChecker({
            classToAdd: 'fadeInUp animated',
        });
        $('.page__home .countdown .feature').viewportChecker({
            classToAdd: 'tada animated',
        });
        $('.page__home .safety .feature').viewportChecker({
            classToAdd: 'zoomInDown animated',
        });

            
        // if($(window).scrollTop() == 0) {
        //     $('.nav-wrapper .logo img').animate(
        //         {
        //             width: '100%'
        //         }, 
        //         300, 
        //         function(){
        //             $('.nav-wrapper .logo img').css('width', '');
        //         }
        //     );
        // }     
    });
}

function homeKVSlickSlider() {
    $('.page__home #kv_slider').slick({
        // normal options...
        infinite: true,
        autoplay: true,
        arrows: false,
        // the magic
        // responsive: [{
        //     breakpoint: 1024,
        //     settings: {
        //         slidesToShow: 1,
        //         infinite: true
        //     }

        // }, {

        //     breakpoint: 600,
        //     settings: {
                
        //     }

        // }]
    });
}

function homePhoneSlickSlider() {
    $('.page__home .phone_slider').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        fade: true,
        prevArrow: '<button class="control-btn icons-og_arw_lt_l"></button>',
        nextArrow: '<button class="control-btn icons-og_arw_rt_l"></button>',
    });
}

function windowOnScrollControl() {

    $(window).scroll(function(){
        if($(this).scrollTop() > 0 && !$('nav').hasClass('scroll')) {
            // navigation bar
            $('nav, main').addClass('scroll');
            $('a.online-service').addClass('s');
        }
        else if($(this).scrollTop() == 0 && $('nav').hasClass('scroll')) {
            // navigation bar
            $('nav, main').removeClass('scroll');
            $('a.online-service').removeClass('s');
        }
    });
}

function navAnchorClick() {
    $('nav .nav a').click(function(e){
        e.preventDefault();
        var $this = $(this);
        var id = $('nav .nav a').index($this);
        if(!$this.hasClass('active')) {
            $('nav .nav a').removeClass('active');
            $this.addClass('active');
            // if(!$('.menu-wrapper').is(':visible')) {
                $('.menu-wrapper .menu').hide();
                $('.menu-wrapper .menu').eq(id).stop().fadeIn();
                $('.menu-wrapper').stop().slideDown();
            // }
            // else {
            //     $('.menu-wrapper .menu').hide();
            //     $('.menu-wrapper .menu').eq(id).stop().fadeIn();
            // }
        }
        else {
            $this.removeClass('active');
            if($('.menu-wrapper').is(':visible')) {
                $('.menu-wrapper').stop().slideUp();
                $('.menu-wrapper .menu').hide();
            }
        }
    });
}

function navClose() {
    $('nav .icons-nav-close').click(function(){
        $('nav .nav a').removeClass('active');
        $('.menu-wrapper').stop().slideUp();
        $('.menu-wrapper .menu').hide();
    });
}

function homeCountDown() {
    $(".page__home .countdown_wrapper").countdown(window.deadline, function(event) {
        // $(this).html(event.strftime('\
        //     <span class="countdown days">%D</span>\
        //     <span class="countdown hours">%H</span>\
        //     <span class="countdown minutes">%M</span>\
        //     <span class="countdown seconds">%S</span>'));
        $(this).html(event.strftime('\
            還有<span class="countdown days">%D</span>天\
            <span class="countdown hours">%H</span>小時\
            <span class="countdown minutes">%M</span>分鐘'));
    });
}

    // $(window).on('load', function() {
    //     var labels = ['weeks', 'days', 'hours', 'minutes', 'seconds'],
    //         nextYear = (new Date().getFullYear() + 1) + '/01/01',
    //         template = _.template($('#main-example-template').html()),
    //         currDate = '00:00:00:00:00',
    //         nextDate = '00:00:00:00:00',
    //         parser = /([0-9]{2})/gi,
    //         $example = $('#main-example');
    //     // Parse countdown string to an object
    //     function strfobj(str) {
    //         var parsed = str.match(parser),
    //             obj = {};
    //         labels.forEach(function(label, i) {
    //             obj[label] = parsed[i]
    //         });
    //         return obj;
    //     }
    //     // Return the time components that diffs
    //     function diff(obj1, obj2) {
    //         var diff = [];
    //         labels.forEach(function(key) {
    //             if (obj1[key] !== obj2[key]) {
    //                 diff.push(key);
    //             }
    //         });
    //         return diff;
    //     }
    //     // Build the layout
    //     var initData = strfobj(currDate);
    //     labels.forEach(function(label, i) {
    //         $example.append(template({
    //             curr: initData[label],
    //             next: initData[label],
    //             label: label
    //         }));
    //     });
    //     // Starts the countdown
    //     $example.countdown(nextYear, function(event) {
    //         var newDate = event.strftime('%w:%d:%H:%M:%S'),
    //             data;
    //         if (newDate !== nextDate) {
    //             currDate = nextDate;
    //             nextDate = newDate;
    //             // Setup the data
    //             data = {
    //                 'curr': strfobj(currDate),
    //                 'next': strfobj(nextDate)
    //             };
    //             // Apply the new values to each node that changed
    //             diff(data.curr, data.next).forEach(function(label) {
    //                 var selector = '.%s'.replace(/%s/, label),
    //                     $node = $example.find(selector);
    //                 // Update the node
    //                 $node.removeClass('flip');
    //                 $node.find('.curr').text(data.curr[label]);
    //                 $node.find('.next').text(data.next[label]);
    //                 // Wait for a repaint to then flip
    //                 _.delay(function($node) {
    //                     $node.addClass('flip');
    //                 }, 50, $node);
    //             });
    //         }
    //     });
    // });

var ajaxFormDefaultOption = {
    dataType: 'json',
    beforeSend: function() {
        $('button[type=submit]').prop('disabled', true);
    },
    uploadProgress: function(event, position, total, percentComplete) {

    },
    success: function(res) {
        $('button[type=submit]').prop('disabled', false);
        eval(res.callBack);
    },
    complete: function(res) {

    },
    beforeSubmit: function(formData, $form, options) {

    },
    beforeSerialize: function($form, options) {

    }

};