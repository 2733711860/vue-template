<template>
  <div class="foot_page">
  	<ul class="footer flex jc-sa w100pc fixed bott0 bg-fff aic footer">
	    <li class="item">
	      <router-link to="/imagePage" class="flex2 aic f20 yellow" active-class="active">
	        <i class="icon-home iconfont f18 text"></i>
	        <p class="mt-5 f12 text">首页</p>
	      </router-link>
	    </li>
	    <li class="item">
	      <router-link to="/moodSign" class="flex2 aic f20 text" active-class="active">
	        <van-icon class="text" name="service-o"></van-icon>
	        <p class="mt-5 text f12">心情签名</p>
	      </router-link>
	    </li>
	    <li class="item">
	      <router-link to="/my" class="flex2 aic f20 text" active-class="active">
	        <van-icon class="text" name="like-o"></van-icon>
	        <p class="mt-5 text f12">我的收藏</p>
	      </router-link>
	    </li>
	     <li class="item">
	      <router-link to="/demo" class="flex2 aic f20 text" active-class="active">
	        <van-icon class="text" name="user-o"></van-icon>
	        <p class="mt-5 text f12">个人中心</p>
	      </router-link>
	    </li>
	  </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.foot_page{
	height: 50px;
}
.footer {
  border-top: 1px solid #ebebeb;
  height: 50px;
  position: fixed;
  width: 100%;
  bottom: 0;
  .text {
    color: #797d82;
  }
  .active .text {
    color: @red;
  }
}
</style>