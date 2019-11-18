<template>
  <div v-if="isShow" class="mask" @click.self="quxiao"> 
    <div class="input">
      <h2>添加 | 修改管理员</h2>
      <div class="text-center mtp" v-if="n!=1">
        <div class="word text-center">账号</div>
        <el-input class="ipt" :disabled="!!user.id" v-model="user.name" placeholder="请输入账号"></el-input>
      </div>
      <div class="text-center mtp" v-if="n!=1">
        <div class="word text-center">密码</div>
        <el-input class="ipt" :disabled="!!user.id"  v-model="user.pass" placeholder="请输入密码"></el-input>
      </div>
      <div class="text-center mtp" v-if="!user.id">
        <div class="word text-center">确认密码</div>
        <el-input class="ipt" v-model="password" placeholder="请输入确认密码"></el-input>
      </div>
      <div class="text-center mtp">
        <div class="word text-center">描述</div>
        <el-input class="ipt" v-model="user.des" placeholder="请输入描述"></el-input>
      </div>
      <div class="text-center mtp">
        <div class="word text-center">时间</div>
        <el-date-picker class="ipt" v-model="user.time" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div class="text-center mtp">
        <el-button round @click="quxiao">取消</el-button>
        <el-button type="primary" round @click="add" v-if="!user.id">添加</el-button>
        <el-button type="primary" round v-else @click="update">修改</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import API from "../../common/js/API";

export default {
  props: ["n",'isShow'],
  data() {
    return {
     
      user: {
        name: "",
        pass: "",
        time: "",
        des: "",
      },
      password: ""
    };
  },
  methods: {
    quxiao() {
      this.$emit("getChild");
      this.user= {
        name: "",
        pass: "",
        time: "",
        des: "",
      };
      this.password=""

    },
    find(id){
      this.$axios({
        url: API.findManage,
        method: "post",
        data:{
          id:id
        }
      }).then(res => {
        this.user = res.data.data[0];
      });
    },
    add() {
      var d=new Date(this.user.time)
      this.user.time=d.getTime()
      if (this.password == this.user.pass) {
        this.$axios({
          url: API.addManage,
          method: "post",
          data: this.user
        }).then(res => {
          //   console.log(res);
          if (res.data.isok) {
            alert(res.data.info);
            this.quxiao();
          } else {
            alert(res.data.info);
          }
        });
      } else {
        alert("密码不相同");
      }
    },
    update() {
      // console.log(this.user);
      
      this.$axios({
        url: API.updateManage,
        method: "post",
        data: this.user
      }).then(res => {
        // console.log(res);

        if (res.data.isok) {
          alert(res.data.info);
          this.quxiao();
        } else {
          alert(res.data.info);
        }
      });
    }
  },
  
};
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/index.styl';

.mask {
  .input {
    width: 60%;
    height: 60%;
    background: $colorW;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    h2 {
      color: $color4;
      font-size: 20px;
      line-height: 60px;
      margin-left: 10px;
    }

    .mtp {
      margin-top: 10px;
    }

    .word {
      width: 100px;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      display: inline-block;
    }

    .ipt {
      display: inline-block;
      width: 500px;
    }
  }
}
</style>