<template>
  <div class="hello">
    <slot>{{ msg }}123</slot>
    <div class="pink">
      <slot name="pink" :pig="user"></slot>
    </div>
    <div class="blue">
      <slot name="blue" username="my user" :some="someStr"></slot>
    </div>
    <el-date-picker v-model="date" type="daterange"></el-date-picker>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      date: '',
      someStr: "绿蚁新醅酒",
      message: "hello hello",
      user: {
        name: "xcvu",
        age: 27,
        gender: 0
      }
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pink {
  color: pink;
}
.blue {
  color: skyblue;
}
</style>
