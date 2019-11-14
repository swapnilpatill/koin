<template>
  <footer>
      <div class="footerBorderTop"></div>
      <div class="footerWrap">
          <div class="container">
        <div class="row">
        <div class="col-lg-3">
            <h4>Contact Us</h4>
            <ul class="contactListf">
                <li>
                    <a href="#"><i class="callIcon"></i><span>Talk to us on +91 98200 98200</span></a>
                </li>
                <li>
                    <a href="#"><i class="emailIcon"></i><span>info@lodhaindustries.in</span></a>
                </li>
                <li>
                    <a href="#"><i class="visitIcon"></i><span>visit us here</span></a>
                </li>
            </ul>
        </div>
        <div class="col-lg-6 carwrapfoot">
            <h3>Categories</h3>
            <ul class="fCategoryList">
                <li><a href="#">Main Door Handles</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Knobs</a></li>
                <li><a href="#">Cabinets</a></li>
            </ul>
        </div>
        <div class="col-lg-3">
            <h4>Connect With Us</h4>
            <ul class="socilIconf">
                <li>
                    <a href="#"><i class="facebookIcon"></i> <span>Facebook</span></a>
                </li>
                <li>
                    <a href="#"><i class="instaIcon"></i> <span>Instagram</span></a>
                </li>
            </ul>
        </div>
        </div>
          </div>
          <div class="copyright">
              KOIN is a trademark owned by LODHA Industries.
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
footer { float: left; width: 100%}
.footerBorderTop{ float: left; width: 100%; height: 80px; background: url(~assets/img/footerBorder.png) repeat-x; background-position: bottom center   }
.footerWrap{ background:#F8F8F8; float: left; width: 100%; display: block;
    .row > div{ padding-top: 30px;}
}
.contactListf{display: block;
    li{ width: 100%;display: block;padding:5px 0 ;
    a{ display: flex; width: 100%; color: #000; font-size: 12px;
        span{ align-self: center}
    }
        i{ width: 35px; height: 35px; margin-right: 10px; border-radius: 50%;
            &.callIcon{ background:#83C441 url(~assets/img/callicon.svg) no-repeat center center;}
            &.emailIcon{ background:#83C441 url(~assets/img/emailicon.svg) no-repeat center center;;}
            &.visitIcon{ background:#83C441 url(~assets/img/visiteusicon.svg) no-repeat center center;;}
        }
        
    }
}
.carwrapfoot{ background:#EDEDED; padding-left: 50px}
.fCategoryList{ display: flex; flex-wrap: wrap;
    li{display: block; width: 50%; position: relative; padding-left: 30px;
        &:after { content: ""; position: absolute; top: 50%; left: 0; transform: translateY(-50%); width: 15px; height: 15px; background: #4ACBBF; border-radius: 50%}
        a{ font-size: 22px;font-family: 'Philosopher', sans-serif; color: #000; font-weight: bold}
    }
}

.socilIconf{display: block;
    li{ width: 100%;display: block;padding:5px 0 ;
    a{ display: flex; width: 100%; color: #000; font-size: 12px;
        span{ align-self: center}
    }
        i{ width: 35px; height: 35px; margin-right: 10px; border-radius: 50%;
            &.facebookIcon{ background:url(~assets/img/fbicon.png) no-repeat center center;}
            &.instaIcon{ background: url(~assets/img/instaicon.png) no-repeat center center;;}
           
        }
        
    }
}
.copyright{ float: left; width: 100%; padding:17px 10px; background: #343434; text-align: center; color: #fff; font-size: 12px;}
</style>