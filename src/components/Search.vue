<template>
	<div class="a">
		<myHeader />
		
		<div id="container">
			<router-view />
		</div>
		
	</div>
</template>

<script>
	import myHeader from './common/myHeader.vue'
	import searchContent from './common/searchContent'
	import Detail from './common/detail'
	import Bscroll from 'better-scroll'
	export default {
		name:"Search",
		data(){
			return{

			}
		},
		methods:{

		},
		components:{
			myHeader,
			searchContent,
			Detail
		},
		mounted(){
			this.scroll = new Bscroll('#container',{
				click:true,
				scrollbar: true,
			})
		},
		// activated() {
		// 	this.scroll = new Bscroll('#container',{
		// 		click:true,
		// 		scrollbar: true,
		// 	})
		// }
	}
</script>

<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';
.a{height:100%;}
#container{
	height:100%;
	overflow: hidden;
	display:flex;
	flex-direction: column;
}
</style>

