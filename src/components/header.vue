<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="logo">
        <img src="@/assets/logo.svg" alt="ЭР ТЕЛЕКОМ" />
      </router-link>
      
      <button class="menu-toggle" @click="toggleMenu">
        <span class="menu-dot"></span>
        <span class="menu-text">МЕНЮ</span>
      </button>

      
      <nav class="nav" :class="{ 'active': isMenuOpen }">
        <router-link 
          to="/check" 
          class="nav-item" 
          active-class="active"
          @click.native="closeMenu"
        >
          ПРОВЕРКА ДОКУМЕНТОВ
        </router-link>
        <router-link 
          to="/addregl" 
          class="nav-item" 
          active-class="active"
          @click.native="closeMenu"
        >
          ДОБАВЛЕНИЕ РЕГЛАМЕНТОВ
        </router-link>
        <router-link 
          to="/aiconsult" 
          class="nav-item" 
          active-class="active"
          @click.native="closeMenu"
        >
          AI КОНСУЛЬТАЦИЯ
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleClickOutside(event) {
      // Только для экранов шириной ≤ 768px
      if (window.innerWidth > 768) return;

      const menu = this.$el.querySelector('.nav');
      const toggle = this.$el.querySelector('.menu-toggle');

      if (
        this.isMenuOpen &&
        !menu.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        this.closeMenu();
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
};

</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid #EDEDED;
  width: 100%;
  z-index: 1000;
  height: 60px;
}

.header-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.logo {
  width: 10%;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 6.25%;
  z-index: 1001;
}

.logo img {
  height: 80%;
  width: auto;
  max-width: 100%;
}

.nav {
  width: 76%;
  margin-left: 6.5%;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.nav-item {
  width: calc(100% / 3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #706f6f;
  text-decoration: none;
  height: 100%;
  transition: color 0.3s;
  text-align: center;
  margin-right: 11%;
}

.menu-toggle {
  display: none;
  flex-direction: row;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  right: 20px;
  top: 18px;
  z-index: 1001;
}

.menu-dot {
  width: 10px;
  height: 10px;
  background-color: #005bbb;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}

.menu-text {
  font-size: 14px;
  font-weight: 500;
  color: #000;
}

@media (min-width: 769px) {
  .nav-item {
    transition: color 0.3s ease;
  }

  .nav-item:hover {
    color: #212121;
  }

  .nav-item.active {
    color: #212121;
    font-weight: 600;
  }
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: 60px;
    right: 0;
    width: 70%;
    max-width: 280px;
    height: auto;
    background: #fff;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 10px;
    padding-bottom: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 8px 8px;
  }

  .nav.active {
    transform: translateX(0);
  }

  .nav-item {
    width: 100%;
    height: 48px; /* фиксированная высота */
    padding: 0 16px; /* вертикальные отступы убираем, всё внутри выравниваем */
    font-size: 14px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    text-transform: none;
    font-weight: 500;
    white-space: nowrap;
    box-sizing: border-box; /* учитываем padding в height */
  }

  .nav-item:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }

  .nav-item::before {
    content: "•";
    color: #005bbb;
    font-size: 18px;
    margin-right: 8px;
    line-height: 1;
    display: inline-block;
    transform: translateY(1px); /* чтобы визуально центрировать с текстом */
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center; /* добавляем для вертикального центрирования */
    padding: 0;
    width: 100%;
  }

  .logo {
    margin-left: 10%;
    padding-left: 0; /* убираем внутренний отступ, чтобы не удвоить */
  }

  .menu-toggle {
    margin-right: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    /* Удаляем ручное позиционирование, оно мешает */
    /* top: 50%; */
    /* transform: translateY(-50%); */
    z-index: 1001;
    height: 24px;
  }

  .menu-dot {
    width: 8px;
    height: 8px;
    background-color: #005bbb;
    border-radius: 50%;
    display: inline-block;
    margin-right: 6px;
  }

  .menu-text {
    font-size: 12px;
    font-weight: 500;
    color: #000;
  }

    * {
    font-family: 'Panton-Regular', sans-serif;
  }

}
</style>