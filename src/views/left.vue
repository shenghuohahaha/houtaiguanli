<template>
<div class="left">
    <router-link to="/index/manage" active-class="select" v-if="type=='0'">管理员管理</router-link >
         <router-link to="/index/banner" active-class="select"  v-if="type=='1'">banner管理</router-link>
         <router-link to="/index/teacher" active-class="select" v-if="type=='1'">家教管理</router-link >
         <router-link to="/index/water" active-class="select" v-if="type=='1'">水站管理</router-link>
         <router-link to="/index/service" active-class="select" v-if="type=='1'">维修管理</router-link >
         <router-link to="/index/house" active-class="select" v-if="type=='1'">家政管理</router-link>
         <router-link to="/index/pass" active-class="select" v-if="type=='1'">修改密码</router-link >
        
</div>
</template>
<script>
import API from '../common/js/API'
export default {
    data(){
        return{
            type:sessionStorage.getItem("type")
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
a{
    height 60px
    display block
    text-align center
    line-height 60px
}
.left{
    width 200px
    background $color3
}
.select{
    background $color5
    color $colorW
}
 </style>