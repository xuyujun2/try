<template>
	
		
			<div class="container">		    
				
      <keep-alive>
				<searchList />
       </keep-alive>
               
			</div>
		
	
</template>

<script>
	import myNav from './myNav.vue'
	import searchList from './searchList.vue'
	import myFoot from './myFoot.vue'
	export default {
		name:"searchContent",
		data(){
			return{

			}
		},
		created(){
			
		},
		methods:{

		},
		components:{
			myNav,
			searchList,
			myFoot
		},
		computed:{

		},
		mounted(){
			// location.reload()
		}
	}
</script>

<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';
.container{
   background: white;
}
</style>

