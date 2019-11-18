<template>
<div>
    
    <div class="btn">
    
      <el-button plain @click="dialogFormVisible = true">添加</el-button>
      <el-dialog title="添加家教banner" :visible.sync="dialogFormVisible">
        <el-form>
          <el-form-item label="图片地址" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="pic.img"></el-input>
          </el-form-item>
          <el-form-item label="图片描述" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="pic.des"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </div>
      </el-dialog>
    </div>
     <div class="box1">
      <el-table :data="arr" height="250" border style="width: 100%">
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="图片">
          <!-- <img :src="img" class="img" /> -->
          <template slot-scope="scope">
            <img :src="scope.row.img "  class="img" />
          </template>
        </el-table-column>
        <el-table-column label="描述" prop="des"></el-table-column>
        <el-table-column label="操作">
          <!-- <template slot-scope="scope" class="text-center">
          </template>-->
          <template slot-scope="scope" class="text-center">
             <v-del :removeId="scope.row.id" @del="remove"></v-del>
          </template>
        </el-table-column>
      </el-table>
    </div>
</div>
</template>
<script>
import API from '../common/js/API'
export default {
  data() {
    return {
      arr: [],
      dialogFormVisible: false,
      formLabelWidth: "120px",
      pic: {
        img: "",
        des: ""
      }
    };
  },
  methods: {
    init() {
      this.$axios({
        url: API.teacherBanner
      }).then(res => {
        // console.log("==========");
        this.arr = res.data.data;
        // console.log(res);
      });
    },
    
    confirm() {
      this.$axios({
        url: API.addTeacherBanner,
        params: this.pic
      }).then(res => {
        console.log(res);
        if (res.data.isok) {
          this.init();
          this.dialogFormVisible = false;
        }
      });
    },
    remove(id) {

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delTeacherBanner,
            method: "get",
            params: { id: id }
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
@import '../common/stylus/index.styl'



.img{
  width 200px;
  height 100px;
}
 </style>