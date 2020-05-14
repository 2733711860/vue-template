<template>
	<div class="v_image">
		<div class="image_top">
			<div class="v_title">图片阵营</div>
			<van-search placeholder="请输入搜索关键词" disabled @click="toSearch('')" />
			<div class="v_search"></div>
		</div>

		<div class="v_type_title">热门搜索</div>
		<div class="v_hot_search">
			<span v-for="(item, index) in hotSearchList" :key="index" @click="toSearch(item)">{{item.hotName}}</span>
		</div>

		<div class="v_type_title">分类</div>
		<div class="v_type">
			<div class="v_type_ite" v-for="(item, index) in categoryList" :key="index + '_'" @click="toSearch(item)">
				<img :src="item.categoryImage" @error="defaultImg(item)" />
				<div class="v_type_name">{{item.categoryName}}</div>
			</div>
		</div>

		<me-popup v-model='showPopup' position="right" popupWidth="100%" contentClass="searchPopup">
			<div class="image_search_top">
				<me-icon name="arrow-left" size="23" @click="showPopup=false"></me-icon>
				<van-search
				  v-model="searchValue"
				  show-action
				  placeholder="请输入搜索关键词"
				  @search="onSearch"
				>
				  <template #action>
				    <div @click="onSearch">搜索</div>
				  </template>
				</van-search>
			</div>

			<div class="image_list">
				<viewer :images="imageList">
					<img v-for="(xx, index) in imageList" v-lazy="xx" :key="index" />
				</viewer>
			</div>
		</me-popup>
	</div>
</template>

<script>
export default {
	data () {
		return {
			searchValue: '', // 搜索关键字
			hotSearchList: [], // 热搜列表
			categoryList: [], // 分类列表
			showPopup: false, // 搜索页面框
			imageList: [] // 图片列表
		}
	},
	mounted () {
		this.pageMsg()
	},
	methods: {
		async pageMsg () { // 获取热搜列表、分类列表
			await this.$post(this.$api.getImagePage).then(data => {
				if (data.code === 0) {
					this.hotSearchList = data.data.hotSearch.list
					this.categoryList = data.data.category.list
				}
	    })
		},

		defaultImg (item) { // 图片加载失败，给一个默认图片
			item.categoryImage = 'https://picsum.photos/110/110?image=165'
		},

		toSearch (item) { // 搜索框
			this.searchValue = item == '' ? '' :
					item.hotName ? item.hotName : item.categoryName
			this.onSearch()
			this.showPopup = true
		},

		async onSearch () { // 搜索按钮
			await this.$post(this.$api.searchImage).then(data => {
				if (data.code === 0) {
					this.imageList = data.data.imageList
				}
	    })
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../assets/css/font.less");
@import url("../../assets/css/theme.less");
.v_image{
	background-color: #FFFFFF;
	font-size: @font-size-md;
}
.image_top{
	width: 100%;
	height: 170px;
	background: url(https://picsum.photos/375/170?image=1000) no-repeat 100% 100%;
	.v_title{
		color: @font-color-white;
		font-size: @font-size-bgst;
		font-family: cursive;
		text-align: center;
		padding-top: 50px;
	}
}
.v_type_title{
	color: @font-color-normal;
	padding: 15px 10px;
}
.v_hot_search{
	padding: 0 10px;
	span{
		color: @font-color-light;
		padding: 6px 15px;
		margin: 0 10px 12px 0;
		display: inline-block;
		background-color: @me-bg-light;
	}
}
.v_type{
	padding: 0 10px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.v_type_ite{
		width: 110px;
		height: 110px;
		margin-bottom: 10px;
		position: relative;
		.v_type_name{
			position: absolute;
			bottom: 0;
			width: 100%;
			text-align: center;
			color: @font-color-white;
			padding: 5px 0;
			background-color: @me-bg-lightest;
		}
	}
}
.image_search_top{
	display: flex;
	color: @font-color-lighter;
	padding: 10px;
	border-bottom: 1px solid @me-bg-lighter;
}
.image_list{
	flex: 1;
	overflow-y: auto;
	div{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		img{
			width: 110px;
			height: 110px;
			margin-bottom: 10px;
		}
	}
}
</style>

<style lang="less">
	@import url("../../assets/css/theme.less");
	@import url("../../assets/css/font.less");
	.van-search{
		padding: 0;
		background-color: white;
		width: 80%;
		margin: 40px auto 0;
		border-radius: 5px;
	}
	.van-search__content{
		border-radius: 5px;
		background-color: white;
	}
	.van-search__content{
		background-color: @me-bg-input;
	}
	.van-search.van-search--show-action{
		margin: 0 auto;
		width: 90%;
	}
	.van-search__action{
		color: @font-color-lighter;
	}
	.van-search__action{
		padding: 0 5px 0 15px;
	}
	.searchPopup{
		display: flex;
		flex-flow: column;
		overflow: hidden;
	}
</style>