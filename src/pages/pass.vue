<template>
  <div>
    <div>
      <h2 class="text-center item">修改密码</h2>
    </div>
    <div class="text-center" style="width:90%">
      <el-form>
        <el-form-item label="账号" :label-width="fWidth">
          <el-input autocomplete="off" :placeholder="pass.name" disabled v-model="pass.name"></el-input>
        </el-form-item>
        <el-form-item label="原始密码" :label-width="fWidth">
          <el-input autocomplete="off" placeholder="原始密码" show-password v-model="pass.oldpass"></el-input>
        </el-form-item>
        <el-form-item label="新密码" :label-width="fWidth">
          <el-input autocomplete="off" placeholder="新密码" show-password v-model="pass.newpass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="fWidth">
          <el-input autocomplete="off" placeholder="确认密码" show-password v-model="password"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="text-center" style="width:90%">
      <el-button type="primary" @click="update">修改</el-button>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      fWidth: "120px",
      pass: {
        name: sessionStorage.getItem("Name"),
        oldpass: "",
        newpass: ""
      },
      password: ""
    };
  },
  mounted() {
    console.log(sessionStorage.getItem("Name"));
  },
  methods: {
    update() {
      if (this.pass.newpass == this.password) {
        this.$axios({
          url: API.changePassManage,
          method: "post",
          data: this.pass
        }).then(res => {
          //   console.log(res);
          this.pass=res.data
          this.password="",
          alert('修改成功')
        });
      }else{
          alert('密码不相同')
      }
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';
</style>