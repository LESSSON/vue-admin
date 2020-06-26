<template>
    <el-container>
        <el-header>
            历史病害维护   <el-button @click="dialogFormVisible = true">添加</el-button>
        </el-header>
        <el-main>

            <div>
                <el-dialog title="历史病害信息添加" :visible.sync="dialogFormVisible">
                        <el-form :inline="false" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="病害登记编号" prop="id" >
                            <el-input v-model="ruleForm.id" ></el-input>
                        </el-form-item>
                        <el-form-item label="病毒名称" prop="name" >
                            <el-input v-model="ruleForm.name" ></el-input>
                        </el-form-item>
                        <el-form-item label=" 病毒登记时间" prop="time" >
                            <el-input v-model="ruleForm.time" ></el-input>
                        </el-form-item>
                        <el-form-item label="上报单位-管理所" prop="name" >
                            <el-input v-model="ruleForm.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="上报单位-分公司" prop="name" >
                            <el-input v-model="ruleForm.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="上报人" prop="name" >
                            <el-input v-model="ruleForm.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="病害成因" prop="name" >
                            <el-input v-model="ruleForm.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="道路类型" prop="name" >
                            <el-input v-model="ruleForm.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="位置桩号" prop="name" >
                            <el-input v-model="ruleForm.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="位置方向" prop="name" >
                            <el-input v-model="ruleForm.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="维修费用" prop="name" >
                            <el-input v-model="ruleForm.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="维修方案" prop="name" >
                            <el-input v-model="ruleForm.name" ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button>提交</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </div>


            <div>
            历史病害名称<el-input v-model="diseaseName"></el-input>
            <el-button>查询</el-button>
            </div>
            
            
              <div>
                <!-- 表格数据 -->
                <div class="table-content">
                <el-table :data="pageList" stripe style="width: 100%;">
                    <el-table-column prop="1" label="病害登记编号"></el-table-column>
                    <el-table-column prop="2" label="上报单位-管理所简称"></el-table-column>
                    <el-table-column prop="3" label="病害名称"></el-table-column>
                    <el-table-column prop="4" label="病害路段类型"></el-table-column>
                    <el-table-column prop="5" label="病害位置编号"></el-table-column>
                    <el-table-column prop="6" label="方向"></el-table-column>
                    <el-table-column prop="7" label="表现形式及成因"></el-table-column>
                    <el-table-column prop="8" label="上报日期"></el-table-column>
                    <el-table-column prop="9" label="操作">
                        <el-button>编辑项目</el-button>
                        <el-button>上传文件</el-button>
                        <el-button>删除</el-button>
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
      dialogFormVisible: false,

      ruleForm: {
        id: "",
        name: "",
        time: ""
      }
    };
  },

  mounted() {
    this.axios.get("/api/xxx").then(response => {
      this.rawList = response.data;
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
    }
  }
};
</script>

<style>
</style>