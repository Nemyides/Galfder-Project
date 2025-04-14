<template>
  <div class="left-menu-container">
    <div class="document-validator">
      <div class="validator-header">
        <h1>ЭР•ТЕЛЕКОМ ПРЕДСТАВЛЯЕТ</h1>
        <h2>Контроль соответствия документов нормативным требованиям</h2>
        <p class="description">
          Теперь проверка документов стала быстрой, легкой и доступной каждому!
        </p>
      </div>

      <div class="validator-features">
        <router-link to="/check" class="feature-button">
          <div class="button-content">
            <h3>Проверить документ</h3>
            <p class="description">
              Благодаря внедренному искусственному интеллекту проверка
              документов займет считанные секунды и укажет на недочеты
            </p>
          </div>
        </router-link>

        <router-link to="/addregl" class="feature-button">
          <div class="button-content">
            <h3>Добавить регламент</h3>
            <p class="description">
              При добавлении регламента искусственный интеллект учтет изменения
              и включит их в проверку вашего документа
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
};
</script>

<style scoped>
.left-menu-container {
  width: 50%;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.document-validator {
  max-width: 500px;
  width: 100%;
  padding: 0 20px;
  color: #000000;
  text-align: center;
}

.validator-header {
  margin-bottom: 40px;
}

.validator-header h1 {
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  background-color: #0e5aa1;
  padding: 4px 12px;
  border-radius: 15px;
  line-height: 1.5;
}

.validator-header h2 {
  font-size: 20px;
  color: #000000;
  margin-bottom: 15px;
  font-weight: bold;
}

.description {
  font-size: 13px;
  color: #7f7f7f;
  margin-bottom: 10px;
  line-height: 1.4;
}

.validator-features {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 100%;
}

.feature-button {
  width: 100%;
  max-width: 300px;
  padding: 13px;
  border-radius: 30px;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 5px 3px 8.9px rgba(0, 0, 0, 0.25);
  text-decoration: none;
}

.button-content {
  width: 100%;
}

.feature-button:hover {
  background-color: #ffffff;
  box-shadow: 5px 3px 8.9px rgba(0, 0, 0, 0.3);
}

.feature-button h3 {
  font-size: 16px;
  color: #000000;
  margin-bottom: 8px;
  font-weight: bold;
  text-decoration: none;
}

.feature-button .description {
  font-size: 13px;
  text-decoration: none;
}
</style>
