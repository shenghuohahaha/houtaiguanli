<template>
<div class="right">
    <!-- <h2 class="text-center">$route.name</h2> -->
    <router-view></router-view>
</div>
</template>
<script>
import API from '../common/js/API'
export default {
    // mounted(){
    //   // console.log(this.$route);
      
    // }
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
.right{
    flex 1
    background #E0FFFF
}
h2 {
  color: $color4;
  font-size: 50px;
  line-height: 80px;
}

 </style>