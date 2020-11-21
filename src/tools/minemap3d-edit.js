// http://minedata.cn/api/demo/javascript-3d-api/zh/edit/base/edit-custom
// http://minedata.cn/api/demo/javascript-3d-api/zh/layer/base/sphere-circle-layer
import * as turf from "@turf/turf";

let gMap = null; // 地图对象
let points = []; //绘制时鼠标点击的位置 TODO: 格式
let curPos = null;

// 绘制过程中的source和layer的Id
const DRAW_POINT = "DRAW_POINT";
const DRAW_LINE = "DRAW_LINE";
const DRAW_POLYGON = "DRAW_POLYGON";

function addLayers() {
  gMap.addSource(DRAW_POINT, {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [116.46, 39.92]
          }
        }
      ]
    }
  });
  gMap.addSource(DRAW_LINE, {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: []
    }
  });
  gMap.addSource(DRAW_POLYGON, {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: []
    }
  });

  gMap.addLayer({
    id: DRAW_POINT,
    type: "circle",
    source: DRAW_POINT,
    layout: {
      visibility: "visible"
    },
    paint: {
      "circle-radius": 12,
      "circle-color": "#0093ff",
      "circle-opacity": 0.8
    }
  });
  gMap.addLayer({
    id: DRAW_LINE,
    type: "line", //图层类型为"line"
    source: DRAW_LINE,
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-width": 12,
      "line-color": "#ff4400"
    }
  });
  gMap.addLayer({
    id: DRAW_POLYGON,
    type: "fill", //图层类型为"fill"
    source: DRAW_POLYGON,
    layout: {
      visibility: "visible"
    },
    paint: {
      "fill-color": "#00ff00",
      "fill-opacity": 0.8,
      "fill-outline-color": "#ff0000"
    }
  });
}

function removeLayers() {
  if (gMap.getLayer(DRAW_POINT)) {
    gMap.removeLayer(DRAW_POINT);
  }
  if (gMap.getLayer(DRAW_LINE)) {
    gMap.removeLayer(DRAW_LINE);
  }
  if (gMap.getLayer(DRAW_POLYGON)) {
    gMap.removeLayer(DRAW_POLYGON);
  }
  if (gMap.getSource(DRAW_POINT)) {
    gMap.removeSource(DRAW_POINT);
  }
  if (gMap.getSource(DRAW_LINE)) {
    gMap.removeSource(DRAW_LINE);
  }
  if (gMap.getSource(DRAW_POLYGON)) {
    gMap.removeSource(DRAW_POLYGON);
  }
}

function generateMultiPoint(points) {
  // 显示第一个点与最后一个选择的点
  let multiPt = turf.multiPoint(points);
  return multiPt;
}

function generateLineString(points) {
  // 仅选择了一个点，显示第一个点与当前鼠标位置的连线
  let polygon = turf.lineString(points);
  return polygon;
}

function generatePolygon(points) {
  // 已选两个以上点，显示已选点与当前鼠标位置构成的多边形
  let polygon = turf.polygon(points);
  return polygon;
}

function onMouseClick(e) {
  let p = e.lngLat;
  console.info(p);
  curPos = [p.lng, p.lat];
  points.push([p.lng, p.lat]);
  // 1.点击后显示第一个点和最后一个点
  generateMultiPoint([points[0], curPos]);
  const data = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: points[0]
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: curPos
        }
      }
    ]
  };
  console.info(data);
  gMap.getSource(DRAW_POINT).setData(data);
}

function onMouseRightClick(e) {
  let p = e.lngLat;
  console.info(p);
}

function onMouseMove(e) {
  let p = e.lngLat;
  curPos = [p.lng, p.lat];
  if (points.length < 1) {
    return;
  }
  // 仅选择了一个点，显示第一个点与当前鼠标位置的连线
  if (points.length < 2) {
    generateLineString([points[0], curPos]);
  } else if (points.length > 2) {
    console.info(points);
    let geojson = generatePolygon([[...points, curPos, points[0]]]);
    console.info(geojson);
  }
}

let edit = {
  init(map) {
    gMap = map;
    // 1.创建点图层、线图层和面图层
    addLayers();
    // 2.事件监听
    map.on("click", onMouseClick); // 左键
    map.on("contextmenu", onMouseRightClick); // 右键
    map.on("mousemove", onMouseMove); // 平移
    // map.on('dblclick', onMouseDblClick); // 双击
    // map.on('mouseout', onMouseOut);
    // map.on('mousedown', onMouseDown);
    // map.on('mouseup', onMouseUp);
  },
  start() {},
  stop() {},
  clear() {
    // 1.清除点图层、线图层和面图层
    removeLayers();
    // 2.取消事件监听
    gMap.off("click", onMouseClick); // 左键
    gMap.off("contextmenu", onMouseRightClick); // 右键
    gMap.off("mousemove", onMouseMove);
  }
};

export default edit;
