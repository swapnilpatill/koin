<template>
  <div class="productListingWrapper">
      <ul class="row">
    <li class="col-md-6" v-bind:class="item.col" v-for="(item,index) in product" :key="index">
        <div class="plProductWrapp">
            <span class="plImg"> <img :src="item.productImg" alt=""> </span>
            <div class="plName">
                <strong class="plnSt">{{item.productName}}</strong>
                <span class="plnNo">{{item.ProductCode}}</span>
                <p>Door Handle</p>
            </div>
            <nuxt-link class="listViewDetail" to="/product/asdf">VIEW DETAILS</nuxt-link>
        </div>
    </li>      
    <li class="col-md-6">
        <div class="plProductWrapp">
            <span class="plImg"> <img src="https://via.placeholder.com/650x240" alt=""> </span>
            <div class="plName">
                <strong class="plnSt">Suzi</strong>
                <span class="plnNo">KH-144</span>
                <p>Door Handle</p>
            </div>
        </div>
    </li>
    <li class="col-md-6"><div class="plProductWrapp">
            <span class="plImg"> <img src="https://via.placeholder.com/650x240" alt=""> </span>
            <div class="plName">
                <strong class="plnSt">Suzi</strong>
                <span class="plnNo">KH-144</span>
                <p>Door Handle</p>
            </div>
        </div></li>
    <li class="col-6 col-md-4 col-lg-3"><div class="plProductWrapp">
            <span class="plImg"> <img src="https://via.placeholder.com/290x240" alt=""> </span>
            <div class="plName">
                <strong class="plnSt">Suzi</strong>
                <span class="plnNo">KH-144</span>
                <p>Door Handle</p>
            </div>
        </div></li>
    <li class="col-6 col-md-4 col-lg-3"><div class="plProductWrapp">
            <span class="plImg"> <img src="https://via.placeholder.com/290x240" alt=""> </span>
            <div class="plName">
                <strong class="plnSt">Suzi</strong>
                <span class="plnNo">KH-144</span>
                <p>Door Handle</p>
            </div>
        </div></li>
        <li class="col-6 col-md-4 col-lg-3"><div class="plProductWrapp">
            <span class="plImg"> <img src="https://via.placeholder.com/290x240" alt=""> </span>
            <div class="plName">
                <strong class="plnSt">Suzi</strong>
                <span class="plnNo">KH-144</span>
                <p>Door Handle</p>
            </div>
        </div></li>
    <li class="col-6 col-md-4 col-lg-3"><div class="plProductWrapp">
            <span class="plImg"> <img src="https://via.placeholder.com/290x240" alt=""> </span>
            <div class="plName">
                <strong class="plnSt">Suzi</strong>
                <span class="plnNo">KH-144</span>
                <p>Door Handle</p>
            </div>
        </div></li>
        <li class="col-6 col-md-4 col-lg-3"><div class="plProductWrapp">
            <span class="plImg"> <img src="https://via.placeholder.com/290x240" alt=""> </span>
            <div class="plName">
                <strong class="plnSt">Suzi</strong>
                <span class="plnNo">KH-144</span>
                <p>Door Handle</p>
            </div>
        </div></li>
    <li class="col-6 col-md-4 col-lg-3"><div class="plProductWrapp">
            <span class="plImg"> <img src="https://via.placeholder.com/290x240" alt=""> </span>
            <div class="plName">
                <strong class="plnSt">Suzi</strong>
                <span class="plnNo">KH-144</span>
                <p>Door Handle</p>
            </div>
        </div></li>
         <li class=" col-md-6">
        <div class="plProductWrapp">
            <span class="plImg"> <img src="https://via.placeholder.com/650x240" alt=""> </span>
            <div class="plName">
                <strong class="plnSt">Suzi</strong>
                <span class="plnNo">KH-144</span>
                <p>Door Handle</p>
            </div>
        </div>
    </li>
    </ul>
    <div class="text-center">
        <a href="#" class="inline-btn-cstm">View <strong>all</strong></a>
        <div class="btnLoader">
            <i></i>
            <i></i>
            <i></i>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            product :[
                {productImg:'http://localhost:3000/_nuxt/assets/img/img1.png', productName:'test name 1', ProductCode:'k123', col:'2.4' },
                {productImg:'http://localhost:3000/_nuxt/assets/img/img2.png', productName:'test name 2', ProductCode:'k123', col:'2.4' },
                {productImg:'http://localhost:3000/_nuxt/assets/img/img3.png', productName:'test name 3', ProductCode:'k123', col:'1.4' },
                {productImg:'http://localhost:3000/_nuxt/assets/img/img1.png', productName:'test name 4', ProductCode:'k123', col:'1.4' }
            ]
        }
    }

}
</script>
<style lang="scss">
.productListingWrapper{ float: left; width:100%; margin-top: 20px;}
.productListingWrapper li {display: block; padding:0 15px 40px 15px; overflow: hidden; position: relative;
&:after { content: ""; position: absolute; width: 70%; height: 80%; z-index: -1;; transform: translate(-50%,-50%); top: 46%; left: 50%; background: #000; border-radius: 50%; box-shadow: 0 0 20px 20px #000;transition: 0.3s; opacity: 0.3;; }
&:hover {
    &:after{ border-radius: 30%; opacity: 0.6;box-shadow: 0 5px 20px 20px #000;}
    .plProductWrapp{ transform: translateY(-50px) ;}
    .plImg:after{ transform:translate(-50%,-50%)  scale(0) ; opacity: 0; }
        .listViewDetail{ max-height: 50px;}
}
}
.plProductWrapp{ width: 100%; background-color: #ededed;padding: 15px; float: left; height: 100%; position: relative;transition: 0.3s;
    .listViewDetail{ position: absolute; top:100%; left: 0; font-size: 14px; line-height: 50px; display: block; background: #000; text-align: center; color: #fff; padding:0 14px; width: 100%; max-height: 0; overflow: hidden; transition: 0.3s;}
}
.plImg{ width: 100%; display: block;  float: left; position: relative; z-index: 1;
    &:after { width:200px; height: 200px; border-radius: 50%; background: #268E91; z-index: -1; opacity: 0.05; content: ""; position: absolute; top:50%; left: 50%; transform-origin: center center; transform:  translate(-50%,-50%) scale(1) ;transition: 0.3s;  }
    img{width: 100%; height: 240px; object-fit: contain }
    }
.plName{ display: block; float: left; width: 100%; font-size: 12px; margin-top: 10px;
    .plnSt{font-weight: 600;font-size: 16px;}
    .plnNo{font-weight: 300px; font-size: 16px;}
    p {font-size: 12px; margin: 0}
}
.btnLoader{display: block; line-height: 0.8;
    i{width: 5px; height:5px; display: inline-block; background: #83C441; transform: rotate(45deg)}
}

</style>