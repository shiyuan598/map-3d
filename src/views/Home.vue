<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App">
      <template v-slot:blue="{ some, username }">
        dfgfdgdfgdfgd
        <span>{{ some }}</span>
        <span>{{ username }}</span>
        桃花流水鳜鱼肥.
      </template>
      <template>
        {{ address }}
      </template>
      <template #pink="data">
        <span>{{ data.pig.name }}</span><br />
        <span>{{ data.pig.gender }}</span><br />
        <span>{{ data.pig.age }}</span><br />
        Lorem ipsum dolor sit amet.
      </template>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      address: "xwlo",
      blue: "blue"
    };
  },
  components: {
    HelloWorld
  }
};
</script>
