<template>
	<div class="mood_sign">
		<div class="mood_sign_one" v-for="(item, index) in list" :key="index">
			<div class="mood_sign_top">
				<img :src="item.userImage" />
				<div class="mood_sign_title">{{item.title}}</div>
			</div>
			<div class="mood_sign_msg">{{item.desc}}</div>

			<div class="mood_sign_img">
				<img :src="item.image" class="mood_img" />
				<div class="mood_sign_opara">
					<me-icon name="thumbs-up" size="20"><span class="mood_sign_opara_num">{{item.thumbs}}</span></me-icon>
					<me-icon name="thumbs-down" size="20"><span class="mood_sign_opara_num">{{item.noThumbs}}</span></me-icon>
					<me-icon name="likeno" size="20"></me-icon>
					<me-icon name="message" size="20"></me-icon>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			list: []
		}
	},
	mounted () {
		this.getList()
	},
	methods: {
		async getList () {
			await this.$post(this.$api.getWordImage).then(data => {
				console.log(data)
				if (data.code === 0) {
					this.list = data.data.list
				}
	    })
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../assets/css/font.less");
@import url("../../assets/css/theme.less");
.mood_sign{
	font-size: @font-size-md;
	.mood_sign_one{
		padding: 10px;
		border-bottom: 1px solid @me-bg-lighter;
		.mood_sign_top{
			display: flex;
			align-items: center;
			img{
				width: 40px;
				height: 40px;
				border-radius: 50%;
			}
			.mood_sign_title{
				font-size: @font-size-lg;
				padding: 0 10px;
				flex: 1;
			}
		}
		.mood_sign_msg{
			padding: 10px 0;
			line-height: 20px;
			color: @font-color-light;
		}
		.mood_sign_img{
			.mood_img{
				max-width: 100%;
			}
			.mood_sign_opara{
				display: flex;
				justify-content: space-around;
				padding-top: 10px;
				color: @font-color-light;
				.mood_sign_opara_num{
					font-size: @font-size-lg;
					padding-left: 5px;
				}
			}
		}
	}
}
</style>