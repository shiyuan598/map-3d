<template>
  <div class="container">
    <div class="table">
      <div class="left">
        <div
          @click="categoryChange(item, index)"
          :key="index"
          :class="currentCategory === index ? 'current' : ''"
          class="category"
          v-for="(item, index) in category"
        >
          {{ item }}
        </div>
      </div>
      <div class="right">
        <div class="title"><span></span>{{ data.title }}</div>
        <div
          class="subtitle"
          :key="index"
          v-for="(item, index) in data.body.content"
        >
          {{ item.subtitle }}
          <p>{{ item.desc }}</p>
          <el-table
            :border="true"
            :show-header="false"
            :data="item.table"
            v-if="item.table"
          >
            <el-table-column prop="value1" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="value2" label="日期" width="180">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "package-detail",
  data() {
    return {
      id: "",
      currentCategory: 0,
      category: ["程序简介", "使用场景", "使用方法", "名词解释"],
      data: {
        title: "程序简介",
        body: {
          content: [
            {
              subtitle: "1.1实车车道",
              desc: "东方森恩扥连，楼愣登玲赛道等;sl;ewdsd;l"
            },
            {
              subtitle: "1.2虚车车道",
              desc: "东方森恩扥连，楼愣登玲赛道等;sl;ewdsd;l",
              table: [
                {
                  value1: "1.1",
                  value2: "1.2"
                },
                {
                  value1: "2.1",
                  value2: "2.2"
                }
              ]
            },
            {
              subtitle: "1.3实车车道",
              desc: "东方森恩扥连，楼愣登玲赛道等;sl;ewdsd;l"
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    console.info("get id: " + this.id);
  },
  methods: {
    categoryChange(item, index) {
      this.currentCategory = index;
      console.info(item);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 10px;
  color: #363636;
}
.table {
  display: flex;
  flex-direction: row;
  height: 100%;
  border: solid 2px #e4e7ed;
  border-radius: 2px;
  align-items: stretch;
}
.left {
  flex-basis: 160px;
  text-align: center;
  font-size: 14px;
}
.left .category {
  border-bottom: solid 2px #e4e7ed;
  height: 30px;
  line-height: 30px;
}
.left .current,
.left .category:hover {
  color: #409eff;
  font-weight: 700;
  background-color: #f2f6fc;
}
.right {
  border-left: solid 2px #e4e7ed;
  padding: 10px 20px;
  font-size: 14px;
}
.title {
  font-weight: 600;
}
.title span {
  display: inline-block;
  border-left: 4px solid;
  height: 12px;
  width: 10px;
}
.subtitle {
  font-weight: 600;
  padding: 10px 0;
}
.right p {
  font-weight: 500;
  padding: 10px 0;
}
</style>
