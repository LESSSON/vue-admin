<template>
    <div>
       <el-table :data="tableData" stripe style="width: 100%;" >
          <el-table-column prop="fileName" label="文件名"></el-table-column>
          <el-table-column prop="recentModifytime" label="修改时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope" >
              <el-button type='text' @click="verifyStaff(scope.row)">审核</el-button>
            </template>
          </el-table-column>
      </el-table>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "approval",
  data() {
    return {
      tableData: ""
    };
  },
  methods: {
    verifyStaff(row) {
      const id = row.id;
      const organizationType = this.roles[0];
      this.$store
        .dispatch("VerifyStaff", { id, organizationType })
        .then(response => {
          console.log(response);
          if (response.status == "success") {
            const diseases = response.data;
            this.tableData = diseases;
          }
        });
    },
    getUnverifiedStaffs() {
      console.log("data");
      console.log(this.data);
      const dptName = "子系统管理员";
      this.$store
        .dispatch("GetUnverifiedStaffs", { dptName })
        .then(response => {
          console.log(response);
          if (response.status == "success") {
            const diseases = response.data;
            this.tableData = diseases;
          }
        });
    }
  },

  created() {
    this.getUnverifiedStaffs();
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