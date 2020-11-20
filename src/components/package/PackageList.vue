<template>
  <div class="container">
    <div class="toggle" @click="toggle">
      公共程序
      <i class="el-icon-s-unfold"></i>
    </div>
    <div class="list" v-show="visible">
      <div :key="index" class="package" v-for="(item, index) in packageList">
        <div class="header">
          <span class="title">{{ item.title }}</span>
          <span class="version">{{ item.version }}</span>
          <span class="date">{{ item.date }}</span>
        </div>
        <div class="content">
          {{ item.desc }}
        </div>
        <div class="footer">
          <el-button size="mini" @click="callProgram(item.id)" type="primary"
            >调用程序</el-button
          >
          <el-button size="mini" @click="showDetail(item.id)" type="primary"
            >查看详情</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "package-list",
  data() {
    return {
      visible: true,
      packageList: [
        {
          id: 1,
          title: "道路标注",
          version: "v1.0",
          date: "2020.09.05 14:34",
          desc: "用于从单目照片标注道路。",
          size: 33,
          className: "Lorem, ipsum dolor."
        },
        {
          id: 2,
          title: "道路标注",
          version: "v1.1",
          date: "2020.09.08 14:34",
          desc: "还是用于从单目照片标注道路。",
          size: 33,
          className: "Lorem, ipsum dolor."
        },
        {
          id: 3,
          title: "道路标注",
          version: "v1.2",
          date: "2020.09.09 14:34",
          desc: "仍然用于从单目照片标注道路。",
          size: 33,
          className: "Lorem, ipsum dolor."
        }
      ]
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    callProgram(id) {
      console.info("call program of id: " + id);
    },
    showDetail(id) {
      // this.$router.push({ name: 'CategoryItem', params: { category: category[0] }, query: { t: Date.now() } })
      this.$router.push({ name: "Detail", params: { id } });
    }
  }
};
</script>

<style scoped>
.container {
  color: #303133;
  margin-left: 10px;
  float: left;
  height: 100vh;
  width: 380px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.toggle {
  box-sizing: border-box;
  font-size: 14px;
  writing-mode: vertical-lr;
  width: 30px;
  text-align: center;
  padding-left: 5px;
  border-right: solid 1px #e4e7ed;
  border-radius: 2px;
  cursor: pointer;
}
.list {
  flex-grow: 1;
}
.package {
  border: solid 1px #e4e7ed;
  border-radius: 2px;
  margin: 10px 20px 20px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.header {
  border-bottom: dashed 2px #e4e7ed;
  padding: 5px 0;
}
.header .title {
  padding-left: 1rem;
  font-weight: 600;
}
.header .version {
  font-size: 12px;
  padding-left: 1rem;
}
.header .date {
  padding-right: 1rem;
  font-size: 12px;
  float: right;
}
.content {
  box-sizing: border-box;
  width: 100%;
  min-height: 60px;
  border-bottom: solid 1px #e4e7ed;
  padding: 10px;
  font-size: 14px;
}
.footer {
  display: flex;
  padding: 5px;
  justify-content: space-around;
}
</style>
