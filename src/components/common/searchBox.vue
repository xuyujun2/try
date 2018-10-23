<template>
	<keep-alive>
		<div class="container-searchBox">
			<div class="search">
				<form>
					<input type="text" placeholder="搜索前端" v-model="keywords" @keydown.13="searchBtnClick(keywords)"/><!--  @keydown.13代表按下的是enter键 -->
					<span class="icon3" @click="searchBtnClick(keywords)">&#xe623;</span>
				</form>
			</div>
		</div>
    </keep-alive>
</template>

<script>
	import $ from 'axios'
	export default {
		name:"searchBox",
		data(){
			return{
				keywords:''
			}
		},
		created(){
			
		},
		methods:{
			searchBtnClick(keywords){
      //               $.get('/v2/repo?page=1&search=' + this.$store.state.keywords)
      // .then((result) => {
        
      //   this.listItem = result.data;
      //   console.log(this.listItem)
      //   this.$store.commit('changelist', this.listItem)
        
      // })


				this.$router.push({  //在父路由后面拼接上searchContent
					name: 'searchContent',
				})
			}
		},
		created() { //进入搜索页面，实例创建完毕，触发index.js里mutations里的changeTitle并传参搜索
		  	
    // this.$store.dispatch('getData')
        },
		mounted() {
     
		},
		updated(){
			//this.keywords是文本框输入的内容，所以created实例刚创建完成这个时期是拿不到的，所以不能把this.keywords写在created里
			this.$store.commit('changeKeyWords', this.keywords)


			
		}
	}
</script>

<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';
.container-searchBox{
	position: relative;
	.search{
		width:3.43rem;
		height:0.85;
		position:absolute;
		left:0;right:0;/*top:0.5rem;*/
		margin-left:auto;
		margin-right:auto;
		margin-top:0.5rem;
		
		input{
			width:3.03rem;
			height:0.85rem;
			border:0;
			float:left;
			font-size:0.2rem;
			text-indent: 0.2rem;
		}

		.icon3{
			font-family:"iconfont" !important;
			background:white;
			height:0.85rem;
			width:0.38rem;
			float:left;
			font-size:0.2rem;
			line-height: 0.85rem;
		}

	}

	@font-face {
		font-family: 'iconfont';
		src: url('../../assets/iconfonts/iconfont.woff') format('woff'),
		url('../../assets/iconfonts/iconfont.ttf') format('truetype'),
	}
}
</style>