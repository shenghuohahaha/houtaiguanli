<template slot-scope="scope">
  <el-button  type="danger" size="mini" @click="open">删除</el-button>
</template>
<script>
import API from "../../common/js/API";
export default {
  props:['removeId'],
  methods: {
    open() {
      this.$emit("del",this.removeId);
     
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/index.styl';
</style>