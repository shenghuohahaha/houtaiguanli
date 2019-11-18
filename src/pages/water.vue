<template>
  <div>
    <div>
      <h2 class="text-center item">水站管理</h2>
    </div>
    <div class="box">
      <el-tabs v-model="activeName">
        <el-tab-pane label="水站" name="first">
          <v-waterchild></v-waterchild>
        </el-tab-pane>
        <el-tab-pane label="水站评论" name="second">
          <v-comment></v-comment>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
import vWaterchild from "../views/waterChild";
import vComment from "../views/waterComment";

export default {
  components: {
    vWaterchild,
    vComment
  },
  data(){
    return{
      activeName:"first"
    }
  }
 
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.box {
  margin-left: 20px;
}
</style>