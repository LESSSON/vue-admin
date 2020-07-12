<template>
    <el-container>
        <el-header>
            历史病害维护   <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
        </el-header>
        <el-main>

            <div>
                <el-dialog title="历史病害信息添加" :visible.sync="dialogFormVisible">
                        <el-form :inline="false" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="方向" prop="direct" >
                            <el-input v-model="ruleForm.direct" ></el-input>
                        </el-form-item>
                        <el-form-item label="病毒名称" prop="disName" >
                            <el-input v-model="ruleForm.disName" ></el-input>
                        </el-form-item>
                        <el-form-item label="病害登记编号" prop="disRegId" >
                            <el-input v-model="ruleForm.disRegId" ></el-input>
                        </el-form-item>
                        <el-form-item label="表现形式及成因" prop="formCause" >
                            <el-input v-model="ruleForm.formCause" ></el-input>
                        </el-form-item>
                        <el-form-item label=" 病害位置桩号" prop="location" >
                            <el-input v-model="ruleForm.location" ></el-input>
                        </el-form-item>
                        <el-form-item label="修复建议费用" prop="repCost" >
                            <el-input v-model="ruleForm.repCost" ></el-input>
                        </el-form-item>
                        <el-form-item label="修复及防治方法" prop="repPreMethod" >
                            <el-input v-model="ruleForm.repPreMethod" ></el-input>
                        </el-form-item>
                        <el-form-item label="上报日期" prop="reportDate" >
                              <div class="block">
    <span class="demonstration"></span>
    <el-date-picker
      v-model="ruleForm.reportDate"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
                        </el-form-item>
                        <el-form-item label="病害路段类型" prop="roadType" >
                            <el-input v-model="ruleForm.roadType" ></el-input>
                        </el-form-item>
                        <el-form-item label="上报单位——管理所" prop="shtName" >
                            <el-input v-model="ruleForm.shtName" ></el-input>
                        </el-form-item>
                        <el-form-item label="管辖单位-分公司" prop="shtNamesSup" >
                            <el-input v-model="ruleForm.shtNamesSup" ></el-input>
                        </el-form-item>
                        <el-form-item label="当前状态" prop="status" >
                            <el-input v-model="ruleForm.status" ></el-input>
                        </el-form-item>
                        <el-form-item label="病害处理类型" prop="treatType" >
                            <el-input v-model="ruleForm.treatType" ></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="维修方案" prop="repPreMethod" >
                            <el-input v-model="ruleForm.repPreMethod" ></el-input>
                        </el-form-item> -->
                        <el-form-item>
                            <el-button type="primary" @click="addHistoryDisInfo('ruleForm')">提交</el-button>
                            <el-button type="primary" @click="dialogFormVisible = false">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </div>

            <div>
              <div class="table-content2">
                <el-dialog title="历史病害信息文件上传" :visible.sync="fileVisible">
                <el-button type='text' >新增文件</el-button>
                <div>
            文件标题<el-input v-model="diseaseName"></el-input>
            <el-button type="primary">查询</el-button>
            </div>
                <el-table :data="fileList" stripe style="width: 100%;" >
                    <el-table-column prop="1" label="病害信息编号"></el-table-column>
                    <el-table-column prop="2" label="文件描述"></el-table-column>
                    <el-table-column prop="3" label="文件标题"></el-table-column>
                    <el-table-column prop="4" label="上传日期"></el-table-column>
                    <el-table-column prop="5" label="操作人员"></el-table-column>
                    <el-table-column prop="6" label="编辑"></el-table-column>
                    <el-table-column prop="7" label="删除"></el-table-column>
                    <el-table-column label="查看文件">
                        <el-button type='text'>查看文件</el-button>
                    </el-table-column>
                </el-table>
                </el-dialog>
                </div>
            </div>


            <div>
            历史病害名称<el-input v-model="diseaseName"></el-input>
            <el-button type="primary">查询</el-button>
            </div>
            
            
              <div>
                <!-- 表格数据 -->
                <div class="table-content">
                <el-table :data="rawList" stripe style="width: 100%;"
                >
                    <el-table-column prop="direct" label="方向"></el-table-column>
                    <el-table-column prop="disName" label="病害名称"></el-table-column>
                    <el-table-column prop="disRegId" label="病害登记编号"></el-table-column>
                    <el-table-column prop="formCause" label="表现形式及成因"></el-table-column>
                    <el-table-column prop="location" label="病害位置编号"></el-table-column>
                    <el-table-column prop="repCost" label="修复建议费用"></el-table-column>
                    <el-table-column prop="repPreMethod" label="修复及防治方法"></el-table-column>
                    <el-table-column prop="reportDate" label="上报日期"></el-table-column>
                    <el-table-column prop="roadType" label="病害路段类型"></el-table-column>
                    <el-table-column prop="shtName" label="上报单位——管理所"></el-table-column>
                    <el-table-column prop="shtNamesSup" label="管辖单位-分公司"></el-table-column>
                    <el-table-column prop="status" label="当前状态"></el-table-column>
                    <el-table-column prop="treatType" label="病害处理类型"></el-table-column>
                    <el-table-column prop="userName" label="用户名"></el-table-column>
                    <el-table-column label="操作">
                        <el-button type='text'>编辑项目</el-button>
                        <el-button type='text' @click="fileVisible = true">上传文件</el-button>
                        <el-button type='text'>删除</el-button>
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage1"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="rawList.length"
                    ></el-pagination>
                </div>
                </div>
            </div>
            

        </el-main>


    </el-container>

</template>

<script>
export default {
  name: "disease",
  data() {
    return {
      diseaseName: "",
      rawList: [],
      currentPage1: 1,
      pageSize: 10,
      pageList: [
        {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1,
          "6": 1,
          "7": 1,
          "8": 1
        }
      ],
      fileList: [
        {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1,
          "6": 1,
          "7": 1
        }
      ],

      dialogFormVisible: false,
      fileVisible: false,
      ruleForm: {
        direct: "",
        disName: "",
        disRegId: "",
        formCause: "",
        location: "",
        repCost: "",
        repPreMethod: "",
        reportDate: "",
        roadType: "",
        shtName: "",
        shtNamesSup: "",
        status: "",
        treatType: "",
        userName: ""
      },
      rules: {
        direct: [{ required: true, message: "请输入方向", trigger: "blur" }],
        disName: [
          { required: true, message: "请输入病害名称", trigger: "blur" }
        ],
        disRegId: [
          { required: true, message: "请输入病害登记编号", trigger: "blur" }
        ],
        formCause: [
          { required: true, message: "请输入表现形式及成因", trigger: "blur" }
        ],
        location: [
          { required: true, message: "请输入病害位置桩号", trigger: "blur" }
        ],
        repCost: [
          { required: true, message: "请输入修复建议费用", trigger: "blur" }
        ],
        repPreMethod: [
          { required: true, message: "请输入修复及防治方法", trigger: "blur" }
        ],
        reportDate: [
          { required: true, message: "请选择上报日期", trigger: "blur" }
        ],
        roadType: [
          { required: true, message: "请输入病害路段类型", trigger: "blur" }
        ],
        shtName: [
          { required: true, message: "请输入上报单位——管理所", trigger: "blur" }
        ],
        shtNamesSup: [
          { required: true, message: "请输入管辖单位-分公司", trigger: "blur" }
        ],
        treatType: [
          { required: true, message: "请输入病害处理类型", trigger: "blur" }
        ]
      }
    };
  },

  mounted() {
    const offset = (this.currentPage1 - 1) * this.pageSize;
    const limit = this.pageSize;

    this.$store
      .dispatch("GetHistoryDisInfos", {
        limit: limit,
        offset: offset
      })
      .then(response => {
        this.rawList = response;
        console.log(this.rawList);
        this.currentChangePage(this.rawList, 1);
      });
  },

  methods: {
    handleSizeChange: function(pageSize) {
      this.pageSize = pageSize;
      this.handleCurrentChange(this.currentPage1);
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage1 = currentPage;
      this.currentChangePage(this.rawList, currentPage);
    },
    currentChangePage(list, currentPage) {
      let from = (currentPage - 1) * this.pageSize;
      let to = currentPage * this.pageSize;
      this.pageList = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.pageList.push(list[from]);
        }
      }
    },

    addHistoryDisInfo(formName) {
      const direct = this.ruleForm.direct;
      const disName = this.ruleForm.disName;
      const disRegId = this.ruleForm.disRegId;
      const formCause = this.ruleForm.formCause;
      const location = this.ruleForm.location;
      const repCost = this.ruleForm.repCost;
      const repPreMethod = this.ruleForm.repPreMethod;
      const reportDate = this.ruleForm.reportDate;
      const roadType = this.ruleForm.roadType;
      const shtName = this.ruleForm.shtName;
      const shtNamesSup = this.ruleForm.shtNamesSup;
      const status = this.ruleForm.status;
      const treatType = this.ruleForm.treatType;
      const userName = this.$store.getters.userName;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store
            .dispatch("AddHistoryDisInfo", {
              // staffId: staffId,
              direct: direct,
              disName: disName,
              disRegId: disRegId,
              formCause: formCause,
              location: location,
              repCost: repCost,
              repPreMethod: repPreMethod,
              reportDate: reportDate,
              roadType: roadType,
              shtName: shtName,
              shtNamesSup: shtNamesSup,
              status: status,
              treatType: treatType,
              userName: userName
            })
            .then(response => {
              // this.upLoading = false;
              if (response == "success") {
                alert("添加成功！");
                // this.$router.push("/login");
                this.dialogFormVisible = false;
                this.currentChangePage(this.rawList, 1);
              } else {
                alert("添加失败，请重试");
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    },

    getDisFileInfos(row) {
      const disName = row.disName;

      this.$store
        .dispatch("GetHistoryDisInfosByDisName", {
          // staffId: staffId,
          disName: disName
        })
        .then(response => {
          // this.upLoading = false;
          if (response.status == "success") {
            // alert("添加成功！");
            // this.$router.push("/login");
            const disRegId = response.data["response"];
            // this.dialogFormVisible = false;
            // this.currentChangePage(this.rawList, 1);
          } else {
            alert("获取历史灾害信息失败");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    created() {
      this.handleSizeChange(10);
    }
  }
};
</script>

<style>
</style>