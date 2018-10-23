<template>
	
		
			<div class="container">	

				<searchBox />

				<swiper />
				
				<topList />
				
			</div>
		
	
</template>

<script>
	import searchBox from './searchBox.vue'
	import swiper from './swiper.vue'
	import topList from './topList.vue'
	export default {
		name:"indexs",
		data(){
			return{

			}
		},
		methods:{

		},
		components:{
			searchBox,
			swiper,
			topList
		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';

</style>

