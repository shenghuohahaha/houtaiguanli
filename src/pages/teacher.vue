<template>
  <div>
    <div>
      <h2 class="text-center item">家教管理</h2>
    </div>
    <div class="box">
      <el-tabs v-model="activeName"  @tab-click="handleClick">
        <el-tab-pane label="家教banner" name="first">
          <v-banner></v-banner>
        </el-tab-pane>
        <el-tab-pane label="家教类型" name="second">
          <v-type></v-type>
        </el-tab-pane>
        <el-tab-pane label="家教排行" name="third">
          <v-top></v-top>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
import vBanner from "../views/teachBanner";
import vType from "../views/teachType";
import vTop from "../views/teachTop";
export default {
  components: {
    vBanner,
    vType,
    vTop
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
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