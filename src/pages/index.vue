<template>
<div class="wrap">
    <v-header></v-header>
    <div class="mine">
        <v-left></v-left>
        <v-right></v-right>
    </div>
</div>
</template>
<script>
import API from '../common/js/API'
import vHeader from '../views/header.vue'
import vLeft from '../views/left.vue'
import vRight from '../views/right.vue'
export default {
    components:{
        vHeader,
        vLeft,
        vRight,
    }
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
.wrap{
    width 100vw
    height 100vh
    display flex
    flex-direction column
}
.mine{
    flex 1
    width 100vw
    display flex
}
 </style>