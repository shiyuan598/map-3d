// http://minedata.cn/api/demo/javascript-3d-api/zh/edit/base/edit-custom
// http://minedata.cn/api/demo/javascript-3d-api/zh/layer/base/sphere-circle-layer
import * as turf from "@turf/turf";

let gMap = null; // 地图对象
let points = []; //绘制时鼠标点击的位置 格式[[lng,lat], [lng, lat], ...]
let curPos = null; // 鼠标位置
let lastMouseKey = 0; // 最后一次按下的鼠标按键，左键or右键

const MOUSE_KEY = {
  LEFT: 0,
  RIGHT: 1
};

// 绘制过程中的source和layer的Id
const DRAW_POINT = "DRAW_POINT";
const DRAW_LINE = "DRAW_LINE";
const DRAW_POLYGON = "DRAW_POLYGON";
const DRAW_POLYGON_OUTLINE = "DRAW_POLYGON_OUTLINE";

function addLayers() {
  gMap.addSource(DRAW_POINT, {
    type: "geojson",
    data: null
  });
  gMap.addSource(DRAW_LINE, {
    type: "geojson",
    data: null
  });
  gMap.addSource(DRAW_POLYGON, {
    type: "geojson",
    data: null
  });

  gMap.addLayer({
    id: DRAW_POINT,
    type: "circle",
    source: DRAW_POINT,
    layout: {
      visibility: "visible"
    },
    paint: {
      "circle-radius": 4,
      "circle-color": "#F05668",
      "circle-opacity": 0.8,
      "circle-stroke-width": 1,
      "circle-stroke-color": "#FFFFFF"
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
      "line-width": 2,
      "line-color": "#F05668",
      "line-dasharray": [0.2, 2]
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
      "fill-color": "#F05668",
      "fill-opacity": 0.1,
      "fill-outline-color": "#F05668"
    }
  });
  gMap.addLayer({
    id: DRAW_POLYGON_OUTLINE,
    type: "line", //图层类型为"fill"
    source: DRAW_POLYGON,
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-width": 2,
      "line-color": "#F05668",
      "line-dasharray": [0.2, 2]
    }
  });
}

function removeDrawLayers() {
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

// 标识：是否是一轮开始 点击右键
function onMouseClick(e) {
  if (lastMouseKey === MOUSE_KEY.RIGHT) {
    // 如果上次是右键，说明完成了一次绘制，重新开始
    // 1.清空点位数组
    points = [];
    // 2.隐藏成果图层
    gMap.getLayer(DRAW_POLYGON).visibility = "none";
    gMap.getLayer(DRAW_POLYGON_OUTLINE).visibility = "none";
    // 3.注册平移事件
    gMap.on("mousemove", onMouseMove); // 平移事件
    // 4.设置鼠标样式
  }
  let p = e.lngLat;
  curPos = [p.lng, p.lat];
  points.push([p.lng, p.lat]);
  // 1.点击后显示第一个点和最后一个点
  let multiPoint = generateMultiPoint([points[0], curPos]);
  gMap.getSource(DRAW_POINT).setData(multiPoint);
  gMap.getLayer(DRAW_POINT).visibility = "visible";
  lastMouseKey = MOUSE_KEY.LEFT;
  getMaxAge("儿童");
}

function onMouseRightClick() {
  stop();
  lastMouseKey = MOUSE_KEY.RIGHT;
}

function onMouseMove(e) {
  let p = e.lngLat;
  curPos = [p.lng, p.lat];
  if (points.length < 1) {
    return;
  }
  // 仅选择了一个点，显示第一个点与当前鼠标位置的连线
  if (points.length < 2) {
    let lineString = generateLineString([points[0], curPos]);
    gMap.getSource(DRAW_LINE).setData(lineString);
    gMap.getLayer(DRAW_LINE).visibility = "visible";
  } else if (points.length >= 2) {
    gMap.getLayer(DRAW_LINE).visibility = "none";
    let polygon = generatePolygon([[...points, curPos, points[0]]]);
    gMap.getSource(DRAW_POLYGON).setData(polygon);
    gMap.getLayer(DRAW_POLYGON).visibility = "visible";
    gMap.getLayer(DRAW_POLYGON_OUTLINE).visibility = "visible";
  }
}

function getMaxAge(key) {
  let maxAge = 100;
  switch (key) {
    case "婴儿":
      maxAge = 3;
      break;
    case "儿童":
      maxAge = 12;
      break;
    case "少年":
      maxAge = 18;
      break;
    case "青年 ":
      maxAge = 35;
      break;
    case "中年":
      maxAge = 55;
      break;
    default:
      maxAge = 100;
      break;
  }
  return maxAge;
}

function stop() {
  // 1.取消事件监听
  // gMap.off("click", onMouseClick); // 左键
  // gMap.off("contextmenu", onMouseRightClick); // 右键
  gMap.off("mousemove", onMouseMove);
  // 2.鼠标指针恢复默认
  // gMap.getCanvas().style.cursor = "default";
  // 3.清空绘制过程中的图层数据
  gMap.getLayer(DRAW_POINT).visibility = "none";
  gMap.getLayer(DRAW_LINE).visibility = "none";
  // 4.显示绘制结果
  // gMap.setPaintProperty(DRAW_POLYGON_OUTLINE, "line-dasharray", [2]);

  gMap.triggerRepaint();
}

function clear() {
  removeDrawLayers();
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
    // 3.鼠标指针
    console.info(map.getCanvas().style);
    map.getCanvas().style.cursor = "crosshair";
    // map.on('dblclick', onMouseDblClick); // 双击
    // map.on('mouseout', onMouseOut);
    // map.on('mousedown', onMouseDown);
    // map.on('mouseup', onMouseUp);
  },
  exit() {
    stop();
    clear();
  }
};

export default edit;
