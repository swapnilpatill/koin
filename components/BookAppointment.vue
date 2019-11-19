<template>
  <div class="wrapper bookAppointment">
      <h2>Book an<strong>Appointment</strong></h2>
      <form @submit.prevent="validateBeforeSubmit">
      <ul class="formWrapBa">
          <li class="fullwidth checkBoxwrap">
              <span class="wpCb">
              
              <label><input type="checkbox" name="" id=""><span>I am a customer</span></label></span>
              <span class="wpCb">
              <label> <input type="checkbox" name="" id=""> <span>I am a Architect or Designer</span> </label></span>
          </li>
          <li class="star">
              
                  <input
                    name="name"
                    v-model="name"
                    v-validate="'required|alpha_spaces'"
                    :class="{'form-control': true, 'is-invalid': errors.has('name') }"
                    type="text"
                    placeholder="Name"
                  >
                  <i :class="{'validationline invalid': true, 'active': errors.has('name') }"></i>
                  <span v-show="errors.has('name')" class="help">{{ errors.first('name') }}</span>

              </li>
          <li  class="star">
            <input
                    name="mobile"
                    v-model="mobile"
                    v-validate="'required|numeric|min:10|max:10'"
                    :class="{'form-control': true, 'is-invalid': errors.has('mobile') }"
                    type="text"
                    placeholder="Mobile"
                  >
                  <i :class="{'validationline invalid': true, 'active': errors.has('mobile') }"></i>
                  <span v-show="errors.has('mobile')" class="help">{{ errors.first('mobile') }}</span>
          </li>
          <li  class="star">
               <input
                          name="email"
                          v-model="email"
                          v-validate="'required|email'"
                          :class="{'input form-control': true, 'is-invalid': errors.has('email'), 'is-valid': !errors.has('email') }"
                          type="text"
                          placeholder="Email*"
                  >
                  <i :class="{'validationline invalid': true, 'active': errors.has('email') }"></i>

                  <span v-show="errors.has('email')" class="help">{{ errors.first('email') }}</span>
          </li>
          <li>
                <input
                          name="date"
                          v-model="date"
                          v-validate="date"
                          :class="{'input form-control datepicker': true, 'is-invalid': errors.has('email'), 'is-valid': !errors.has('date') }"
                          type="text"
                          placeholder="Date"
                  >
                  <i :class="{'validationline invalid': true, 'active': errors.has('date') }"></i>

                  <span v-show="errors.has('date')" class="help">{{ errors.first('date') }}</span>

          </li>
          <li  class="fullwidth"><select class="form-control selectpicker">
  <option>Select Reason</option>
  <option>Select Reason1</option>
  <option>Select Reason2</option>
</select>
</li>
          <li  class="fullwidth">
              <button class="btn btn-dark" type="submit"><span>Submit</span></button>
          </li>
      </ul>
      </form>
  </div>
</template>

<script>
export default {
    data() {
    return {
      customer:"",
      designer: "",
      date:"",
      email: "",
      name: "",
      mobile: "",
      reason: "",
      page: ""
    };
  },
    mounted(){
        $('.datepicker').datepicker();
        $(".selectpicker").selectpicker();
    },
methods: {
    validateBeforeSubmit: function() {
      const vm = this;
      this.$validator.validateAll().then(result => {
        if (result) {
          let postFormData = {
            customer: vm.customer,
            designer: vm.designer,
            date:vm.date,
            name: vm.name,
            email_id: vm.email,
            mobile: vm.mobile,
            reason: vm.reason,
          };
          try {
            this.$axios.post(process.env.url.addContact, postFormData).then(res => {
                if(res.data.status === true){
                    this.email = '';
                    this.name = '';
                    this.mobile = '';
                    this.customer = '';
                    this.designer = '';
                    this.date='';
                    this.mobile='';
                    this.reason='';
                    this.$validator.reset();
                    swal("Success!", "Thank-you for contacting us we will revert you soon", "success");
                }else{
                    swal("Oops!", "Something went wrong please try again", "error");
                }
            });
          } catch (e) {
            this.error = console.log(e);
          }
        }
      });
    },
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
        .help{position: absolute; bottom:-1px; line-height: 1; color: red; left: 10px; font-size: 10px;}
        &:last-child {margin-top: 20px}
        &.checkBoxwrap{display: flex; flex-wrap: wrap}
            &.fullwidth{ width: 100%;}
            > .btn-dark{ background: #000; width:100% ;}
            input{height: 50px; background: #F4F4F4; color: #000; padding: 20px; border: 0; background-image: none !important}
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