<template>
  <div>
    <div class="btn">
      <el-button plain @click="add">添加</el-button>
      <el-dialog title="添加维修" :visible.sync="Visible">
        <el-form>
          <el-form-item label="名称" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.name" placeholder="名称"></el-input>
          </el-form-item>
          <el-form-item label="评分" :label-width="fWidth">
            <el-input
              type="number"
              v-model="pic.score"
              :min="0"
              :max="5"
              autocomplete="off"
              placeholder="0-5分之间"
            ></el-input>
          </el-form-item>
          <el-form-item label="类型" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.type" placeholder="维修类型"></el-input>
          </el-form-item>

          <el-form-item label="点赞数量" :label-width="fWidth">
            <el-input
              type="number"
              :min="0"
              v-model="pic.likeNum"
              autocomplete="off"
              placeholder="点赞数量"
            ></el-input>
          </el-form-item>
          <el-form-item label="关注人数" :label-width="fWidth">
            <el-input
              type="number"
              :min="0"
              autocomplete="off"
              v-model="pic.readNum"
              placeholder="关注人数"
            ></el-input>
          </el-form-item>
          <el-form-item label="商家地址" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.address" placeholder="商家地址"></el-input>
          </el-form-item>
          <el-form-item label="距离" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.len" placeholder="eg:4.2km"></el-input>
          </el-form-item>
          <el-form-item label="商家信息" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.info" placeholder="商家信息"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.tel" placeholder="eg:400-100-1000"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="Visible = false;">取 消</el-button>
          <el-button type="primary" @click="confirm" v-if="!pic.id">添 加</el-button>
          <el-button type="primary" @click="update" v-else>修 改</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="box1">
      <el-table :data="arr" height="250" border style="width: 100%">
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="维修名称" prop="name"></el-table-column>
        <el-table-column label="电话" prop="tel"></el-table-column>
        <el-table-column label="类型" prop="type"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope" class="text-center">
            <el-button size="mini" @click="look(scope.row.id)">查看</el-button>
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
      arr: [],
      Visible: false,
      fWidth: "120px",
      pic: {
        img: "",
        name: "",
        score: "",
        count: "",
        likeNum: "",
        readNum: "",
        address: "",
        len: "",
        des: "",
        tel: "",
        price: ""
      }
    };
  },
  methods: {
    init() {
      this.$axios({
        url: API.findRepair
      }).then(res => {
        // console.log("==========");
        this.arr = res.data.data;
        console.log(res);
      });
    },
    add(){
      this.Visible = true
      this.pic={}
    },
    //添加
    confirm() {
     
     this.$axios({
        url: API.addRepair,
        params: this.pic
      }).then(res => {
        // console.log(res);

        if (res.data.isok) {
          this.init();
            this.pic = {
            name: "",
            score: "",
            info: "",
            likeNum: "",
            readNum: "",
            address: "",
            len: "",
            type: "",
            tel: ""
          };
          this.Visible = false;
        
        }
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
            url: API.delRepair,
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
    },

    //查看
    look(id) {
      // console.log(id);
      this.Visible = true;
      this.$axios({
        url: API.findRepair,
        params:{id:id}
      }).then(res => {
        // console.log(res);
        this.pic = res.data.data[0];
      });
    },
    update() {
      this.$axios({
        url: API.updateRepair,
        params: this.pic
      }).then(res => {
         this.init();
      this.Visible = false;
      });
    },
    
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.img {
  width: 200px;
  height: 100px;
}
</style>