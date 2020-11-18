<template>
  <div class="about">
    <h6>This is an about page</h6>
    <button @click="see">see see</button>
    <el-date-picker
      type="daterange"
      align="right"
      unlink-panels
      v-model="date"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></el-date-picker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: ""
    };
  },
  methods: {
    see() {
      let url = "http://localhost:8081/#/Home?t=1601132421685";
      window.open(url);
    }
  }
};
</script>
<style lang="scss">
$fontColor: #fff;
$backgroundColor: #555;
$SelectBackgroundColor: rgba(250, 250, 250, 0.1);
.el-date-editor {
  background-color: $backgroundColor;
  color: $fontColor;

  .el-range__close-icon,
  .el-icon-date,
  .el-range-separator {
    color: $fontColor;
  }
  .el-range-input {
    color: $fontColor;
    background-color: $backgroundColor;
  }
}

.el-popper[x-placement^="bottom"] .popper__arrow::after {
  border-bottom-color: $backgroundColor;
}

.el-picker-panel {
  width: 512px;
  color: $fontColor;
  background-color: $backgroundColor;
  .el-picker-panel__icon-btn {
    color: $fontColor;
  }
  .el-date-range-picker__header {
    height: 24px;
  }
  .el-date-table {
    th {
      color: $fontColor;
      padding: 2px;
    }
    td {
      span {
        height: 20px;
        width: 20px;
        line-height: 20px;
      }
      div {
        height: 26px;
      }
    }
  }
  .el-date-table td.in-range div {
    background-color: $SelectBackgroundColor;
  }
}
</style>
<style lang="scss" scoped>
.about {
  padding: 20px;
}
h6 {
  margin: 20px;
}
</style>
