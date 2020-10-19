<template>
  <div>
    <div
      class="field"
      :class="'indent' + item.level"
      :key="index"
      v-for="(item, index) in fieldArr"
    >
      <div class="input">
        <el-input
          v-model="item.name"
          size="small"
          placeholder="请输入名称"
        ></el-input>
        -
        <el-input
          v-model="item.type"
          size="small"
          placeholder="请输入类型"
        ></el-input>
      </div>
      <div class="btn">
        <el-button
          type="primary"
          icon="el-icon-plus"
          circle
          :disabled="item.level >= 2"
          @click="add(index)"
        ></el-button>
        <el-button
          type="danger"
          icon="el-icon-minus"
          circle
          @click="remove(index)"
        ></el-button>
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
          name: "name111",
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
      fields: [
        {
          name: "name01",
          type: "type01",
          level: 0,
          children: [
            {
              name: "name11",
              type: "type01",
              level: 1,
              children: [
                {
                  name: "name111",
                  type: "type01",
                  level: 2,
                  children: []
                },
                {
                  name: "name112",
                  type: "type01",
                  level: 2,
                  children: []
                }
              ]
            },
            {
              name: "name12",
              type: "type01",
              level: 1,
              children: [
                {
                  name: "name111",
                  type: "type01",
                  level: 2,
                  children: []
                }
              ]
            }
          ]
        },
        {
          name: "name02",
          type: "type01",
          level: 0,
          children: []
        },
        {
          name: "name03",
          type: "type02",
          level: 0,
          children: []
        }
      ]
    };
  },
  methods: {
    add(index) {
      let level = this.fieldArr[index].level;
      this.fieldArr.splice(index + 1, 0, {
        name: "new",
        type: "new",
        level: level + 1
      });
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
    }
  }
};
</script>

<style scoped>
.field {
  margin: 20px;
  height: 30px;
  line-height: 30px;
  padding: 3px;
  display: flex;
}
.input {
  display: flex;
}
.btn {
  margin-left: 10px;
}
.el-button.is-circle {
  padding: 5px;
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
