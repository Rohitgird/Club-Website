/**
 * Created by mayankbansal on 9/23/16.
 */

function goToByScroll(id) {
    id = id.replace("m-b", "section");
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top - 60
    }, 1000);
}

var colors = [
    {name: "white", hex: "#FFFFFF"},
    {name: "purple", hex: "#8351A1"},
    {name: "indigo", hex: "#4952A3"},
    {name: "blue", hex: "#3C99D5"},
    {name: "green", hex: "#5DBC60"},
    {name: "yellow", hex: "#D6BF39"},
    {name: "orange", hex: "#D28936"},
    {name: "red", hex: "#D83939"}
];

var currentColor = 0;

function changeColor() {
    currentColor = (currentColor + 1) % (colors.length);
    $(".iecse-logo").attr("src", "images/logos/iecse-logo-" + colors[currentColor].name + ".png");
    $(".last-iecse-logo").attr("src", "images/logos/logo-" + colors[currentColor].name + ".png");
    $(".color-changeable").css("color", colors[currentColor].hex);
}


$(document).ready(function () {

    $(".menu-button-mobile").click(function(e){
        e.preventDefault();
        $(".mobile-menu").hide();
        $(".header-container").css('background', '');
        mobileMenu = !mobileMenu;
    });

    $(".m-b-0, .m-b-1, .m-b-2, .m-b-5, .m-b-6").click(function (e) {
        e.preventDefault();
        goToByScroll(this.id);
    });

    $(".m-b-3").click(function (e) {
        e.preventDefault();
        window.location = 'https://gdgmanipal.in/';
    });

    $(".m-b-4").click(function (e) {
        e.preventDefault();
        window.location = 'https://iecsemanipal.com/alumni';
    });

    var mankeygge = 0;

    $(".color-gge").click(function (e) {
        e.preventDefault();
        changeColor();
        mankeygge++;
        if (mankeygge == 16) {
            $(".mankey-container").show();
            $(".mankey").attr('src', 'images/mankey.png');
            setTimeout(function () {
                $(".mankey-container").hide();
            }, 3000);
        }

        if (mankeygge == 36) {
            $(".mankey-container").show();
            $(".mankey").attr('src', 'images/primeape.png');
            setTimeout(function () {
                $(".mankey-container").hide();
            }, 3000);
            mankeygge = 0;
        }
    });


    $(".web-gge").click(function (e) {
        e.preventDefault();
        $(".web-gge-container").show();
        setTimeout(function () {
            $(".web-gge-container").hide();
        }, 3000);
    });


    $(".manipal-gge").click(function (e) {
        e.preventDefault();
        window.open('https://www.google.co.in/maps/place/Manipal+Institute+of+Technology/@13.3525321,74.7906337,17z/data=!3m1!4b1!4m5!3m4!1s0x3bbca4a5eaaaaaab:0xbfb20df5adfa2484!8m2!3d13.3525321!4d74.7928224', '_blank');
    });

    /*
     $(".console-gge").click(function (e) {
     e.preventDefault();
     consoleShow = !consoleShow;
     $(".console-gge-div").slideDown(100);
     });
     */

    $(".typed-text").typed({
        strings: [
            "We ^200<span class='typed-bold'>Code</span>.^800",
            "We ^200<span class='typed-bold'>Create</span>.^800",
            "We ^200<span class='typed-bold'>Innovate</span>.^800",
            "We are ^800<span class='typed-bold'>IECSE</span>.^5000"
        ],
        typeSpeed: 20,
        backSpeed: 10,
        backDelay: 20,
        loop: true
    });

    $('.parallax-window-1').parallax({speed: .1});
    $('.parallax-window-2').parallax({imageSrc: 'images/apple.jpeg', speed: .1});
    $('.parallax-window-3').parallax({imageSrc: 'images/stevejobs.jpg', speed: .1});
    $('.parallax-window-4').parallax({imageSrc: 'images/billgates.jpg', speed: .1});
    $('.parallax-window-5').parallax({imageSrc: 'images/iecsecover.jpg', speed: .1});


    var mobileMenu = false;

    $('.mobile-menu-button').click(function (e) {
        e.preventDefault();

        if (mobileMenu) {
            $(".mobile-menu").hide();
            $(".header-container").css('background', '');
        }
        else {
            $(".mobile-menu").show();
            $(".header-container").css('background', 'rgba(255,255,255,0.97');
        }

        mobileMenu = !mobileMenu;
    })

});

var counted = false;

function scrollElement(element) {
    if ($(this).scrollTop() + 60 >= (element.position().top))
        return true;
    else
        return false;
}

$(window).scroll(function () {


    if ($(this).scrollTop() >= ($('.last-section').offset().top + $('.last-section').outerHeight() - $(window).height())) {

        $('.header').css({
            'background': '',
            'margin-top': '0',
            'border-bottom': '1px solid rgba(255,255,255,.2)'
        });


        $('.mobile-menu-button').css({
            'color': 'white'
        });

        $('.menu-button').css({
            'color': 'rgba(255,255,255,.2)'
        });

        $(".iecse-logo").attr("src", "images/logos/iecse-logo-white.png");

    }
    else if ($(window).scrollTop() >= 40) {
        $('.header').css({
            'background': 'rgba(255,255,255,0.97',
            'margin-top': '0',
            'border-bottom': '1px solid rgba(200,200,200,.2)'
        });

        $('.iecse-logo').css({
            'margin-top': '12',
            'height': '36px'
        });


        $('.mobile-menu-button').css({
            'color': ''
        });

        currentColor = -1;
        changeColor();

        $('.menu-button').css({
            'font-size': '17px',
            'padding': '20px 15px 20px 15px',
            'color': ''
        });

        $(".iecse-logo").attr("src", "images/logos/iecse-logo-black.png");
    }
    else {
        $('.header').css({
            'background': '',
            'margin-top': '',
            'border-bottom': ''
        });
        $('.iecse-logo').css({
            'margin-top': '',
            'height': ''
        });

        $('.menu-button').css({
            'font-size': '',
            'padding': '',
            'color': ''
        });

        $('.mobile-menu-button').css({
            'color': ''
        });

        currentColor = -1;
        changeColor();

        $(".iecse-logo").attr("src", "images/logos/iecse-logo-black.png");

    }


    if ($(this).scrollTop() + 200 >= ($('.progress-section').offset().top + $('.progress-section').outerHeight() - $(window).height())) {

        $(".progress-stats-wide").addClass("animated fadeInUp");
        setTimeout(function () {
            $(".progress-stats").addClass("animated fadeInUp");
        }, 500);
        countStats();
    }

    function countStats() {
        if (!counted) {
            counted = true;
            var eventsCount = 0;
            var eventsCounter = setInterval(function () {
                eventsCount++;
                if (eventsCount == 150) clearInterval(eventsCounter);
                $('.eventsCount').html(eventsCount + "+");
            }, 10);

            var attendeesCount = 0;
            var attendeesCounter = setInterval(function () {
                attendeesCount += 50;
                if (attendeesCount == 7500) clearInterval(attendeesCounter);
                $('.attendeesCount').html(attendeesCount + "+");
            }, 10);

            var eventCount = 0;
            var eventCounter = setInterval(function () {
                eventCount++;
                if (eventCount == 15) clearInterval(eventCounter);
                $('.eventCount').html(eventCount);
            }, 150);

            var yearCount = 0;
            var yearCounter = setInterval(function () {
                yearCount++;
                if (yearCount == 9) clearInterval(yearCounter);
                $('.yearCount').html(yearCount);
            }, 150);
        }
    }

    if (scrollElement($('#section-1'))) {
        $(".menu-button").removeClass("menu-selected");
        $("#m-b-1").addClass("menu-selected");
    } else
        $("#m-b-1").removeClass("menu-selected");


    if (scrollElement($('.progress-section')))
        $(".menu-button").removeClass("menu-selected");

    if (scrollElement($('#section-2'))) {
        $(".menu-button").removeClass("menu-selected");
        $("#m-b-2").addClass("menu-selected");
    } else
        $("#m-b-2").removeClass("menu-selected");


    if (scrollElement($('.quote-section')))
        $(".menu-button").removeClass("menu-selected");

    if (scrollElement($('#section-5'))) {
        $(".menu-button").removeClass("menu-selected");
        $("#m-b-5").addClass("menu-selected");
    } else
        $("#m-b-5").removeClass("menu-selected");

    if (scrollElement($('#section-6'))) {
        $(".menu-button").removeClass("menu-selected");
        $("#m-b-6").addClass("menu-selected");
    } else
        $("#m-b-6").removeClass("menu-selected");


});

var enteredText = "";
var consoleShow = false;

$(document).keypress(function (e) {
    var myChar = String.fromCharCode(e.which);
    enteredText += myChar;
    /*
     if(myChar == '~'){
     if(!consoleShow){
     $(".console-gge-div").slideDown(100);
     }else
     $(".console-gge-div").slideUp(100);
     consoleShow = !consoleShow;
     }else{
     $(".console-gge-command-text").append(myChar);
     }

     if(e.keyCode == 13){
     enteredText = $(".console-gge-command-text").val();
     }

     if(e.keyCode == 8 || e.keyCode == 46){
     enteredText = $(".console-gge-command-text").val();
     enteredText.slice(0,-1);
     alert("H");
     $(".console-gge-command-text").html(enteredText);
     }
     */

    if (enteredText.indexOf("choukse") >= 0) {
        alert("#SingleAF");
        enteredText = "";
    }

    if (enteredText.indexOf("wally") >= 0) {
        alert("#Kursi");
        enteredText = "";
    }

    if (enteredText.indexOf("bee") >= 0) {
        alert("#SpiderBee");
        enteredText = "";
    }

    if (enteredText.indexOf("manish") >= 0) {
        alert("#WoofWoof");
        enteredText = "";
    }

    if (enteredText.indexOf("manky") >= 0) {
        alert("#Primape");
        enteredText = "";
    }
});