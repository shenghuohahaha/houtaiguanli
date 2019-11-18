<template>
  <div>
    <div>
      <h2 class="text-center item">管理员管理</h2>
    </div>
    <div class="btn">
      <el-button plain @click="isShow=true">添加</el-button>
    </div>
    <div class="box">
      <el-table :data="arr" height="250" border style="width: 100%">
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="属性" prop="des"></el-table-column>

        <el-table-column label="时间">
          <template slot-scope="scope">{{scope.row.time|transTime}}</template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope" class="text-center">
            <el-button size="mini" @click.native="edit(scope.row.id)">编辑</el-button>
            <v-del :removeId="scope.row.id" @del="remove"></v-del>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <v-add :isShow="isShow" ref="add" @getChild="f"></v-add>
  </div>
</template>
<script>
import API from "../common/js/API";

export default {
  data() {
    return {
      arr: [],
      isShow: false
    };
  },
  methods: {
    init() {
      this.$axios({
        url: API.findManage,
        method: "post"
      }).then(res => {
        //   console.log(res);
        this.arr = res.data.data;
      });
    },
    f() {
      this.isShow = false;
      this.init()
    },
    edit(id) {
      this.isShow = true;
      this.$refs.add.find(id);
    },

    remove(id) {
      // console.log(id);

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delManage,
            method: "post",
            data: { id: id }
          }).then(res => {
            // console.log(res);

            if (res.data.isok) {
              this.init();
            }
          });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.box {
  width: 80%;
  height: 300px;
  margin: 20px auto;
}
</style>