<template>
  <header class="mainHeaderWrap">
      <!-- <div class="container"> -->
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="@/assets/img/logo.svg" alt=""></a>
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
             <a href="#" class="searchIcon">  </a>
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
      <!-- </div> -->
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .mainHeaderWrap{ float: left; width: 100%; background: #fff; border-top: solid 5px #268e91;
        .navbar{ padding: 0 0px; background-color: #fff !important}
        .nav-link{ padding: 25px !important; font-size: 20px}
        .socialMenuRight{ display: flex; margin: 0; margin-left: auto; 
            li {display: inline-block; line-height: 0;
                a { height: 80px; width: 80px; display: inline-block;
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
