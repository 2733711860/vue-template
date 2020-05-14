<template>
	<div>
		<img v-lazy="imgSrc" @click="showBig(imgSrc)" style="width: 100%;" />

		<div :class="['left_slide_center_nav', {'show' : showPopu}]" @click="closePopup">
	    <!--蒙层-->
	    <div :class="['image_center_content', 'center_content_right']">
				<img :src="bigImgSrc" />
	    </div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'meImageView',
	data () {
		return {
			showPopu: false,
			bigImgSrc: ''
		}
	},
	props: {
		imgSrc: {
			type: String,
			default: ''
		}
	},
	watch: {
	},
	mounted () {
		this.showPopu = this.value
	},
	methods: {
		closePopup () {
			this.showPopu = false
		},

		showBig (item) {
			this.bigImgSrc = item
			this.showPopu = true
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../assets/css/index.less");
/**内容*/
.left_slide_center_nav .image_center_content {
  position: fixed;
  transition: all .4s;
  -moz-transition: all .4s;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
  -os-transition: all .4s;
  z-index: 1001;
  overflow-y: scroll;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
  	max-width: 100%;
  	max-height: 100%;
  }
}

/*左侧弹出*/
.left_slide_center_nav .center_content_left{
	-os-transform: translateX(-100%);
  transform: translateX(-100%);
  width: 70%;
  left: 0;
  top: 0;
  bottom: 0;
}
.left_slide_center_nav.show .center_content_left {
  -os-transform: translateX(0);
  transform: translateX(0);
}

/*右侧弹出*/
.left_slide_center_nav .center_content_right{
	-os-transform: translateX(100%);
  transform: translateX(100%);
  width: 100%;
  right: 0;
  top: 0;
  bottom: 0;
}
.left_slide_center_nav.show .center_content_right {
  -os-transform: translateX(0);
  transform: translateX(0);
}

/*上部弹出*/
.left_slide_center_nav .center_content_top{
	-os-transform: translateY(-100%);
  transform: translateY(-100%);
  left: 0;
  right: 0;
  top: 0;
}
.left_slide_center_nav.show .center_content_top {
  -os-transform: translateY(0);
  transform: translateY(0);
}

/*底部弹出*/
.left_slide_center_nav .center_content_bottom{
	-os-transform: translateY(100%);
  transform: translateY(100%);
  left: 0;
  right: 0;
  bottom: 0;
}
.left_slide_center_nav.show .center_content_bottom {
  -os-transform: translateY(0);
  transform: translateY(0);
}

/*中间弹出*/
.left_slide_center_nav .center_content_center{
	left: 50%;
	top: 50%;
	height: 0;
	transform: translate(-50%, -50%);
}
.left_slide_center_nav.show .center_content_center {
  left: 50%;
	top: 50%;
	height: auto;
	transform: translate(-50%, -50%);
}
</style>