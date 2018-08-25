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
    textFol()
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

//文字轮播
function textFol(){
    $('.des-big-box .change').removeClass('disblock on')
    $('.des-big-box .change').eq(bannerIndex).addClass('disblock')
    setTimeout(function(){
        $('.des-big-box .change').eq(bannerIndex).addClass('on'); 
    },500)
   
}
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


var brandIndex = 0;
var brandTimer = '';
var brandlength = $('#section-pr-1 .brand-left .bg').length;
// 学院品牌轮播
function brandfloor(){
    $('#section-pr-1 .brand-left .brand-left-item').removeClass('active');
    
    setTimeout(function(){
        $('#section-pr-1 .brand-left').removeClass('reach')
        $('#section-pr-1 .brand-left').addClass('reach')
        $('#section-pr-1 .brand-left .brand-left-item').addClass('active')
    },1000)
}
function brandTextfloor(){
    $('.brand-right-item').removeClass('disblock').removeClass('show');
    $('.brand-right-item').eq(brandIndex).addClass('disblock')
    setTimeout(function(){
        $('.brand-right-item').addClass('show')
    },500)
}
 brandTextfloor()
    brandfloor()
brandTimer = setInterval(function(){
    brandIndex++
    if(brandIndex>=brandlength ){
        brandIndex =0;
    }
    brandTextfloor()
    brandfloor()
},6000)

//校园文化轮播
function cultureFloor(){
    var classlist= ['culture-part1','culture-part2','culture-part3','culture-part4'];
    this.child = $('.culture-part')
    var length = this.child.length;
    this.Nowlist = [];
    var count = 5;
    this.timer = '';
    this.init = function(){
        for(var i = 0;i<length;i++){
            this.Nowlist[i] = i;
        }
        this.draw();
        var _this = this;
        this.timer = setInterval(function () {
            _this.move()
        }, 5000)
        this.child.on('mouseover',function(){
            clearInterval(_this.timer)
        })
        this.child.on('mouseleave',function(){
            _this.timer = setInterval(function () {
            _this.move()
        },  5000)
        })
    }
    this.move = function(){
        this.Nowlist.push(this.Nowlist.shift())
        this.draw();
    }
    this.draw = function(){
        this.child.removeClass(classlist.join(' '));
        for (var i = 0; i < count; i++) {
            this.child.eq(this.Nowlist[i]).addClass(classlist[i])
        }
    }
    
}
var culter = new cultureFloor();
culter.init();

$('.culture-middle .text-right').each(function(index,item){
    var html = $(item).html();
    if(html.length>28){
        $(item).html(html.slice(0,28)+'...')
       }
})

