<template>
  <div class="text-center">
    <el-select style="width:80%" v-model="value" placeholder="全部">
      <el-option label="全部" value=""></el-option>
      <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.id"></el-option>
    </el-select>
    <div style="width:80%;margin:20px auto">
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="用户名称" prop="name"></el-table-column>
        <el-table-column label="评论内容" prop="content"></el-table-column>

        <el-table-column label="时间">
          <template slot-scope="scope">{{scope.row.time|transTime}}</template>
        </el-table-column>

        <el-table-column label="操作">
           <template slot-scope="scope" class="text-center">
            <v-del :removeId="scope.row.id" @del="remove"></v-del>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      options: [],
      tableData: [],
      value: ""
    };
  },
  mounted() {
    this.getComment({})
    this.$axios({
      url: API.findRepair,
      method: "get",
   
    }).then(res => {
      // console.log(res);
      this.options = res.data.data;
    });
   
  },
  methods: {
    getComment(params){
       this.$axios({
      url: API.findRepairComment,
      method: "get",
      params:params
    }).then(res => {
      // console.log(res);
      this.tableData = res.data.data;
    });
    },
     //删除
     remove(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url:API.delRepairComment,
            method: "get",
            params: { id: id }
          }).then(res => {
            // console.log(res);

            if (res.data.isok) {
               this.getComment({})
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
    },

  },
  watch:{
    value(){
      this.getComment({
         repairId:this.value
      })
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';
</style>