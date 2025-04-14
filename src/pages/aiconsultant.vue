<template>
  <div id="app">
    <div class="main-content">
      <Aiconsult></Aiconsult>
    </div>
  </div>
</template>

<script>
import Aiconsult from "@/components/aiconsult.vue";

export default {
  name: "app",
  components: {
    Aiconsult,
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
