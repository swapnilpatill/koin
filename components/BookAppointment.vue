<template>
  <div class="wrapper bookAppointment">
      <h2>Book an<strong>Appointment</strong></h2>
      <ul class="formWrapBa">
          <li class="fullwidth checkBoxwrap">
              <span class="wpCb">
              
              <label><input type="checkbox" name="" id=""><span>I am a customer</span></label></span>
              <span class="wpCb">
              <label> <input type="checkbox" name="" id=""> <span>I am a Architect or Designer</span> </label></span>
          </li>
          <li class="star"><input type="text" class="form-control" name="" placeholder="Name" id=""></li>
          <li  class="star"><input type="text" class="form-control" name="" placeholder="Mobile" id=""></li>
          <li  class="star"><input type="email" class="form-control" name="" placeholder="Email" id=""></li>
          <li><input type="text" class="form-control datepicker" name="" placeholder="Select Date" id=""></li>
          <li  class="fullwidth"><select class="form-control selectpicker">
  <option>Select Reason</option>
  <option>Select Reason1</option>
  <option>Select Reason2</option>
</select>
</li>
          <li  class="fullwidth"><a href="" class="btn btn-dark">Book Appointment</a></li>
      </ul>
  </div>
</template>

<script>
export default {
    mounted(){
        $('.datepicker').datepicker();
        $(".selectpicker").selectpicker();
    }

}
</script>

<style lang="scss">


.bookAppointment{
    h2{font-family: 'Philosopher', sans-serif; font-size: 30px; margin:0 auto 0 0;
      strong{font-weight: bold ; display: block}
    } 
    
}
ul.formWrapBa{ float: left; width: 100%; margin: 35px 0;
        >li {float: left; width: 50%; padding: 8px; display: block; position: relative;
        &:last-child {margin-top: 20px}
        &.checkBoxwrap{display: flex; flex-wrap: wrap}
            &.fullwidth{ width: 100%;}
            a.btn-dark{ background: #000; width:100% ;}
            input{height: 50px; background: #F4F4F4; color: #000; padding: 20px; border: 0;}
            &.star:after{ content:""; position: absolute; top: 50%; right: 20px; width: 9px; height: 9px; border-radius: 50%; background: #83C441;  transform: translateY(-50%) }
            .bootstrap-select .dropdown-toggle{ height: 50px;}
        }
        @media (max-width:567px) {
           >li{ width: 100%} 
        }
    }
.checkBoxwrap{ display: flex;
    .wpCb{ float: left; 
        input{ position: absolute; opacity: 0;
         &:checked + span:before { opacity: 1;transform: translateY(-50%) scale(0.6);  }
        }
        label span{font-size: 16px; font-weight: 300; padding:5px 35px; margin:0%; position: relative;
            &::after{ content: ""; position: absolute; top: 50%; left: 0; width: 26px; height: 26px; border:solid 1px #C1C1C1; background: #E6E6E6; transform: translateY(-50%); }
            &::before{ content: ""; position: absolute; top: 50%; left: 0px; width: 26px; height: 26px;  background: #c1c1c1; transform: translateY(-50%) scale(1); z-index: 1; opacity: 0; transition: 0.3s }
        }
    }
}
</style>