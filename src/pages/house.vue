<template>
<div>
  <div>
      <h2 class="text-center item">家政管理</h2>
    </div>
    <div class="box">
      <el-tabs v-model="activeName">
        <el-tab-pane label="家政banner" name="first">
        <v-banner></v-banner>
        </el-tab-pane>
        <el-tab-pane label="人员管理" name="second">
          <v-work></v-work>
        </el-tab-pane>
      </el-tabs>
    </div>
</div>
</template>
<script>
import API from '../common/js/API'
import vBanner from '../views/houseBanner'
import vWork from '../views/houseWork'
export default {
    components:{
        vBanner,
        vWork
    },
    data(){
      return{
        activeName:"first"
      }
    }
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
.box {
  margin-left: 20px;
}
 </style>