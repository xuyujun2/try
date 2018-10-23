<template>

<keep-alive include = 'searchContent'>
      <router-view/> <!-- 在根目录时，用对应的组件替换router-view -->
</keep-alive>
</template>

<script>
  import * as actionTypes from './store/action-types'
  import {mapActions} from 'vuex'
  export default {
    created() {
      //调用N处的方法，调用后就是执行了index.js里的actions，mapActions起到映射的作用，映射后，就有了执行index.js里actions的权限
      this[actionTypes.GETDATA]() 
    },
    methods: {
      ...mapActions([actionTypes.GETDATA]) //N
    }
  }
</script>

<style lang="scss">
  @import './style/usage/core/reset.scss';
</style>

