<template>
  <section class="homeBannerWrapper">
      
      <div class="hbBanner single-item">
          <div class="hbSlide">
              <div class="container">
              <h2 class="hbsText">
                  <span>We are everything that you will see</span> 
                  We are Designs
                  <i class="slimgt"> <img src="@/assets/img/imgt.png" alt=""> </i>
                  <i class="slimgtr1"> <img src="@/assets/img/imgtr1.png" alt=""> </i>
                  <i class="slimgtr2"> <img src="@/assets/img/imgtr2.png" alt=""> </i>
                  <i class="slimgr"> <img src="@/assets/img/imgr.png" alt=""> </i>
                  <i class="slimgbr"> <img src="@/assets/img/imgbr.png" alt=""> </i>
                  <i class="slimgbl"> <img src="@/assets/img/imgbl.png" alt=""> </i>
                  <i class="slimgl"> <img src="@/assets/img/imgl.png" alt=""> </i>
              </h2>
          </div>
      </div>
      <div class="hbSlide">
          <img src="@/assets/img/banner2.png" class="hbsBannerImg" alt="">
          <div class="hbsCaption">
              Class that adds lifestyle
              <strong>A real substance</strong>
          </div>
      </div>
      </div>
      <div class="progressBarContainer">
          <h3>
              Just <b>HANDLE it…</b>

          </h3>
    <div class="item">
      <span data-slick-index="0" class="progressBar"></span>
    </div>
    <div class="item">
      <span data-slick-index="1" class="progressBar"></span>
    </div>
    <div class="item">
      <span data-slick-index="2" class="progressBar"></span>
    </div>
  </div>
  </section>
</template>

<script>
export default {
    mounted(){
        $(".hbBanner").slick({
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
});

 //ticking machine
    var percentTime;
    var tick;
    var time = .1;
    var progressBarIndex = 0;

    $('.progressBarContainer .progressBar').each(function(index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (($('.hbBanner .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('.hbBanner .slick-track div[aria-hidden="false"]').data("slickIndex");
            startProgressbar();
        } else {
            percentTime += 1 / (time + 5);
            $('.inProgress' + progressBarIndex).css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $('.single-item').slick('slickNext');
                progressBarIndex++;
                if (progressBarIndex > 2) {
                    progressBarIndex = 0;
                }
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $('.inProgress').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }
    startProgressbar();
    // End ticking machine

    $('.item').click(function () {
    	clearInterval(tick);
    	var goToThisIndex = $(this).find("span").data("slickIndex");
    	$('.single-item').slick('slickGoTo', goToThisIndex, false);
    	startProgressbar();
    });
    }
}
</script>

<style lang="scss">
.homeBannerWrapper{ float: left; width: 100%; background: #e9e9e9; overflow: hidden; position: relative;
    .hbBanner{float: left; width: 100%;
        .hbSlide{ width: 100%; float: left; height: 700px; position: relative;
            .hbsBannerImg{ width: 100%; height: 100%; object-fit: cover}
        }
        .hbsCaption{position: absolute; left: 50%; bottom: 30%; width: 100%; transform: translateX(-50%); max-width:1200px; font-size:46px; color:#fff; 
            strong { font-size: 69px; text-shadow: 0 3px 6px rgba(0,0,0,0.5); display: block}
        }
        .hbsText{font-family: 'Philosopher', sans-serif; font-size: 69px; max-width: 550px; z-index: 1; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); text-align: center;
            span{font-size: 46px; display: block}
            &:after { content: ""; position: absolute; top: 50%; transform: translate(-50%,-50%); z-index: -1; left: 50%; width: 600px; height: 600px; display: block; background:url(~assets/img/bannerBlue.png) no-repeat; background-size: contain }
        i{ position: absolute;
        &.slimgt{ bottom: 100%; left: -50%; max-width: 728px;}
        &.slimgtr1{ left: 150%; bottom: 110%; max-width: 135px;}
        &.slimgtr2{ left: 100%; bottom: 100%; max-width: 245px;}
        &.slimgr{ left: 120%; top: 0}
        &.slimgbr{ left: 45%; top: 130%; }
        &.slimgbl{top:100%; right: 100%}
        &.slimgl{ right: 150%; top: 0; max-width: 186px;}
        }
        }
    }
    .progressBarContainer{position: absolute; bottom: 5%; width: 100%; max-width: 1200px; transform: translateX(-50%); left: 50%; line-height: 0;
        .item{ display: inline-block; padding: 5px;
            span{width: 69px; height: 5px; background:#D5D5D5; display: block; position: relative;
            >div{ display: block; height: 100%; background:#FFF000}
            }
        }
        h3 { position: absolute; bottom: 100%; left: 0; font-size: 40px;font-family: 'Philosopher', sans-serif; color: #fff;
        b{font-size: 46px; display: block }
        } 
    }
}
</style>