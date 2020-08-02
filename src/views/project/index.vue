<template>
    <div>
        <h1>welcome</h1>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "index",
  data() {
    return {};
  },

  created() {
    console.log("16");
    console.log(this.roles[0]);
    if (this.roles[0] === "company") {
      this.$router.push("/disease");
    } else {
      this.$router.push("/index");
    }
  },

  computed: {
    ...mapGetters({
      name: "name",
      roles: "roles"
    })
  }
};
</script>