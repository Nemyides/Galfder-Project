<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="logo">
        <img src="@/assets/logo.svg" alt="ЭР ТЕЛЕКОМ" />
      </router-link>
      <nav class="nav">
        <router-link to="/check" class="nav-item" active-class="active">
          ПРОВЕРКА ДОКУМЕНТОВ
        </router-link>
        <router-link to="/addregl" class="nav-item" active-class="active">
          ДОБАВЛЕНИЕ РЕГЛАМЕНТОВ
        </router-link>
        <router-link to="/aiconsult" class="nav-item" active-class="active">
          AI КОНСУЛЬТАЦИЯ
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-color: white;
  border-bottom: 1px solid#EDEDED;
  width: 100%;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
}

.logo img {
  height: 19px;
  width: auto;
}

.nav {
  display: flex;
  gap: 140px;
}

.nav-item {
  cursor: pointer;
  font-size: 10px;
  padding: 26px 26px;
  transition: color 0.3s;
  color: #706f6f;
}

.nav-item:hover {
  color: #2d2d2d;
}

.nav-item.active {
  color: #2d2d2d;
}

.nav-item {
  text-decoration: none;
}
</style>
