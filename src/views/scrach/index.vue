<template>
	<div>
		<!--<scratch-card
        element-id='scratchWrap'
        :ratio=0.5
        :move-radius=20
        :start-callback=startCallback
        :clear-callback=clearCallback
    />-->


    <scratchh :key="renderCount"
      :cardWidth="cardWidth"
      :cardHeight="cardHeight"
      :finishPercent="finishPercent"
      :imageUrl="imageUrl"
      :brushUrl="brushUrl"
      :forceReveal="forceReveal"
      @complete="onComplete">
      <img src="../../pages/login/3.jpg" style="width: 100%;height: 100%;" />
    </scratchh>
	</div>
</template>

<script>
import scratchCard from './scratch-card.vue'
import scratchh from './ScratchCard.vue'
import BRUSH from './brush.png'
import IMAGEURL from './2.jpg'
export default {
  data () {
    return {
    	renderCount: 0,
      cardWidth: 375,
      cardHeight: 200,
      finishPercent: 70,
      brushUrl: BRUSH,
      forceReveal: false,
      imageUrl: IMAGEURL
    }
  },
  components: {
  	scratchCard, scratchh
  },
  methods : {
    startCallback(){
      console.log('开始刮奖！')
    },
    clearCallback(){
      console.log('清除完毕！')
    },
    onComplete() {
      console.log('刮奖完毕')
    },
  }
}
</script>

<style>
</style>