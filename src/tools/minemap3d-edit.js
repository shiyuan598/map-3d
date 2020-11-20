// http://minedata.cn/api/demo/javascript-3d-api/zh/edit/base/edit-custom
// http://minedata.cn/api/demo/javascript-3d-api/zh/layer/base/sphere-circle-layer
import * as turf from '@turf/turf'

let gmap = null; // 地图对象
let points = null; //绘制时鼠标点击的位置 TODO: 格式

// 绘制过程中的source和layer名称
const DRAW_POINT = 'DRAW_POINT';
const DRAW_LINE = 'DRAW_LINE';
const DRAW_POLYGON = 'DRAW_POLYGON';

function generateMultiPoint(points) { // 显示第一个点与最后一个选择的点
    let multiPt = turf.multiPoint(points);
    return multiPt;
}

function generatePolygon(points) { // 仅选择了一个点，显示第一个点与当前鼠标位置的连线
    let polygon = turf.polygon(points);
    return polygon;
}

function generatePolygon(points) { // 已选两个以上点，显示已选点与当前鼠标位置构成的多边形
    let polygon = turf.polygon(points);
    return polygon;
}

function onMouseClick(e) {
    let p = e.lngLat;
}

function onMouseRightClick(e) {
    let p = e.lngLat;
}


function onMouseMove(e) {
    let p = e.lngLat;
}


let edit = {
    init(map) {
        gmap = map;
        map.on('click', onMouseClick); // 左键
        // map.on('dblclick', onMouseDblClick); // 双击
        // map.on('contextmenu', onMouseRightClick); // 右键
        // map.on('mouseout', onMouseOut);
        // map.on('mousedown', onMouseDown);
        // map.on('mouseup', onMouseUp);
        // map.on('mousemove', onMouseMove);
        // map.off('mouseout', onMouseOut);
        // map.off('mousedown', onMouseDown);
        // map.off('mouseup', onMouseUp);
        // map.off('mousemove', onMouseMove);
    },
    start() {

    },
    stop() {

    },
    clear() {

    }
}

export default edit;