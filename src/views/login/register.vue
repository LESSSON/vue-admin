<template>
  <el-container  style="margin-left:10px">
    <el-header>
      <h1>注册</h1>
    </el-header>
    <el-main>
      <el-form :inline="false" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

          <el-form-item label="请输入员工编号:" prop="staffId" >
            <el-input v-model="ruleForm.staffId" ></el-input>
          </el-form-item>
          <!-- <el-form-item label="请选择您所在的主体分支:" prop="staffId" >
            <el-select v-model="ruleForm.staffIds" placeholder="请选择" @visible-change="getStaffId($event,staffId)" style="width:300px" filterable>
                <el-option
                v-for="item in staffIds"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="姓名:" prop="name" >
            <el-input v-model="ruleForm.name" ></el-input>
          </el-form-item>
          <el-form-item label="用户名:" prop="userName" >
            <el-input v-model="ruleForm.userName" ></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password" >
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码:" prop="passwordToo" >
            <el-input v-model="ruleForm.passwordToo" type="password"></el-input>
          </el-form-item>
          <el-form-item label="身份证:" prop="cardId" >
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
            <el-select v-model="ruleForm.academic" placeholder="请选择" style="width:300px" filterable>
                <el-option
                v-for="item in academics"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择您的民族:" prop="nation" >
            <el-select v-model="ruleForm.nation" placeholder="请选择" style="width:300px" filterable>
                <el-option
                v-for="item in nations"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择您的position:" prop="position" >
            <el-select v-model="ruleForm.position" placeholder="请选择" @visible-change="getPositions($event,ruleForm.position)" style="width:300px" filterable>
                <el-option
                v-for="item in positions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电子邮件:" prop="email" >
            <el-input v-model="ruleForm.email" ></el-input>
          </el-form-item>
          <el-form-item label="电话号码:" prop="telnumber1" >
            <el-input v-model="ruleForm.telnumber1" ></el-input>
          </el-form-item>
          <el-form-item label="电话号码2:" prop="telnumber2" >
            <el-input v-model="ruleForm.telnumber2" ></el-input>
          </el-form-item>
          <el-form-item label="地址:" prop="address" >
            <el-input v-model="ruleForm.address" ></el-input>
          </el-form-item>
          <el-form-item label="工作部门简称:" prop="shtName" >
            <el-input v-model="ruleForm.shtName" ></el-input>
          </el-form-item>
          <el-form-item label="员工状态:" prop="status" >
            <el-input v-model="ruleForm.status" ></el-input>
          </el-form-item>


      </el-form>


    <div>
      <el-button
        type="primary"
        @click="register('ruleForm')"
      >
        提交
      </el-button>
    </div>
    </el-main>
  </el-container>

</template>


<script>
// import { getPositionsByLevelType } from "@/api/register";

export default {
  name: "Register",
  data() {
    let validate = (rule, value, callback) => {
      //后台方法
      // checkUsername(value).then(res => {
      var this1 = this;
      this.$store
        .dispatch("project/CheckUsername", {
          userName: value
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
        status: 99,
        level: 0
      },
      telnumber1: "",
      telnumber2: "",
      value: 0,
      academics: [
        { value: "01", label: "全日制普通博士学位研究生" },
        {
          value: "02",
          label: "全日制普通硕士学位研究生(包括学术型硕士和专业硕士)"
        },
        { value: "03", label: "全日制普通第二学士学位" },
        { value: "04", label: "全日制普通本科" },
        { value: "05", label: "全日制普通专科(高职)" },
        { value: "06", label: "成人教育大类" },
        { value: "07", label: "高中" },
        { value: "08", label: "初中" },
        { value: "09", label: "小学" },
        { value: "10", label: "其他" }
      ],
      nations: [],
      positions: [],
      sexs: [
        { value: "男", label: "男" },
        { value: "女", label: "女" }
      ],
      rules: {
        staffId: [
          { required: true, message: "请选择所在主体", trigger: "change" }
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: validate, trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        passwordToo: [
          { required: true, message: "请确认密码", trigger: "blur" }
        ],
        academic: [
          { required: true, message: "请选择学历", trigger: "change" }
        ],
        nation: [{ required: true, message: "请选择民族", trigger: "change" }],
        cardId: [
          { required: true, message: "请输入证件号", trigger: "blur" },
          {
            pattern: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
            message: "请输入正确的证件号"
          },
          { validator: idCardValidity, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    getPositions(callback, vc) {
      var levelType = this.ruleForm.level;
      if (callback) {
        var this1 = this;
        this.$store
          .dispatch("project/GetPositions", {
            levelType: levelType
          })
          .then(response => {
            console.log(response);
            var result = response;
            console.log("result=");
            console.log(result);
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

    getWkdptShortnames(callback, vc) {
      if (callback) {
        var this1 = this;
        this.$store
          .dispatch("project/GetWkdptShortnames", {
            levelType: levelType
          })
          .then(response => {
            console.log(response);
            var result = response;
            console.log("result=");
            console.log(result);
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

    checkUsername(callback, vc) {
      if (callback) {
        var this1 = this;
        this.$store
          .dispatch("project/CheckUsername", {
            userName: this.ruleForm.userName
          })
          .then(response => {
            console.log(response);
            var result = response;
            return result;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    register(formName) {
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