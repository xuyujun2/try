<template>
  <div class="container-swiper">
    <mt-swipe :auto="1000" :continuous="loop">
      <mt-swipe-item v-for="(item, index) of list" :key="index" @click.native="handleImgClick(item.id)">
        <img :src="'https://awesomes.oss-cn-beijing.aliyuncs.com/repo/' + item.banner_cover">
        <span>{{item.description_cn}}</span>
        <div class="mask"></div>
      </mt-swipe-item>
    </mt-swipe>
    <div v-show="isShowLoading" class="spinner">
      <mt-spinner type="fading-circle"></mt-spinner>
    </div>
  </div>
</template>
<script>
  import $ from 'axios'
  import {Swipe, SwipeItem, Button, Spinner} from 'mint-ui'
  import {mapState} from 'vuex'
  export default {
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      // enableClick: {
      //   type: Boolean,
      //   required: true
      // }
    },
    data() {
      return {
        // items: [],
        isShowLoading: false
      }
    },
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Button.name]: Button,
      [Spinner.name]: Spinner
    },
    methods: {
      // handleImgClick(id) {
      //   if (this.enableClick) {
      //     this.$router.push({
      //       name: 'detail',
      //       query: {
      //         id
      //       }
      //     })
      //   }
      // }
    },
    computed: {
      // movielist() {
      //   return this.$store.state.movielist.in_theaters.subjects
      // }
      ...mapState(['toplist']),
      list() {
        let home = this.toplist.home
        return home
      }
    },
    mounted() {
      // $.get('/v2/movie/in_theaters?count=' + this.imgCount)
      //   .then((result) => {
      //     this.items = result.data.subjects
      //     this.isShowLoading = false
      //   })
      // let result = this.$store.state.movielist.in_theaters
      // this.items = result.subjects.slice(0, this.imgCount)
      // this.isShowLoading = false
    },
    updated() {

    }
  }
</script>

<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';
.container-swiper {
  width: 3.45rem;
  height: 3rem;
  position: relative;
  margin-left:auto;
  margin-right:auto;
  top:1.47rem;
  img {
    width: 100%;
    height:3rem;
    z-index: -1;
  }
  span{
    position:absolute;
    color:white;
    font-weight: bolder;
    display:block;
    bottom:0.3rem;
    left:0.42rem;
    width:2.85rem;
    font-size:0.2rem;
    z-index: 2;
  }

  .mask{
    width:100%;
    height:1rem;
    background:linear-gradient(to top, black , white);
    position:absolute;
    bottom:0rem;
    opacity: 0.3;
  }
  .spinner {
    height: 100%;
    @include flexbox();
    @include align-items(center);
    @include justify-content(center);
  }

}



</style>
