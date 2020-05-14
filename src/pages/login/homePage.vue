<template>
	<div>
		<div class="v_page_item" v-for="(item, index) in entryList" :key='index' @click="toPage(item)">
			<img :src="item.entryImage" />
			<div class="v_right">
				<div class="v_title">{{item.entryName}}</div>
				<div class="v_desc">{{item.entryDesc}}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			entryList: []
		}
	},
	mounted () {
		this.getMsg()
	},
	methods: {
		async getMsg () {
			await this.$post(this.$api.getEntry).then(data => {
				if (data.code === 0) {
					this.entryList = data.data.entryList
				}
	    })
		},

		toPage(item) {
			this.$router.push({
				path: '/' + item.entryUrl
			})
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../assets/css/font.less");
.v_page_item{
	background-color: #FFFFFF;
	padding: 10px;
	margin-top: 10px;
	display: flex;
	align-items: center;
	color: @font-color-normal;
	img{
		border-radius: 5px;
		width: 80px;
		height: 80px;
	}
	.v_right{
		flex: 1;
		padding: 0 10px;
		.v_title{
			line-height: 30px;
			font-size: @font-size-lg;
		}
		.v_desc{
			line-height: 20px;
			font-size: @font-size-sm;
			color: @font-color-lighter;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
}
</style>