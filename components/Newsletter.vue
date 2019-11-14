<template>
  <div class="wrapper bookAppointment newsWrap">
      <h2><strong>Newsletter</strong></h2>
      <p>Be the first to know about KOIN special offers and new product launches.</p>
      <ul class="formWrapBa">
          <li class="fullwidth checkBoxwrap">
              <span class="wpCb">   
              
              <label><input type="checkbox" name="" id=""><span>Commercial</span></label></span>
              <span class="wpCb">
              <label> <input type="checkbox" name="" id=""> <span>Residential</span> </label></span>
          </li>
          <li  class="star"><input type="email" class="form-control" name="" placeholder="Email" id=""></li>
          <li  class="star"><input type="text" class="form-control" name="" placeholder="Phone" id=""></li>
           
          <li  class="fullwidth"><a href="" class="btn btn-dark">Submit</a></li>
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
.newsWrap{
ul.formWrapBa{margin: 15px 0;}
}
</style>