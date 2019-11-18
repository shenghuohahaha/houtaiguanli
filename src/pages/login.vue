<template>
  <div class="mask">
    <div class="box">
      <h2 class="text-center">登录</h2>
      <div class="text-center Box">
        <el-select class="login-input" v-model="user.type" placeholder="请选择角色">
          <el-option value="0" label="超级管理员">超级管理员</el-option>
          <el-option value="1" label="普通管理员">普通管理员</el-option>
        </el-select>
      </div>
      <div class="text-center Box">
        <el-input class="login-input" v-model="user.name" placeholder="请输入账号" clearable></el-input>
      </div>
      <div class="text-center Box">
        <el-input class="login-input" v-model="user.pass" placeholder="请输入密码" show-password></el-input>
      </div>
      <div class="text-center Box">
        <el-button type="primary" @click="btn" plain>登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      
      user: {
        name: "",
        pass: "",
        type: ""
      },

    };
  },
  methods: {
    btn() {
    //   console.log(this.user);
      this.$axios({
        url:API.login,
        method: "post",
        data: this.user
      }).then(res => {
        console.log(res);
        if (res.data.isok) {
          sessionStorage.setItem("Name",this.user.name)
          sessionStorage.setItem("type",res.data.type)
          this.$router.push("/index");
        } else {
          alert(res.data.info);
        }
      });
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

h2 {
  color: $color1;
  font-size: 30px;
}

.Box {
  padding: 5px 0;
}

.login-input {
  width: 400px;
}
</style>