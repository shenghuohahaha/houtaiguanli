<template>
  <div>
    <div class="btn">
      <el-button plain @click="add">添加</el-button>
      <el-dialog title="添加水站" :visible.sync="dialogFormVisible">
        <el-form>
          <el-form-item label="名称" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="pic.name" placeholder="名称"></el-input>
          </el-form-item>
          <el-form-item label="评分" :label-width="formLabelWidth">
            <el-input
              type="number"
              v-model="pic.score"
              :min="0"
              :max="5"
              autocomplete="off"
              placeholder="0-5分之间"
            ></el-input>
          </el-form-item>
          <el-form-item label="月销售量" :label-width="formLabelWidth">
            <el-input
              type="number"
              v-model="pic.count"
              :min="0"
              autocomplete="off"
              placeholder="月销售量"
            ></el-input>
          </el-form-item>
          <el-form-item label="点赞数量" :label-width="formLabelWidth">
            <el-input
              type="number"
              :min="0"
              v-model="pic.likeNum"
              autocomplete="off"
              placeholder="点赞数量"
            ></el-input>
          </el-form-item>
          <el-form-item label="浏览量" :label-width="formLabelWidth">
            <el-input
              type="number"
              :min="0"
              autocomplete="off"
              v-model="pic.readNum"
              placeholder="浏览量"
            ></el-input>
          </el-form-item>
          <el-form-item label="商家地址" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="pic.address" placeholder="商家地址"></el-input>
          </el-form-item>
          <el-form-item label="距离" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="pic.len" placeholder="eg:4.2km"></el-input>
          </el-form-item>
          <el-form-item label="商家信息" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="pic.des" placeholder="商家信息"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="pic.tel" placeholder="eg:400-100-1000"></el-input>
          </el-form-item>
          <el-form-item label="价格" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="pic.price" placeholder="eg:58元/桶"></el-input>
          </el-form-item>
          <el-form-item label="图片" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="pic.img" placeholder="请输入图片地址"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm" v-if="!pic.id">添 加</el-button>
          <el-button type="primary" @click="update" v-else>修 改</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="box1">
      <el-table :data="arr" height="250" border style="width: 100%">
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="水站名称" prop="name"></el-table-column>
        <el-table-column label="电话" prop="tel"></el-table-column>
        <el-table-column label="价格" prop="price"></el-table-column>
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
      dialogFormVisible: false,
      formLabelWidth: "120px",
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
        url: API.findWater
      }).then(res => {
        // console.log("==========");
        this.arr = res.data.data;
        // console.log(res);
      });
    },
    add() {
      this.dialogFormVisible = true;
      this.pic = {
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
      };
    },
    //添加
    confirm() {
      this.$axios({
        url: API.addWater,
        params: this.pic
      }).then(res => {
        // console.log(res);

        if (res.data.isok) {
          this.init();
          this.dialogFormVisible = false;
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
            url: API.delWater,
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
      this.dialogFormVisible = true;
      this.$axios({
        url: API.findWater,
        params:{id:id}
      }).then(res => {
        // console.log(res);
        this.pic = res.data.data[0];
      });
    },
    update() {
      this.$axios({
        url: API.updateWater,
        params: this.pic
      }).then(res => {
        this.init();
        this.dialogFormVisible = false;
        this.pic = {
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
        };
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

.img {
  width: 200px;
  height: 100px;
}
</style>