<template>
    <div>
        <el-button class="add-btn" type="primary" icon="el-icon-plus" circle @click="add('last')"></el-button>
        <div class="field" :class="'indent' + item.level" :key="index" v-for="(item, index) in fieldArr">
            <div class="input">
                <el-input v-model="item.name" size="small" placeholder="请输入名称"></el-input>
                -
                <el-input v-model="item.type" size="small" placeholder="请输入类型"></el-input>
            </div>
            <div class="btn">
                <el-button type="primary" icon="el-icon-plus" circle :disabled="item.level >= 2" @click="add(index)"></el-button>
                <el-button type="danger" icon="el-icon-minus" circle @click="remove(index)"></el-button>
            </div>
        </div>
        <el-button class="success-btn" type="success" @click="sure">成功</el-button>
    </div>
</template>

<script>
export default {
  name: "tree",
  data() {
    return {
      fieldArr: [
        {
          name: "name01",
          type: "type01",
          level: 0
        },
        {
          name: "name11",
          type: "type01",
          level: 1
        },
        {
          name: "name111",
          type: "type01",
          level: 2
        },
        {
          name: "name112",
          type: "type01",
          level: 2
        },
        {
          name: "name12",
          type: "type01",
          level: 1
        },
        {
          name: "name121",
          type: "type01",
          level: 2
        },
        {
          name: "name02",
          type: "type01",
          level: 0
        },
        {
          name: "name03",
          type: "type02",
          level: 0
        }
      ],
      attributeArr: [
        {
          name: "number_of_shards",
          value: 1
        },
        {
          name: "number_of_routing_shards",
          value: 5
        },
        {
          name: "shard.check_on_startup",
          value: false
        },
        {
          name: "codec",
          value: "default"
        },
        {
          name: "routing_partition_size",
          value: 1
        },
        {
          name: "soft_deletes.enabled",
          value: true
        },
        {
          name: "soft_deletes.retention_lease.period",
          value: "12h"
        },
        {
          name: "load_fixed_bitset_filters_eagerly",
          value: true
        },
        {
          name: "hidden",
          value: false
        },
        {
          name: "auto_expand_replicas",
          value: false
        },
        {
          name: "search.idle.after",
          value: "30s"
        },
        {
          name: "max_inner_result_window",
          value: 100
        },
        {
          name: "max_rescore_window",
          value: 10000
        },
        {
          name: "max_docvalue_fields_search",
          value: 100
        },
        {
          name: "max_script_fields",
          value: 32
        },
        {
          name: "max_ngram_diff",
          value: 1
        },
        {
          name: "max_shingle_diff",
          value: 3
        },
        {
          name: "max_refresh_listeners",
          value: 1000
        },
        {
          name: "analyze.max_token_count",
          value: 10000
        },
        {
          name: "highlight.max_analyzed_offset",
          value: 1000000
        },
        {
          name: "max_terms_count",
          value: 65536
        },
        {
          name: "max_regex_length",
          value: 1000
        },
        {
          name: "routing.allocation.enable",
          value: "all"
        },
        {
          name: "routing.rebalance.enable",
          value: "all"
        },
        {
          name: "gc_deletes",
          value: "60s"
        },
        {
          name: "number_of_replicas",
          value: 1
        },
        {
          name: "refresh_interval",
          value: 1
        },
        {
          name: "max_result_window",
          value: 10000
        }
      ],
      filedTypeList: [
        {
          value: "binary",
          label: "binary"
        },
        {
          value: "boolean",
          label: "boolean"
        },
        {
          value: "keyword",
          label: "keyword"
        },
        {
          value: "long",
          label: "long"
        },
        {
          value: " double",
          label: " double"
        },
        {
          value: "date",
          label: "date"
        },
        {
          value: "object",
          label: "object"
        },
        {
          value: "text",
          label: "text"
        },
        {
          value: "geo_point",
          label: "geo_point"
        },
        {
          value: "geo_shape",
          label: "geo_shape"
        },
        {
          value: "",
          label: ""
        },
        {
          value: "binary",
          label: "binary"
        },
        {
          value: "boolean",
          label: "boolean"
        },
        {
          value: "keyword",
          label: "keyword"
        },
        {
          value: "constant_keyword ",
          label: "constant_keyword "
        },
        {
          value: "wildcard",
          label: "wildcard"
        },
        {
          value: "long",
          label: "long"
        },
        {
          value: "integer",
          label: "integer"
        },
        {
          value: "short",
          label: "short"
        },
        {
          value: "byte",
          label: "byte"
        },
        {
          value: "double",
          label: "double"
        },
        {
          value: "float",
          label: "float"
        },
        {
          value: "half_float",
          label: "half_float"
        },
        {
          value: "scaled_float",
          label: "scaled_float"
        },
        {
          value: "date",
          label: "date"
        },
        {
          value: "date_nanos",
          label: "date_nanos"
        },
        {
          value: "alias",
          label: "alias"
        },
        {
          value: "",
          label: ""
        },
        {
          value: "object",
          label: "object"
        },
        {
          value: "flattened",
          label: "flattened"
        },
        {
          value: "nested",
          label: "nested"
        },
        {
          value: "",
          label: ""
        },
        {
          value: "integer_range",
          label: "integer_range"
        },
        {
          value: "float_range",
          label: "float_range"
        },
        {
          value: "long_range",
          label: "long_range"
        },
        {
          value: "double_range",
          label: "double_range"
        },
        {
          value: "date_range",
          label: "date_range"
        },
        {
          value: "ip_range",
          label: "ip_range"
        },
        {
          value: "ip",
          label: "ip"
        },
        {
          value: "murmur3",
          label: "murmur3"
        },
        {
          value: "histogram",
          label: "histogram"
        },
        {
          value: "text",
          label: "text"
        },
        {
          value: "annotated-text",
          label: "annotated-text"
        },
        {
          value: "completion",
          label: "completion"
        },
        {
          value: "search_as_you_type",
          label: "search_as_you_type"
        },
        {
          value: "token_count",
          label: "token_count"
        },
        {
          value: "dense_vector",
          label: "dense_vector"
        },
        {
          value: "rank_feature",
          label: "rank_feature"
        },
        {
          value: "rank_features",
          label: "rank_features"
        },
        {
          value: "geo_point",
          label: "geo_point"
        },
        {
          value: "geo_shape",
          label: "geo_shape"
        },
        {
          value: "point",
          label: "point"
        },
        {
          value: "shape",
          label: "shape"
        }
      ]
    };
  },
  methods: {
    add(index) {
      if (index !== "last") {
        let level = this.fieldArr[index].level;
        this.fieldArr.splice(index + 1, 0, {
          name: "new",
          type: "new",
          level: level + 1
        });
      } else if (index === "last") {
        this.fieldArr.push({
          name: "new",
          type: "new",
          level: 0
        });
      }
    },
    remove(index) {
      let level = this.fieldArr[index].level;
      let count = 1;
      let i = index + 1;
      while (this.fieldArr[i]) {
        if (this.fieldArr[i].level > level) {
          count++;
          i++;
        } else {
          break;
        }
      }
      this.fieldArr.splice(index, count);
    },
    sure() {
      console.info(JSON.stringify(this.fieldArr));
      // 把数组转为树
      console.info(this.arr2Tree(this.fieldArr));
      // 展开树为一层
      console.info(this.tree2Arr(this.arr2Tree(this.fieldArr)));
    },
    arr2Obj(arr) {
      console.info(arr);
      let obj = {
        properties: {}
      };
      // 遍历数组arr，查看每一个元素item
      // 1.如果lavel = 0, 直接挂载到obj.properties上
      // 添加 fieldName属性，该属性为对象，值为{ type: fieldType } => obj.properties.fieldName = { type: fieldType }
      //   此时obj为如下格式：
      //   {
      //       properties: {
      //           name1: {
      //               type: type1
      //           }
      //       }
      //   }

      // 2.如果level = 1，从arr的当前位置向前查找到一个level = 0的元素gitem，（可以把arr截取到当前位置，再根据level = 0 过滤，最后一个元素）
      // gitem的name就是要挂接到对象的名称
      //   if(obj.properties[gitem.name].properties){
      //     obj.properties[gitem.name].properties = {
      //       fieldName: {
      //         type: fieldType
      //       }
      //     }
      //   } else {
      //     obj.properties[gitem.name].properties.fieldName = { type: fieldType }
      //   }

      // 3.如果level = 2，从arr的当前位置向前查找到一个level = 1的元素fitem，（可以把arr截取到当前位置，再根据level = 1 过滤，最后一个元素）
      // fitem的name就是要挂接到对象的名称
      //   if(obj.properties[gitem.name].properties[fitem.name].properties){
      //     obj.properties[gitem.name].properties[fitem.name].properties = {
      //       fieldName: {
      //         type: fieldType
      //       }
      //     }
      //   } else {
      //     obj.properties[gitem.name].properties[fitem.name].properties.fieldName = { type: fieldType }
      //   }

      return obj;
    },
    obj2Arr(obj) {
      // const indexFormat = {
      //     "mappings": {
      //         "type": "object",
      //         "properties": {
      //             "region": {
      //                 "type": "keyword"
      //             },
      //             "manager": {
      //                 "type": "object",
      //                 "properties": {
      //                     "age": {
      //                         "type": "integer"
      //                     },
      //                     "name": {
      //                         "type": "object",
      //                         "properties": {
      //                             "first": {
      //                                 "type": "text"
      //                             },
      //                             "last": {
      //                                 "type": "text"
      //                             }
      //                         }
      //                     }
      //                 }
      //             }
      //         }
      //     }
      // }
      console.info(obj);
    },
    arr2Tree(arr) {
      let tree = [];
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        let obj = {
          name: item.name,
          type: item.type,
          children: []
        };
        if (item.level === 0) {
          tree.push(obj);
        } else if (item.level === 1) {
          // 找到最后一个level: 0的元素的索引
          tree[tree.length - 1].children.push(obj);
        } else if (item.level === 2) {
          // 找到最后一个level: 1的元素的索引
          tree[tree.length - 1].children[
            tree[tree.length - 1].children.length - 1
          ].children.push(obj);
        }
      }
      return tree;
    },
    tree2Arr(tree) {
      let arr = [];
      for (let i = 0; i < tree.length; i++) {
        // 第一层
        const item = tree[i];
        let level = 0;
        let obj = {
          name: item.name,
          type: item.type,
          level: level
        };
        arr.push(obj);
        if (item.children) {
          // 第二层
          for (let j = 0; j < item.children.length; j++) {
            const item1 = item.children[j];
            level = 1;
            obj = {
              name: item1.name,
              type: item1.type,
              level: level
            };
            arr.push(obj);
            if (item1.children) {
              // 第三层
              for (let k = 0; k < item1.children.length; k++) {
                const item2 = item1.children[k];
                level = 2;
                obj = {
                  name: item2.name,
                  type: item2.type,
                  level: level
                };
                arr.push(obj);
              }
            }
          }
        }
      }
      return arr;
    },
    other() {}
  }
};
</script>

<style scoped>
.add-btn {
    margin-right: 20px;
    margin-left: 400px;
}
.field {
    margin: 20px;
    height: 30px;
    line-height: 30px;
    padding: 3px;
    display: flex;
    justify-content: space-between;
}
.input {
    display: flex;
}
.btn {
    margin-left: 10px;
}
.el-button.is-circle {
    padding: 2px;
}
.indent1 {
    margin-left: 3rem;
}
.indent2 {
    margin-left: 6rem;
}
.success-btn {
    margin-left: 260px;
}
</style>
