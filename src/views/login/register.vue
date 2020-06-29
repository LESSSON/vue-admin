<template>
  <el-container  style="margin-left:10px">
    <el-header>
      <h1>注册</h1>
    </el-header>
    <el-main>
      <el-form :inline="false" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="请选择您所在的主体:" prop="staffId" >
            <el-select v-model="ruleForm.staffIds" placeholder="请选择" @visible-change="getStaffId($event,staffId)" style="width:300px" filterable>
                <el-option
                v-for="item in staffIds"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择您所在的主体分支:" prop="staffId" >
            <el-select v-model="ruleForm.staffIds" placeholder="请选择" @visible-change="getStaffId($event,staffId)" style="width:300px" filterable>
                <el-option
                v-for="item in staffIds"
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
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="passwordToo" >
            <el-input v-model="ruleForm.passwordToo" ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="cardId" >
            <el-input v-model="ruleForm.cardId" ></el-input>
          </el-form-item>
          <el-form-item label="请选择您的性别:" prop="sex" >
            <el-select v-model="ruleForm.sex" placeholder="请选择" style="width:300px" filterable>
                <el-option
                v-for="item in sexs"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择您的学历:" prop="academic" >
            <el-select v-model="ruleForm.academic" placeholder="请选择" @visible-change="getRemoteAddr($event,remote_addr)" style="width:300px" filterable>
                <el-option
                v-for="item in academics"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择您的民族:" prop="nation" >
            <el-select v-model="ruleForm.nation" placeholder="请选择" @visible-change="getRemoteAddr($event,remote_addr)" style="width:300px" filterable>
                <el-option
                v-for="item in nations"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择您的position:" prop="position" >
            <el-select v-model="ruleForm.position" placeholder="请选择" @visible-change="getRemoteAddr($event,position)" style="width:300px" filterable>
                <el-option
                v-for="item in positions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电子邮件" prop="email" >
            <el-input v-model="ruleForm.email" ></el-input>
          </el-form-item>
          <el-form-item label="电话号码" prop="telnumber1" >
            <el-input v-model="ruleForm.telnumber1" ></el-input>
          </el-form-item>
          <el-form-item label="电子邮件" prop="shtName" >
            <el-input v-model="ruleForm.shtName" ></el-input>
          </el-form-item>
          <el-form-item label="电子邮件" prop="status" >
            <el-input v-model="ruleForm.status" ></el-input>
          </el-form-item>


      </el-form>


    <div>
      <el-button
        type="primary"
        @click="push('ruleForm')"
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
        staffId: "",
        name: "",
        userName: "",
        password: "",
        passwordToo: "",
        academic: "",
        nation: "",
        address: "",
        cardId: "",
        mobile: "",
        photo: "",
        position: "",
        sex: "",
        shtName: "",
        status: 99
      },
      telnumber1: "",
      telnumber2: "",
      value: 0,
      staffIds: [],
      academics: [],
      nations: [],

      rules: {
        staffId: [
          { required: true, message: "请选择所在主体", trigger: "change" }
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        passwordToo: [
          { required: true, message: "请确认密码", trigger: "blur" }
        ],
        academic: [
          { required: true, message: "请选择学历", trigger: "change" }
        ],
        nation: [{ required: true, message: "请选择民族", trigger: "change" }]
      }
    };
  },
  methods: {
    GetPositionsByLevelType(value) {
      const info = { levelType: value };
      getPositionsByLevelType(info).then(response => {
        this.value = response.data;
        // console.log(response.data);
      });
    },
    push(formName) {
      this.$refs[formName].validate(valid => {
        // console.log("remote_addr is "+this.ruleForm.remote_addr)
        if (valid) {
          const staffId = this.ruleForm.staffId;
          const name = this.ruleForm.name;
          const userName = this.ruleForm.userName;
          const password = this.ruleForm.password;
          const academic = this.ruleForm.academic;
          const nation = this.ruleForm.nation;
          this.upLoading = true;
          this.$store
            .dispatch("doRegister", {
              staffId: staffId,
              name: name,
              userName: userName,
              password: password,
              academic: academic,
              nation: nation
            })
            .then(response => {
              this.upLoading = false;
              this.enumPaneIsShow = true;
              this.flage = response.data["flage"];
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    }
  }
};
</script>

<style>
</style>