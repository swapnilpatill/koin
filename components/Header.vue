<template>
  <header class="mainHeaderWrap">
      <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <nuxt-link to="/" class="navbar-brand" > <img src="@/assets/img/logo.svg" alt=""></nuxt-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Contact us</a>
      </li>
    </ul>
     <ul class="socialMenuRight">
         <li>
             <a href="#" class="searchIcon searchHeadToggle">  </a>
         </li>
         <li>
             <a href="#" class="fbicon"></a>
         </li>
         <li>
             <a href="#" class="instagram"></a>
         </li>
         <li>
             <a href="#" class="whatsapp"></a>
         </li>
     </ul>
  </div>
</nav>
<div class="searchHeader">
  <span class="closeSearch"></span>
  <input type="text" placeholder="What are you looking for?">
  <p class="note">Search for products, keywords and press <span>enter</span></p>
</div>
      </div>
      <span class="animation">
      <strong v-if="backbtn" class="backbtn">back</strong>
    </span>
  </header>
</template>

<script>
export default {
  data(){
    return{
      backbtn:false
    }
  },
  mounted(){
    $('.searchHeadToggle').click(function(){
      $(this).parent().toggleClass('active')
      $('.searchHeader').slideToggle()
    });
    $('.closeSearch').click(function(){
      $('.searchHeadToggle').parent().removeClass('active')
      $('.searchHeader').slideUp()
    })
  }
}
</script>

<style lang="scss">
    .mainHeaderWrap{ float: left; width: 100%; background: #fff; border-top: solid 5px #268e91;
      .searchHeader{background: #248083; padding: 30px 15px 15px 50px; position: absolute; top: 100%; left: 15px; width: calc(100% - 30px); z-index: 1; display:none;
        .closeSearch{position: absolute; top: 0px; right: 0px; width: 50px; height: 50px; background: url(~assets/img/close.svg) no-repeat center center; background-size: 18px;transform: rotate(0deg); transition: 0.3s; cursor: pointer;
          &:hover {transform: rotate(90deg)}
        }
        input{ width: 100%; font-size: 38px;font-family: 'Philosopher', sans-serif; background:transparent; border: 0; color: #fff;
          &::-webkit-input-placeholder { /* Edge */
  color: #BABABA;
}

&:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #BABABA;
}

&::placeholder {
  color: #BABABA;
}
        }
      }
      p{font-size: 17px;font-family: 'Philosopher', sans-serif; color: #BABABA;
        > span { color: #fff; text-decoration: underline}
      }
    .container{position: relative;

    }
        .navbar{ padding: 0 0px; background-color: #fff !important}
        .nav-link{ padding: 25px !important; font-size: 20px}
        .socialMenuRight{ display: flex; margin: 0; margin-left: auto; 
            li {display: inline-block; line-height: 0; position: relative;
            &:after {content: ""; position: absolute; top: 0; left: 0; width:100%; height: 0%; background: #268E91; transition: 0.3s;}
            &:hover:after, &.active:after{ height: 100%}
                a { height: 80px; width: 80px; display: inline-block; position: relative; z-index: 1;
                  &.searchIcon{ background:url('~assets/img/searchIcon.svg') no-repeat center center}
                  &.fbicon{ background:url('~assets/img/fbicon.svg') no-repeat center center}
                  &.instagram{ background:url('~assets/img/instagram.svg') no-repeat center center}
                  &.whatsapp{ background:url('~assets/img/whatsapp.svg') no-repeat center center}
                }
                &:nth-child(1){ background: #f9f9f9}
                &:nth-child(2){ background: #f4f4f4}
                &:nth-child(3){ background: #ededed}
                &:nth-child(4){ background: #e6e6e6}
            }
        }
        .navbar-brand{ margin-right: 5vw; padding-left: 15px;}
    }
</style>
