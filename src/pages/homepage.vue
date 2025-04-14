<template>
  <div id="app">
    <div class="main-content">
      <LeftMenu></LeftMenu>
      <RightMenu></RightMenu>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import LeftMenu from "@/components/leftmenu.vue";
import RightMenu from "@/components/rightmenu.vue";

export default {
  name: "app",
  components: {
    Header,
    LeftMenu,
    RightMenu,
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
