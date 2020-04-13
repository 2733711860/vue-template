<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: "app",

  computed: {
  	...mapGetters([
  		'token'
  	])
  },

  created() {
  	this.setToken('vuex存储token值')
  	console.log(this.token)
  },

  methods: {
  	...mapMutations({
//			setToken: 'SET_TOKEN'
  	}),

  	...mapActions([
  		'setToken'
  	])
  }
};
</script>



