<template>
<div>
    <div class="productHero">
        <img src="@/assets/img/productHero.png" alt="">
        <div class="pheroText">
            <h3>Class that adds lifestyle</h3>
            <h2>A real substance</h2>
        </div>
    </div>
     <div class="container">
         <div class="prodListingHeading">
             <h1><strong>Main</strong> Door Handels</h1>
             <div class="sortByWrap">
                 <span>Sort by category</span>
                 <ul>
                     <li> <nuxt-link to="/"> category 1</nuxt-link> </li>
                     <li> <nuxt-link to="/product"> product 1</nuxt-link> </li>
                     <li> <nuxt-link to="/"> category 1</nuxt-link> </li>
                     <li> <nuxt-link to="/"> category 1</nuxt-link> </li>

                 </ul>
             </div>
         </div>
         <ProductList :ProductListing="product"/></div>
         
</div>
</template>

<script>
import ProductList from '~/components/ProductList';
export default {
    components:{
        ProductList
    },
    
  asyncData(context) {
    return context.$axios.get(process.env.url.productList).then(res => {
      return { product: res.data }
    })
  },

}
</script>
<style lang="scss">
.productHero{ width: 100%; position: relative; float: left;
img{ width: 100%}
    .pheroText{ position: absolute; top: 35%; left: 50%; transform: translateX(-50%); width: 100%; max-width: 1200px; text-shadow: 1px 2px 6px rgba(0,0,0,0.5);
        h3{ font-size: 46px; font-family: 'Philosopher', sans-serif; color: #fff; line-height: 1;}
        h2{ font-size: 70px; font-family: 'Philosopher', sans-serif; color: #fff; line-height: 1}
    }
}
.prodListingHeading{ display: flex; width: 100%; justify-content: space-between;margin-top: 12px; position: relative; z-index: 2;
    h1{ font-size: 56px;font-family: 'Philosopher', sans-serif; line-height: 1.1;
        strong { display: block;font-family: 'Philosopher', sans-serif;}
    }
 }
 .sortByWrap{ align-self: center;  position: relative; z-index: 1; 
 >span{ display: block; width: 290px; text-align: center; cursor: pointer; background: #000; color: #fff; padding: 16px; font-size: 12px; text-transform: uppercase; font-weight: bold }
 ul{ position: absolute; top: 100%; right: 0;display: inline-block; background: #000; min-width: 100%;max-height:0; transition: 0.3s; overflow: hidden;
    li{ display: block;
        a{ display: block; padding: 12px; font-size: 12px; color: rgb(196, 196, 196); position: relative; text-decoration: none; text-transform: capitalize;
            &.nuxt-link-exact-active{
                &:after { content: "";  position:absolute; top: 50%; right: 30px; transform: translateY(-50%); width: 10px; height: 10px; border-radius: 50%; background: #fff;}
            }
        }
    }
 }
 &:hover{
     ul{ max-height: 200px;}
 }
 }

</style>