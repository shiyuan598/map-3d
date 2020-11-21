<template>
  <div id="map"></div>
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
#map {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
