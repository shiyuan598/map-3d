<template>
  <div class="container">
    <div class="region">
      <v-region type="city"></v-region>
    </div>
    <el-time-picker v-model="time" placeholder="选择时间"> </el-time-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      time: ""
    };
  },
  methods: {
    regionChange(data) {
      console.log(data);
    }
  }
};
</script>

<style>
.container {
  height: 150vh;
  margin-left: 60px;
}
.region {
  margin: 300px;
}
</style>
