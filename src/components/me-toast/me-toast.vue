<template lang="html">
  <div v-if="isShowToast" class="toast-container" @touchmove.prevent>
    <!-- 这里content为双花括号 -->
    <span class="toast-msg">{{content}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowToast: true,
      content: ''
    }
  }
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}
.toast-msg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 15px;
  border-radius: 5px;
  background: rgba(0, 0, 0, .7);
  color: #FFFFFF;
}
</style>
