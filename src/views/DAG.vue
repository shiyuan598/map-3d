<template>
  <div
    id="container"
    @mousedown="startNodesBus($event)"
    @mousemove="moveNodesBus($event)"
    @mouseup="endNodesBus($event)"
  >
    <!-- 左侧导航 -->
    <div class="page-left">
      <div class="logo">DAG-Board</div>
      <div
        class="basic-node"
        v-for="(item, i) in initNodesBasic"
        :key="'nodes_basic' + i"
        @mousedown="dragIt(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <!-- DAG-Diagram主体 -->
    <DAGBoard
      ref="DAGBoard"
      :DataAll="yourJSONDataFillThere"
      @updateDAG="updateDAG"
      @editNodeDetails="editNodeDetails"
      @doSthPersonal="doSthPersonal"
    ></DAGBoard>
    <!-- 用来模拟拖拽添加的元素 -->
    <node-bus
      v-if="dragBus"
      :value="busValue.value"
      :pos_x="busValue.pos_x"
      :pos_y="busValue.pos_y"
    />
  </div>
</template>

<script>
import {
  //   diagramExampleData,
  JSONFromService,
  nodesBasic
} from "../components/dag/data.js";

export default {
  name: "dag",
  data() {
    return {
      yourJSONDataFillThere: {
        // 用来展示的节点与连线
        nodes: [],
        sides: []
      },
      initNodesBasic: nodesBasic,
      dragBus: false, // 是否在拖拽,
      busValue: {
        value: "name",
        pos_x: 100,
        pos_y: 100
      }
    };
  },
  created() {
    this.yourJSONDataFillThere = JSONFromService;
  },
  methods: {
    updateDAG(data, action, id) {
      console.log(...arguments);
      console.log(JSON.stringify(arguments[0]));
      switch (action) {
        case "selectNode":
          console.info("选中节点");
          break;
        case "addEdge":
          console.info(id);
          break;
        default:
          () => {};
      }
    },
    editNodeDetails() {
      console.log(...arguments);
    },
    doSthPersonal() {
      console.log(...arguments);
    },
    /**
     * 通过拖拽方式加入新节点必须的函数
     */
    startNodesBus(e) {
      /**
       *  别的组件调用时, 先放入缓存
       * dragDes: {
       *    drag: true,
       *    name: 组件名称
       *    type: 组件类型
       *    model_id: 跟后台交互使用
       * }
       **/
      let dragDes = null;
      if (sessionStorage["dragDes"]) {
        dragDes = JSON.parse(sessionStorage["dragDes"]);
      }
      if (dragDes && dragDes.drag) {
        const x = e.pageX;
        const y = e.pageY;
        this.busValue = Object.assign({}, this.busValue, {
          pos_x: x,
          pos_y: y,
          value: dragDes.name
        });
        this.dragBus = true;
      }
    },
    moveNodesBus(e) {
      // 移动模拟节点
      if (this.dragBus) {
        const x = e.pageX;
        const y = e.pageY;
        this.busValue = Object.assign({}, this.busValue, {
          pos_x: x,
          pos_y: y
        });
      }
    },
    endNodesBus(e) {
      // 节点放入svg
      let dragDes = null;
      if (sessionStorage["dragDes"]) {
        dragDes = JSON.parse(sessionStorage["dragDes"]);
      }
      if (dragDes && dragDes.drag && e.toElement.id === "svgContent") {
        const pos_x =
          (e.offsetX - 90 - (sessionStorage["svg_left"] || 0)) /
          (sessionStorage["svgScale"] || 1); // 参数修正
        const pos_y =
          (e.offsetY - 15 - (sessionStorage["svg_top"] || 0)) /
          (sessionStorage["svgScale"] || 1); // 参数修正
        delete dragDes.drag;
        const params = {
          model_id: sessionStorage["newGraph"],
          desp: {
            pos_x,
            pos_y,
            name: this.busValue.value,
            ...dragDes
          }
        };
        this.yourJSONDataFillThere.nodes.push({
          ...params.desp,
          id: this.yourJSONDataFillThere.nodes.length + 100, // 这里注意, 新增的id一定不能重复, 建议id交由后端处理
          in_ports: [0],
          out_ports: [0]
        });
      }
      window.sessionStorage["dragDes"] = null;
      this.dragBus = false;
    },
    dragIt(val) {
      val.form.createTime = new Date().toDateString();
      sessionStorage["dragDes"] = JSON.stringify({
        drag: true,
        ...val
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .basic-node {
    text-align: center;
    margin-top: 5px;
    background: #fff;
    color: black;
    border-radius: 15px;
    height: 30px;
    width: 140px;
    border: 1px solid #289de9;
    line-height: 30px;
    display: inline-block;
    cursor: pointer;
    user-select: none;
  }
}
/** 给svg添加格子背景 */
#svgContent {
  height: 80%;
  width: 80%;
  background-size: 50px 50px;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(255, 255, 255, 0.05) 25%,
      rgba(255, 255, 255, 0.05) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.05) 75%,
      rgba(255, 255, 255, 0.05) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(255, 255, 255, 0.05) 25%,
      rgba(255, 255, 255, 0.05) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.05) 75%,
      rgba(255, 255, 255, 0.05) 76%,
      transparent 77%,
      transparent
    );
  background-color: rgb(60, 60, 60) !important;
  margin-left: 200px;
  margin-top: 40px;
  margin-right: 200px;
}
</style>
