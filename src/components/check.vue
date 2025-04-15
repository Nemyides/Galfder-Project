<template>
  <div class="document-upload-container">
    <div class="document-upload">
      <div class="ai-image">
        <img src="@/assets/lowerplanet.svg" alt="AI Консультант" />
      </div>
      <p class="upload-text">Для проверки документа, загрузите его</p>

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
        <button class="upload-button" @click="triggerFileInput">
          <img src="@/assets/loading.svg" alt="Загрузить" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import mammoth from "mammoth";

export default {
  name: "Check",
  methods: {
    triggerFileInput() {
      document.getElementById("file-upload").click();
    },
    async handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      let fileData = {
        file: file,
        url: URL.createObjectURL(file),
        type: null,
        content: "",
      };

      // Определяем тип файла
      if (file.type === "application/pdf") {
        fileData.type = "pdf";
      } else if (file.name.endsWith(".docx") || file.name.endsWith(".doc")) {
        fileData.type = "word";
        fileData.content = await this.parseWordFile(file);
      } else {
        fileData.type = "unsupported";
      }

      this.$emit("file-uploaded", fileData);
    },

    async parseWordFile(file) {
      try {
        if (file.name.endsWith(".docx")) {
          const result = await mammoth.extractRawText({
            arrayBuffer: await file.arrayBuffer(),
          });
          return result.value.replace(/\n/g, "<br>");
        } else {
          const text = await this.readFileAsText(file);
          return text.replace(/\n/g, "<br>");
        }
      } catch (error) {
        console.error("Ошибка чтения Word файла:", error);
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
/* Стили остаются такими же, как в вашем исходном коде */
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
  height: 40px;
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
</style>
