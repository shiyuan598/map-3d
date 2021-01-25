/**
 * 这里放置json 数据撑起组件内容
 */
export const diagramExampleData = {};

export const JSONFromService = {
  nodes: [
    {
      pos_x: 800,
      pos_y: 51.38636779785162,
      name: "Start",
      iconClassName: "el-icon-s-tools",
      form: { details: "开始", createTime: "Fri Dec 04 2020" },
      id: 100,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 800,
      pos_y: 109.38636779785166,
      name: "RawDataApt_NI",
      iconClassName: "el-icon-collection-tag",
      form: {
        details: "普通节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 101,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 800,
      pos_y: 165.3863677978517,
      name: "LoadData_NI",
      iconClassName: "el-icon-collection-tag",
      form: {
        details: "普通节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 102,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 800,
      pos_y: 219.38636779785173,
      name: "ImageSeg_NI",
      iconClassName: "el-icon-collection-tag",
      form: {
        details: "普通节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 103,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 190.65714285714307,
      pos_y: 392.79026271275126,
      name: "DelineatorVec",
      iconClassName: "el-icon-collection-tag",
      form: {
        details: "普通节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 104,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 381.0857142857146,
      pos_y: 391.2188341413227,
      name: "LaneBoundaryVec",
      iconClassName: "el-icon-collection-tag",
      form: {
        details: "普通节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 105,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 570.0000000000006,
      pos_y: 390.3863677978519,
      name: "BarrierVec",
      iconClassName: "el-icon-collection-tag",
      form: {
        details: "普通节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 106,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 800,
      pos_y: 392.38636779785185,
      name: "PoseSgementGen",
      iconClassName: "el-icon-collection-tag",
      form: {
        details: "普通节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 107,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 1037.371428571429,
      pos_y: 394.6474055698941,
      name: "CurbVec",
      iconClassName: "el-icon-collection-tag",
      form: {
        details: "普通节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 108,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 1227.8000000000006,
      pos_y: 393.79026271275126,
      name: "PavementEdgeVec",
      iconClassName: "el-icon-collection-tag",
      form: {
        details: "普通节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 109,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 1415.0000000000011,
      pos_y: 393.38636779785185,
      name: "ElectronicEyeVec",
      iconClassName: "el-icon-collection-tag",
      form: {
        details: "普通节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 110,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 709.9428571428575,
      pos_y: 490.2188341413227,
      name: "TrafficSignVec",
      iconClassName: "el-icon-collection-tag",
      form: {
        details: "普通节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 111,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 901.5142857142862,
      pos_y: 488.9331198556084,
      name: "PoleLikeVec",
      iconClassName: "el-icon-collection-tag",
      form: {
        details: "普通节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 112,
      in_ports: [0],
      out_ports: [0]
    },
    {
      pos_x: 800,
      pos_y: 835.3863677978522,
      name: "end",
      iconClassName: "el-icon-printer",
      form: {
        details: "动态节点的内容balabala",
        createTime: "Fri Dec 04 2020"
      },
      id: 113,
      in_ports: [0],
      out_ports: [0]
    }
  ],
  edges: [
    {
      src_node_id: 100,
      src_output_idx: 0,
      dst_node_id: 101,
      dst_input_idx: 0,
      id: 10,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 101,
      src_output_idx: 0,
      dst_node_id: 102,
      dst_input_idx: 0,
      id: 11,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 102,
      src_output_idx: 0,
      dst_node_id: 103,
      dst_input_idx: 0,
      id: 12,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 103,
      src_output_idx: 0,
      dst_node_id: 104,
      dst_input_idx: 0,
      id: 13,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 103,
      src_output_idx: 0,
      dst_node_id: 105,
      dst_input_idx: 0,
      id: 14,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 103,
      src_output_idx: 0,
      dst_node_id: 106,
      dst_input_idx: 0,
      id: 15,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 103,
      src_output_idx: 0,
      dst_node_id: 107,
      dst_input_idx: 0,
      id: 16,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 103,
      src_output_idx: 0,
      dst_node_id: 108,
      dst_input_idx: 0,
      id: 17,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 103,
      src_output_idx: 0,
      dst_node_id: 109,
      dst_input_idx: 0,
      id: 18,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 103,
      src_output_idx: 0,
      dst_node_id: 110,
      dst_input_idx: 0,
      id: 19,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 107,
      src_output_idx: 0,
      dst_node_id: 111,
      dst_input_idx: 0,
      id: 20,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 107,
      src_output_idx: 0,
      dst_node_id: 112,
      dst_input_idx: 0,
      id: 21,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 104,
      src_output_idx: 0,
      dst_node_id: 113,
      dst_input_idx: 0,
      id: 22,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 105,
      src_output_idx: 0,
      dst_node_id: 113,
      dst_input_idx: 0,
      id: 23,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 106,
      src_output_idx: 0,
      dst_node_id: 113,
      dst_input_idx: 0,
      id: 24,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 108,
      src_output_idx: 0,
      dst_node_id: 113,
      dst_input_idx: 0,
      id: 25,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 109,
      src_output_idx: 0,
      dst_node_id: 113,
      dst_input_idx: 0,
      id: 26,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 110,
      src_output_idx: 0,
      dst_node_id: 113,
      dst_input_idx: 0,
      id: 27,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 111,
      src_output_idx: 0,
      dst_node_id: 113,
      dst_input_idx: 0,
      id: 28,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    },
    {
      src_node_id: 112,
      src_output_idx: 0,
      dst_node_id: 113,
      dst_input_idx: 0,
      id: 29,
      style: {
        "stroke-width": "2px",
        stroke: "#3498db",
        animation: "none",
        "stroke-dasharray": "0px"
      }
    }
  ]
};
export const nodesBasic = [
  {
    name: "普通节点",
    iconClassName: "el-icon-collection-tag",
    form: { details: "普通节点的内容balabala", createTime: "" }
  },
  {
    name: "开始",
    iconClassName: "el-icon-s-tools",
    form: { details: "动态节点的内容balabala", createTime: "" }
  },
  {
    name: "结束节点",
    iconClassName: "el-icon-printer",
    form: { details: "动态节点的内容balabala", createTime: "" }
  },
  {
    name: "动态节点",
    iconClassName: "el-icon-loading",
    form: { details: "动态节点的内容balabala", createTime: "" }
  },
  {
    name: "自定义节点",
    form: { details: "自定义节点的内容balabala", createTime: "" },
    iconClassName: "el-icon-magic-stick",
    nodeStyle: {
      border: "2px solid orange",
      "border-radius": 0,
      height: "32px"
    },
    iconStyle: {
      background: "orange"
    }
  },
  {
    name: "拖入右侧",
    form: { details: "节点内容自由编辑", createTime: "" }
  }
];
