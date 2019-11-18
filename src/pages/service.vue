<template>
  <div>
    <div>
      <h2 class="text-center item">维修管理</h2>
    </div>
    <div class="box">
      <el-tabs  v-model="activeName">
        <el-tab-pane label="维修" name="first">
          <v-servicechild></v-servicechild>
        </el-tab-pane>
        <el-tab-pane label="维修评论" name="second">
          <v-comment></v-comment>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
import vServicechild from "../views/serviceChild";
import vComment from '../views/serviceComment'
export default {
  components: {
    vServicechild,
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