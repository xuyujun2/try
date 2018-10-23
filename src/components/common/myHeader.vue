<template>
	
		<header>
			<div id="top">
				<div class="left">
					<img src="https://ofm2qnhj5.qnssl.com/.nuxt/dist/img/logo-50.30615fb.png"/>
					<span class="icon1">&#xe62c;</span>
					<span class="tx">前端库</span>
				</div>
				<div class="right">
					<span class="icon2">&#xe622;</span>
					<a class="login" href="#">登录</a>
				</div>
			</div>
		</header>

</template>

<script>
import $ from 'axios'
	export default {
		name:"myHeader",
		data(){
           return{

           }
		},
		created(){
			   
  
      
		},
		mounted(){

			 // console.log(this.$store.state.keywords)
			 // console.log(404)
      
		}
	}
</script>

<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';
header{
	position:relative;
	height:0.6rem;
	width:100%;
	background:white;
	#top{
		position:absolute;
		left:0;top:0;right:0;bottom:0;
		margin:0 auto;
		height:0.6rem;
		width:3.45rem;
		padding-top:0.1rem;
		.left{
			float:left;
			margin-top:0.1rem;
			img{
				width:0.25rem;
				height:0.25rem;
				margin-right:0.18rem;
				float:left;
				
			}
			.icon1{
				font-family:"iconfont" !important;
				float:left;
				font-size:0.16rem;		
				margin-right: 0.18rem;	
				color:red;
				font-weight: bolder;
			}
			.tx{
				float:left;
				margin-top:0.01rem;
			}
		}
	}	
	.right{
		float:left;
		margin-top:-0.38rem;
		margin-left:2.65rem;
		.icon2{
			font-family:"iconfont" !important;
			font-size:0.25rem;	
			margin-top: 0.05rem;
			margin-right:0.15rem;
			float:left;
			

		}
		.login{
			float:left;
			margin-top:0.15rem;
			color:black;
		}
	}
}

@font-face {
	font-family: 'iconfont';
	src: url('../../assets/iconfonts/iconfont.woff') format('woff'),
	url('../../assets/iconfonts/iconfont.ttf') format('truetype'),

}
</style>