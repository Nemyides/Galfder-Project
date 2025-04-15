<template>
  <div class="document-upload-container">
    <div class="document-upload">
      <div class="ai-image">
        <img src="@/assets/lowerplanet.svg" alt="AI Консультант" />
      </div>
      <p class="upload-text">Для добавления регламентов, загрузите файл</p>

      <div class="upload-field">
        <div class="document-card">
          <input
            type="file"
            id="file-upload"
            accept=".doc,.docx,.pdf,.odt"
            @change="handleFileUpload"
            style="display: none"
          />
          <label for="file-upload" class="document-title">
            Рекомендуемые форматы документа:<br />.DOC, .DOCX, .PDF, .ODT
          </label>
        </div>
        <button type="button" class="upload-button" @click="triggerFileInput">
          <img src="@/assets/loading.svg" alt="Загрузить" />
        </button>
      </div>

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
import mammoth from "mammoth";

export default {
  name: "Addregl",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    triggerFileInput() {
      document.getElementById("file-upload").click();
    },
    async handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      // Проверяем тип файла
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.oasis.opendocument.text",
      ];

      if (
        !validTypes.includes(file.type) &&
        !file.name.match(/\.(doc|docx|pdf|odt)$/i)
      ) {
        alert(
          "Пожалуйста, выберите файл одного из поддерживаемых форматов: .doc, .docx, .pdf, .odt"
        );
        return;
      }

      try {
        // Здесь можно добавить код для отправки файла на сервер
        // Имитируем загрузку
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Показываем модальное окно после успешной загрузки
        this.showModal = true;

        // Можно добавить обработку файла как в компоненте Check
        const fileData = {
          file: file,
          url: URL.createObjectURL(file),
          type: this.getFileType(file),
          content: await this.parseFileContent(file),
        };

        this.$emit("file-uploaded", fileData);
      } catch (error) {
        console.error("Ошибка при загрузке файла:", error);
        alert("Произошла ошибка при загрузке файла");
      }
    },

    getFileType(file) {
      if (file.type === "application/pdf") return "pdf";
      if (file.name.endsWith(".docx") || file.name.endsWith(".doc"))
        return "word";
      if (file.name.endsWith(".odt")) return "odt";
      return "unsupported";
    },

    async parseFileContent(file) {
      try {
        if (file.name.endsWith(".docx")) {
          const result = await mammoth.extractRawText({
            arrayBuffer: await file.arrayBuffer(),
          });
          return result.value.replace(/\n/g, "<br>");
        } else if (file.name.endsWith(".doc") || file.name.endsWith(".odt")) {
          const text = await this.readFileAsText(file);
          return text.replace(/\n/g, "<br>");
        }
        return ""; // Для PDF не извлекаем текст
      } catch (error) {
        console.error("Ошибка чтения файла:", error);
        return "Не удалось прочитать содержимое документа";
      }
    },

    readFileAsText(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = () => resolve("Не удалось прочитать файл");
        reader.readAsText(file);
      });
    },
  },
};
</script>

<style scoped>
.document-upload-container {
  width: 50%;
  padding-right: 20px;
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
  text-align: center;
  position: relative;
}

.upload-text {
  width: 300px;
  font-size: 20px;
  color: #000000;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  margin-left: -70px;
}

.upload-field {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-left: -70px;
}

.document-card {
  border: 2px solid #185493;
  border-radius: 15px;
  width: 250px;
  min-height: 40px;
  padding: 0 10px;
  background-color: #f9f9f9;
  text-align: left;
}

.document-title {
  font-size: 11px;
  color: #7f7f7f;
  cursor: pointer;
}

.upload-button {
  background-color: #185493;
  border: none;
  border-radius: 0 15px 15px 0;
  width: 50px;
  height: 43.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: -35px;
  padding: 0;
}

.upload-button img {
  width: 30px;
  height: 30px;
}

.ai-image {
  position: fixed;
  width: 622px;
  height: auto;
  left: 0;
  bottom: 0;
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
