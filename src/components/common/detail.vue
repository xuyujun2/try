<template>
	    <div>
		
			<div class="container" v-for="(item,index) of list" :key="index">		    
				YOU LOVE ME
			</div>

	    </div>

		
	
</template>

<script>
	import $ from 'axios'
	import {mapState,mapMutations} from 'vuex'
	export default {
		name:"Detail",
		data(){
			return{

			}
		},
		methods:{

		},
		components:{
			
		},
		computed:{
          ...mapState(['toplist']),
          list() {
          let latest = this.toplist.latest
          return latest
         
          }
		},
		 mounted() {
   
    $.get('/v2/repo/' + this.$route.query.owner + '/' + this.$route.query.alia)
      .then((result) => {
        console.log(result)
      })
  }
		// mounted(){

		// 	//$.get('/v2/repo/' + this.list[0].name + '/' + 'this.list.alia')
		// 	$.get('/v2/repo?page=1&search=vue')
		// 	.then((result) => {
		// 		console.log(this.list)
				
		// 	})
		// }
	}
</script>

<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';

</style>