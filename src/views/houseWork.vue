<template>
  <div>
    <!-- 添加与弹框 -->
    <div class="btn">
      <el-button plain @click="add">添加</el-button>
      <el-dialog title="添加家政人员" :visible.sync="Visible">
        <el-form>
          <el-form-item label="姓名" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="fWidth">
            <el-input
              type="number"
              v-model="pic.age"
              :min="0"
              :max="100"
              autocomplete="off"
              placeholder="0-100之间"
            ></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.tel" placeholder="eg:16737373737"></el-input>
          </el-form-item>
          <!--  -->
          <el-form-item label="资格认证" :label-width="fWidth">
            <el-checkbox-group v-model="pic.qualification">
              <el-checkbox label="身份证"></el-checkbox>
              <el-checkbox label="学位证"></el-checkbox>
              <el-checkbox label="健康证"></el-checkbox>
              <el-checkbox label="上岗证"></el-checkbox>
              <el-checkbox label="母婴护理师证"></el-checkbox>
              <el-checkbox label="催乳师证"></el-checkbox>
              <el-checkbox label="产后恢复师证"></el-checkbox>
              <el-checkbox label="助理家政管理师"></el-checkbox>
              <el-checkbox label="家政管理师"></el-checkbox>
              <el-checkbox label="高级家政管理师"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="服务项目" :label-width="fWidth">
            <el-checkbox-group v-model="pic.type">
              <el-checkbox label="保姆"></el-checkbox>
              <el-checkbox label="月嫂"></el-checkbox>
              <el-checkbox label="钟点工"></el-checkbox>
              <el-checkbox label="保洁"></el-checkbox>
              <el-checkbox label="家电清洗"></el-checkbox>
              <el-checkbox label="家具保养"></el-checkbox>
              <el-checkbox label="新居开荒"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="学历" :label-width="fWidth">
            <el-select style="width:100%" v-model="pic.edu" placeholder="请选择学历">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作年限" :label-width="fWidth">
            <el-input
              type="number"
              :min="0"
              v-model="pic.year"
              autocomplete="off"
              placeholder="工作年限"
            ></el-input>
          </el-form-item>

          <el-form-item label="级别" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.vNum" placeholder="eg:v3"></el-input>
          </el-form-item>
          <el-form-item label="价格" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.price" placeholder="eg:30元/小时"></el-input>
          </el-form-item>
          <el-form-item label="城市" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.city" placeholder="城市"></el-input>
          </el-form-item>
          <el-form-item label="经验" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.experience" placeholder="eg:3年"></el-input>
          </el-form-item>
          <el-form-item label="点赞数量" :label-width="fWidth">
            <el-input
              type="number"
              v-model="pic.likeNum"
              :min="0"
              autocomplete="off"
              placeholder="点赞数量"
            ></el-input>
          </el-form-item>
          <el-form-item label="关注人数" :label-width="fWidth">
            <el-input
              type="number"
              v-model="pic.readNum"
              :min="0"
              autocomplete="off"
              placeholder="关注人数"
            ></el-input>
          </el-form-item>

          <el-form-item label="距离" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.len" placeholder="eg:4.2km"></el-input>
          </el-form-item>
          <el-form-item label="自我评价" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.info" placeholder="eg:人见人爱,花见花开。。"></el-input>
          </el-form-item>
          <el-form-item label="免冠照片" :label-width="fWidth">
            <el-input autocomplete="off" v-model="pic.img" placeholder="免冠照片"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="Visible = false">取 消</el-button>
          <el-button type="primary" @click="confirm" v-if="!pic.id">添 加</el-button>
          <el-button type="primary" @click="update" v-else>修 改</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 下拉菜单 -->
    <div class="text-center Mtop">
      <el-select style="width:80%" v-model="value" placeholder="全部">
        <el-option label="全部" value></el-option>
        <el-option v-for="item in arr" :key="item.value" :label="item" :value="item"></el-option>
      </el-select>
      <div style="width:80%;margin:20px auto">
        <el-table :data="tableData" height="250" border style="width: 100%">
          <el-table-column label="序号" type="index"></el-table-column>
          <el-table-column label="名称" prop="name"></el-table-column>
          <el-table-column label="电话" prop="tel"></el-table-column>
          <el-table-column label="价格" prop="price"></el-table-column>
          <el-table-column label="年龄" prop="age"></el-table-column>
          <el-table-column label="学历" prop="edu"></el-table-column>
          <el-table-column label="服务类型">
            <template slot-scope="scope">{{scope.row.type|transType}}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button plain @click="look(scope.row.id)">查看</el-button>
              <v-del :removeId="scope.row.id" @del="remove"></v-del>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      tableData: [],
      arr: [],
      value: "",
      Visible: false,
      fWidth: "120px",
      pic: {
        img: "",
        name: "",
        age: "",
        edu: "",
        year: "",
        vNum: "",
        price: "",
        city: "",
        experience: "",
        info: "",
        likeNum: "",
        readNum: "",
        qualification: [],
        len: "",
        type: [],
        tel: ""
      },

      options: [
        {
          value: "小学",
          label: "小学"
        },
        {
          value: "初中",
          label: "初中"
        },
        {
          value: "高中",
          label: "高中"
        },
        {
          value: "本科",
          label: "本科"
        },
        {
          value: "研究生",
          label: "研究生"
        },
        {
          value: "博士",
          label: "博士"
        }
      ]
    };
  },
  mounted() {
    this.getWorker();
    this.$axios({
      url: API.getHomeType
    }).then(res => {
      console.log(res);
      this.arr = res.data.type;
    });
  },
  methods: {
    getWorker(params) {
      this.$axios({
        url: API.findHomeWorker,
        method: "get",
        params: params
      }).then(res => {
        // console.log(res);
        this.tableData = res.data.data;
      });
    },
    add() {
      this.Visible = true;
      this.pic = {
        img: "",
        name: "",
        age: "",
        edu: "",
        year: "",
        vNum: "",
        price: "",
        city: "",
        experience: "",
        info: "",
        likeNum: "",
        readNum: "",
        qualification: [],
        len: "",
        type: [],
        tel: ""
      };
    },
    //添加
    confirm() {
      this.$axios({
        url: API.addHomeWorker,
        params: this.pic
      }).then(res => {
        // console.log(res);

        if (res.data.isok) {
          this.getWorker();
          this.Visible = false;
          this.pic = {
            img: "",
            name: "",
            age: "",
            edu: "",
            year: "",
            vNum: "",
            price: "",
            city: "",
            experience: "",
            info: "",
            likeNum: "",
            readNum: "",
            qualification: "",
            len: "",
            type: "",
            tel: ""
          };
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
            url: API.delHomeWorker,
            method: "get",
            params: { id: id }
          }).then(res => {
            // console.log(res);

            if (res.data.isok) {
              this.getWorker();
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
      //   console.log(id);
      this.Visible = true;
      this.$axios({
        url: API.findHomeWorker,
        params: { id: id }
      }).then(res => {
        //   console.log(res);
        this.pic = res.data.data[0];
        this.pic.type = res.data.data[0].type;
        this.pic.qualification = res.data.data[0].qualification;
        this.pic.type = this.pd(this.pic.type);
        this.pic.qualification = this.pd(this.pic.qualification);
        console.log(this.pic.qualification);
      });
    },
    pd(obj) {
      if (obj.indexOf("[") != -1) {
        return JSON.parse(obj);
      } else {
        return obj.split(",");
      }
    },
    update() {
      this.$axios({
        url: API.updateHomeWorker,
        params: this.pic
      }).then(res => {
        if (res.data.isok) {
           this.getWorker()
          this.Visible = false;
        }else{
          alert(res.data.info)
        }
      });
    }
  },
  watch: {
    value() {
      this.getWorker({
        type: this.value
      });
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.Mtop {
  margin-top: 20px;
}
</style>