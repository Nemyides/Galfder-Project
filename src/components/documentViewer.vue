<template>
  <div class="document-viewer-container" v-if="fileData">
    <div class="document-preview">
      <!-- PDF -->
      <iframe
        v-if="fileData.type === 'pdf'"
        :src="fileData.url"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>

      <!-- Word документы -->
      <div v-else-if="fileData.type === 'word'" class="word-preview">
        <div v-html="fileData.content"></div>
      </div>

      <!-- Неподдерживаемый формат -->
      <div v-else class="unsupported-format">
        <p>Просмотр этого формата файла не поддерживается</p>
        <a :href="fileData.url" download class="download-link">Скачать файл</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentViewer",
  props: {
    fileData: {
      type: Object,
      default: null,
    },
  },
  methods: {
    clearDocument() {
      this.$emit("clear-document");
    },
  },
};
</script>

<style scoped>
.document-viewer-container {
  width: 100%;
  padding: 30px 50px 30px 50px;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #d9d9d9;
}

.document-preview {
  width: 100%;
  height: calc(100vh - 40px);
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.document-preview iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.word-preview {
  padding: 20px;
  overflow-y: auto;
  height: 100%;
  background-color: #ffffff;
}

.unsupported-format {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.download-link {
  display: inline-block;
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #185493;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
}

.download-link:hover {
  background-color: #13467d;
}
</style>
