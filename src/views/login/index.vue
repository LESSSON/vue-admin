<template>
  <div class="login-container">

    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">
          欢迎使用
        </h3>
      </div>

      <el-form-item prop="organizationType">
        <span class="svg-container">
          <svg-icon icon-class="tree"/>
        </span>
        <el-select v-model="loginForm.organizationType" placeholder="请选择您的组织">
          <el-option label="高速公路公司" value="company"/>
          <el-option label="施工方" value="constructor"/>
          <el-option label="监理方" value="supervisor"/>
          <el-option label="超级管理员" value="super-admin"/>
        </el-select>
      </el-form-item>

      <el-form-item prop="dptName">
        <span class="svg-container">
          <svg-icon icon-class="tree"/>
        </span>
        <el-select v-model="loginForm.dptName" placeholder="请选择您的工作单位" @visible-change="getDptNames($event)">
                <el-option
                v-for="item in dptNames"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="jobId">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
        <el-input
          ref="jobId"
          v-model="loginForm.jobId"
          placeholder="请输入工号或用户名"
          name="jobId"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span
          class="show-pwd"
          @click="showPwd"
        >
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" class="login-btn"
                 style="width:100%; height:50px; margin-bottom:30px;" @click.native.prevent="handleLogin">
        登录
      </el-button>

      <div style="margin-bottom: 35px;">

        <span class="tips">
          <i class="el-icon-warning"/>
          若您还没有注册，请先
          <el-link style="color: #409EFF" @click="toRegister">
            点击注册
          </el-link>
      </span>
      </div>
    </el-form>


    <el-dialog title="填写注册信息" :visible="regVisible" :before-close="handleCloseOrCancel">
      <el-form :inline="false" :model="regForm" :rules="regRules" ref="regForm" label-width="120px" class="demo-regForm">

      <el-form-item prop="organizationType" label="请选择您的组织">
        <!-- <span class="svg-container">
          <svg-icon icon-class="tree"/>
        </span> -->
        <el-select v-model="regForm.organizationType" placeholder="请选择您的组织">
          <el-option label="高速公路公司" value="company"/>
          <el-option label="施工方" value="constructor"/>
          <el-option label="监理方" value="supervisor"/>
          <el-option label="超级管理员" value="super-admin"/>
        </el-select>
      </el-form-item>


      <el-form-item prop="dptName" label="请选择您的工作单位">
        <!-- <span class="svg-container">
          <svg-icon icon-class="tree"/>
        </span> -->
        <el-select v-model="regForm.dptName" placeholder="请选择您的工作单位" @visible-change="getDptNamesInReg($event)">
                <el-option
                v-for="item in dptNames"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
        </el-select>
      </el-form-item>

        <el-form-item label="姓名:" prop="name" >
          <el-input v-model="regForm.name" />
        </el-form-item>
        <el-form-item label="工号/用户名:" prop="jobId" >
          <el-input v-model="regForm.jobId" />
        </el-form-item>
        <el-form-item label="密码:" prop="password" >
          <el-input v-model="regForm.password" type="password"/>
        </el-form-item>
        <el-form-item label="确认密码:" prop="rePassword" >
          <el-input v-model="regForm.rePassword" type="password"/>
        </el-form-item>
        <el-form-item label="身份证:" prop="cardId" >
          <el-input v-model="regForm.cardId" />
        </el-form-item>
        <el-form-item label="性别:" prop="sex" v-if="regForm.organizationType === 'company'">
          <el-select v-model="regForm.sex" placeholder="请选择" style="width:300px" filterable>
            <el-option
              v-for="item in sexs"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学历:" prop="academic" v-if="regForm.organizationType === 'company'">
          <el-select v-model="regForm.academic" placeholder="请选择" style="width:300px" filterable>
            <el-option
              v-for="item in academics"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="民族:" prop="nation" v-if="regForm.organizationType === 'company'">
          <el-select v-model="regForm.nation" placeholder="请选择" style="width:300px" filterable>
            <el-option
              v-for="item in nations"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位:" prop="position" v-if="regForm.organizationType === 'company'">
          <el-select v-model="regForm.position" placeholder="请选择" @visible-change="getPositions($event)" style="width:300px" filterable >
            <el-option
              v-for="item in positions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="type" label="请选择您的职位" v-if="regForm.organizationType !== 'company'">
        <!-- <span class="svg-container">
          <svg-icon icon-class="tree"/>
        </span> -->
        <el-select v-model="regForm.type" placeholder="请选择您的职位" >
          <el-option label="管理员" value="00"/>
          <el-option label="负责人" value="02"/>
          <el-option label="工程师" value="05"/>
        </el-select>
      </el-form-item>
        <el-form-item label="电子邮件:" prop="email" >
          <el-input v-model="regForm.email" />
        </el-form-item>
        <el-form-item label="电话号码:" prop="mobile" >
          <el-input v-model="regForm.mobile" />
        </el-form-item>
        <el-form-item label="其他号码1:" prop="otherTel1" v-if="regForm.organizationType === 'company'">
          <el-input v-model="regForm.otherTel1" />
        </el-form-item>
        <el-form-item label="其他号码2:" prop="otherTel2" v-if="regForm.organizationType === 'company'">
          <el-input v-model="regForm.otherTel2" />
        </el-form-item>
        <el-form-item label="地址:" prop="address" v-if="regForm.organizationType === 'company'">
          <el-input v-model="regForm.address" />
        </el-form-item>
        <!-- <el-form-item label="工作部门:" prop="dptName" >
          <el-select v-model="regForm.dptName" placeholder="请选择" @visible-change="getDptNames($event)" style="width:300px" filterable>
            <el-option
              v-for="item in dptNames"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item> -->

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="register">提交注册信息</el-button>
        <el-button @click="handleCloseOrCancel">取消</el-button>
      </span>
    </el-dialog>


    <!-- <div class="tips">
      <span style="margin-right:20px;">username: admin</span>
      <span> password: any</span>
    </div> -->

  </div>
</template>

<script>
// import {validUsername} from "@/utils/validate";

import { checkJobId } from "../../api/register";

export default {
  name: "Login",
  data() {
    let validateRegJobId = (rule, value, callback) => {
      if (this.regForm.organizationType === "company") {
        this.$store
          .dispatch("CheckCompanyJobId", {
            jobId: value,
            dptName: this.regForm.dptName
          })
          .then(response => {
            console.log(response);
            if (response == "success") {
              callback();
            } else {
              callback("用户名已存在");
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else if (this.regForm.organizationType === "constructor") {
        this.$store
          .dispatch("CheckConstructorJobId", {
            jobId: value,
            unitName: this.regForm.dptName
          })
          .then(response => {
            console.log(response);
            if (response == "success") {
              callback();
            } else {
              callback("用户名已存在");
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else if (this.regForm.organizationType === "supervisor") {
        this.$store
          .dispatch("CheckSupervisorJobId", {
            jobId: value,
            unitName: this.regForm.dptName
          })
          .then(response => {
            console.log(response);
            if (response == "success") {
              callback();
            } else {
              callback("用户名已存在");
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    };
    let idCardValidity = (rule, code, callback) => {
      var city = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 "
      };
      var tip = "";
      var pass = true;

      if (
        !code ||
        !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
          code
        )
      ) {
        tip = "身份证号格式错误";
        pass = false;
      } else if (!city[code.substr(0, 2)]) {
        tip = "地址编码错误";
        pass = false;
      } else {
        // 18位身份证需要验证最后一位校验位
        if (code.length === 18) {
          code = code.split("");
          // ∑(ai×Wi)(mod 11)
          // 加权因子
          var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
          // 校验位
          var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
          var sum = 0;
          var ai = 0;
          var wi = 0;
          for (var i = 0; i < 17; i++) {
            ai = code[i];
            wi = factor[i];
            sum += ai * wi;
          }
          var last = parity[sum % 11];
          if (parity[sum % 11] != code[17]) {
            tip = "校验位错误";
            pass = false;
          }
        }
      }
      if (!pass) {
        callback(new Error(tip));
      } else {
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    let validateMobile = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号不可为空"));
      } else {
        if (value !== "") {
          var reg = /^1[3456789]\d{9}$/;
          if (!reg.test(value)) {
            callback(new Error("请输入有效的手机号码"));
          }
        }
        callback();
      }
    };
    let validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请正确填写邮箱"));
      } else {
        if (value !== "") {
          var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if (!reg.test(value)) {
            callback(new Error("请输入有效的邮箱"));
          }
        }
        callback();
      }
    };

    return {
      loginForm: {
        organizationType: null,
        dptName: null,
        jobId: null,
        password: null
      },

      loginRules: {
        organizationType: [{ required: true, message: "请选择您的组织！" }],
        organizationDpt: [{ required: true, message: "请选择您的工作单位！" }],
        jobId: [
          { required: true, message: "请输入工号或用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },

      regVisible: false,

      regForm: {
        organizationType: null,
        dptName: null,
        name: null,
        jobId: null,
        password: null,
        rePassword: null,
        cardId: null,
        sex: null,
        nation: null,
        academic: null,
        position: null,
        mobile: null,
        email: null,
        otherTel1: null,
        otherTel2: null,
        address: null,
        status: "等待认证"
      },

      sexs: [
        { value: "男", label: "男" },
        { value: "女", label: "女" }
      ],

      academics: [
        {
          value: "全日制普通博士学位研究生",
          label: "全日制普通博士学位研究生"
        },
        {
          value: "全日制普通硕士学位研究生(包括学术型硕士和专业硕士)",
          label: "全日制普通硕士学位研究生(包括学术型硕士和专业硕士)"
        },
        { value: "全日制普通第二学士学位", label: "全日制普通第二学士学位" },
        { value: "全日制普通本科", label: "全日制普通本科" },
        { value: "全日制普通专科(高职)", label: "全日制普通专科(高职)" },
        { value: "成人教育大类", label: "成人教育大类" },
        { value: "高中", label: "高中" },
        { value: "初中", label: "初中" },
        { value: "小学", label: "小学" },
        { value: "其他", label: "其他" }
      ],

      nations: [
        { value: "汉族", label: "汉族" },
        { value: "蒙古族", label: "蒙古族" },
        { value: "回族", label: "回族" },
        { value: "藏族", label: "藏族" },
        { value: "维吾尔族", label: "维吾尔族" },
        { value: "苗族", label: "苗族" },
        { value: "彝族", label: "彝族" },
        { value: "壮族", label: "壮族" },
        { value: "布依族", label: "布依族" },
        { value: "朝鲜族", label: "朝鲜族" },
        { value: "满族", label: "满族" },
        { value: "侗族", label: "侗族" },
        { value: "瑶族", label: "瑶族" },
        { value: "白族", label: "白族" },
        { value: "土家族", label: "土家族" },
        { value: "哈尼族", label: "哈尼族" },
        { value: "哈萨克族", label: "哈萨克族" },
        { value: "傣族", label: "傣族" },
        { value: "黎族", label: "黎族" },
        { value: "傈僳族", label: "傈僳族" },
        { value: "佤族", label: "佤族" },
        { value: "畲族", label: "畲族" },
        { value: "高山族", label: "高山族" },
        { value: "拉祜族", label: "拉祜族" },
        { value: "水族", label: "水族" },
        { value: "东乡族", label: "东乡族" },
        { value: "纳西族", label: "纳西族" },
        { value: "景颇族", label: "景颇族" },
        { value: "柯尔克孜族", label: "柯尔克孜族" },
        { value: "土族", label: "土族" },
        { value: "达翰尔族", label: "达翰尔族" },
        { value: "么佬族", label: "么佬族" },
        { value: "羌族", label: "羌族" },
        { value: "布朗族", label: "布朗族" },
        { value: "撒拉族", label: "撒拉族" },
        { value: "毛南族", label: "毛南族" },
        { value: "仡佬族", label: "仡佬族" },
        { value: "锡伯族", label: "锡伯族" },
        { value: "阿昌族", label: "阿昌族" },
        { value: "普米族", label: "普米族" },
        { value: "塔吉克族", label: "塔吉克族" },
        { value: "怒族", label: "怒族" },
        { value: "乌孜别克族", label: "乌孜别克族" },
        { value: "俄罗斯族", label: "俄罗斯族" },
        { value: "鄂温克族", label: "鄂温克族" },
        { value: "德昂族", label: "德昂族" },
        { value: "保安族", label: "保安族" },
        { value: "裕固族", label: "裕固族" },
        { value: "京族", label: "京族" },
        { value: "塔塔尔族", label: "塔塔尔族" },
        { value: "独龙族", label: "独龙族" },
        { value: "鄂伦春族", label: "鄂伦春族" },
        { value: "赫哲族", label: "赫哲族" },
        { value: "门巴族", label: "门巴族" },
        { value: "珞巴族", label: "珞巴族" },
        { value: "基诺族", label: "基诺族" },
        { value: "其他", label: "其他" }
      ],

      positions: [],

      dptNames: [],

      regRules: {
        organizationType: [
          { required: true, message: "请选择组织", trigger: "blur" }
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        jobId: [
          { required: true, message: "请输入工号/用户名", trigger: "blur" },
          { validator: validateRegJobId, trigger: "blur" }
        ],

        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
            message:
              "密码为8-30位数字，小写字母，大写字母，特殊符号 至少包含三种组合，不能包含用户名"
          }
        ],
        rePassword: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ],
        academic: [
          { required: false, message: "请选择学历", trigger: "change" }
        ],
        nation: [{ required: false, message: "请选择民族", trigger: "change" }],
        position: [
          { required: true, message: "请选择职位", trigger: "change" }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        cardId: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          {
            pattern: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
            message: "请输入正确的身份证号"
          },
          { validator: idCardValidity, trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: validateEmail, trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { validator: validateMobile, trigger: "blur" }
        ],
        otherTel1: [{ required: false }],
        otherTel2: [{ required: false }],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        dptName: [
          { required: true, message: "请输入工作部门", trigger: "blur" }
        ]
      },

      loading: false,
      passwordType: "password",
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        console.log("do login");
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.loading = false;
              // this.$router.push({ path: this.redirect || "/" });
              this.$router.push({ path: "/" });
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    toRegister() {
      // this.$router.push("/register");
      this.regVisible = true;
    },

    getPositions(callback, vc) {
      if (callback) {
        var this1 = this;
        this.$store
          .dispatch("GetPositions", {})
          .then(response => {
            console.log(response);
            var result = response;
            console.log("result=" + result);
            this.positions = [];
            for (var item in result) {
              var v = { value: result[item], label: result[item] };
              this.positions.push(v);
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },

    getDptNames(callback, vc) {
      // console.log("do getDptNames");
      if (callback) {
        // console.log("do callback ");
        console.log(this.loginForm.organizationType);
        if (this.loginForm.organizationType === "company") {
          // console.log("do gsgl");
          this.$store
            .dispatch("GetDptNamesFromCompany", {})
            .then(response => {
              // console.log(response);
              var result = response;
              // console.log("result=" + result);
              this.dptNames = [];
              for (var item in result) {
                var v = { value: result[item], label: result[item] };
                this.dptNames.push(v);
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else if (this.loginForm.organizationType === "constructor") {
          this.$store
            .dispatch("GetDptNamesFromConstructor", {})
            .then(response => {
              // console.log(response);
              var result = response;
              // console.log("result=" + result);
              this.dptNames = [];
              for (var item in result) {
                var v = { value: result[item], label: result[item] };
                this.dptNames.push(v);
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else if (this.loginForm.organizationType === "supervisor") {
          this.$store
            .dispatch("GetDptNamesFromSupervisor", {})
            .then(response => {
              // console.log(response);
              var result = response;
              // console.log("result=" + result);
              this.dptNames = [];
              for (var item in result) {
                var v = { value: result[item], label: result[item] };
                this.dptNames.push(v);
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      }
    },
    getDptNamesInReg(callback, vc) {
      // console.log("do getDptNames");
      if (callback) {
        // console.log("do callback ");
        // console.log(this.regForm.organizationType);
        if (this.regForm.organizationType === "company") {
          // console.log("do gsgl");
          this.$store
            .dispatch("GetDptNamesFromCompany", {})
            .then(response => {
              // console.log(response);
              var result = response;
              // console.log("result=" + result);
              this.dptNames = [];
              for (var item in result) {
                var v = { value: result[item], label: result[item] };
                this.dptNames.push(v);
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else if (this.regForm.organizationType === "constructor") {
          this.$store
            .dispatch("GetDptNamesFromConstructor", {})
            .then(response => {
              // console.log(response);
              var result = response;
              // console.log("result=" + result);
              this.dptNames = [];
              for (var item in result) {
                var v = { value: result[item], label: result[item] };
                this.dptNames.push(v);
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else if (this.regForm.organizationType === "supervisor") {
          this.$store
            .dispatch("GetDptNamesFromSupervisor", {})
            .then(response => {
              // console.log(response);
              var result = response;
              // console.log("result=" + result);
              this.dptNames = [];
              for (var item in result) {
                var v = { value: result[item], label: result[item] };
                this.dptNames.push(v);
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      }
    },

    handleCloseOrCancel() {
      this.regVisible = false;
    },

    register() {
      if (this.regForm.organizationType === "company") {
        this.$refs["regForm"].validate(valid => {
          if (valid) {
            const name = this.regForm.name;
            const jobId = this.regForm.jobId;
            const password = this.regForm.password;
            const cardId = this.regForm.cardId;
            const sex = this.regForm.sex;
            const nation = this.regForm.nation;
            const academic = this.regForm.academic;
            const position = this.regForm.position;
            const dptName = this.regForm.dptName;
            const mobile = this.regForm.mobile;
            const email = this.regForm.email;
            const otherTel1 = this.regForm.otherTel1;
            const otherTel2 = this.regForm.otherTel2;
            const address = this.regForm.address;
            const status = this.regForm.status;
            this.$store
              .dispatch("DoCompanyRegister", {
                name: name,
                jobId: jobId,
                password: password,
                cardId: cardId,
                sex: sex,
                academic: academic,
                nation: nation,
                position: position,
                mobile: mobile,
                otherTel1: otherTel1,
                otherTel2: otherTel2,
                email: email,
                address: address,
                dptName: dptName,
                status: status
              })
              .then(response => {
                this.$message.success("注册已提交，请等待审核通过！");
                this.regVisible = false;
                this.$router.push("/login");
              })
              .catch(function(error) {
                this.$message.error("提交注册信息异常，请稍后重试！");
                console.log(error);
              });
          }
        });
      } else if (this.regForm.organizationType === "constructor") {
        this.$refs["regForm"].validate(valid => {
          if (valid) {
            const name = this.regForm.name;
            const jobId = this.regForm.jobId;
            const password = this.regForm.password;
            const idCard = this.regForm.cardId;
            const telNumber = this.regForm.mobile;
            const email = this.regForm.email;
            const status = this.regForm.status;
            const type = this.regForm.type;
            const unitName = this.regForm.dptName;
            this.$store
              .dispatch("DoConstructorRegister", {
                name: name,
                jobId: jobId,
                password: password,
                idCard: idCard,
                telNumber: telNumber,
                email: email,
                status: status,
                type: type,
                unitName: unitName
              })
              .then(response => {
                this.$message.success("注册已提交，请等待审核通过！");
                this.regVisible = false;
                this.$router.push("/login");
              })
              .catch(function(error) {
                this.$message.error("提交注册信息异常，请稍后重试！");
                console.log(error);
              });
          }
        });
      } else if (this.regForm.organizationType === "supervisor") {
        this.$refs["regForm"].validate(valid => {
          if (valid) {
            const name = this.regForm.name;
            const jobId = this.regForm.jobId;
            const password = this.regForm.password;
            const idCard = this.regForm.cardId;
            const telNumber = this.regForm.mobile;
            const email = this.regForm.email;
            const status = this.regForm.status;
            const type = this.regForm.type;
            const unitName = this.regForm.dptName;
            this.$store
              .dispatch("DoSupervisorRegister", {
                name: name,
                jobId: jobId,
                password: password,
                idCard: idCard,
                telNumber: telNumber,
                email: email,
                status: status,
                type: type,
                unitName: unitName
              })
              .then(response => {
                this.$message.success("注册已提交，请等待审核通过！");
                this.regVisible = false;
                this.$router.push("/login");
              })
              .catch(function(error) {
                this.$message.error("提交注册信息异常，请稍后重试！");
                console.log(error);
              });
          }
        });
      }
    }
  }
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: black;
      height: 47px;
      caret-color: black;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  background-image: url("../../assets/home_bg/homebg.jpg");
  min-height: 100%;
  width: 100%;
  background-color: #409eff;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 400px;
    max-width: 100%;
    padding: 35px 35px 0;
    background-color: white;
    border-radius: 15px;
    margin-top: 5%;
    margin-left: 10%;
    overflow: hidden;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: black;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: black;
    cursor: pointer;
    user-select: none;
  }

  .tips {
    color: #606266;
    margin-left: 108px;
    font-size: 14px;
  }
}
</style>
