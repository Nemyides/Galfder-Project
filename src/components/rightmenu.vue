<template>
  <div class="ai-consultant-container">
    <div class="ai-consultant">
      <div class="ai-image">
        <img src="@/assets/aiconsult.svg" alt="AI Консультант" />
      </div>

      <p class="intro-text">
        У вас есть вопросы,<br />касающиеся оформления документов или общей
        работы?
      </p>
      <p class="offer-text">
        Спросите нашего AI консультанта<br />и он ответит на любой вопрос!
      </p>

      <div class="search-wrapper">
        <div class="blue-oval-background">
          <input
            type="text"
            placeholder="Введите свой вопрос..."
            class="question-input"
            v-model="question"
            @keyup.enter="goToAIConsult"
          />
          <button class="search-button" @click="goToAIConsult">
            <div class="search-icon-wrapper">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 15L11 11M7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13Z"
                  stroke="#0E5AA1"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightMenu",
  data() {
    return {
      question: "",
    };
  },
  methods: {
    goToAIConsult() {
      // Переход на страницу AI консультанта с передачей вопроса
      this.$router.push({
        path: "/aiconsult",
        query: { question: this.question },
      });
    },
  },
};
</script>

<style scoped>
.ai-consultant-container {
  width: 50%;
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.ai-consultant {
  max-width: 500px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  position: relative;
  margin-top: -130px;
}

.ai-image {
  position: absolute;
  width: 622px;
  height: 509.05px;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}

.ai-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.intro-text {
  font-size: 14px;
  line-height: 100%;
  color: #2d2d2d;
  margin-bottom: 10px;
  font-weight: 400;
  position: relative;
  z-index: 1;
}

.offer-text {
  font-size: 17px;
  line-height: 1.4;
  color: #000000;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
}

.search-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  z-index: 1;
}

.search-wrapper {
  position: relative;
  width: 300px;
  margin: 0 auto;
}

.blue-oval-background {
  width: 300px;
  height: 40px;
  background-color: #8ab5e1;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative;
}

.question-input {
  width: 230px;
  height: 30px;
  background-color: white;
  border: none;
  border-radius: 15px;
  padding: 0 15px;
  font-size: 12px;
  color: #333;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-button {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-button:hover {
  background-color: #f0f0f0;
}

.question-input::placeholder {
  color: #7f7f7f;
}
</style>
