<template>
  <div>
      <div class="productDetailTop">
          <div class="container">
              <div class="row">
              <div class="col-md-7">
                 <div class="sliderWrap">
                     <div class="swSingle">
                          <div class="swsList active" id="#swsingle_1"><img src="@/assets/img/product.png" alt=""></div>
                          <div class="swsList" id="#swsingle_2"><img src="@/assets/img/product.png" alt=""></div>
                     </div>
                     <ul class="swNav">
                         <li><a href="#swsingle_1">
                            <img src="@/assets/img/product.png" alt="">
                             </a></li>
                             <li><a href="#swsingle_2">
                            <img src="@/assets/img/product.png" alt="">
                             </a></li>
                     </ul>
                 </div>
              </div>
              <div class="col-md-5 poroductDetailWrapp">
                  <div class="productName">
                      <span>Product Name</span>
                      <h1><span>FEATHER</span></h1>
                  </div>
                  <ul class="prodDetailList">
                      <li>
                          <strong>Code</strong>
                          <span>KH-101</span>
                      </li>
                      <li>
                          <strong>Material</strong>
                          <span>Brass + SS</span>
                      </li>
                      <li>
                          <strong>Finish</strong>
                          <span>Black & Copper, Chocolate, Black & Black</span>
                      </li>
                  </ul>
                  <div class="tableWrap">
                      <table>
                          <tr>
                              <th colspan="3">Format <span>Size in mm</span></th>
                          </tr>
                          <tr>
                              <td>A</td>
                              <td>B</td>
                              <td>C</td>
                          </tr>
                      </table>
                  </div>
              </div>
          </div>
          <div class="col-12 coverimg">
              <img src="@/assets/img/coverImg.png" alt="">
          </div>
          <div class="mostViewedWrap">
              <h2><span>most viewed</span></h2>

          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
        $('.swSingle').slick({
            dots:false,
            asNavFor: '.swNav',
            fade: false,

        });
        $('.swNav').slick({
            dots:false,
            variableWidth: true,
            asNavFor: '.swSingle',
            focusOnSelect: true,
            infinite:false,
            centerMode:true

        });
        
    }

}
</script>

<style lang="scss">
.productDetailTop{ float: left; width: 100%}
.poroductDetailWrapp{ align-self: center}
 .productName{ line-height: 0.5;
     >span{ font-size: 13px; }
     h1{ font-size: 60px; font-weight: bold;
        > span{border-bottom: solid 1px #000; position: relative;
        &:after{ content: ""; position: absolute; top: 100%; right: 0;height: 5px; width: 63px; background: #000; transform: translateY(-50%);  }
        
        }
     }
 }
 .sliderWrap{ display: block;
    .swSingle{ width: 100%; float: left;
        img { width: 100%}
        .slick-slide { transform: translateX(0px); opacity: 0; transition:all 0.6s ease !important;
            &.slick-active{transform: translateX(0px); opacity: 1;}
        }
    }
 }
 .prodDetailList{ display: block;
    li{ display: flex; font-size: 16px; font-weight: 300; padding: 10px 0;
        strong { width: 90px; font-weight: bold;}
    }
 }
 .swNav{display: inline-block; float: left; width: 100%;
    li { display: inline-block; width: 145px;padding:0 5px;
        img {width: 100%}
    }
 }
 .coverimg{
     img{width: 100%}
 }
</style>