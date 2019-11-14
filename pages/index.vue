<template>
  <div>
    <HomeBanner />
    
    <section class="aboutUsWrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 aboutLeftContent">
            <h2 class="headWithbgcrl" v-html="page.acf.about_heading" > </h2>
            <span v-html="page.acf.about_content"></span>
            <a href="#" class="btnInline">Read More <i></i></a>
          </div>
          <div class="col-lg-5 aboutUsImg">
            <div class="imgWraoabt">
              <img :src="page.acf.about_right_side_image.url" alt="">
              <abbr class="abtRightImgBorder"></abbr>
              <h3>Crafted <span>with Passion</span></h3>
              <a href="#" ><strong>Company</strong> History <i></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="fetureProduct">
      <div class="container">
        <div class="headWithBtn">
          <h2> <strong>Featured</strong> products</h2>
          
          <nuxt-link class="inline-btn-cstm" to="/product"><strong>View</strong> all</nuxt-link>
        </div>
        <ProductList/>
      </div>
    </section>
    <section class="bookAppoimentWrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 baqImg">
          <img src="@/assets/img/appoimentVector.png" alt="">
        </div>
        <div class="col-lg-5">
          <BookAppointment/>
        </div>
        </div>
      </div>
    </section>
    <section class="newsLetterSectionWrap">
      <div class="container">
        <div class="row">
        <div class="col-lg-6 newsLetterWrap">
          <Newsletter/>
        </div>
        <div class="col-lg-6 newsletterImg">
          <img src="@/assets/img/newsletterImg.jpg" alt="">
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HomeBanner from "~/components/HomeBanner";
import ProductList from '~/components/ProductList';
import BookAppointment from '~/components/BookAppointment';
import Newsletter from '~/components/Newsletter'

export default {
  components: {
    HomeBanner,
    ProductList,
    BookAppointment,
    Newsletter
    //Loader
  },

  asyncData(context) {
    return context.$axios.get(process.env.url.homePage).then(res => {
      return { page: res.data }
    })
  },
  data() {
    return {
      page: ''
    }
  },

  computed: {
    acf() {
      return this.page ? this.page.acf : {}
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
.aboutUsWrapper {
  float: left;
  width: 100%;
}
.aboutUsWrapper{ padding: 55px 0; background: url(~assets/img/aboutBg.jpg) repeat-x bottom 35px center; 
}
.headWithbgcrl{ font-family: 'Philosopher', sans-serif; font-size: 70px; margin:20px 0 70px 0; color: #000; position: relative;
  &:after { content: ""; position: absolute; top: 50%; transform: translateY(-50%); z-index: -1;; left: -50px; width: 170px; height: 170px; border-radius: 50%; display: block; background: #4ACBBF; }
}
.aboutLeftContent{ padding-left: 70px;
  h4{font-size: 26px; color: #000}
  p{font-size: 20px; 
    strong{ font-weight: 700;}
  }
}
.aboutUsImg{padding-left: 80px;
  @media(max-width:1024px){
    padding:50px 50px 50px 100px;
  }
  @media(max-width:567px){
    padding:30px 30px 30px 50px;
  }
}
.imgWraoabt{display: block; position: relative; width: 100%; padding-right: 25px; 
a {font-size: 18px; z-index: 1; color: #000; position: absolute; top: 100%; right: 100%; transform: translate(50%, -70%); text-align: right;
 i{ width: 7px; height: 7px; border-bottom: solid 2px #000; border-left: solid 2px #000; display: inline-block; transform: translateY(-1px) rotate(-135deg); margin-right: -7px; }
&:after { content: ""; position: absolute; top: 50%; transform: translate(-50%, -50%); z-index: -1; left: 50%; width: 170px; height: 170px; border-radius: 50%; display: block; background: #4ACBBF; }
  strong {font-weight: 600; display: block; text-align: right; }
}
  img {width: 100%}
  &:after{ content: ""; position: absolute; bottom: 25px; left: 0; width:45%; height: 130px; background: url('~assets/img/abropattern.png') repeat ;opacity: 0.8;}
&:before{ content: ""; position: absolute; top: 0px; right: 0; width:45%; height: 130px; background: url('~assets/img/abropattern.png') repeat ; opacity: 0.8;}
h3 {color: #fff; font-family: 'Philosopher', sans-serif; font-size: 50px; position: absolute; bottom: 70px; left: 50px; line-height: 1;
  span{display: block; padding-left: 30px;}
}
 @media(max-width:1024px){
   h3{ font-size: 30px}
    a {font-size: 14px; right: auto; left: -35px;;
      &:after{width:120px; height: 120px;}
    }
   
  }
}

.abtRightImgBorder{
  &:after { width: 25px; height: 85%; background: #4ACBBF; content: ""; position: absolute; right: 0; bottom: 0}
  &:before { height: 25px; width: 100%; background: #4ACBBF; content: ""; position: absolute; right: 0; bottom: 0}
}
.fetureProduct{padding: 55px 0; float: left; width: 100%;;}
 .headWithBtn{ display: flex; width: 100%;
   h2{font-family: 'Philosopher', sans-serif; font-size: 30px; margin:0 auto 0 0;
      strong{font-weight: bold}
    } 
    a{margin-left: auto; 
     
    }
 }
 .inline-btn-cstm{color: #000; align-self: center;
   strong{ font-weight: bold}
 }
 .bookAppoimentWrap{float: left; width: 100%}
 .baqImg{ 
   img {width: 100%}
 }
 .newsLetterWrap{background: #EDEDED; padding:20px;}
 .newsletterImg{padding:0;
  img{ object-fit: cover; width: 100%; height: 100%;}
 }
 .newsLetterSectionWrap{ margin: 60px 0; float: left; width: 100%}
</style>
