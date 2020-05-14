<template>
  <div id="app">
  	<me-header :title="$route.meta.title"  v-if="$route.meta.hasTop"
  		:hasLeft="$route.meta.hasTop.hasLeft"
  		:hasRight="$route.meta.hasTop.hasRight"></me-header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="page_content"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" class="page_content"></router-view>
    <image-footer page="imagePage" v-if="$route.meta.haoBottom"></image-footer>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import imageFooter from './pages/image/components/imageFooter.vue'
export default {
  name: "app",

  components: {
		imageFooter
	},

  computed: {
  	...mapGetters([
//		'token'
  	])
  },

  created() {
//	this.setToken('vuex存储token值')
//	console.log(this.token)
  },

  methods: {
//	...mapMutations({
//			setToken: 'SET_TOKEN'
//	}),
//
//	...mapActions([
//		'setToken'
//	])
  }
};
</script>

<style lang="less">
	@import url("./assets/css/index.less");
	#app{
		display: flex;
		flex-flow: column;
		height: 100%;
		justify-content: space-between;
	}
	.page_content{
		flex: 1;
		overflow-y: auto;
	}
</style>



