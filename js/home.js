$('#nav-btn').click(function () {
    if (!$('#nav-btn').hasClass('disable')) {
        $('#nav-btn').addClass('disable');
        if ($('#nav-btn').hasClass('active')) {
            $('#nav-btn').removeClass('active');
            $('#nav').removeClass('show');
            $('#nav .content').removeClass('active');
            setTimeout(function () {
                $('#nav-btn').removeClass('disable');
                $('#nav').removeClass('displayBlock');

            }, 500);
        } else {
            $('#nav-btn').addClass('active');
            $('#nav').addClass('displayBlock').outerWidth();
            $('#nav').addClass('show');
            $('#nav .content').addClass('active');
            setTimeout(function () {
                $('#nav-btn').removeClass('disable');
            }, 1000);
        }

    }

})

function work() {
    this.child = $('.work-item');
    var length = this.child.length;
    var count = 6;
    var css = ['top:.39rem;left:-3.55rem;transform:translate3d(0,0,0) scale3d(1,1,1);z-index:1;visibility:hidden;', 'top:.39rem;left:0;transform:translate3d(0,0,0) scale3d(1,1,1);z-index:1;visibility:visible;', 'width:4.65rem;left:4.05rem;top:0rem; index:2;visibility:visible;box-shadow:0 0 .6rem rgba(0,0,0,.6);line-height:3;', 'width:4.65rem;top:0rem;left:9.2rem;z-index:3;visibility:visible;box-shadow:0 0 .6rem rgba(0,0,0,.6);line-height:3;', 'left:14.35rem;top:.39rem;transform:translate3d(0,0,0) scale3d(1,1,1);z-index:1;visibility:visible;', 'left:17.9rem;top:.39rem;transform:translate3d(0,0,0) scale3d(1,1,1);z-index:1;visibility:hidden;']
    this.index = 0;
    this.nowList = [];


    this.move = function () {
        this.nowList.push(this.nowList.shift())
        this.draw();
    }
    this.draw = function () {
        for (var i = 0; i < count; i++) {
            this.child[this.nowList[i]].style.cssText = css[i]
        }
    }
    this.init = function () {
        for (var k = 0; k < length; k++) {
            this.nowList[k] = k;
        }
        this.draw();
        var _this = this;
        setInterval(function () {
            _this.move()
        }, 5000)
    }


}
var workN = new work();
workN.init();
! function () {
    $window = $(window);
    $window.scroll(function () {
        if ($window.scrollTop() >= 1) {
            $('#nav-btn').addClass('scroll');

        } else {
            $('#nav-btn').removeClass('scroll');
        };
    });
    parallaxScrollEl();
}()


function parallaxScrollEl() {

    $('.culture-title').each(function () {
        $(this).attr('data-parallax', '{"y": -40, "smoothness": 20}');
    })

    //    $('.culture-part-box').each(function () {
    //        $(this).attr('data-parallax', '{"y": -80, "smoothness": 30}');
    //    })

    //	$('#section-work .container-illu img.cloud-1').attr('data-parallax', '{"x": 160, "y": 80, "smoothness": 200}');
    //	$('#section-work .container-illu img.cloud-2').attr('data-parallax', '{"x": 40, "smoothness": 50}');
    //	$('#section-work .container-illu img.cloud-3').attr('data-parallax', '{"x": 60, "smoothness": 50}');
    //	$('#section-work .container-illu img.cloud-4').attr('data-parallax', '{"x": 100, "y": 40, "smoothness": 50}');

}
$window = $(window);
var windowHeight = $window.height() / 1.5;
var distanceEl1 = $('#section-pr-1').offset().top - windowHeight;
var distanceEl2 = $('.culture').offset().top - windowHeight;

function scrollAnim() {
    if ($window.scrollTop() >= distanceEl1) {
        if (!$('#section-pr-1 .brand-left').hasClass('reach')) {
            $('#section-pr-1 .brand-left').addClass('reach');
        };
    };
    if ($window.scrollTop() >= distanceEl2) {
        if (!$('.culture').hasClass('reach')) {
            $('.culture').addClass('reach');
        };
    };
}
$window.scroll(function () {
    scrollAnim();
});

scrollAnim();

//轮播图
var bannerTimer = '';
var bannerIndex = 0;
var bannerlength = $('.banner-img').length;
coverCarousselEl();
bannerTimer = setInterval(function () {
    bannerIndex++;
    if (bannerIndex >= bannerlength) {
        bannerIndex = 0;
    }
    coverCarousselEl();
}, 6000)
var openDelayCover = 1;

function coverCarousselEl() {

    $('.banner-img').addClass('hide').removeClass('show');
    pagatioin()
    setTimeout(function () {

        		$('.banner-img').removeClass('displayBlock').removeClass('hide show');
                $('.banner-img').eq(bannerIndex).addClass('displayBlock')
        if (openDelayCover == 0) {
            setTimeout(function () {
                //				$('.banner-img:visible').addClass('show');
                $('.banner-img').eq(bannerIndex).removeClass('hide').addClass('show');
            }, 1100);
            openDelayCover = 0;
        } else {
            setTimeout(function () {
                $('.banner-img').eq(bannerIndex).removeClass('hide').addClass('show');
            }, 50);
        }

    }, 500);

};

function pagatioin() {
    $('.banner-pagation ul li').removeClass('active').eq(bannerIndex).addClass('active')
}
$('.banner-pagation ul li').click(function () {
    bannerIndex = $(this).index();
    coverCarousselEl()
    clearInterval(bannerTimer)
    bannerTimer = setInterval(function () {
        bannerIndex++;
        if (bannerIndex >= bannerlength) {
            bannerIndex = 0;
        }
        coverCarousselEl();
    }, 6000)
})
$('.page-pre').click(function () {
    bannerIndex--;
    if (bannerIndex < 0) {
        bannerIndex = bannerlength - 1;
    }
    coverCarousselEl()
    clearInterval(bannerTimer)
    bannerTimer = setInterval(function () {
        bannerIndex++;
        if (bannerIndex >= bannerlength) {
            bannerIndex = 0;
        }
        coverCarousselEl();
    }, 6000)
})
$('.page-next').click(function () {
    bannerIndex++;
    if (bannerIndex >= bannerlength) {
        bannerIndex = 0;
    }
    coverCarousselEl()
    clearInterval(bannerTimer)
    bannerTimer = setInterval(function () {
        bannerIndex++;
        if (bannerIndex >= bannerlength) {
            bannerIndex = 0;
        }
        coverCarousselEl();
    }, 6000)
})