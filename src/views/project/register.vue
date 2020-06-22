<template>
  <el-container  style="margin-left:10px">
    <el-header>
      <h1>注册</h1>
    </el-header>
    <el-main>
      <el-form :inline="false" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="请选择您所在的主体:" prop="staffId" >
            <el-select v-model="ruleForm.staffIds" placeholder="请选择" multiple @visible-change="getRemoteAddr($event,remote_addr)" style="width:300px" filterable>
                <el-option
                v-for="item in remote_addrs"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择您所在的主体分支:" prop="staffId" >
            <el-select v-model="ruleForm.staffIds" placeholder="请选择" multiple @visible-change="getRemoteAddr($event,remote_addr)" style="width:300px" filterable>
                <el-option
                v-for="item in remote_addrs"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="姓名" prop="name" >
            <el-input v-model="ruleForm.name" ></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="userName" >
            <el-input v-model="ruleForm.userName" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" >
            <el-input v-model="ruleForm.password" ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="passwordToo" >
            <el-input v-model="ruleForm.passwordToo" ></el-input>
          </el-form-item>
          <el-form-item label="请选择您的学历:" prop="academic" >
            <el-select v-model="ruleForm.academic" placeholder="请选择" multiple @visible-change="getRemoteAddr($event,remote_addr)" style="width:300px" filterable>
                <el-option
                v-for="item in academics"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择您的民族:" prop="nation" >
            <el-select v-model="ruleForm.nation" placeholder="请选择" multiple @visible-change="getRemoteAddr($event,remote_addr)" style="width:300px" filterable>
                <el-option
                v-for="item in nations"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
      </el-form>


    <div>
      <el-button
        type="primary"
        @click="GetPositionsByLevelType(value)"
      >
        提交
      </el-button>
    </div>
    </el-main>
  </el-container>

</template>


<script>
import { getPositionsByLevelType } from "@/api/register";

export default {
  name: "Register",
  data() {
    return {
      ruleForm: {
      staffId:1,
      name:"",
      },
      value: 0,

    };
  },
  methods: {
    GetPositionsByLevelType(value) {
      const info = { levelType: value };
      getPositionsByLevelType(info).then(response => {
        this.value = response.data;
        // console.log(response.data);
      });
    }
  }
};
</script>

<style>
</style>