<!-- 模板要有唯一根元素，这个唯一根元素不能v-for循环请求的数据 -->

<template>
	<div>

  	 <div v-for="(item, index) of list" :key="index" class="container-topList">
  			<div class="wrap" @click="handleImgClick(item.owner,item.alia)">
           <img class="left" :src=" 'https://awesomes.oss-cn-beijing.aliyuncs.com/repo/' + item.cover "/>
           <div class="right">
             <h4>{{item.description_cn}}</h4>
             <span>{{item.name}}</span>
             <span>{{item.typcd_zh}}</span>
             <span>{{item.rootyp_zh}}</span>
           </div>   
        </div>
  		</div>

    </div>
</template>

<script>
  import $ from 'axios'
  import {Swipe, SwipeItem, Button, Spinner} from 'mint-ui'
  import {mapState} from 'vuex'
  export default {
  	name:"topList",
    data() {
      return {
        
      }
    },
    components: {

    },
    methods: {
        handleImgClick(owner,alia) {
       
          this.$router.push({
            name: 'detail',
            query: {
              owner,
              alia
            }
          })

          console.log(owner)
        
      } 
    },
    computed: {
      ...mapState(['toplist']),
      list() { //list是个计算属性，要拿去循环才能执行里面的console.log()
        let latest = this.toplist.latest
        console.log(latest)
        return latest
      }
    },
    mounted() {
     
    },
    updated() {
 
    }
  }

</script>

<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';
.container-topList{
   position:relative;
   top:1.6rem;
   width:3.75rem;
   height:1.73rem;
	 .wrap{
    position:absolute;
    top:0;bottom:0;left:0;right:0;
    margin-left:auto;
    margin-right: auto;
    width:3.45rem;
    height:1.73rem;
    border-bottom:1px solid #f4f4f4;
    background-color:white;
    .left{
      width:0.6rem;
      height:0.6rem;
      margin-left:0.2rem;
      margin-top:0.6rem;
      float:left;
    }
    .right{
      float:left;
      width:2.35rem;
      margin-top:0.65rem;
      margin-left:0.07rem;
      h4{
        font-weight:bolder;
        font-size: 0.18rem;
        height:0.55rem;
        overflow:hidden;
      }
      span:nth-child(2){
        width:1.6rem;
        height:0.41rem;
        float:left;
        color:#007bff;
        font-weight: 400;
    }
      span:nth-child(3){
        float:right;
        background: #f0f5fe;
    }
     span:nth-child(4){
        float:right;
        background: rgb(241, 237, 224);
    }
   }
}
}
</style>