<template>
  <div class="container-searchList">
   
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="false" ref="loadmore">
    <div :style="wrapperHeight" class="m">
       
       <p>共找到 <span>{{list.count}}</span> 条关于 <span>{{this.$store.state.keywords}}</span> 的搜索结果by <span>Algolia</span></p>

       <div v-for="(item,index) of list.items" :key="item.id" class="searchList-item">
          <img :src=" 'https://awesomes.oss-cn-beijing.aliyuncs.com/repo/' + item.cover"/>
          <ul>
            <li>{{item.name}}</li>
            <li>{{item.description_cn}}</li>
            <li class="um"><i>{{item.using}}</i> <i>{{item.mark}}</i></li>
          </ul>
          <span>{{item.score}}</span>
    
       </div>
       
       <button @click="jian">left</button>
       <div v-for="(item,index) of Math.ceil(list.count/list.items.length)">
           <div class="j" @click="one(index)" :class="{active:index == num}">{{item}}</div>
       </div>
       <button @click="jia">right</button>
     </div>
    </mt-loadmore>  

   <!--  v-for循环总页数，循环出的每一项作为分页按钮，给每一项添加点击事件，传参index，然后点击事件调用的方法里把index+1赋值给i，用i和搜索的关键字拼接在请求地址的后面，请求到页码和搜索关键字对应的数据，i的初始值为1，刚开始在mounted里发送一次请求，然后又在updated里发送请求，页码变化后，就会重新再发送请求，点击左右的按钮，就让data里定义的i自增或自减 -->
    
  </div>
</template>
<script>
  import $ from 'axios'
  import BScroll from 'better-scroll'
  import {mapState,mapMutations} from 'vuex'
  import {CHANGEKEYWORDS,CHANGELIST} from '../../store/mutation-types' 
  import { Indicator, Loadmore } from 'mint-ui'
  export default {
    name:"searchContent",
    data(){
      return{
        num:0,
        i:2,
         list:[],
         allLoaded: false,
         wrapperHeight: {
      'min-height': window.innerHeight +'px'
    }
      }
    },

    components: {
      [Loadmore.name]: Loadmore
    },
    created(){
    //   this.changelist('')
    // },
    // methods:{
    //    ...mapMutations([CHANGELIST])
    // },
    // components:{
      
    // },
    // computed:{
    //       ...mapState(['listItem']),
    //       list(){
    //         let listItem = this.listItem
    //         // console.log(this.toplist)
    //         return listItem
    //       }
    },
    methods:{

     loadTop() { //top-method是往上拉时，调用loadTop函数
    
 //      $.get('/v2/repo?page=' + this.i + '&search=' + this.$store.state.keywords)
 //        .then(result => {
 //          console.log('上')
 //          //unshift往上插数据   ...是展开后面的数组，拿到的是对象
 //          this.list.items = result.data.items
 //          this.$refs.loadmore.onTopLoaded() //onTopLoaded是在加载数据后对组件进行重新定位
 //          this.i+=1//每次往上拉时，加两条数据
 // console.log(result.data.items)

         
 //        })
    },
    loadBottom() {
 // console.log('下')
 //      $.get('/v2/repo?page=' + this.i + '&search=' + this.$store.state.keywords)
 //        .then(result => {
         
 //          this.list.items.push(...result.data.items)
 //          this.$refs.loadmore.onBottomLoaded()
 //          this.i+=1
 //        })
    },

    one(index){
      this.i = index+1;
      // console.log(this.i);
       // this.num = this.i;
    
    },
    jian(){
      if(this.i>0){
        this.i--;
        // this.num = this.i;
      }

    },
    jia(){
      if(this.i<Math.ceil(this.list.count/this.list.items.length)){
        this.i++;
        // this.num = this.i;
      }
    }
    },
    computed:{

      loadMore() {
//         this.loading = true

        
//         setTimeout(() => {
//          let i = 1
//           if(i<=Math.ceil(this.count/10)){
          
//               $.get('/v2/repo?page=' + i + '&search=' + this.$store.state.keywords)
//               .then((result) => {
//               this.list = result.data;
//               i++;
//               })
//           }
            
//             this.list.items.push(this.list.items);
// console.log(this.list)

          
//           this.loading = false;


//         }, 2500);
      }
    },
    mounted(){
      // $.get('/v2/repo?page=1&search=' + this.$store.state.keywords)
      // .then((result) => {
      //   console.log(result.data);
      //   this.list = result.data;
      //   // this.$nextTick(() => {
      //   //   new BScroll('.container-searchList')
      //   // })
      // })

      

    $.get('/v2/repo?page=' +this.i + '&search=' + this.$store.state.keywords)
      .then((result) => {
        // console.log(result.data,7);
        this.list = result.data;
        // this.$nextTick(() => {
        //   new BScroll('.container-searchList')
        // })
      });
 
    },

    updated(){
       $.get('/v2/repo?page=' +this.i + '&search=' + this.$store.state.keywords)
      .then((result) => {
        
        this.list = result.data;
        // this.$nextTick(() => {
        //   new BScroll('.container-searchList')
        // })
      });
 
    },

    activated() {
    
    // $.get('/v2/repo?page=1&search=' + this.$store.state.keywords)
    //   .then((result) => {
    //     console.log(result.data);
    //     this.list = result.data;
    //     // this.$nextTick(() => {
    //     //   new BScroll('.container-searchList')
    //     // })
    //   });


      

    
  },
  }
</script>

<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';
   .container-searchList{
    width:100%;
    height:100%;
    background: white;
    overflow:scroll;
    .mint-loadmore{
      /* height:100%;*/
      .m{
        button{height:2rem;}
      .j{width:0.5rem;height:0.5rem;border:1px solid red;float:left;}
      .active{background-color:green;}
        p{
      
      position:relative;
      margin-left:auto;
      margin-right:auto;
      width:3.45rem;
      height:0.5rem;
      text-align:center;
      line-height: 0.5rem;
      margin-bottom:0.36rem;
      span{
        color:blue;
        font-weight:bolder;
      }
    }
    .searchList-item{
      width:3.45rem;
     /* height:1.49rem;*/
      position:relative;
      margin-left:auto;
      margin-right:auto;
      display:block;
      display: flex;
      justify-content: space-between;/*在父级设值，作用于子级*/
      align-items: center;/*设值垂直居中*/
      margin-bottom: 0.6rem;
      img{
        width:0.8rem;
        height:0.8rem;
      }
      ul{
        width:1.9rem;
        .um{
          display:flex;
          justify-content: flex-start;
          i{
            width:0.5rem;
            height:0.27rem;
            border-width:1px;
            border-style:solid;
            border-color:rgba(0,39,82,.39);
            margin-right:0.15rem;
            text-align: center;
            line-height: 0.27rem;
            color:rgba(0,39,82,.39);
          }
        }
      }
      span{
        width:0.3rem;
        height:0.3rem;
        border:2px solid green;
        text-align: center;
        line-height: 0.3rem;
        border-radius: 50%;
      }
    }
      } 
  }
    
   }
</style>
