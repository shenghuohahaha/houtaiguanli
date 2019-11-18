<template>
  <el-dialog title="添加家教排行" :visible.sync="dialogFormVisible">
        <el-form>
          <el-form-item label="图片地址" :label-width="formLabelWidth">
            <el-input autocomplete="off" ></el-input>
          </el-form-item>
            <el-form-item label="机构图片地址" :label-width="formLabelWidth">
            <el-input autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="图片描述" :label-width="formLabelWidth">
            <el-input autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </div>
      </el-dialog>
</template>
<script>
import API from '../../common/js/API'
export default {
data(){
    return{
        dialogFormVisible:false,
         formLabelWidth: "120px",
    }
}
}
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/index.styl'
 </style>