<template>
  <div class="list-container">
    <div class="list-btn" @click="toggleVisible">
      <span>公共程序</span>
      <span
        :class="tableVisible ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "package-tool",
  data() {
    return {
      tableVisible: false
    };
  },
  methods: {
    toggleVisible() {
      this.tableVisible = !this.tableVisible;
    }
  }
};
</script>

<style scoped>
.list-btn {
  display: flex;
  flex-flow: column;
  justify-content: center;
  z-index: 1;
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  height: 120px;
  width: 26px;
  padding: 2px;
  text-align: center;
  border: solid 1px #dcdfe6;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: 600;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #333;
  cursor: pointer;
}
</style>
