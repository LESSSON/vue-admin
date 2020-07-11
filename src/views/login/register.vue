<template>
  <el-container  style="margin-left:10px">
    <el-header>
      <h1>注册</h1>
    </el-header>
    <el-main>
      <el-form :inline="false" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

          <!-- <el-form-item label="请输入员工编号:" prop="staffId" >
            <el-input v-model="ruleForm.staffId" ></el-input>
          </el-form-item> -->
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
          <el-form-item label="确认密码:" prop="repassword" >
            <el-input v-model="ruleForm.repassword" type="password"></el-input>
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
          <el-form-item label="请选择您的职位:" prop="position" >
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
            <el-select v-model="ruleForm.shtName" placeholder="请选择" @visible-change="getWkdptShortnames($event,ruleForm.shtName)" style="width:300px" filterable>
                <el-option
                v-for="item in shtNames"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="员工状态:" prop="status" >
            <el-input v-model="ruleForm.status" ></el-input>
          </el-form-item> -->


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

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    var validateMobilePhone1 = (rule, value, callback) => {
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
    var validateMobilePhone2 = (rule, value, callback) => {
      if (value === "") {
        callback();
      } else {
        if (value !== "") {
          var reg = /^1[3456789]\d{9}$/;
          if (!reg.test(value)) {
            callback("请输入有效的手机号码");
          }
        }
        callback();
      }
    };

    var validateEmail = (rule, value, callback) => {
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
      ruleForm: {
        // staffId: "",
        name: "",
        userName: "",
        password: "",
        repassword: "",
        cardId: "",
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
        level: 0,
        email: "",
        telnumber1: "",
        telnumber2: "",
        photo: ""
      },

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
      nations: [
        { value: 1, label: "汉族" },
        { value: 2, label: "蒙古族" },
        { value: 3, label: "回族" },
        { value: 4, label: "藏族" },
        { value: 5, label: "维吾尔族" },
        { value: 6, label: "苗族" },
        { value: 7, label: "彝族" },
        { value: 8, label: "壮族" },
        { value: 9, label: "布依族" },
        { value: 10, label: "朝鲜族" },
        { value: 11, label: "满族" },
        { value: 12, label: "侗族" },
        { value: 13, label: "瑶族" },
        { value: 14, label: "白族" },
        { value: 15, label: "土家族" },
        { value: 16, label: "哈尼族" },
        { value: 17, label: "哈萨克族" },
        { value: 18, label: "傣族" },
        { value: 19, label: "黎族" },
        { value: 20, label: "傈僳族" },
        { value: 21, label: "佤族" },
        { value: 22, label: "畲族" },
        { value: 23, label: "高山族" },
        { value: 24, label: "拉祜族" },
        { value: 25, label: "水族" },
        { value: 26, label: "东乡族" },
        { value: 27, label: "纳西族" },
        { value: 28, label: "景颇族" },
        { value: 29, label: "柯尔克孜族" },
        { value: 30, label: "土族" },
        { value: 31, label: "达翰尔族" },
        { value: 32, label: "么佬族" },
        { value: 33, label: "羌族" },
        { value: 34, label: "布朗族" },
        { value: 35, label: "撒拉族" },
        { value: 36, label: "毛南族" },
        { value: 37, label: "仡佬族" },
        { value: 38, label: "锡伯族" },
        { value: 39, label: "阿昌族" },
        { value: 40, label: "普米族" },
        { value: 41, label: "塔吉克族" },
        { value: 42, label: "怒族" },
        { value: 43, label: "乌孜别克族" },
        { value: 44, label: "俄罗斯族" },
        { value: 45, label: "鄂温克族" },
        { value: 46, label: "德昂族" },
        { value: 47, label: "保安族" },
        { value: 48, label: "裕固族" },
        { value: 49, label: "京族" },
        { value: 50, label: "塔塔尔族" },
        { value: 51, label: "独龙族" },
        { value: 52, label: "鄂伦春族" },
        { value: 53, label: "赫哲族" },
        { value: 54, label: "门巴族" },
        { value: 55, label: "珞巴族" },
        { value: 56, label: "基诺族" }
      ],
      positions: [],
      shtNames: [],
      sexs: [
        { value: "男", label: "男" },
        { value: "女", label: "女" }
      ],
      rules: {
        // staffId: [
        //   { required: true, message: "请选择所在主体", trigger: "change" }
        // ],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],

        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: validate, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
            message:
              "密码为数字，小写字母，大写字母，特殊符号 至少包含三种，长度为 8 - 30位，密码不能包含 用户名 （判断的时候不区分大小写)"
          }
        ],
        repassword: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ],
        academic: [
          { required: true, message: "请选择学历", trigger: "change" }
        ],
        nation: [{ required: true, message: "请选择民族", trigger: "change" }],
        position: [
          { required: true, message: "请选择职位", trigger: "change" }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        cardId: [
          { required: true, message: "请输入证件号", trigger: "blur" },
          {
            pattern: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
            message: "请输入正确的证件号"
          },
          { validator: idCardValidity, trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: validateEmail, trigger: "blur" }
        ],
        telnumber1: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          { validator: validateMobilePhone1, trigger: "blur" }
        ],
        telnumber2: [
          { required: false, message: "请输入电话号码", trigger: "blur" }
          // { validator: validateMobilePhone2 }
        ],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        shtName: [
          { required: true, message: "请输入工作部门", trigger: "blur" }
        ],
        status: [{ required: true, message: "请输入员工状态", trigger: "blur" }]
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
      var levelType = this.ruleForm.level;
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
            this.shtNames = [];
            for (var item in result) {
              var v = { value: result[item], label: result[item] };
              this.shtNames.push(v);
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
          // const staffId = this.ruleForm.staffId;
          const name = this.ruleForm.name;
          const userName = this.ruleForm.userName;
          const password = this.ruleForm.password;
          const cardId = this.ruleForm.cardId;
          const sex = this.ruleForm.sex;
          const academic = this.ruleForm.academic;
          const nation = this.ruleForm.nation;
          const position = this.ruleForm.position;
          const email = this.ruleForm.email;
          const telnumber1 = this.ruleForm.telnumber1;
          const telnumber2 = this.ruleForm.telnumber2;
          const address = this.ruleForm.address;
          const shtName = this.ruleForm.shtName;
          const photo = this.ruleForm.photo;
          // this.upLoading = true;
          this.$store
            .dispatch("project/DoRegister", {
              // staffId: staffId,
              name: name,
              userName: userName,
              password: password,
              cardId: cardId,
              sex: sex,
              academic: academic,
              nation: nation,
              position: position,
              telnumber1: telnumber1,
              telnumber2: telnumber2,
              address: address,
              shtName: shtName,
              photo: photo
            })
            .then(response => {
              // this.upLoading = false;
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