<template lang="html">
  <div v-if="isShowLoading" class="loading-container">
    <div class="loading-box">
      <img class="loading-img" :src="require('./loading.png')">
      <!-- 这里content为双花括号 -->
      <span class="loading-txt">{{content}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowLoading: true,
      content: '加载中...'
    }
  }
}
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.loading-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background: rgba(0, 0, 0, .6);
}
.loading-img {
  width: 40px;
  height: 40px;
  animation: rotating 1s linear infinite;
}
@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
.loading-txt {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  margin-top: 20px;
}
</style>
