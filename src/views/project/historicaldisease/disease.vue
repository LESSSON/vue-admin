<template>
    <el-container>
        <el-header>
<!--            历史病害维护   -->
          <el-button type="primary" plain @click="addDialogVisible = true">添加病害信息</el-button>
        </el-header>
        <el-main>

            <div>
                <el-dialog title="历史病害信息添加" :visible.sync="addDialogVisible">
                        <el-form :inline="false" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                        <el-form-item label="方向" prop="direct" >
                            <el-input v-model="ruleForm.direct" ></el-input>
                        </el-form-item>
                        <el-form-item label="病毒名称" prop="disName" >
                            <el-input v-model="ruleForm.disName" ></el-input>
                        </el-form-item>
                        <el-form-item label="登记编号" prop="disRegId" >
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
                        <el-form-item label="上报管理所" prop="shtName" >
                            <el-input v-model="ruleForm.shtName" ></el-input>
                        </el-form-item>
                        <el-form-item label="管辖分公司" prop="shtNamesSup" >
                            <el-input v-model="ruleForm.shtNamesSup" ></el-input>
                        </el-form-item>
                        <el-form-item label="病害处理类型" prop="treatType" >
                            <el-input v-model="ruleForm.treatType" ></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="维修方案" prop="repPreMethod" >
                            <el-input v-model="ruleForm.repPreMethod" ></el-input>
                        </el-form-item> -->
                        <el-form-item>
                            <el-button type="primary" @click="addHistoryDisInfo('ruleForm')">提交</el-button>
                            <el-button type="primary" @click="addDialogVisible = false">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </div>

            <div>
              <div class="table-content2">
                <el-dialog title="历史病害信息文件" :visible.sync="fileOperateDialogVisible">

                <el-button type='text' @click="uploadFile">新增文件</el-button>

                <el-table :data="fileList" stripe style="width: 100%;" >
                    <el-table-column prop="fileName" label="文件名"></el-table-column>
                    <el-table-column prop="recentModifyTime" label="修改时间"></el-table-column>

                    <el-table-column label="操作">
                      <template slot-scope="scope">
                        <el-button type='text' @click="previewFile(scope.row.fileName)">预览</el-button>
                        <el-button type="danger" icon="el-icon-delete" size="small" circle @click="deleteFile(scope.row.fileName)"></el-button>
                      </template>
                    </el-table-column>
                </el-table>
                </el-dialog>
                </div>
            </div>
              <div class="table-content3">
                <el-dialog title="上传文件" :visible.sync="fileUploadDialogVisible">

                  <el-upload
                    ref="upload"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :auto-upload="false"
                    :limit="3"
                    :on-success="doUploadSuccess"
                    :action=getUploadUrl()
                    class="upload-demo">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
                    <div slot="tip" class="el-upload__tip">每次最多可以上传3个文件</div>
                  </el-upload>

                </el-dialog>
                </div>

<!--              <el-dialog title="文件预览" :visible.sync="filePreviewDialogVisible">-->
<!--              </el-dialog>-->
              <el-drawer
                :v-loading="fileResourceLoading"
                :visible.sync="filePreviewDrawerVisible"
                >
                <PDF ref="pdf"/>
               </el-drawer>
            <div>

            </div>

            <div>
            <el-input v-model="diseaseName" placeholder="输入病害名称进行查询，如：路基滑坡" style="width: 400px"></el-input>
            <el-button type="primary" @click="getHistoryDisInfosByDisName()">查询</el-button>
            </div>

              <div>
                <!-- 表格数据 -->
                <div class="table-content">
                <el-table :data="rawList" stripe style="width: 100%;">
                    <el-table-column prop="direct" label="方向"></el-table-column>
                    <el-table-column prop="disName" label="病害名称"></el-table-column>
                    <el-table-column prop="disRegId" label="登记编号"></el-table-column>
                    <el-table-column prop="formCause" label="形式成因"></el-table-column>
                    <el-table-column prop="location" label="位置编号"></el-table-column>
                    <el-table-column prop="repCost" label="建议费用"></el-table-column>
                    <el-table-column prop="repPreMethod" label="防治方法"></el-table-column>
                    <el-table-column prop="reportDate" label="上报日期" :formatter="dateFormat" width="100px"></el-table-column>
                    <el-table-column prop="roadType" label="路段类型"></el-table-column>
                    <el-table-column prop="branchName" label="管辖分公司"></el-table-column>
                    <el-table-column prop="manageName" label="上报管理所"></el-table-column>
                    <el-table-column prop="treatType" label="处理类型"></el-table-column>
                    <el-table-column label="操作">
                      <template slot-scope="scope" >
                        <el-button type='text' style="margin-left: 8px" @click="editDisInfo(scope.row)">编辑</el-button>
                        <el-button type='text' @click="fileOperate(scope.row)" style="color: green">文件</el-button>
                        <el-button type='text' style="color: red" @click="deleteDisInfo(scope.row)">删除</el-button>
                      </template>
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
import { mapState, mapGetters } from "vuex";
import moment from 'moment';
import PDF from './pdfPreview';

export default {
  name: "disease",
  comments: {PDF},
  data() {
    return {
      diseaseName: "",
      type: "base",
      typeId: "",
      action: "",
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
      fileList: [],
      upLoadFileList: [],
      row: "",
      addDialogVisible: false,
      editDialogVisible: false,
      fileOperateDialogVisible: false,
      fileUploadDialogVisible: false,
      filePreviewDrawerVisible: false,
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
      },
      disNameList: [],
      roadTypeList: [],
      treatTypeList: [],
      dptNameList:[],
      uploadUrl: "",
      src: '',
      fileUrl: "http://47.102.101.25:8088/management/file/download/base/2/Spring%2BSecurity%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C.pdf",
      fileResourceLoading: true,
    };
  },

  created() {
    this.getDisNames();
    this.getDisRoadTypes();
    this.getDisTreatTypes();
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

    previewFile(fileName) {
      this.filePreviewDrawerVisible = true;
      this.fileUrl = "http://47.102.101.25:8088/management/file/download/" + this.type + "/" + this.typeId + "/" + fileName;
      this.$ref.pdf.previewPDF(this.fileUrl);
      //this.src = pdf.createLoadingTask("http://47.102.101.25:8088/management/file/download/" + this.type + "/" + this.typeId + "/" + fileName);
    },

    editDisInfo(row) {

    },

    deleteDisInfo(row) {

    },

    doUploadSuccess() {
      this.fileUploadDialogVisible = false;

      this.$http.get("http://47.102.101.25:8088/management/file/"+this.type+"/"+this.typeId+"/fileList")
        .then(response => {
          this.fileList = response.body.data;
        });
    },

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

    getDisRoadTypes() {
      this.$http.get("http://47.102.101.25:8088/management/company/history/get-disRoad-types").then(response => {
        this.roadTypeList = response.data;
      })
    },

    getDisTreatTypes() {
      this.$http.get("http://47.102.101.25:8088/management/company/history/get-disTreat-types").then(response => {
        this.treatTypeList = response.data;
      })
    },

    getDisNames() {
      this.$http.get("http://47.102.101.25:8088/management/company/history/get-disNames").then(response => {
        this.disNameList = response.data;
      })
    },

    getDptNames() {
      this.$http.get("http://47.102.101.25:8088/management/company/get-dpt-names").then(response => {
        this.dptNameList = response.data;
      })
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
                this.addDialogVisible = false;
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

    deleteFile(fileName) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error',
        center: true
      }).then(() => {
        this.$http.delete("http://47.102.101.25:8088/management/file/" + this.type + "/" + this.typeId + "/" + fileName);
        this.fileList = this.fileList.filter((item) => {
          return item.fileName !== fileName;
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    deleteHistoryDisInfo(id) {
      this.$http.delete("http://47.102.101.25:8088/management/company/history/delete-disInfo?id="+id);
    },

    modifyHistoryDisInfo(form) {
      this.$http.put("http://47.102.101.25:8088/management/company/history/modify-disInfo", form).then(response => {
        console.log("modify ok");
      })
    },

    getUploadUrl() {
      return this.uploadUrl;
    },

    getHistoryDisInfosByDisName() {

      this.$http.get("http://47.102.101.25:8088/management/company/history/get-disInfos-by-disName?disName=" + this.diseaseName)
        .then((response) => {
          if ("success" === response.data.status) {
            this.rawList = response.data.data;
          }
        })
    },

    dateFormat :function(row,column){
      const date = row[column.property];
      if(date == undefined){return ''};
      return moment(date).format("YYYY-MM-DD HH:mm:ss")
    },

    fileOperate(row) {
      this.row = row;
      this.fileOperateDialogVisible = true;
      this.typeId = this.row.id;
      this.$store
        .dispatch("GetFileList", {
          type: this.type,
          typeId: this.typeId
        })
        .then(response => {
          this.fileList = response;
        });
      this.fileList = [row];
      this.uploadUrl = "http://47.102.101.25:8088/management/file/"+ this.type + "/" + this.typeId + "/upload";
    },
    uploadFile() {
      this.fileUploadDialogVisible = true;
    },

    submitUpload() {
      this.$refs.upload.submit();
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },

    handlePreview(file) {
      console.log(file);
    },

    created() {
      this.handleSizeChange(10);
    }
  },
  computed: {
    ...mapGetters({
      name: "name",
      roles: "roles",
      data: "data"
    })
  }
};
</script>

<style>
</style>
