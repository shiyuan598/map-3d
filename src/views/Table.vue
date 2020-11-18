<template>
    <div>
        <el-table @selection-change="handleSelection" class="tableLimit" :data="tableData" border :show-header="true" stripe>
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column prop="name" label="名称" width="180"> </el-table-column>
            <el-table-column prop="value" label="内容"> </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: "table",
  data() {
    return {
      tableData: [
        {
          name: "index1",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptatem quisquam eaque esse numquam inventore tempore quis nam non dolorem."
        },
        {
          name: "index2",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptatem quisquam eaque esse numquam inventore tempore quis nam non dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo doloribus fugiat molestias ratione, ipsum facere inventore? Qui quia iusto, exercitationem aliquam aut expedita voluptate."
        },
        {
          name: "index3",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptatem quisquam eaque esse numquam inventore tempore quis nam non dolorem."
        },
        {
          name: "index4",
          value: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
      ]
    };
  },
  methods: {
    handleSelection(val) {
      console.info(val);
    }
  }
};
</script>

<style>
.tableLimit tr td .cell {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /*可以显示的行数，超出部分用...表示 */
    -webkit-box-orient: vertical;
}
</style>
