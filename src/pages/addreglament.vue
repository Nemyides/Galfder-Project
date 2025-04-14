<template>
  <div id="app">
    <div class="main-content">
      <Addregl></Addregl>
      <Addreglright></Addreglright>
    </div>
  </div>
</template>

<script>
import Addregl from "@/components/addregl.vue";
import Addreglright from "@/components/addreglright.vue";

export default {
  name: "app",
  components: {
    Addregl,
    Addreglright,
  },
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.main-content {
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
