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
      ]
    };
  },
  methods: {
    add(index) {
      if (index !== 'last') {
        let level = this.fieldArr[index].level;
        this.fieldArr.splice(index + 1, 0, {
          name: "new",
          type: "new",
          level: level + 1
        });
      } else if(index === 'last') {
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
      console.info(tree);
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
