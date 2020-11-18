<template>
    <div id="map"></div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      tableVisible: false,
      popup: null
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
        zoom: 1,
        pitch: 0,
        maxZoom: 21,
        minZoom: 2.0,
        sphereRender: true /*三维球体模式*/
      });
      this.map.on("click", e => {
        console.info(e);
      });

      // this.rotateMap();
      // 添加图层
      this.map.on("load", () => {
        this.map.addSource("CONSTS.SOURCE.LIGHT_RASTER", {
          type: "raster",
          tiles: [
            "//wprd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7",
            "//wprd02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7",
            "//wprd03.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7",
            "//wprd04.is.autonavi.com/appmaptile?x={x}&.toStringy={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7"
          ],
          tileSize: 256,
          tileUsage: "all" // 瓦片用途
        });

        this.map.addLayer({
          id: "CONSTS.LAYER.LIGHT_RASTER",
          type: "sphere-raster",
          source: "CONSTS.SOURCE.LIGHT_RASTER",
          minzoom: 1,
          maxzoom: 22,
          "depth-test": false,
          paint: {
            "sphere-raster-opacity": 1 // 栅格图层的不透明度，默认值为1，值类型为number
          }
        });
      });
      this.map.on("zoom", () => {
        console.info(this.map.getZoom());
        if (this.map.getZoom() > 10) {
          this.addPopup("好了好了，不要再放大地图！");
        }
        if (this.map.getZoom() > 15) {
          this.popup.remove();
          this.popup = null;
        }
      });
      // 添加地图控件
      // this.map.addControl(new minemap.Scale());
      // this.map.addControl(new minemap.Fullscreen());
      this.map.addControl(new minemap.Navigation(), "top-left");
      this.addPopup("请放大地图！");
    },
    addPopup(info) {
      if (this.popup) {
        this.popup.setHTML(`<span>${info}</span>`);
      } else {
        this.popup = new minemap.Popup({
          closeOnClick: false,
          closeButton: false
        });
        this.popup.trackPointer();
        this.popup.addTo(this.map);
        this.popup.setHTML(`<span>${info}</span>`);
      }
    },
    rotateMap() {
      if (this.map) {
        if (this.rotateAnimation) {
          cancelAnimationFrame(this.rotateAnimation);
          this.rotateAnimation = null;
        }
        const cen = this.map.getCenter().toArray();
        this.map.setCenter([cen[0] - 0.1, cen[1]]);
        this.rotateAnimation = requestAnimationFrame(this.rotateMap.bind(this));
      }
    },
    toggleVisible() {
      this.tableVisible = !this.tableVisible;
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
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: #333;
}
.container {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 50px;
    height: 300px;
    width: 600px;
    z-index: 1;
}
</style>
