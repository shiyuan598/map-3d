<template>
  <div class="container">
    <div id="map"></div>
    <div class="tools">
      <el-button>开始绘制</el-button>
      <el-button>重新绘制</el-button>
    </div>
  </div>
</template>

<script>
import edit from "../tools/minemap3d-edit";

export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.initMap();
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
        minZoom: 2.0
      });

      // 添加图层
      this.map.on("load", () => {
        edit.init(this.map);
      });
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
