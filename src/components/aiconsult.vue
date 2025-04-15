<template>
  <div class="page-layout">
    <div class="side-image left">
      <img src="@/assets/leftplanet.svg" alt="Декоративное изображение" />
    </div>

    <div class="side-image right">
      <img src="@/assets/rightplanet.svg" alt="Декоративное изображение" />
    </div>

    <div class="consult-container">
      <div class="chat-container">
        <div class="ai-header">
          <h2>AI консультант</h2>
        </div>

        <!-- Динамически отображаем сообщения из массива messages -->
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="[
            'message',
            message.type === 'user' ? 'user-message' : 'ai-message',
          ]"
        >
          <div v-if="message.type === 'ai'" class="ai-label">AI</div>
          <div v-html="message.content"></div>
        </div>

        <div class="input-area">
          <div class="input-wrapper">
            <textarea
              v-model="userInput"
              placeholder="Введите свой вопрос..."
              class="question-input"
              @keyup.enter="sendMessage"
              :disabled="isLoading"
            ></textarea>
            <button
              @click="sendMessage"
              :disabled="isLoading"
              class="send-button"
            >
              <svg
                class="send-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 19V5M12 5L5 12M12 5L19 12"
                  stroke="#706F6F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Aiconsult",
  data() {
    return {
      messages: [
        {
          type: "ai",
          content: "Здравствуйте! Я ваш AI-консультант. Чем могу помочь?",
        },
      ],
      userInput: "",
      isLoading: false,
      apiKey: "YOUR_API_KEY", // Замените на ваш реальный API ключ
      apiEndpoint: "https://api.openai.com/v1/chat/completions", // Для OpenAI
    };
  },
  methods: {
    async sendMessage() {
      if (!this.userInput.trim()) return;

      // Добавляем сообщение пользователя
      this.messages.push({
        type: "user",
        content: this.userInput,
      });

      const userMessage = this.userInput;
      this.userInput = "";
      this.isLoading = true;

      try {
        // Отправляем запрос к API
        const response = await axios.post(
          this.apiEndpoint,
          {
            model: "gpt-3.5-turbo", // или другая модель
            messages: [
              {
                role: "system",
                content:
                  "Ты полезный AI-консультант, который помогает клиентам с вопросами о договорах и услугах Эр-Телеком. Отвечай вежливо и профессионально.",
              },
              {
                role: "user",
                content: userMessage,
              },
            ],
            temperature: 0.7,
          },
          {
            headers: {
              Authorization: `Bearer ${this.apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Добавляем ответ AI
        this.messages.push({
          type: "ai",
          content: response.data.choices[0].message.content,
        });
      } catch (error) {
        console.error("Ошибка при запросе к API:", error);
        this.messages.push({
          type: "ai",
          content: "Извините, произошла ошибка. Пожалуйста, попробуйте позже.",
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.page-layout {
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
}

.consult-container {
  max-width: 800px;
  width: 100%;
  padding: 20px;
  z-index: 1;
}

.chat-container {
  background: transparent;
  padding: 20px;
  padding-bottom: 100px;
}

.ai-header {
  text-align: center;
  margin-bottom: 30px;
}

.ai-header h2 {
  font-size: 24px;
  color: #000000;
  font-weight: 500;
}

.message {
  padding: 12px 16px;
  border-radius: 20px;
  margin-bottom: 12px;
  max-width: 85%;
}

.user-message {
  background: #e3f2fd;
  margin-left: auto;
  border-top-right-radius: 0;
}

.ai-message {
  background: white;
  margin-right: auto;
  border-top-left-radius: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.ai-label {
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 8px;
}

.document-list {
  padding-left: 20px;
  margin: 10px 0;
}

.document-list li {
  margin-bottom: 6px;
  font-size: 14px;
}

.follow-up {
  font-style: italic;
  color: #666;
  margin-top: 10px;
}

.input-area {
  position: fixed; /* Закрепляем поле ввода внизу экрана */
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); /* Центрируем по горизонтали */
  max-width: 800px; /* Ограничиваем ширину по ширине контейнера */
  width: calc(100% - 40px); /* Учитываем отступы */
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  z-index: 10; /* Убедитесь, что поле ввода находится поверх других элементов */
  box-sizing: border-box; /* Включаем padding и border в ширину */
}

.input-wrapper {
  position: relative;
  width: 100%; /* Убираем ограничение по ширине */
}

.question-input {
  width: 100%; /* Убираем ограничение по ширине */
  height: 89px;
  padding: 12px 16px;
  padding-right: 60px;
  background-color: #ededed;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
  transition: border 0.2s;
  resize: none;
  box-sizing: border-box;
}

.side-image {
  position: fixed;
  height: 100vh;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 0;
}

.side-image.left {
  left: 0;
  justify-content: flex-start;
}

.side-image.right {
  right: 0;
  justify-content: flex-end;
}

.side-image img {
  height: 90vh;
  width: auto;
  object-fit: contain;
  opacity: 1;
}

.send-button {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.send-button:disabled {
  background-color: #b0bec5;
  cursor: not-allowed;
}

.send-button svg {
  margin-left: 2px;
}

@media (max-width: 1200px) {
  .side-image {
    display: none;
  }

  .page-layout {
    padding: 0 20px;
  }
}
</style>
