<template>
  <div>
    <el-input v-model="value" />
    <el-button
      type="primary"
      @click="GetPositionsByLevelType(value)"
    >
      提交
    </el-button>
  </div>
</template>


<script>
import { getPositionsByLevelType } from "@/api/register";

export default {
  name: "Register",
  data() {
    return {
      value: 0
    };
  },
  methods: {
    GetPositionsByLevelType(value) {
      const info = { levelType: value };
      getPositionsByLevelType(info).then(response => {
        this.value = response.data;
        console.log(response.data);
      });
    }
  }
};
</script>

<style>
</style>