<template>
  <div class="document-upload-container">
    <div class="document-upload">
      <div class="ai-image">
        <img src="@/assets/lowerplanet.svg" alt="AI Консультант" />
      </div>
      <p class="upload-text">Для проверки документа, загрузите его</p>

      <div class="upload-field">
        <div class="document-card">
          <p class="document-title">
            Рекомендуемые форматы документа:<br />.DOC, .DOCX, .PDF, .ODT
          </p>
        </div>
        <button class="upload-button">
          <img src="@/assets/loading.svg" alt="Загрузить" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Check",
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
}

.upload-field {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 350px;
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
  margin-bottom: 15px;
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
