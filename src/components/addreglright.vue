<template>
  <div class="document-upload-container">
    <div class="document-upload">
      <div class="ai-image">
        <img src="@/assets/upperplanet.svg" alt="AI Консультант" />
      </div>
      <p class="upload-text">
        Для добавления нового регламента без файла, заполните всю информацию
        ниже:
      </p>

      <form class="reglament-form">
        <div class="form-group">
          <label for="reglament-name"
            >Название регламента: <span class="required">*</span></label
          >
          <input
            id="reglament-name"
            type="text"
            placeholder="Введите название..."
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="reglament-conditions"
            >Условия регламента: <span class="required">*</span></label
          >
          <textarea
            id="reglament-conditions"
            placeholder="Введите условия регламента..."
            class="form-textarea"
            rows="5"
          ></textarea>
        </div>

        <div class="button-container">
          <button type="button" class="submit-button" @click="showModal = true">
            Добавить регламент
          </button>
        </div>
      </form>

      <!-- Модальное окно -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <button class="close-button" @click="showModal = false">
            &times;
          </button>
          <div class="modal-text">
            <h3>Регламент успешно добавлен!</h3>
          </div>

          <div class="modal-image-container">
            <img src="@/assets/modal.svg" alt="Подтверждение" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Addregl",
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
.document-upload-container {
  width: 50%;
  padding-left: 20px;
  padding-top: 130px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  position: relative;
  min-height: 100vh;
}

.document-upload {
  max-width: 500px;
  width: 100%;
  padding: 0 20px;
  text-align: left;
  position: relative;
}

.upload-text {
  width: 450px;
  font-size: 20px;
  color: #000000;
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
}

.reglament-form {
  width: 100%;
  max-width: 500px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  font-size: 16px;
  color: #000000;
  margin-bottom: 8px;
  font-weight: bold;
}

.required {
  color: #ff0000;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #706f6f;
  border-radius: 8px;
  font-size: 12px;
  box-sizing: border-box;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.button-container {
  display: flex;
  justify-content: flex-end; /* Выравнивание кнопки по правому краю */
  width: 100%;
}

.submit-button {
  background-color: #185493;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: auto;
  max-width: 200px;
}

.submit-button:hover {
  background-color: #0d4b8a;
}

.right-side {
  margin-left: auto;
}

.ai-image {
  position: fixed;
  width: 300px; /* Уменьшили размер для верхнего угла */
  height: auto;
  right: 0; /* Прижимаем к правому краю */
  top: 0; /* Прижимаем к верхнему краю */
  z-index: -1;
}

.ai-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #185493b8;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px 20px 0;
  border-radius: 10px;
  width: 460px;
  height: 250px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

.modal-text {
  margin: 0;
  padding: 0 20px;
  flex: 0;
}

.modal-image-container {
  width: 100%;
  height: 180px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 20px;
  margin-left: -20px;
  margin-right: -20px;
}

.modal-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #706f6f;
  padding: 5px;
  z-index: 2;
}
</style>
