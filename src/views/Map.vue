<template>
  <div class="container">
    <div id="map"></div>
    <div class="tools">
      <el-input id="date" v-model="date" placeholder="请输入内容"></el-input>
      <el-button @click="start" :disabled="btnDisable">开始绘制</el-button>
      <el-button @click="exit" :disabled="btnDisable">退出绘制</el-button>
    </div>
  </div>
</template>

<script>
import edit from "../tools/minemap3d-edit";

export default {
  data() {
    return {
      date: null,
      map: null,
      btnDisable: true
    };
  },
  mounted() {
    this.initMap();
    this.$nextTick(() => {
      const layui = window.layui;
      layui.use("laydate", () => {
        const laydate = layui.laydate;
        laydate.render({
          elem: "#date",
          theme: "map",
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
  methods: {
    initMap() {
      minemap.domainUrl = "//minedata.cn";
      minemap.dataDomainUrl = "//datahive.minedata.cn";
      minemap.spriteUrl = "//minedata.cn/minemapapi/v3.1.0/sprite/sprite";
      minemap.serviceUrl = "//mineservice.minedata.cn/service/";
      minemap.appKey = "16be596e00c44c86bb1569cb53424dc9";
      minemap.solution = 12877;

      this.map = new minemap.Map({
        container: "map",
        style: "//mineservice.minedata.cn/service/solu/style/id/12877",
        center: [116.46, 39.92],
        zoom: 8,
        pitch: 0,
        // sphereRender: true,
        maxZoom: 21,
        minZoom: 1.0
      });

      this.map.on("load", () => {
        this.btnDisable = false;
      });
    },
    start() {
      edit.init(this.map);
    },
    exit() {
      edit.exit();
    }
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
