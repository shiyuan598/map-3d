<template>
  <div class="container">
    <h3>Demo List</h3>
    <ul>
      <li :key="index" v-for="(item, index) in routes">
        <el-button type="text" @click="routeClick(item)">{{
          item.name
        }}</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Index",
  data() {
    return {
      address: "xwlo",
      blue: "blue",
      routes: router.options.routes
    };
  },
  methods: {
    routeClick(item) {
      this.$router.push(item.path);
    }
  }
};
</script>
<style scoped>
.container {
  margin: 20px;
  color: #333;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  float: left;
  padding: 10px;
}
</style>
