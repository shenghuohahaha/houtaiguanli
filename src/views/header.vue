<template>
<div>
    <header>
        <div class="out">
             <el-button type="warning" @click="out">退出登录</el-button>
        </div>
    </header>
</div>
</template>
<script>
import API from '../common/js/API'
export default {
    methods: {
        out(){
            this.$axios({
                url:API.exit,
                method:"get"
            }).then(res=>{
                if(res.data.isok){
                    this.$router.push('/login')
                    sessionStorage.clear()
                }
                
            })
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
header{
    width 100vw
    height 150px
    background $color2
}
.out{
   position fixed
   right 100px
   top 75px
}
 </style>