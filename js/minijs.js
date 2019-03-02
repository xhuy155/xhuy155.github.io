$(".se-pre-con").fadeOut("slow");

$("#myVideo").get(0).play();

var backgroundVideoPosition = $("#background-video-position").offset().top;
$("#background-video").css({'top' : backgroundVideoPosition - 45 + 'px'});

$(".nav-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});

var $window           = $(window),
    win_height_padded = $window.height() * 1.1,
    isTouch           = Modernizr.touch;

var isFill = false;

var screenWidth = $(document).width();
if(screenWidth < 1200) {
    $("#background-video").remove();
} else {
    $("#notShowVideo1").css("color","white");
    $("#notShowVideo2").css("background-color","white");
}

if (isTouch) { $('.revealOnScroll').addClass('animated'); }

$window.on('scroll', revealOnScroll);

function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
        var $this     = $(this),
            offsetTop = $this.offset().top;

        if (scrolled + win_height_padded > offsetTop) {
            if ($this.data('timeout')) {
                window.setTimeout(function(){
                $this.addClass('animated ' + $this.data('animation'));
            }, parseInt($this.data('timeout'),10));
            } else {
                $this.addClass('animated ' + $this.data('animation'));
            }
        }
    });
    // Hidden...
    $(".revealOnScroll.animated").each(function (index) {
        var $this     = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded < offsetTop) {
            $(this).removeClass('animated slideInRight slideInLeft fadeIn slow')
        }
    });

    var offSetBar = $("#revealBar").offset().top;

    if (scrolled + win_height_padded > offSetBar && isFill == false) {
        fillHtmlbar();
        fillCssbar();
        fillJsbar();
        fillUIbar();
        fillJavabar();
        fillSQLbar();

        isFill = true;
    } else if (scrolled + win_height_padded < offSetBar) {
        unfillbar();

        isFill = false;
    }
}

revealOnScroll();

function fillHtmlbar() { 
    var rong = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (rong >= 60) {
            clearInterval(id);
        } else {
            rong++; 
            $("#html-bar").width(rong + '%');
            $("#html-bar").html(rong * 1 + '%');
        }
    }
}

function fillCssbar() { 
    var rong = 1;
    var id = setInterval(frame, 12);
    function frame() {
        if (rong >= 60) {
            clearInterval(id);
        } else {
            rong++; 
            $("#css-bar").width(rong + '%');
            $("#css-bar").html(rong * 1 + '%');
        }
    }
}

function fillJsbar() { 
    var rong = 1;
    var id = setInterval(frame, 14);
    function frame() {
        if (rong >= 55) {
            clearInterval(id);
        } else {
            rong++; 
            $("#js-bar").width(rong + '%');
            $("#js-bar").html(rong * 1 + '%');
        }
    }
}

function fillUIbar() { 
    var rong = 1;
    var id = setInterval(frame, 16);
    function frame() {
        if (rong >= 80) {
            clearInterval(id);
        } else {
            rong++; 
            $("#ui-bar").width(rong + '%');
            $("#ui-bar").html(rong * 1 + '%');
        }
    }
}

function fillJavabar() { 
    var rong = 1;
    var id = setInterval(frame, 18);
    function frame() {
        if (rong >= 85) {
            clearInterval(id);
        } else {
            rong++; 
            $("#java-bar").width(rong + '%');
            $("#java-bar").html(rong * 1 + '%');
        }
    }
}

function fillSQLbar() { 
    var rong = 1;
    var id = setInterval(frame, 20);
    function frame() {
        if (rong >= 90) {
            clearInterval(id);
        } else {
            rong++; 
            $("#sql-bar").width(rong + '%');
            $("#sql-bar").html(rong * 1 + '%');
        }
    }
}

function unfillbar() { 
    $(".progress-bar").width(0);
    $(".progress-bar").html('');
}