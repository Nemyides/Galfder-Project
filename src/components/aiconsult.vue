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

        <div class="message user-message">
          <p>Какие пункты обязательны при заключении договора с Эр-телеком?</p>
        </div>

        <div class="message ai-message">
          <div class="ai-label">AI</div>
          <p>
            Вот перечень пунктов, которые необходимы при заключении договора с
            Эр-Телеком:
          </p>
          <ul class="document-list">
            <li>Пункт 1.2: Текст текст текст...</li>
            <li>Пункт 1.2: Текст текст текст...</li>
            <li>Пункт 1.2: Текст текст текст...</li>
            <li>Пункт 1.2: Текст текст текст...</li>
            <li>Пункт 1.2: Текст текст текст...</li>
            <li>Пункт 1.2: Текст текст текст...</li>
          </ul>
          <p class="follow-up">У вас остались ещё какие-то вопросы?</p>
        </div>

        <div class="message user-message">
          <p>Что такое пункт 2.17</p>
        </div>

        <div class="input-area">
          <input
            type="text"
            placeholder="Введите свой вопрос..."
            class="question-input"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aiconsult",
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
  border-radius: 8px;
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
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.question-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
  transition: border 0.2s;
}

.question-input:focus {
  border-color: #1976d2;
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

@media (max-width: 1200px) {
  .side-image {
    display: none;
  }

  .page-layout {
    padding: 0 20px;
  }
}
</style>
