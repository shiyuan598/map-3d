<template>
  <div class="container">
    <!-- <input type="text" class="layui-input" id="date" /> -->
    <el-input id="date" v-model="date" placeholder="请输入内容"></el-input>
    <span>UIjm：{{ date }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      const layui = window.layui;
      layui.use("laydate", () => {
        const laydate = layui.laydate;
        laydate.render({
          elem: "#date",
          theme: "util",
          range: "~",
          done: (value, date, endDate) => {
            const start = new Date(value.split("~")[0]);
            const end = new Date(value.split("~")[1]);
            console.info(start.toLocaleDateString(), end.toLocaleDateString());
            this.date = start.toLocaleDateString() + end.toLocaleDateString();
            console.info(this.date);
            console.log(value); //得到日期生成的值，如：2017-08-18
            console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
            console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
          }
        });
      });
    });
  },
  methods: {},
  beforeDestroy() {
    const dom = document.querySelector(".laydate-theme-util");
    dom.style.visibility = "hidden";
  }
};
</script>

<style scoped>
#container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#map {
  width: 100vw;
  height: 100vh;
}
.tools {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
}
.el-button + .el-button {
  margin-left: 0px;
  margin-top: 10px;
}
</style>
